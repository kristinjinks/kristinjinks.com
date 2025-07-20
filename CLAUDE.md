# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Run ESLint with auto-fix
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting
- `pnpm new <title>` - Create a new blog post (use `_title` for drafts)
- `pnpm update-theme` - Update the theme to the latest version

## Architecture Overview

This is an Astro-based blog theme called "Chiri" with the following key architectural patterns:

### Content Management
- **Posts**: Markdown/MDX files in `src/content/posts/` with frontmatter schema validation
- **About page**: Markdown file in `src/content/about/`
- **Content collections**: Defined in `src/content.config.ts` using Astro's content loader system
- **Draft system**: Posts prefixed with `_` are treated as drafts

### Configuration System
- **Central config**: `src/config.ts` contains `themeConfig` object controlling all theme behaviour
- **Configurable features**: Theme toggle, layout centering, date formatting, TOC, reading time, image viewer, code copying
- **Type safety**: All configuration options are typed in `src/types/`

### Layout Architecture
- **BaseLayout**: Core HTML structure with theme management and transitions
- **PostLayout**: Blog post-specific layout with TOC, reading time, and post metadata
- **IndexLayout**: Homepage layout for post listings

### Plugin System
Custom Remark/Rehype plugins for enhanced functionality:
- `remark-embedded-media.mjs` - Embed external media
- `remark-reading-time.mjs` - Calculate reading time
- `remark-toc.mjs` - Generate table of contents
- `rehype-copy-code.mjs` - Add copy buttons to code blocks
- `rehype-image-processor.mjs` - Process and optimise images
- `rehype-cleanup.mjs` - Clean up generated HTML

### Component Structure
- **Layout components**: `src/components/layout/` (Header, Footer, BaseHead, etc.)
- **UI components**: `src/components/ui/` (Theme toggle, image viewer, etc.)
- **Widget components**: `src/components/widgets/` (Date formatting, post lists, etc.)
- **Example components**: `src/components/examples/` for documentation

### Styling System
- Global styles in `src/styles/global.css` with CSS custom properties for theming
- Post-specific styles in `src/styles/post.css`
- Font loading in `src/styles/fonts.css`
- Theme switching via CSS custom properties and data attributes

### Image Handling
- Sharp-based image processing with custom config in `src/utils/image-config.ts`
- ImageOptimizer component for responsive images
- ImageViewer component for lightbox functionality

### Deployment
- Configured for Netlify deployment with `@astrojs/netlify` adapter
- OpenGraph image generation via `astro-og-canvas`
- Sitemap and RSS feed generation built-in