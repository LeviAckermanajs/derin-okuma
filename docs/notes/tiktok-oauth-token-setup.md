# TikTok OAuth & Token Setup

Runbook for setting up local TikTok OAuth credentials before enabling real draft uploads.
**No real credentials belong in this file. All examples use placeholder values.**

---

## Prerequisites

### 1. Create a TikTok Developer App

1. Go to [developers.tiktok.com](https://developers.tiktok.com) and sign in with your TikTok account.
2. Create a new app (or open an existing one).
3. Under **Products**, add **Content Posting API**.
4. Under **Scopes**, enable **`video.upload`** (required for draft and direct post uploads).
5. Under **App Settings → Redirect URI**, add your redirect URI.
   - For local testing you can use `https://localhost/callback` — you just copy the `code` from the browser's address bar after redirect, even if the page fails to load.

### 2. Sandbox vs Production

- New apps start in **Sandbox** mode.
- In Sandbox, add your own TikTok account as a **tester** under **Manage app → Sandbox → Testers**.
- Production approval is required before uploading on behalf of other accounts.

---

## Local Secret Files

Store credentials under `.secrets/tiktok/` — covered by `.gitignore` and must **never** be committed.

### `.secrets/tiktok/client.json`

Create this file and fill in your real app credentials:

```json
{
  "client_key": "REPLACE_ME",
  "client_secret": "REPLACE_ME",
  "redirect_uri": "https://localhost/callback"
}
```

`client_key` and `client_secret` come from your app's **App Info** page in the TikTok Developer Console.

### `.secrets/tiktok/token.json`

This file is written automatically by `tiktok:exchange-token`. Do not create it manually. Its shape is:

```json
{
  "access_token": "REPLACE_ME",
  "refresh_token": "REPLACE_ME",
  "open_id": "REPLACE_ME",
  "scope": "video.upload",
  "token_type": "Bearer",
  "expires_in": 86400,
  "expires_at": "REPLACE_ME",
  "refresh_expires_in": 31536000,
  "refresh_expires_at": "REPLACE_ME",
  "obtained_at": "REPLACE_ME"
}
```

`expires_at` and `refresh_expires_at` are ISO 8601 timestamps computed at exchange time.

---

## Local Auth Flow — Step by Step

### a. Create `client.json`

Fill in `.secrets/tiktok/client.json` with real values from your TikTok Developer app.

### b. Generate the Authorization URL

```bash
npm run tiktok:auth-url
```

This generates a PKCE `code_verifier` + `code_challenge`, saves them to
`.secrets/tiktok/auth-state.local.tiktok.json`, and prints the TikTok authorization URL.

Optional: add `-- --open` to try opening the URL in the browser automatically.

### c. Authorize in Browser

Open the printed URL. TikTok will ask you to log in (or confirm) and approve the `video.upload` scope.
After approval, TikTok redirects to your `redirect_uri` with a `code` query parameter, e.g.:

```
https://localhost/callback?code=XXXXXXXXXXXXXXXXXXXX&state=...
```

Copy the value of the `code` parameter (the part after `code=`, before `&state`).
The code is valid for approximately 10 minutes.

### d. Exchange the Code for Tokens

```bash
npm run tiktok:exchange-token -- --code "PASTE_CODE_HERE"
```

This sends the code + PKCE verifier to TikTok's token endpoint, receives `access_token` /
`refresh_token` / `open_id`, writes `.secrets/tiktok/token.json`, and cleans up the auth state file.

Only masked values are printed to the console — the full token is never logged.

### e. Verify Token Status

```bash
npm run tiktok:token-status
```

Reads `token.json` locally (no network call), prints masked field values, checks for `video.upload`
scope, and warns if the token is expired or expiring within 2 hours.

---

## Token Lifecycle

| Token | Lifetime | Action on Expiry |
|---|---|---|
| `access_token` | 24 hours | Re-run exchange or implement refresh flow |
| `refresh_token` | 365 days | Re-run full auth flow from step b |

---

## Real Draft Upload Flow (implemented after token status is clean)

TikTok Content Posting API uses a three-step upload for video files:

1. **Init upload** — POST to `/v2/post/publish/inbox/video/init/`
   - Send `post_info` with `title` (mapped from our `caption` field), `privacy_level`, and
     `disable_duet` / `disable_stitch` flags.
   - Send `source_info` with `upload_type: FILE_UPLOAD`, video byte size, chunk count, chunk size.
   - Receive `publish_id` and `upload_url`.

2. **Upload file** — PUT to the `upload_url` from step 1.
   - Upload the MP4 in chunks with `Content-Range` headers.
   - Each chunk is typically 10 MB.

3. **Status check** — GET `/v2/post/publish/status/fetch/` with `publish_id`.
   - Poll until status is `PUBLISH_COMPLETE`, `FAILED`, or times out.

> **API boundary note:** TikTok's `post_info.title` maps directly from our `caption` field.
> We do not use a separate internal title concept — caption is the single source of truth.

---

## Checklist Before First Real Draft Upload

- [ ] Developer app created with Content Posting API product added
- [ ] `video.upload` scope granted in app settings
- [ ] Sandbox tester account added (or production approval obtained)
- [ ] `.secrets/tiktok/client.json` filled with real values
- [ ] `npm run tiktok:auth-url` run → authorization URL generated
- [ ] Browser authorization completed → `code` copied
- [ ] `npm run tiktok:exchange-token -- --code "..."` run → `token.json` written
- [ ] `npm run tiktok:token-status` shows `token_valid=true` and `scope_video_upload=true`
- [ ] `npm run video:tiktok:upload-batch -- --manifest <path> --mode draft --dry-run --write-plan` passes with 0 errors
- [ ] `TIKTOK_REAL_UPLOAD=1` env var gating implemented in upload script before first live run
