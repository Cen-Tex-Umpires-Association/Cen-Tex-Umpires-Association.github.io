# High School Baseball Umpire Chapter Website

## Project Overview
Static website for a high school baseball umpire chapter, replacing an existing WordPress site that costs ~$1000/year to host. Target hosting is GitHub Pages (free).

## Technical Stack
- **Static Site Generator:** Jekyll
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

### Content Publishing Workflow
1. Chapter officers log into Notion as guests (up to 10 on free tier)
2. Officers create/edit posts in a shared Notion database
3. Set status to "Ready to Post"
4. n8n polls Notion database (or webhook trigger)
5. n8n commits markdown to GitHub repo `_posts/` directory
6. GitHub Pages auto-rebuilds

## Site Structure
```
├── _posts/              # News, announcements, meeting notes
├── _pages/
│   ├── about.md
│   ├── officers.md
│   ├── join.md
│   └── resources.md     # Links to Arbiter, state association, rulebooks
├── _data/
│   └── officers.yml     # Structured data for easy yearly updates
├── _config.yml
├── docker-compose.yml
└── Gemfile
```

## Theme Candidates
- **Minimal Mistakes** - Flexible, well-documented, good for org sites
- **Just the Docs** - Documentation style, clean navigation
- **Basically Basic** - Simpler alternative if less overhead needed

## Contact Form Solution
Since static sites can't process forms server-side:
- Formspree or Getform (free tiers)
- Google Forms embedded
- n8n webhook endpoint

## Remaining Tasks
1. [ ] Set up Docker Compose for local Jekyll development
2. [ ] Select and configure theme
3. [ ] Create initial page structure
4. [ ] Set up GitHub repository and Pages deployment
5. [ ] Configure Notion database for posts
6. [ ] Build n8n workflow (Notion → GitHub commit)
7. [ ] Set up contact form solution
8. [ ] Migrate essential content from WordPress
9. [ ] Point domain DNS to GitHub Pages

## Domain
Already separate from WordPress hosting - just needs DNS update when ready.

## Notes
- Export any archival content from WordPress before canceling (meeting minutes, historical posts)
- Officers database in `_data/officers.yml` keeps roster updates simple
- Notion guest invites = each officer uses own email, no shared credentials
