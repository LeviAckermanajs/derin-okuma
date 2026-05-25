# TikTok OAuth & Token Setup

This runbook covers the prerequisites for eventually enabling real TikTok draft uploads.
**No real credentials belong in this file. All examples use placeholder values.**

---

## Prerequisites

### 1. TikTok Developer App

- Go to [developers.tiktok.com](https://developers.tiktok.com) and sign in.
- Create a new app (or use an existing one).
- Under **Products**, add **Content Posting API**.
- Under **Scopes**, enable **`video.upload`** (required for draft/direct post uploads).
- Set a **Redirect URI** (can be `https://localhost/callback` for local testing).

### 2. Review & Sandbox status

- New apps start in **Sandbox** mode.
- Sandbox allows testing with your own TikTok account (added as a tester).
- Production approval is required before posting to other accounts.

---

## Local Secret Files

Store credentials in `.secrets/tiktok/` — this path is covered by `.gitignore` and must **never** be committed.

### `.secrets/tiktok/client.json`

```json
{
  "client_key": "REPLACE_ME",
  "client_secret": "REPLACE_ME",
  "redirect_uri": "https://REPLACE_ME/callback"
}
```

### `.secrets/tiktok/token.json`

```json
{
  "access_token": "REPLACE_ME",
  "refresh_token": "REPLACE_ME",
  "open_id": "REPLACE_ME",
  "scope": "video.upload",
  "expires_at": "REPLACE_ME"
}
```

`expires_at` should be an ISO 8601 timestamp. The upload script will check this and refuse to proceed if the token is expired.

---

## OAuth Flow (for future implementation)

TikTok uses OAuth 2.0 with PKCE. The flow when implemented will be:

1. Generate a code verifier + code challenge (PKCE).
2. Redirect the user to TikTok's authorization URL with `client_key`, `scope`, `redirect_uri`, and the code challenge.
3. TikTok redirects back with an authorization `code`.
4. Exchange the code (+ verifier) for `access_token` and `refresh_token`.
5. Save to `.secrets/tiktok/token.json`.

Token lifetime is typically 24 hours. Use `refresh_token` (valid 365 days) to renew without re-authorizing.

---

## Real Draft Upload Flow (for future implementation)

TikTok Content Posting API uses a three-step upload for video files:

1. **Init upload** — POST to `/v2/post/publish/inbox/video/init/`
   - Send `post_info` (title mapped from caption, privacy_level, disable_duet/stitch as needed).
   - Send `source_info` (upload_type: `FILE_UPLOAD`, video size, chunk count, chunk size).
   - Receive `publish_id` and `upload_url`.

2. **Upload file** — PUT to the `upload_url` received in step 1.
   - Upload the MP4 in chunks with correct `Content-Range` headers.

3. **Status check** — GET `/v2/post/publish/status/fetch/` with `publish_id`.
   - Poll until status is `PUBLISH_COMPLETE` or an error state.

> **API boundary note:** TikTok's `post_info.title` maps directly from our `caption` field.
> We do not use a separate internal title concept — caption is the single source of truth.

---

## Checklist Before First Real Upload

- [ ] Developer app created and Content Posting API product added
- [ ] `video.upload` scope granted
- [ ] App reviewed (or sandbox tester added)
- [ ] `client.json` populated with real values (not committed)
- [ ] OAuth flow run, `token.json` populated and not expired
- [ ] Dry-run with `--write-plan` passes with 0 errors
- [ ] `TIKTOK_REAL_UPLOAD=1` env var gating implemented in upload script
