function dayValue(value) {
  const match = String(value ?? '').trim().match(/^(?:day-?)?(\d{1,3})$/i);
  if (!match) return '';
  const day = Number(match[1]);
  return day >= 1 && day <= 999 ? String(day) : '';
}

export function draftWorkflowDefaults(draft, cached, hints, fallbackDate) {
  const ownDay = dayValue(draft.slug_detail?.test_day);
  const suggestedDay = ownDay || dayValue(hints?.day?.next_day) || '1';
  const day = cached?.manual ? (dayValue(cached.day) || suggestedDay) : suggestedDay;
  const pipelineRunId = String(draft.slug_detail?.pipeline?.runId ?? '').trim();

  return {
    title: cached?.manual && cached.title
      ? cached.title
      : (draft.slug_detail?.source_title ?? draft.filename.replace(/\.(txt|md|mdx)$/i, '')),
    day,
    runId: cached?.manual && cached.run_id ? cached.run_id : (pipelineRunId || `day${day}-batch-a`),
    youtubeDate: cached?.youtubeDateManual
      ? cached.schedule_date
      : (hints?.youtube?.suggested_date || fallbackDate),
  };
}
