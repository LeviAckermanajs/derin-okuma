const SUCCESS_STATUSES = new Set(['uploaded', 'skipped']);

export function hasYoutubeVideoProof(entry) {
  if (!entry || typeof entry !== 'object') return false;
  const videoId = entry.youtube_video_id ?? entry.video_id ?? entry.youtube?.videoId ?? null;
  return typeof videoId === 'string' && videoId.trim().length > 0;
}

export function isYoutubeUploadSuccess(entry) {
  if (!entry || typeof entry !== 'object') return false;
  return SUCCESS_STATUSES.has(entry.status) && hasYoutubeVideoProof(entry);
}

export function isYoutubeUploadedForCalendar(entry) {
  if (!isYoutubeUploadSuccess(entry)) return false;
  const localValue = entry.publishAtLocal ?? entry.publish_at_local ?? null;
  return typeof localValue === 'string' && /^\d{4}-\d{2}-\d{2}T/.test(localValue);
}

export function youtubeUploadEntries(result) {
  if (!result || typeof result !== 'object') return [];
  if (Array.isArray(result.videos)) return result.videos;
  if (Array.isArray(result.items)) return result.items;
  if (Array.isArray(result.results)) return result.results;
  if (result.video && typeof result.video === 'object') {
    const video = result.video;
    return [{
      id: video.id,
      title: video.title,
      status: video.youtube?.status ?? video.status,
      youtube_video_id: video.youtube?.videoId ?? video.youtube_video_id ?? null,
      youtube_url: video.youtube?.url ?? video.youtube_url ?? null,
      publishAtLocal: video.publishAtLocal ?? video.publish_at_local ?? null,
      publishAt: video.publishAt ?? video.scheduledAt ?? video.scheduled_at ?? null,
      uploaded_at: result.generated_at ?? video.uploaded_at ?? null,
    }];
  }
  return [];
}

export function summarizeYoutubeUploadResult(result, expectedTotal = null) {
  if (!result || typeof result !== 'object') {
    return {
      overall_status: 'pending',
      completed: false,
      total: expectedTotal ?? 0,
      uploaded: 0,
      skipped: 0,
      failed: 0,
      pending: expectedTotal ?? 0,
      successful: 0,
    };
  }

  const entries = youtubeUploadEntries(result);
  const summaryTotal = Number.isInteger(result.summary?.total) ? result.summary.total : null;
  const total = expectedTotal ?? summaryTotal ?? entries.length;
  const uploaded = entries.filter((entry) => entry.status === 'uploaded' && hasYoutubeVideoProof(entry)).length;
  const skipped = entries.filter((entry) => entry.status === 'skipped' && hasYoutubeVideoProof(entry)).length;
  const successful = entries.filter(isYoutubeUploadSuccess).length;
  const failed = entries.filter((entry) => entry.status === 'failed' || (entry.status === 'uploaded' && !hasYoutubeVideoProof(entry))).length;
  const pending = Math.max(0, total - successful - failed);

  let overall_status = 'pending';
  if (total > 0 && successful === total && failed === 0 && pending === 0) {
    overall_status = 'completed';
  } else if (successful > 0 && (failed > 0 || pending > 0 || successful < total)) {
    overall_status = 'partial';
  } else if (successful === 0 && failed > 0) {
    overall_status = 'failed';
  }

  return {
    overall_status,
    completed: overall_status === 'completed',
    total,
    uploaded,
    skipped,
    failed,
    pending,
    successful,
  };
}
