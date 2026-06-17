#!/usr/bin/env node
// prepare-video-package.mjs — Derin Okuma video üretim scaffold generator
// Usage: npm run video:prep -- --title "23. Söz - 1. Mebhas - 5. Nokta" --day 18

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// ─── Runtime config ───────────────────────────────────────────────────────────
// Override with env vars if needed; defaults target the laptop WSL setup.

const REPO_ROOT    = process.env.SCENE_BLOG_VIDEO_ROOT         ?? '/home/muhammet/projects/scene-blog-video';
const RENDERER_URL = process.env.SCENE_BLOG_VIDEO_RENDERER_URL ?? 'http://127.0.0.1:8000';

// ─── CLI args ────────────────────────────────────────────────────────────────

function parseArgs(argv) {
  const args = { title: null, slug: null, day: null, shorts: 6, force: false };
  let i = 0;
  while (i < argv.length) {
    const a = argv[i];
    if (a === '--title' && argv[i + 1]) { args.title = argv[++i]; }
    else if (a === '--slug'  && argv[i + 1]) { args.slug  = argv[++i]; }
    else if (a === '--day'   && argv[i + 1]) { args.day   = parseInt(argv[++i], 10); }
    else if (a === '--shorts'&& argv[i + 1]) { args.shorts= parseInt(argv[++i], 10); }
    else if (a === '--force') { args.force = true; }
    else if (!a.startsWith('--') && !args.title) { args.title = a; }
    i++;
  }
  return args;
}

const args = parseArgs(process.argv.slice(2));

if (!args.title) {
  console.error('Hata: --title zorunlu.');
  console.error('Kullanım: npm run video:prep -- --title "23. Söz - 1. Mebhas - 5. Nokta" --day 18');
  process.exit(1);
}

// ─── Slug üretimi ────────────────────────────────────────────────────────────

function toSlug(title) {
  const map = { ç:'c', Ç:'c', ğ:'g', Ğ:'g', ı:'i', İ:'i', ö:'o', Ö:'o', ş:'s', Ş:'s', ü:'u', Ü:'u' };
  return title
    .split('').map(c => map[c] ?? c).join('')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const slug = args.slug ?? toSlug(args.title);

// ─── Day numarası tahmini ────────────────────────────────────────────────────

function inferNextDay() {
  const dailyDir = path.join(ROOT, 'docs/notes/daily');
  if (!fs.existsSync(dailyDir)) return 1;
  const nums = fs.readdirSync(dailyDir)
    .map(f => f.match(/^day-(\d+)\.md$/))
    .filter(Boolean)
    .map(m => parseInt(m[1], 10));
  return nums.length ? Math.max(...nums) + 1 : 1;
}

const day = args.day ?? inferNextDay();
const dayTag = `day-${String(day).padStart(2, '0')}`;

// ─── Blog kaynak dosya arama ─────────────────────────────────────────────────

function findSourceFile(title, slug) {
  const blogDir = path.join(ROOT, 'src/content/blog');
  if (!fs.existsSync(blogDir)) return null;

  const files = fs.readdirSync(blogDir).filter(f => /\.(md|mdx)$/.test(f));
  const normalizedTitle = toSlug(title);

  for (const f of files) {
    const fullPath = path.join(blogDir, f);
    const content = fs.readFileSync(fullPath, 'utf8');
    const titleMatch = content.match(/^title:\s*["']?(.+?)["']?\s*$/m);
    if (titleMatch) {
      const fileTitle = titleMatch[1].trim();
      if (fileTitle === title || toSlug(fileTitle) === normalizedTitle || toSlug(fileTitle) === slug) {
        return `src/content/blog/${f}`;
      }
    }
    if (toSlug(f.replace(/\.(md|mdx)$/, '')) === normalizedTitle || toSlug(f.replace(/\.(md|mdx)$/, '')) === slug) {
      return `src/content/blog/${f}`;
    }
  }

  // Kısmi eşleşme
  const partials = files.filter(f => {
    const base = toSlug(f.replace(/\.(md|mdx)$/, ''));
    return base.includes(normalizedTitle.slice(0, 6)) || normalizedTitle.includes(base.slice(0, 6));
  });

  if (partials.length === 1) return `src/content/blog/${partials[0]}`;
  if (partials.length > 1) {
    console.warn('Uyarı: Birden fazla aday dosya bulundu:');
    partials.forEach(p => console.warn(`  src/content/blog/${p}`));
    console.warn('Manuel olarak --slug belirt veya kaynak dosyayı doğrula.');
  }

  return null;
}

const sourceFile = findSourceFile(args.title, slug);
if (!sourceFile) {
  console.warn(`Uyarı: Kaynak blog dosyası bulunamadı (title: "${args.title}", slug: "${slug}").`);
  console.warn('  Scaffold oluşturuluyor ancak source_files boş kalacak.');
  console.warn('  Manuel slug için: npm run video:prep -- --title "..." --slug "manuel-slug"');
}

const sourceFiles = sourceFile ? [sourceFile] : [];

// ─── Dosya yazma yardımcıları ────────────────────────────────────────────────

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function writeFile(filePath, content, label) {
  if (fs.existsSync(filePath) && !args.force) {
    console.warn(`  [SKIP] Dosya zaten var (--force ile üzerine yaz): ${filePath}`);
    return false;
  }
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`  [OK]   ${label ?? filePath}`);
  return true;
}

// ─── Kısa id biçimlendirici ──────────────────────────────────────────────────

function shortId(n) {
  return `short-${String(n).padStart(3, '0')}`;
}

// ─── Template üreticiler ─────────────────────────────────────────────────────

function landscapeFullVideoJSON() {
  return JSON.stringify({
    input_version: '0.1.0',
    input_type: 'manual_scene_json',
    job: {
      title: args.title,
      description: 'TODO: Bu yazıdan üretilecek landscape video açıklaması.',
      language: 'tr',
      author: 'Muhammet Yahya Ozer',
      job_id_hint: `${slug}-landscape-${dayTag}`
    },
    render_preferences: {
      mode: 'full_video',
      subtitles_enabled: true,
      target_aspect_ratio: '16:9',
      target_resolution: '1920x1080',
      target_fps: 30,
      voice_language: 'tr'
    },
    scenes: [],
    metadata: {
      source: 'derin-okuma',
      blog_post: slug,
      test_day: dayTag,
      workflow: 'manual_scene_json_landscape_reference',
      content_generation_status: 'scaffold_only',
      source_files: sourceFiles
    }
  }, null, 2);
}

function landscapeLoadInputJS() {
  return `// Derin Okuma — ${args.title} landscape video
// Scaffold generated by npm run video:prep
// TODO: Fill scenes before sending to n8n.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '${REPO_ROOT}',
    renderer_url: '${RENDERER_URL}'
  },

  job: {
    title: '${args.title.replace(/'/g, "\\'")}',
    description: 'TODO: Landscape video description.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '${slug}-landscape-${dayTag}'
  },

  reuse_existing_audio: {
    enabled: false,
    audio_mode: 'single_track',
    audio_track: {
      mode: 'single',
      path: '',
      duration_seconds: null
    }
  },

  reuse_existing_video: {
    enabled: false,
    visual_mode: 'semantic',
    video_root: '',
    path_template: '{scene_id}.mp4'
  },

  visual_mode: 'ambient',

  audio_strategy: {
    mode: 'single_track',
    timing_strategy: 'elevenlabs_timestamps',
    join_separator: '\\n\\n'
  },

  render_preferences: {
    mode: 'full_video',
    subtitles_enabled: true,
    render_mode: 'landscape',
    produce_both: false,
    background_music_enabled: true,
    target_fps: 30
  },

  scenes: [],

  metadata: {
    source: 'derin-okuma',
    blog_post: '${slug}',
    test_day: '${dayTag}',
    workflow: 'manual_scene_json_single_track_landscape_load_input',
    content_generation_status: 'scaffold_only'
  }
};

return [{ json: { raw_input: rawInput } }];
`;
}

function landscapeMetadataJSON() {
  return JSON.stringify({
    video_type: 'landscape',
    source: slug,
    test_day: dayTag,
    content_generation_status: 'scaffold_only',
    title_options: [
      'TODO: İnsan Neden ...?',
      'TODO: ... Nasıl ...?',
      'TODO: ... Ne Olur?'
    ],
    selected_title: 'TODO',
    description: 'TODO: YouTube açıklaması.\n\n#derinokuma #tefekkür #iman #risaleinur #maneviyat',
    hashtags: ['#derinokuma', '#tefekkür', '#iman', '#risaleinur', '#maneviyat'],
    playlist_or_folder: 'Risale-i Nur Okumaları',
    thumbnail_text_options: ['TODO'],
    seo_keywords: ['TODO'],
    pinned_comment: 'TODO'
  }, null, 2);
}

function shortsPackageJSON() {
  return JSON.stringify({
    source: {
      blog_post: slug,
      title: args.title,
      source_files: sourceFiles
    },
    test_day: dayTag,
    video_type: 'shorts_package',
    content_generation_status: 'scaffold_only',
    shorts: []
  }, null, 2);
}

function shortsMetadataJSON() {
  return JSON.stringify({
    video_type: 'shorts',
    source: slug,
    test_day: dayTag,
    content_generation_status: 'scaffold_only',
    shorts: []
  }, null, 2);
}

function shortsLoadInputJS(n) {
  const sid = shortId(n);
  return `// Derin Okuma — ${args.title} Shorts
// Short: ${sid}
// Scaffold generated by npm run video:prep
// TODO: Fill scenes before sending to n8n.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '${REPO_ROOT}',
    renderer_url: '${RENDERER_URL}'
  },

  job: {
    title: 'TODO ${sid} title',
    description: 'TODO ${sid} hook or description',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '${slug}-${sid}-${dayTag}'
  },

  reuse_existing_audio: {
    enabled: false,
    audio_mode: 'single_track',
    audio_track: {
      mode: 'single',
      path: '',
      duration_seconds: null
    }
  },

  reuse_existing_video: {
    enabled: false,
    visual_mode: 'semantic',
    video_root: '',
    path_template: '{scene_id}.mp4'
  },

  visual_mode: 'ambient',

  audio_strategy: {
    mode: 'single_track',
    timing_strategy: 'elevenlabs_timestamps',
    join_separator: '\\n\\n'
  },

  render_preferences: {
    mode: 'shorts',
    subtitles_enabled: true,
    render_mode: 'shorts',
    produce_both: false,
    background_music_enabled: true,
    target_fps: 30
  },

  scenes: [],

  metadata: {
    source: 'derin-okuma',
    blog_post: '${slug}',
    test_day: '${dayTag}',
    short_id: '${sid}',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'scaffold_only'
  }
};

return [{ json: { raw_input: rawInput } }];
`;
}

function buildShortLoadInputList() {
  const lines = [];
  for (let i = 1; i <= args.shorts; i++) {
    lines.push(`- \`docs/video-tests/shorts/${slug}/load-inputs/${shortId(i)}-load-input.js\``);
  }
  return lines.join('\n');
}

function buildShortLoadInputValidation() {
  const jsonChecks = [
    `python3 -m json.tool docs/video-tests/inputs/${slug}-landscape-full-video.json > /tmp/${slug}-landscape-json-check.json`,
    `python3 -m json.tool docs/video-tests/metadata/${slug}-landscape-metadata.json > /tmp/${slug}-landscape-metadata-check.json`,
    `python3 -m json.tool docs/video-tests/shorts/${slug}/${slug}-shorts-package.json > /tmp/${slug}-shorts-package-check.json`,
    `python3 -m json.tool docs/video-tests/shorts/${slug}/metadata/${slug}-shorts-metadata.json > /tmp/${slug}-shorts-metadata-check.json`
  ].join('\n');

  const jsChecks = [
    `node -e "new Function(require('fs').readFileSync('docs/video-tests/inputs/${slug}-landscape-load-input.js', 'utf8')); console.log('Landscape JS OK')"`,
    '',
    `for f in docs/video-tests/shorts/${slug}/load-inputs/*.js; do`,
    `  node -e "new Function(require('fs').readFileSync('$f', 'utf8')); console.log('OK:', '$f')"`,
    `done`
  ].join('\n');

  return { jsonChecks, jsChecks };
}

function buildShortDoldurmaDosyaList() {
  const lines = [];
  for (let i = 1; i <= args.shorts; i++) {
    lines.push(`- \`docs/video-tests/shorts/${slug}/load-inputs/${shortId(i)}-load-input.js\``);
  }
  return lines.join('\n');
}

function claudeFillPromptMD() {
  const { jsonChecks, jsChecks } = buildShortLoadInputValidation();
  return `# Görev: ${args.title} video üretim scaffold dosyalarını doldur

Bu görevde daha önce \`npm run video:prep\` ile oluşturulmuş scaffold dosyaları gerçek içerikle doldurulacak.

## Hedef Yazı

- Başlık: \`${args.title}\`
- Slug: \`${slug}\`
- Kaynak dosya: \`${sourceFile ?? 'TODO: kaynak dosyayı manuel belirt'}\`
- Gün: \`${dayTag}\`

## Amaç

Bu yazı için:

1. Kaynak blog yazısını oku
2. Landscape için 30–40 sahnelik narration / scene JSON oluştur
3. Landscape full video JSON içindeki \`scenes\` alanını doldur
4. Landscape Load Input JS içindeki \`scenes\` alanını aynı sahnelerle doldur
5. Landscape metadata JSON dosyasını doldur
6. Aynı içerikten ${args.shorts} Shorts paketi çıkar
7. Shorts package JSON dosyasını doldur
8. Shorts metadata JSON dosyasını doldur
9. Her Shorts için ilgili \`short-XXX-load-input.js\` içindeki \`job.title\`, \`job.description\` ve \`scenes\` alanlarını doldur
10. JSON / JS doğrulamalarını yap
11. Rapor ve günlük notu güncelle

## Doldurulacak Dosyalar

### Landscape

- \`docs/video-tests/inputs/${slug}-landscape-full-video.json\`
- \`docs/video-tests/inputs/${slug}-landscape-load-input.js\`
- \`docs/video-tests/metadata/${slug}-landscape-metadata.json\`

### Shorts

- \`docs/video-tests/shorts/${slug}/${slug}-shorts-package.json\`
- \`docs/video-tests/shorts/${slug}/metadata/${slug}-shorts-metadata.json\`
${buildShortDoldurmaDosyaList()}

## Önce Oku

- \`docs/prompts/landscape-narration.md\`
- \`docs/prompts/shorts-narration.md\`
- \`docs/prompts/youtube-metadata.md\`
- \`docs/prompts/scene-json-format.md\`
- \`docs/video-workflow.md\`
- Kaynak blog yazısı

## Kritik Kurallar

- Dinleyici kaynak metni görmüyor kabul edilecek.
- Narration kaynak metni açıklıyor gibi değil, bağımsız video anlatısı gibi yazılacak.
- "bu metin", "metnin deyimiyle", "yazar burada", "verilen cevap" gibi kalıplar kullanılmayacak.
- \`narration\` kullanılacak, \`text\` alanı kullanılmayacak.
- \`visual_note\` İngilizce olacak.
- \`keywords\` İngilizce olacak.
- \`scene_id\` string olacak: \`"scene-001"\`.
- Landscape için \`mode: 'full_video'\`, \`render_mode: 'landscape'\`.
- Shorts için \`mode: 'shorts'\`, \`render_mode: 'shorts'\`.
- \`audio_strategy.mode: 'single_track'\`.
- \`timing_strategy: 'elevenlabs_timestamps'\`.
- Description sonundaki hashtag bloğu, \`hashtags\` array ile birebir aynı olacak.
- Başlık seçeneklerinde "neden / nasıl / ne olur / niçin" yapıları önceliklendirilecek.
- n8n'e verilecek gerçek dosyalar Load Input JS dosyalarıdır.
- Package JSON doğrudan n8n'e verilmez; master içerik/arşiv dosyasıdır.

## Landscape Kuralları

- 30–40 sahne üret.
- Her sahnede:
  - \`scene_id\`
  - \`title\`
  - \`narration\`
  - \`visual_note\`
  - \`keywords\`
- Sahne başına 2–5 cümle ideal.
- Ton sakin, derin, tefekkürî.
- Doğrudan alıntı gibi yazma.

## Shorts Kuralları

- ${args.shorts} Shorts üret.
- Her Shorts tek ana fikir taşısın.
- Her Shorts 2–5 sahne olsun.
- Hook ilk 3–5 saniyede merak uyandırsın.
- Clickbait yapma.
- Manevî içeriği ucuzlaştırma.
- shorts-package.json içindeki her short nesnesi şu alanları içermelidir:
  - \`short_id\`
  - \`hook\`
  - \`title\`
  - \`description\` ← metadata'daki description ile aynı veya uyumlu olmalıdır; sadece metadata dosyasına bırakılmamalıdır
  - \`hashtags\`
  - \`thumbnail_or_cover_text\`
  - \`scenes\`
- Her Shorts için metadata dosyasına da aynı alanları yaz:
  - title / title_options / selected_title
  - description
  - hashtags
  - thumbnail_or_cover_text

## Doğrulama

JSON dosyaları için:

\`\`\`bash
${jsonChecks}
\`\`\`

JS syntax için:

\`\`\`bash
${jsChecks}
\`\`\`

Yasaklı kalıp kontrolü:

\`\`\`bash
grep -RniE "bu metin|metnin|metinde|metne göre|metnin deyimiyle|bu noktada|şu cümle|verilen cevap|verilen örnek|yazar burada|kitap burada|burada anlatılmak istenen|bu bölüm" docs/video-tests/inputs/${slug}* docs/video-tests/shorts/${slug} || true
\`\`\`

## Çıktı Sonunda Raporla

1. Landscape sahne sayısı
2. Kaç Shorts üretildi?
3. Doldurulan dosyalar
4. Metadata durumu
5. JSON parse sonucu
6. JS syntax sonucu
7. Yasaklı kalıp kontrol sonucu
8. n8n'e ilk hangi dosya verilmeli?
9. Commit mesajı önerisi
`;
}

function reportMD() {
  return `# ${dayTag.charAt(0).toUpperCase() + dayTag.slice(1)} — ${args.title} Video Prep Scaffold

## Amaç

Bu dosya \`npm run video:prep\` ile oluşturulan video üretim iskeletini belgeler.

## Kaynak Yazı

- Başlık: \`${args.title}\`
- Slug: \`${slug}\`
- Kaynak dosya: \`${sourceFile ?? 'TODO: kaynak dosyayı manuel belirt'}\`

## Oluşturulan Dosyalar

### Landscape

- \`docs/video-tests/inputs/${slug}-landscape-full-video.json\`
- \`docs/video-tests/inputs/${slug}-landscape-load-input.js\`
- \`docs/video-tests/metadata/${slug}-landscape-metadata.json\`

### Shorts

- \`docs/video-tests/shorts/${slug}/${slug}-shorts-package.json\`
- \`docs/video-tests/shorts/${slug}/metadata/${slug}-shorts-metadata.json\`
${buildShortLoadInputList()}

### Claude Prompt

- \`docs/video-tests/prompts/${slug}-fill-video-package-prompt.md\`

## Durum

- Scaffold oluşturuldu
- Gerçek narration henüz üretilmedi
- Load Input JS dosyaları n8n syntax formatına uygun iskelet olarak hazır
- Claude/ChatGPT ile içerik doldurma aşaması bekleniyor

## Sonraki Adım

Claude'a şu dosyayı ver:

\`docs/video-tests/prompts/${slug}-fill-video-package-prompt.md\`
`;
}

function dailyNoteMD() {
  return `# ${dayTag.charAt(0).toUpperCase() + dayTag.slice(1)} — Video Prep Scaffold

## Bugünün Amacı

\`${args.title}\` yazısı için landscape + Shorts üretim dosya iskeletlerini oluşturmak.

## Oluşturulan Dosyalar

- Landscape JSON
- Landscape Load Input JS
- Landscape metadata
- Shorts package
- Shorts metadata
- Shorts Load Input JS dosyaları (${args.shorts} adet)
- Claude doldurma promptu

## Durum

Scaffold oluşturuldu. İçerik üretimi ve n8n testi sonraki aşamada yapılacak.

## Sonraki Adım

Claude'a şu prompt dosyası verilecek:

\`docs/video-tests/prompts/${slug}-fill-video-package-prompt.md\`
`;
}

// ─── Ana yürütme ─────────────────────────────────────────────────────────────

console.log(`\nDerin Okuma — Video Prep Scaffold`);
console.log(`  Başlık : ${args.title}`);
console.log(`  Slug   : ${slug}`);
console.log(`  Gün    : ${dayTag}`);
console.log(`  Shorts : ${args.shorts}`);
console.log(`  Kaynak : ${sourceFile ?? '(bulunamadı)'}`);
console.log(`  Force  : ${args.force}`);
console.log('');

const inputsDir   = path.join(ROOT, 'docs/video-tests/inputs');
const metaDir     = path.join(ROOT, 'docs/video-tests/metadata');
const shortsDir   = path.join(ROOT, 'docs/video-tests/shorts', slug);
const reportsDir  = path.join(ROOT, 'docs/video-tests/reports');
const promptsDir  = path.join(ROOT, 'docs/video-tests/prompts');
const dailyDir    = path.join(ROOT, 'docs/notes/daily');

// Landscape
console.log('Landscape:');
writeFile(path.join(inputsDir, `${slug}-landscape-full-video.json`), landscapeFullVideoJSON(), `inputs/${slug}-landscape-full-video.json`);
writeFile(path.join(inputsDir, `${slug}-landscape-load-input.js`),   landscapeLoadInputJS(),   `inputs/${slug}-landscape-load-input.js`);
writeFile(path.join(metaDir,   `${slug}-landscape-metadata.json`),   landscapeMetadataJSON(),  `metadata/${slug}-landscape-metadata.json`);

// Shorts
console.log('\nShorts:');
writeFile(path.join(shortsDir,              `${slug}-shorts-package.json`),               shortsPackageJSON(),  `shorts/${slug}/${slug}-shorts-package.json`);
writeFile(path.join(shortsDir, 'metadata',  `${slug}-shorts-metadata.json`),              shortsMetadataJSON(), `shorts/${slug}/metadata/${slug}-shorts-metadata.json`);

for (let i = 1; i <= args.shorts; i++) {
  const sid = shortId(i);
  writeFile(
    path.join(shortsDir, 'load-inputs', `${sid}-load-input.js`),
    shortsLoadInputJS(i),
    `shorts/${slug}/load-inputs/${sid}-load-input.js`
  );
}

// Claude prompt
console.log('\nClaude Prompt:');
writeFile(path.join(promptsDir, `${slug}-fill-video-package-prompt.md`), claudeFillPromptMD(), `prompts/${slug}-fill-video-package-prompt.md`);

// Rapor
console.log('\nRapor:');
writeFile(path.join(reportsDir, `${dayTag}-${slug}-video-prep.md`), reportMD(), `reports/${dayTag}-${slug}-video-prep.md`);

// Günlük not
console.log('\nGünlük Not:');
const dailyFile = path.join(dailyDir, `${dayTag}.md`);
if (fs.existsSync(dailyFile)) {
  console.warn(`  [SKIP] ${dayTag}.md zaten var — üzerine yazmıyor. (${dailyFile})`);
} else {
  writeFile(dailyFile, dailyNoteMD(), `notes/daily/${dayTag}.md`);
}

console.log(`\nTamamlandı. Claude doldurma promptu:\n  docs/video-tests/prompts/${slug}-fill-video-package-prompt.md\n`);
