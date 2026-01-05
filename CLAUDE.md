# High School Baseball Umpire Chapter Website

## Project Overview
Static website for a high school baseball umpire chapter, replacing an existing WordPress site that costs ~$1000/year to host. Target hosting is GitHub Pages (free).

## Technical Stack
- **Static Site Generator:** Jekyll
- **Theme:** Minimal Mistakes (remote theme)
- **Hosting:** GitHub Pages (free)
- **Local Development:** Docker container (avoids Ruby installation on Windows)
- **Automation:** n8n (self-hosted on VPS) for content publishing workflow
- **Content Management:** Notion (free tier with guest access for chapter officers)

## MCP Usage Guidelines

Always use Context7 MCP when I need library/API documentation, code generation, setup or configuration steps without me having to explicitly ask.

## Architecture Decisions

### Why Jekyll over Astro
- Native GitHub Pages integration (push and it builds automatically)
- Simpler for content-heavy organizational site
- No GitHub Actions workflow needed for basic setup

### Docker Development Environment
Using volume mounts (not SSH into container) so:
- Git operations happen on Windows host
- Edit files with VS Code normally
- Container runs Jekyll server with hot reload
- Use `--force_polling` for reliable file watching on Windows
- Restart required for `_config.yml` changes: `docker-compose down && docker-compose up`

### Content Publishing Workflow
1. Chapter officers log into Notion as guests (up to 10 on free tier)
2. Officers create/edit posts in a shared Notion database
3. Set status to "Ready to Post"
4. n8n polls Notion database (or webhook trigger)
5. n8n commits markdown to GitHub repo `_posts/` directory
6. GitHub Pages auto-rebuilds

### Email Protection
JavaScript-based obfuscation protects email addresses from spam harvesters:
- Officers page uses `<span class="protected-email" data-u="user" data-d="domain">` pattern
- Footer/sidebar mailto links are transformed client-side
- Script: `assets/js/email-protect.js`

## Site Structure
```
├── _posts/              # News, announcements, meeting notes
├── _pages/
│   ├── about.md         # Chapter info, service area map, schools list
│   ├── officers.md      # Officer roster (pulls from _data/officers.yml)
│   ├── join.md          # Membership info and requirements
│   ├── compensation.md  # Game fees and travel rates
│   ├── resources.md     # Links to Arbiter, TASO, UIL, rulebooks
│   └── posts.md         # News archive page
├── _data/
│   ├── officers.yml     # Officer info with photos and bios
│   └── navigation.yml   # Site navigation menu
├── _includes/
│   └── footer.html      # Custom footer (removed "Powered by" text)
├── assets/
│   ├── images/          # Logo, hero images, officer photos
│   └── js/
│       └── email-protect.js  # Email obfuscation script
├── _config.yml
├── docker-compose.yml
└── Gemfile
```

## Remaining Tasks
1. [x] Set up Docker Compose for local Jekyll development
2. [x] Select and configure theme (Minimal Mistakes)
3. [x] Create initial page structure
4. [x] Set up GitHub repository and Pages deployment
5. [ ] Configure Notion database for posts
6. [ ] Build n8n workflow (Notion → GitHub commit)
7. [x] Email protection (JavaScript obfuscation)
8. [x] Migrate essential content from WordPress
9. [x] Point domain DNS to GitHub Pages

## Domain
Already separate from WordPress hosting - just needs DNS update when ready.

## Notes
- Export any archival content from WordPress before canceling (meeting minutes, historical posts)
- Officers database in `_data/officers.yml` keeps roster updates simple
- Notion guest invites = each officer uses own email, no shared credentials
- Hero images can use page-specific CSS for background positioning (see posts for examples)
