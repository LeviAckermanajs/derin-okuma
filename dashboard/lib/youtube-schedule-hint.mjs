import fs from 'fs';
import path from 'path';

function readJson(filePath) {
  try { return JSON.parse(fs.readFileSync(filePath, 'utf8')); } catch { return null; }
}

function nextDate(dateStr) {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(Date.UTC(year, month - 1, day + 1)).toISOString().slice(0, 10);
}

function istanbulDate(now, offsetDays = 0) {
  return new Date(now.getTime() + 3 * 3_600_000 + offsetDays * 86_400_000)
    .toISOString().slice(0, 10);
}

export function computeYoutubeScheduleHint(exportRoot, { now = new Date() } = {}) {
  let maxDate = null;
  let filesFound = 0;

  function bump(value) {
    const match = typeof value === 'string' && value.match(/^(\d{4}-\d{2}-\d{2})/);
    const dateStr = match?.[1] || null;
    if (dateStr && (!maxDate || dateStr > maxDate)) maxDate = dateStr;
  }

  function extractScheduledDate(entry) {
    if (!entry || typeof entry !== 'object' || entry.scheduled !== true) return;
    if (entry.publishAtLocal || entry.publish_at_local) {
      bump(entry.publishAtLocal || entry.publish_at_local);
      return;
    }
    const utcValue = entry.publishAt || entry.scheduledAt || entry.scheduled_at;
    if (!utcValue) return;
    const date = new Date(utcValue);
    if (!Number.isNaN(date.getTime())) bump(new Date(date.getTime() + 3 * 3_600_000).toISOString());
  }

  function scanDir(dir, depth) {
    if (depth > 3) return;
    let entries;
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const entry of entries) {
      const filePath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        scanDir(filePath, depth + 1);
        continue;
      }
      if (entry.name !== 'youtube-upload-result.json') continue;
      const data = readJson(filePath);
      if (!data) continue;
      filesFound++;
      for (const list of [data.videos, data.items, data.results]) {
        if (Array.isArray(list)) list.forEach(extractScheduledDate);
      }
      extractScheduledDate(data);
    }
  }

  if (exportRoot && fs.existsSync(exportRoot)) scanDir(exportRoot, 0);

  if (!maxDate) {
    return {
      suggested_date: istanbulDate(now, 1),
      last_scheduled: null,
      source: 'no_history',
      files_scanned: filesFound,
      note: 'Önerilen tarih: yarın — önceki planlı YouTube sonucu bulunamadı',
    };
  }

  return {
    suggested_date: nextDate(maxDate),
    last_scheduled: maxDate,
    source: 'history',
    files_scanned: filesFound,
    note: `Önerilen tarih: son YouTube planından sonraki gün (son: ${maxDate})`,
  };
}
