# Video Publish Roadmap — YouTube + TikTok Upload Pipeline

Oluşturulma tarihi: 2026-05-23  
Durum: Taslak — henüz uygulama yok

---

## A. Current System Summary

### Pipeline Overview

The current render/export pipeline consists of these stages, all coordinated by n8n:

```
Load Input (batch JS pasted into n8n Code node)
  → Validate / Normalize Input
  → Generate Job Metadata
  → Load Runtime Config
  → Build Paths
  → Reuse Audio Router
      - reuse_existing_audio=true  → Use Existing Audio Assets
      - reuse_existing_audio=false → Call Prepare Audio (ElevenLabs TTS)
  → Prepare Video Request
  → Reuse Video Router
      - reuse_existing_video=true  → Use Existing Video Assets
      - reuse_existing_video=false → Call Prepare Video Async → Poll → Get Result
  → Extract Video Assets
  → Build Manifest Scene Objects
  → Build Outputs
  → Select Background Music
  → Build Manifest Object          (1 manifest per short, 6 total)
  → Submit Render Batch            (explicit HTTP loop, POST /render/async × N)
  → Build Export Command
  → Run Export Command             (executes submit-render-batch-and-export.mjs once)
      → polls renderer until 6/6 complete
      → runs video:export from derin-okuma
```

### Export Stage

`npm run video:export` (`scripts/export-rendered-videos.mjs`) does:

1. Reads shorts metadata from `docs/video-tests/shorts/<slug>/metadata/<slug>-shorts-metadata.json`
2. Resolves each `short-00N` job folder under `scene-blog-video/output/jobs/`
3. Finds `renders/shorts-main.mp4` for each short
4. Creates the target desktop folder: `/home/muhammet/Derin Okuma YT/<FolderName>/`
5. Copies and renames each MP4 using `selected_title` from the shorts metadata
6. Writes `export-index.md` to the desktop folder

### export-index.md

The generated `export-index.md` contains:

- metadata source information (file or batch input fallback)
- a summary table: short ID → title → file name
- per-short upload metadata: description, hashtags, thumbnail text, hook

### Where Metadata Lives (derin-okuma)

| Type | Location |
|---|---|
| Shorts metadata | `docs/video-tests/shorts/<slug>/metadata/<slug>-shorts-metadata.json` |
| Landscape metadata | `docs/video-tests/metadata/<slug>-landscape-metadata.json` |
| Batch load inputs | `docs/video-tests/batches/<slug>-shorts-batch-load-input.js` |
| Per-short load inputs | `docs/video-tests/shorts/<slug>/load-inputs/short-00N-load-input.js` |

### What Is Missing

After export completes there is currently no automation layer.  
The user must:
1. Open the desktop folder
2. Manually upload each MP4 to YouTube
3. Paste title, description, hashtags, pinned comment by hand

The `export-index.md` is the only bridge between the render system and the upload step.

---

## B. Target Architecture

### Proposed Architecture

```
Render/Export Pipeline
  ↓
export-index.md  (already generated)
  ↓
[NEW] build-publish-manifest.mjs
  ↓
publish-manifest.json  (structured upload contract)
  ↓
[NEW] publish-dry-run.mjs  (validates paths + metadata, no API calls)
  ↓
[NEW] upload-youtube-shorts.mjs  (private upload, one at a time or batch)
  ↓
[NEW] upload-tiktok-drafts.mjs   (draft/inbox mode, not direct public post)
  ↓
publish-result.json  (stores platform video IDs, URLs, upload statuses)
```

### Separation Contract

The upload layer must never touch:

- ElevenLabs (no TTS calls)
- Pexels (no video fetch)
- n8n render jobs (no render trigger)
- The renderer service at `http://127.0.0.1:8000`

The upload layer only reads:

- The desktop export folder (MP4 files)
- `publish-manifest.json` (generated from shorts metadata)
- Environment variables for credentials

The upload layer only writes:

- `publish-result.json` (alongside `publish-manifest.json`)
- Optional status updates to `publish-manifest.json` (upload_status per video)

### Key Design Principle

**Export and upload are independent operations.**  
A failed upload never triggers a re-render.  
A re-export (with `--force`) does not invalidate an existing `publish-manifest.json`.  
Upload scripts are idempotent: they check `publish-result.json` for already-uploaded items before calling the API.

---

## C. publish-manifest.json Design

### Location

The `publish-manifest.json` should live alongside `export-index.md` in the desktop export folder:

```
/home/muhammet/Derin Okuma YT/<FolderName>/
  export-index.md
  publish-manifest.json     ← new
  publish-result.json       ← written by upload scripts
  Dünya Neden Son Yurt Değil.mp4
  Kayıt Varsa Hesap Neden Var.mp4
  ...
```

### Proposed JSON Schema

```json
{
  "schema_version": "1",
  "generated_at": "2026-05-23T10:00:00Z",
  "slug": "10-soz-hasir-risalesi-6-12-suret",
  "run_id": "day25-full6-b",
  "export_type": "shorts",
  "target_folder": "/home/muhammet/Derin Okuma YT/Haşir Risalesi 6-12. Suret",
  "source_export_index": "/home/muhammet/Derin Okuma YT/Haşir Risalesi 6-12. Suret/export-index.md",
  "source_metadata": "docs/video-tests/shorts/10-soz-hasir-risalesi-6-12-suret/metadata/10-soz-hasir-risalesi-6-12-suret-shorts-metadata.json",
  "videos": [
    {
      "id": "short-001",
      "path": "/home/muhammet/Derin Okuma YT/Haşir Risalesi 6-12. Suret/Dünya Neden Son Yurt Değil.mp4",
      "file_exists": true,
      "title": "Dünya Neden Son Yurt Değil?",
      "description": "Dünya kalıcı saray değil; misafirhane, sergi ve imtihan alanıdır. #derinokuma #shorts #tefekkür #iman #ahiret #dünya",
      "hashtags": ["#derinokuma", "#shorts", "#tefekkür", "#iman", "#ahiret", "#dünya"],
      "hook": "Dünya geçici diye anlamsız değildir; geçici olduğu için imtihan yeridir.",
      "thumbnail_text": "SON YURT DEĞİL",
      "upload_status": "pending",
      "youtube": {
        "privacyStatus": "private",
        "categoryId": "27",
        "madeForKids": false,
        "tags": ["derinokuma", "tefekkür", "iman", "ahiret", "dünya", "risaleinur"],
        "defaultLanguage": "tr"
      },
      "tiktok": {
        "mode": "draft",
        "caption": "Dünya Neden Son Yurt Değil? #derinokuma #shorts #tefekkür #iman #ahiret #dünya",
        "privacy_level": "SELF_ONLY"
      }
    }
  ]
}
```

### Field Explanations

| Field | Source | Notes |
|---|---|---|
| `schema_version` | hardcoded `"1"` | bump when schema changes |
| `slug` | CLI arg `--slug` | must match derin-okuma folder |
| `run_id` | CLI arg `--run-id` | same run_id used during export |
| `export_type` | CLI arg `--type` | `"shorts"` or `"landscape"` |
| `target_folder` | resolved from `--export-root` + folder name | absolute path |
| `source_export_index` | absolute path to `export-index.md` | reference only |
| `source_metadata` | relative path in derin-okuma repo | for traceability |
| `videos[].id` | `short_id` from shorts metadata | e.g. `"short-001"` |
| `videos[].path` | `target_folder` + sanitized title + `.mp4` | same path export script used |
| `videos[].file_exists` | checked at manifest build time | boolean; script fails if false |
| `videos[].upload_status` | `"pending"` initially; updated by upload scripts | `pending`, `uploaded`, `failed`, `skipped` |
| `videos[].youtube.categoryId` | `"27"` = Education | override per video if needed |
| `videos[].tiktok.privacy_level` | `"SELF_ONLY"` = visible only to self | safest draft mode |

### upload_status Values

| Value | Meaning |
|---|---|
| `pending` | Not yet attempted |
| `uploaded` | Successfully uploaded; platform ID stored in result |
| `failed` | Attempted but failed; error stored in result |
| `skipped` | Intentionally skipped (e.g. upload_limit reached) |

---

## D. YouTube Upload Phase

### Overview

YouTube upload requires the YouTube Data API v3 via OAuth 2.0.  
The first uploads should be **private** so they can be reviewed before publication.

### OAuth Requirements

- A Google Cloud project with YouTube Data API v3 enabled
- OAuth 2.0 credentials (type: Desktop App)
- Scopes required: `https://www.googleapis.com/auth/youtube.upload`
- Token storage: local file only, never committed

### Environment Variables

```bash
YOUTUBE_CLIENT_ID=...
YOUTUBE_CLIENT_SECRET=...
YOUTUBE_TOKEN_PATH=~/.derin-okuma-yt-token.json   # local token file, gitignored
PUBLISH_REAL_UPLOAD=1                              # must be set to 1 for real uploads
```

`PUBLISH_REAL_UPLOAD=1` is the explicit gate for real API calls. Without it, all upload scripts run in dry-run mode by default.

### Local Token Storage Strategy

- After first OAuth consent, store token JSON at `YOUTUBE_TOKEN_PATH`
- The token file lives outside the repository (e.g. `~/.derin-okuma-yt-token.json`)
- Add `*.token.json` and `*-token.json` to `.gitignore` if not already excluded
- The upload script refreshes the access token using the refresh token when expired
- If no token file exists, the script prompts the user to run an auth flow first

### Proposed Script: `scripts/build-publish-manifest.mjs`

**Purpose:** Read export result and shorts metadata, build `publish-manifest.json`.

**Input:**
- `--slug <slug>` (required)
- `--run-id <run-id>` (required)
- `--type shorts|landscape` (default: `shorts`)
- `--export-root <path>` or `DERIN_OKUMA_EXPORT_ROOT` env var
- `--force` to overwrite existing manifest

**Output:** `<target_folder>/publish-manifest.json`

**Behavior:**
1. Resolve target folder (same logic as export script)
2. Read shorts metadata for title, description, hashtags, thumbnail text, hook
3. Verify each MP4 file exists; set `file_exists: true/false`
4. Fail if any `file_exists: false` (no missing file allowed)
5. Write `publish-manifest.json`
6. Print per-video summary

**npm script to add:**
```bash
"video:publish-manifest": "node scripts/build-publish-manifest.mjs"
```

### Proposed Script: `scripts/publish-dry-run.mjs`

**Purpose:** Validate publish manifest without making any API calls.

**Input:**
- `--manifest <path>` or auto-discover from `--slug` + `--export-root`

**Checks:**
1. `publish-manifest.json` exists and is valid JSON
2. Each `videos[].path` file exists on disk
3. Each video has non-empty title, description, hashtags
4. Each video has `youtube.privacyStatus` set
5. Each video has `tiktok.mode` set
6. Warns if `upload_status` is already `"uploaded"` (would be skipped)

**Output:** Console report — `[OK]` or `[FAIL]` per check, summary count.

**npm script to add:**
```bash
"video:publish:dry-run": "node scripts/publish-dry-run.mjs"
```

### Proposed Script: `scripts/upload-youtube-shorts.mjs`

**Purpose:** Upload videos from publish manifest to YouTube as private shorts.

**Input:**
- `--manifest <path>` or auto-discover from `--slug` + `--export-root`
- `--limit <N>` — only upload first N videos (default: all)
- `--dry-run` — validate only, no API calls
- `--id <short-id>` — upload only this one video (for single-video test)

**Behavior:**
1. Read `publish-manifest.json`
2. If `PUBLISH_REAL_UPLOAD` is not `"1"`, run as dry-run regardless
3. For each video where `upload_status === "pending"`:
   - Verify file exists on disk
   - Upload via YouTube Data API v3 `videos.insert`
   - On success: update `upload_status` to `"uploaded"`, store `youtube_video_id` and `youtube_url`
   - On failure: update `upload_status` to `"failed"`, store error message
4. Write `publish-result.json` after each video (not only at the end)
5. Never retry a video that is already `"uploaded"` in the result file

**publish-result.json format:**
```json
{
  "generated_at": "2026-05-23T11:00:00Z",
  "slug": "10-soz-hasir-risalesi-6-12-suret",
  "run_id": "day25-full6-b",
  "results": [
    {
      "id": "short-001",
      "platform": "youtube",
      "upload_status": "uploaded",
      "youtube_video_id": "abc123XYZ",
      "youtube_url": "https://www.youtube.com/watch?v=abc123XYZ",
      "privacy_status": "private",
      "uploaded_at": "2026-05-23T11:00:30Z"
    },
    {
      "id": "short-002",
      "platform": "youtube",
      "upload_status": "failed",
      "error": "HTTP 403: quotaExceeded",
      "attempted_at": "2026-05-23T11:01:00Z"
    }
  ]
}
```

**npm script to add:**
```bash
"video:upload:youtube": "node scripts/upload-youtube-shorts.mjs"
```

### Retry / Idempotency Strategy

- Before uploading, read `publish-result.json` if it exists
- Skip any video already marked `"uploaded"` in the result
- Retry only videos with `"failed"` or `"pending"` status
- Each retry attempt overwrites the video's entry in `publish-result.json`
- A re-run of the upload script is safe: it never re-uploads already-successful videos

### What Happens if One Video Fails

- The script logs the failure and continues to the next video
- The failed video's entry in `publish-result.json` has `upload_status: "failed"` with the error
- Remaining videos are still attempted
- Final exit code is non-zero if any video failed
- Retry: run the script again — it skips already-uploaded videos and retries failed ones

### n8n vs Manual Call

**First phase: manual call only.**

Upload scripts should be called manually from the terminal, not by n8n, until:
- OAuth flow is confirmed working
- At least 1 dry-run and 1 real private upload have been verified
- The `publish-result.json` idempotency is confirmed across multiple runs

n8n integration (Phase F) comes after the standalone scripts are stable.

---

## E. TikTok Upload Phase

### Overview

TikTok upload uses the TikTok Content Posting API.  
All first uploads must be in **draft/inbox mode** (visible only to self), not direct public posts.

### TikTok Developer App Requirements

- A TikTok developer account at `developers.tiktok.com`
- An approved app with "Content Posting API" access
- The app must be in "development mode" initially (limits: 10 users, 50 videos/day)
- Approval for "production" use requires TikTok review

### Required OAuth Scopes

- `video.upload` — to upload video files
- `video.publish` — to move from draft to published (not needed for draft-only mode)

**First phase only needs `video.upload`** if using "DIRECT_POST" is skipped.

### OAuth / Token Considerations

```bash
TIKTOK_CLIENT_KEY=...
TIKTOK_CLIENT_SECRET=...
TIKTOK_ACCESS_TOKEN=...       # long-lived token or refreshable token
TIKTOK_TOKEN_PATH=~/.derin-okuma-tiktok-token.json
PUBLISH_REAL_UPLOAD=1         # same gate as YouTube
```

TikTok uses OAuth 2.0 with PKCE. The token flow is different from Google:
- Short-lived access tokens (24 hours)
- Refresh tokens valid for 365 days
- Token refresh must be handled by the upload script

### Draft Upload vs Direct Post Distinction

| Mode | API field | Visibility | Reversible? |
|---|---|---|---|
| Draft/Inbox | `privacy_level: "SELF_ONLY"` | Only creator | Yes — can delete |
| Direct Public | `privacy_level: "PUBLIC_TO_EVERYONE"` | Everyone | Cannot unpublish instantly |

**Only `SELF_ONLY` is used in the first phase.** Direct post mode is explicitly out of scope until manual review confirms everything is correct.

### Proposed Script: `scripts/upload-tiktok-drafts.mjs`

**Purpose:** Upload videos from publish manifest to TikTok as self-only drafts.

**Input:** Same flags as the YouTube script: `--manifest`, `--limit`, `--dry-run`, `--id`.

**Behavior:**
1. Read `publish-manifest.json`
2. Check `PUBLISH_REAL_UPLOAD` gate
3. For each video where `upload_status === "pending"`:
   - Upload via TikTok Content Posting API (multipart or chunked depending on file size)
   - On success: write `tiktok_video_id` and `tiktok_status` to `publish-result.json`
   - On failure: write error
4. Never post publicly in this phase

**npm script to add:**
```bash
"video:upload:tiktok": "node scripts/upload-tiktok-drafts.mjs"
```

### Likely Approval Blockers

- TikTok app review for "Content Posting API" can take days to weeks
- Development mode allows only 10 authorized users and 50 videos/day
- Vertical video format (9:16) is required — existing shorts-main.mp4 should already qualify
- Captions must be within character limits (2200 chars for description)

### Fallback / Manual Workflow if API Approval Is Delayed

If TikTok API approval is not ready:

1. Export the desktop folder as usual
2. Use `build-video-publish-pack` to generate `.txt` files (title, description, hashtags) per short
3. Upload manually to TikTok via the mobile app
4. Log the upload in `publish-result.json` manually (or skip)

The publish-manifest.json design is forward-compatible: when API approval arrives, the upload script reads the same manifest without needing a new export or re-render.

---

## F. n8n Integration Plan

### Preferred Extended Flow

After the standalone upload scripts are confirmed stable:

```
[EXISTING] Export Result
  ↓
[NEW] Build Publish Manifest     (Code node: calls build-publish-manifest.mjs)
  ↓
[NEW] Publish Dry Run            (Code node: calls publish-dry-run.mjs)
  ↓
[NEW] Is Publish Enabled?        (If node: checks publish_enabled flag)
  ├─ false → Done (dry-run result logged)
  └─ true →
      [NEW] Is YouTube Enabled?  (If node: checks youtube_enabled flag)
      ├─ false → skip
      └─ true → Upload YouTube   (Execute Command node: upload-youtube-shorts.mjs)
                   ↓
      [NEW] Is TikTok Enabled?   (If node: checks tiktok_enabled flag)
      ├─ false → skip
      └─ true → Upload TikTok    (Execute Command node: upload-tiktok-drafts.mjs)
                   ↓
      [NEW] Publish Result       (Read publish-result.json, log summary)
```

### Recommended Toggle Flags (in Load Input)

Add these to the batch load input structure so they can be set per run without changing the workflow:

```js
publish: {
  enabled: false,              // master switch — false by default
  youtube_enabled: false,      // YouTube upload on/off
  tiktok_enabled: false,       // TikTok upload on/off
  dry_run: true,               // dry-run mode — true by default
  upload_limit: null,          // null = all, integer = limit to N videos
  privacy_status: "private",   // YouTube default privacy
  tiktok_mode: "draft"         // TikTok default mode
}
```

**All flags default to the safest possible value.**  
`publish.enabled = false` means the publish nodes are bypassed entirely.  
`dry_run = true` means no API calls happen even when `enabled = true`.

### Why Standalone First, n8n Second

n8n Execute Command nodes are harder to debug than direct terminal scripts.  
OAuth token flows cannot be completed inside n8n (need browser redirect).  
The n8n integration is only worth building after:
1. `build-publish-manifest.mjs` works end-to-end
2. `publish-dry-run.mjs` validates a real export folder
3. At least one real private YouTube upload succeeds from the terminal
4. `publish-result.json` idempotency is confirmed

---

## G. Safety and Cost Controls

### Hard Rules (never negotiable)

| Rule | Enforcement |
|---|---|
| Upload scripts must never trigger a render | Scripts only read MP4 files; they never call the renderer service |
| Upload scripts must not call ElevenLabs | No TTS import or HTTP call allowed in upload scripts |
| Upload scripts must not call Pexels | No Pexels import or HTTP call allowed in upload scripts |
| Credentials must never be committed | `.gitignore` must exclude all token files and `.env` with secrets |
| `publish-result.json` must be re-read before each upload | Prevents double-uploads after retry runs |

### Dry-Run Mode

Dry-run mode is the **default** in all upload scripts unless `PUBLISH_REAL_UPLOAD=1` is set explicitly.

In dry-run mode, scripts:
- Validate that all MP4 files exist
- Validate that all required metadata fields are present
- Log what would be uploaded (title, path, platform settings)
- Exit with 0 if all checks pass
- Never open an API connection

### Privacy / Safety Defaults

| Platform | Default mode | Notes |
|---|---|---|
| YouTube | `privacyStatus: "private"` | Visible only to the channel owner |
| TikTok | `privacy_level: "SELF_ONLY"` | Visible only to the creator |

Changing to `public` or any published state requires an explicit override flag and confirmation.

### `.gitignore` Additions Required

The following patterns must be confirmed in `.gitignore` before any credentials are used:

```gitignore
*.token.json
*-token.json
.env
.env.local
publish-result.json
```

`publish-result.json` is excluded because it will contain YouTube video IDs and URLs — not secrets, but content-specific metadata that belongs in the desktop folder, not the repo.

---

## H. Acceptance Criteria

### Milestone 1 — publish-manifest.json generated

- [ ] `npm run video:publish-manifest -- --slug <slug> --run-id <run-id>` exits 0
- [ ] `publish-manifest.json` appears in the desktop export folder
- [ ] All `videos[].file_exists` are `true`
- [ ] No API calls of any kind
- [ ] No ElevenLabs or Pexels calls

### Milestone 2 — Dry-run validates all 6 videos

- [ ] `npm run video:publish:dry-run -- --slug <slug>` exits 0
- [ ] All 6 videos pass path check
- [ ] All 6 videos have non-empty title, description, hashtags
- [ ] Console shows `[OK]` for every check
- [ ] No uploads happen

### Milestone 3 — One short uploads to YouTube as private

- [ ] `PUBLISH_REAL_UPLOAD=1 npm run video:upload:youtube -- --slug <slug> --id short-001` exits 0
- [ ] `publish-result.json` is written with `youtube_video_id` and `youtube_url`
- [ ] The video appears in YouTube Studio as **Private**
- [ ] Running the same command again skips `short-001` (idempotency confirmed)
- [ ] No other shorts are affected

### Milestone 4 — Full batch of 6 uploads to YouTube as private

- [ ] `PUBLISH_REAL_UPLOAD=1 npm run video:upload:youtube -- --slug <slug>` uploads all 6
- [ ] `publish-result.json` has 6 entries, all `upload_status: "uploaded"`
- [ ] Re-running the script skips all 6 (all already uploaded)
- [ ] One intentional failure test: corrupt one path → script continues, marks that one `"failed"`, others succeed
- [ ] No re-render needed to retry the failed item

### Milestone 5 — TikTok draft upload for one video

- [ ] TikTok app is approved (or development mode authorized)
- [ ] `PUBLISH_REAL_UPLOAD=1 npm run video:upload:tiktok -- --slug <slug> --id short-001` exits 0
- [ ] `publish-result.json` updated with `tiktok_video_id`
- [ ] Video appears in TikTok creator inbox as a draft (not public)
- [ ] Running again skips the already-uploaded video

### Milestone 6 — n8n integration (optional, after standalone is stable)

- [ ] `publish.enabled = false` in load input → publish nodes are fully bypassed
- [ ] `publish.enabled = true, dry_run = true` → dry-run result logged in n8n
- [ ] `publish.enabled = true, youtube_enabled = true, dry_run = false, upload_limit: 1` → one YouTube upload from n8n
- [ ] `publish-result.json` written correctly from n8n execution

---

## I. Implementation Order

### Phase 1 — Manifest Builder (low risk, no API)

| Task | Complexity | Risk |
|---|---|---|
| Add `build-publish-manifest.mjs` | Low | None — read-only script |
| Add `video:publish-manifest` npm script | Trivial | None |
| Test with an existing exported desktop folder | Low | None |

**Estimated effort:** 1 session.

### Phase 2 — Dry-Run Validator (low risk, no API)

| Task | Complexity | Risk |
|---|---|---|
| Add `publish-dry-run.mjs` | Low | None — read-only validation |
| Add `video:publish:dry-run` npm script | Trivial | None |
| Run against a real export folder | Low | None |

**Estimated effort:** Half a session.

### Phase 3 — YouTube OAuth Setup (medium risk, no upload yet)

| Task | Complexity | Risk |
|---|---|---|
| Create Google Cloud project | Low | None |
| Enable YouTube Data API v3 | Low | None |
| Create OAuth 2.0 client ID (Desktop App) | Low | None |
| Add `YOUTUBE_CLIENT_ID`, `YOUTUBE_CLIENT_SECRET` to `.env` | Low | None |
| Write one-time auth flow script or use existing tool | Medium | None — token stored locally only |
| Confirm token refresh works | Medium | Low |

**Estimated effort:** 1 session.

### Phase 4 — YouTube Single Upload Test (medium risk, real API)

| Task | Complexity | Risk |
|---|---|---|
| Add `upload-youtube-shorts.mjs` (single video mode) | Medium | Low — private upload only |
| Add `video:upload:youtube` npm script | Trivial | None |
| Test with `--id short-001 --limit 1` | Medium | Low — video goes private |
| Verify `publish-result.json` written correctly | Low | None |
| Verify re-run skips already-uploaded video | Low | None |

**Estimated effort:** 1–2 sessions.

### Phase 5 — YouTube Batch Upload (medium risk)

| Task | Complexity | Risk |
|---|---|---|
| Extend `upload-youtube-shorts.mjs` for batch mode | Low | Low — same API, loop |
| Test full 6-short batch | Medium | Low |
| Test deliberate failure + retry | Medium | Low |

**Estimated effort:** 1 session.

### Phase 6 — TikTok Setup (high uncertainty)

| Task | Complexity | Risk |
|---|---|---|
| Register TikTok developer app | Low | High — approval timeline unknown |
| Obtain Content Posting API access | Low effort, high wait | High — can take weeks |
| Write `upload-tiktok-drafts.mjs` | Medium | Medium |
| Test single draft upload | Medium | Medium |

**Estimated effort:** 1–2 sessions of implementation, unknown wait for approval.

### Phase 7 — n8n Integration (low risk, deferred)

| Task | Complexity | Risk |
|---|---|---|
| Add publish toggle flags to load input spec | Low | None |
| Add Build Publish Manifest node chain | Medium | Low |
| Add upload command nodes | Medium | Low |
| Wire with publish_enabled / dry_run / upload_limit toggles | Medium | Low |

**Estimated effort:** 1–2 sessions after standalone scripts are confirmed.

---

## J. Files Likely to Change

### derin-okuma

| File | Change |
|---|---|
| `scripts/build-publish-manifest.mjs` | New file |
| `scripts/publish-dry-run.mjs` | New file |
| `scripts/upload-youtube-shorts.mjs` | New file |
| `scripts/upload-tiktok-drafts.mjs` | New file |
| `package.json` | Add new npm scripts |
| `.gitignore` | Add `*.token.json`, `publish-result.json` patterns |
| `.env.example` | Document new env vars |

### scene-blog-video

| File | Change |
|---|---|
| `workflows/day-14-async-render-export-wait-workflow.json` | New publish nodes added (Phase 7 only) |
| `docs/video-workflow.md` | Update with publish step documentation (Phase 7 only) |

### Desktop Export Folder (runtime, not committed)

| File | Produced by |
|---|---|
| `publish-manifest.json` | `build-publish-manifest.mjs` |
| `publish-result.json` | `upload-youtube-shorts.mjs` or `upload-tiktok-drafts.mjs` |

**No files in the renderer or Python layer should change for the upload pipeline.**

---

## K. Questions and Unknowns

### YouTube API

1. **Quota:** YouTube Data API v3 has a default quota of 10,000 units/day. A `videos.insert` costs 1,600 units. That allows ~6 uploads/day on the free quota. Is this enough for a 6-short batch? *(6 × 1,600 = 9,600 — just under the limit. One failure + retry would exceed it.)*
2. **Category ID:** `"27"` is Education. Should it be something else for Derin Okuma content? Verify with the YouTube category list.
3. **Tags vs Hashtags:** YouTube has two separate fields: `snippet.tags` (shown in tags, not in description) and hashtags embedded in the description string. Which is the intended behavior?
4. **Scheduling:** Should private videos later be scheduled for public release via the API, or is that always manual?
5. **Thumbnail upload:** `videos.insert` does not set a custom thumbnail. That requires a separate `thumbnails.set` call. Is thumbnail upload in scope?

### TikTok API

6. **App approval timeline:** How long will TikTok review take? Is there a fallback if it takes weeks?
7. **Chunked upload:** Files larger than 64 MB require chunked/multipart upload via TikTok's Direct Post API. Are the existing shorts-main.mp4 files under this limit?
8. **Caption length:** TikTok caption limit is 2200 characters. Are existing descriptions within that limit?
9. **Rate limits:** TikTok development mode allows 50 video uploads/day. Is that enough for testing?

### Workflow / Architecture

10. **publish-result.json location:** Should it live in the desktop folder (alongside the export) or in the repo (for tracking history)? The current proposal puts it in the desktop folder. This means it is not committed to git — is that acceptable?
11. **Cross-run tracking:** If the same slug is exported again with a new `run-id`, should the new `publish-manifest.json` know about the previous run's upload results? Currently not — each run is independent.
12. **Landscape upload:** The roadmap focuses on Shorts. Should the landscape full video also be uploadable through the same mechanism, or is that a separate later phase?
13. **Pinned comment:** The existing metadata has `pinned_comment` for landscape videos. Should the upload script post a pinned comment after upload? This requires a separate YouTube `commentThreads.insert` call.

---

## Recommended Next Step

**Implement `build-publish-manifest.mjs` first.**

It requires no credentials, no API calls, and no changes to the render or export workflow.  
It reads data that already exists (the export folder + shorts metadata) and produces a structured JSON contract that all subsequent scripts will consume.

**First command to dry-run test:**

```bash
# From derin-okuma repo
npm run video:publish-manifest -- \
  --slug 10-soz-hasir-risalesi-6-12-suret \
  --run-id day25-full6-b \
  --type shorts \
  --export-root "/home/muhammet/Derin Okuma YT"
```

**Output that confirms success:**

```text
[OK] metadata_found=true
[OK] export_items_count=6
[OK] short-001 path exists: Dünya Neden Son Yurt Değil.mp4
[OK] short-002 path exists: Kayıt Varsa Hesap Neden Var.mp4
...
[OK] publish-manifest.json written
Target: /home/muhammet/Derin Okuma YT/Haşir Risalesi 6-12. Suret/publish-manifest.json
```

Once that command exits 0 and the JSON looks correct, the dry-run validator is the next step.  
No API credentials are needed until Phase 3.
