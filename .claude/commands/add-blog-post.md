---
description: Convert a draft article into a derin-okuma blog post
argument-hint: [draft-file-path]
---

Add a new draft article to the derin-okuma blog site.

Draft file:
$ARGUMENTS

Context:
- Repo: /home/muhammet/projects/derin-okuma
- This is an Astro blog site.
- Existing blog posts are under src/content/blog.
- Drafts are under docs/drafts.
- Follow the style and structure of existing blog posts.

Task:
1. Inspect existing blog post markdown files under src/content/blog to learn the required frontmatter/schema.
2. Inspect the draft file provided in $ARGUMENTS.
3. Convert the draft into a new blog post under src/content/blog.
4. Preserve the meaning and emotional/intellectual tone of the draft.
5. Make only necessary readability, heading, paragraph, and markdown structure improvements.
6. Do not over-rewrite the text.
7. Do not make it sound like a direct book excerpt. It should read like an original reflective blog essay for general readers.
8. Use Turkish naturally and fluently.
9. Create a clean Turkish title, description, pubDate, and slug.
10. Slug must be lowercase, ASCII-only, and URL-safe.
11. If the site schema does not support tags/category/source, do not invent unsupported frontmatter fields.
12. If there are quoted parts from Risale-i Nur or another source, preserve them as blockquotes if appropriate.
13. Run npm run build.
14. Report:
   - created file path
   - title
   - slug
   - expected URL
   - build result
   - suggested commit message

Safety:
- Do not touch unrelated files.
- Do not change existing blog posts unless required by build errors.
- Do not change site layout/components.
- Do not modify package files.
- Do not commit until build passes and you summarize the result.

After build passes, ask for approval before committing.
Suggested commit message:
content(blog): add <short-slug-or-title>
