---
title: "How This Theme Works"
date: "2026-09-24T08:00:00.000Z"
description: "A simple guide to how this Gatsby blog theme organizes content, templates, and styling for a clean personal site."
categories: [gatsby, theme, tutorial]
comments: true
image:
  feature: https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80
  credit: Unsplash
  creditlink: https://unsplash.com/
---

This theme is a lightweight Gatsby blog starter designed for a clean personal website. The goal is simple: write content in Markdown, let Gatsby turn it into pages, and keep the layout fast, readable, and easy to customize.

If you are building from this project, the main idea is that each blog post is stored as a folder with an `index.md` file inside it. Gatsby reads those files, extracts the frontmatter, and creates a page for each post automatically.

## Where the content lives

The posts are grouped inside the folder at [content/blog](../../../../content/blog). Each entry is a separate folder with its own Markdown file. The theme reads every post from there and sorts them by date to build the homepage and individual article pages.

A typical post starts with frontmatter like this:

```yaml
---
title: "How This Theme Works"
date: "2026-09-24T08:00:00.000Z"
description: "A simple guide to how this Gatsby blog theme works."
---
```

That metadata is used to set the page title, date, and description. The real article body follows after the frontmatter section.

## How the pages are created

The page generation logic lives in [gatsby-node.js](../../../../gatsby-node.js). It queries all Markdown files, sorts them by date, and then creates:

- one page per post
- a paginated blog listing page for the homepage
- previous/next links between articles

This is the part that turns raw content into usable website pages without manual setup for each post.

## Templates and layout

The theme uses templates from the [src/templates](../../../../src/templates) folder:

- [src/templates/blog-post.js](../../../../src/templates/blog-post.js) renders a single article
- [src/templates/blog-list.tsx](../../../../src/templates/blog-list.tsx) renders the homepage and paginated list

The layout and shared page structure are kept in the components folder, so the design stays consistent across posts.

## Styling and customization

This project also includes typography and styling helpers. That means you can change fonts, spacing, and overall visual tone without rewriting the underlying page structure. If you want a different look, the best place to start is usually the shared components and the typography utilities.

## How to add a new post

To add your own content, create a new folder inside [content/blog](../../../../content/blog), add an `index.md` file, and include the required frontmatter fields. Then run the build again and Gatsby will generate the new page automatically.

A clean workflow looks like this:

1. Create a new blog folder.
2. Add `index.md` with title, date, and description.
3. Write the article body in Markdown.
4. Run the project build or start the dev server.

That is the core of how this theme works: content in Markdown, templates in React, and Gatsby handling the build and routing automatically.

## Summary

This theme is easy to work with because it separates responsibilities:

- content lives in Markdown files
- templates control presentation
- Gatsby handles page generation
- styling is centralized for simple theme adjustments

If you want to customize the site, keep the same pattern: update the content files for posts, the templates for structure, and the shared styling for the look and feel.
