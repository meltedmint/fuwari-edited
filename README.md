# Fuwari-Edited

A static blog template built with [Astro](https://astro.build).
This is a personalized fork of the original [Fuwari](https://github.com/saicaca/fuwari) theme, optimized and refined.

> README version: `2026-04-18`
[**🖥️ Live Demo**](https://meltedmint.com)

## ✨ Features

It is very similar from the original.

- [x] Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com)
- [x] Smooth animations and page transitions
- [x] Light / dark / system mode
- [x] Customizable theme colors & banner
- [x] Responsive design
- [x] Scroll top & bottom buttons
- [x] Integrated Comments via [Giscus](https://giscus.app/)
- [x] Full-text Search
- [x] Supports both `.md` and `.mdx` formats
- [x] Table of Contents (TOC)

## 💬 Comments Powered By Giscus

This template uses Giscus for comments. To enable comments on your site:
1. Ensure your GitHub repository is **Public** and has **Discussions** enabled in Settings -> Features.
2. Install the [Giscus GitHub App](https://github.com/apps/giscus) and grant it access to your repository.
3. The comments will automatically appear at the bottom of your posts!

## 🚀 How to Use

1. Fork this repository or [generate a new one](https://github.com/saicaca/fuwari/generate).
2. Clone your repository and run `pnpm install` to install dependencies.
3. Edit the config file `src/config.ts` to customize your blog's title, profile, and links.
4. Run `pnpm new-post <filename>` to create a new post in `src/content/posts/`.
5. **Media Asset Guide**:
   - **Images**: Place them inside your post's folder in `src/content/posts/` and use relative paths (`./image.png`) for automatic Astro optimization.
   - **Audio/Video/Files**: Place them in the `public/` directory and use absolute paths (`/audio.mp3`), OR use `.mdx` format to import them directly.
6. Deploy your blog to Vercel, Netlify, or GitHub Pages.

## ⚙️ Frontmatter of Posts

```yaml
---
title: My First Blog Post
published: 2026-04-18
description: This is the first post of my new Astro blog.
image: ./cover.jpg
tags: [Foo, Bar]
category: Front-end
draft: false
---
```

## 🧞 Commands

| Command                             | Action                                           |
|:------------------------------------|:-------------------------------------------------|
| `pnpm install`                      | Installs dependencies                            |
| `pnpm dev`                          | Starts local dev server at `localhost:4321`      |
| `pnpm build`                        | Build your production site to `./dist/`          |
| `pnpm preview`                      | Preview your build locally, before deploying     |
| `pnpm new-post <filename>`          | Create a new post                                |
| `pnpm format` & `pnpm lint`         | Format and lint your code using Biome            |
