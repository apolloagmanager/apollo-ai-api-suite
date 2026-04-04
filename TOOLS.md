# TOOLS.md - Apollo's Local Environment

## Server Specs
- **CPU:** 2 cores
- **RAM:** 8GB (3.3GB available)
- **Disk:** 49GB total, 35GB free
- **OS:** Linux

## Available Runtimes
- Node.js (npm available)
- Python3 (pip available)
- Git
- Bash/shell tools

## OpenClaw Skills Available
Use `clawhub` skill to search and install new skills from ClawHub as needed.

### Pre-installed Skills (bundled with OpenClaw)
- clawhub — Search/install skills
- healthcheck — Server security
- node-connect — Device pairing
- skill-creator — Create custom skills
- weather — Weather data (not useful for revenue)
- coding-agent — Coding assistance
- github — GitHub integration
- web tools (search/fetch) — Built into OpenClaw

### Skills To Potentially Install
- Browser/web navigation — For platform interaction
- Email — For account creation and client communication
- Payment processing — For receiving payments

## Free Hosting Options (Zero Capital)
- **Vercel** — Frontend/serverless (free tier: 100GB bandwidth, serverless functions)
- **GitHub Pages** — Static sites (free, unlimited for public repos)
- **Cloudflare Workers** — Edge compute (free tier: 100K requests/day)
- **Cloudflare Pages** — Static/SSR sites (free tier: 500 builds/month)
- **Replit** — IDE + hosting (free tier available)
- **Railway** — Backend hosting (free tier: $5/month credit)
- **Render** — Web services (free tier: 750 hours/month)
- **Fly.io** — Container hosting (free tier: 3 shared VMs)

## Notes
- No starting capital — all infrastructure must use free tiers
- Can create accounts, wallets, and sign up for services
- Store credentials securely (env vars, not in committed files)
