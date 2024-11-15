This forked repository origins `Fuwari`.
For more Information, visit [fuwari](https://github.com/saicaca/fuwari).

## Features

It is very similar from the original.

- [x] Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com)
- [x] Smooth animations and page transitions
- [x] Light / dark mode
- [x] Customizable theme colors & banner
- [x] Responsive design
- [x] Scroll top & bottom button (With Mobile)
- [x] Blog, Novel. Seperated Folder.
- [x] Comments (With Theme)
- [x] Search (Novel Folder Blocked from build command)
- [ ] TOC

## Comments Powered By Giscus!!!

## Any Questions? Just Contact me :D

## 🚀 How to Use

It is the same as the original.

1. [Generate a new repository](https://github.com/melted-mint/fuwari-edited.git) from this template or fork this repository.
2. To edit your blog locally, clone your repository, run `pnpm install` AND `pnpm add sharp` to install dependencies.
   - Install [pnpm](https://pnpm.io) `npm install -g pnpm` if you haven't.
3. Edit the config file `src/config.ts` to customize your blog.
4. Run `pnpm new-post <filename>` to create a new post and edit it in `src/content/posts/`.
5. Deploy your blog to Vercel, Netlify, GitHub Pages, etc. following [the guides](https://docs.astro.build/en/guides/deploy/). You need to edit the site configuration in `astro.config.mjs` before deployment.

## For Comments

The File is located at:  
`/src/layouts/CommentNovelGridLayout.astro`,  
`/src/layouts/CommentMainGridLayout.astro`.  
You should add your code there.  
For more information, visit [giscus](https://giscus.app/).  

## ⚙️ Frontmatter of Posts

```yaml
---
title: My First Blog Post
published: 2023-09-09
description: This is the first post of my new Astro blog.
image: ./cover.jpg
tags: [Foo, Bar]
category: Front-end
draft: false
lang: jp      # Set only if the post's language differs from the site's language in `config.ts`
---
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                             | Action                                           |
|:------------------------------------|:-------------------------------------------------|
| `pnpm install` AND `pnpm add sharp` | Installs dependencies                            |
| `pnpm dev`                          | Starts local dev server at `localhost:4321`      |
| `pnpm build`                        | Build your production site to `./dist/`          |
| `pnpm preview`                      | Preview your build locally, before deploying     |
| `pnpm new-post <filename>`          | Create a new post                                |
| `pnpm astro ...`                    | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro --help`                 | Get help using the Astro CLI                     |
