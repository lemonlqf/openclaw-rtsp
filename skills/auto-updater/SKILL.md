---
name: auto-updater
description: "Auto-update OpenClaw and skills daily via cron. Use for: keeping system up-to-date automatically."
metadata: { "openclaw": { "emoji": "🔄" } }
---

# Auto-Updater

## Setup

```bash
clawdbot cron add --name "Daily Auto-Update" --cron "0 4 * *" \
  --session isolated --wake now --deliver --message "Update all"
```

## Commands

```bash
clawdhub update --all --dry-run  # Check
clawdhub list                     # Versions
clawdbot --version               # OpenClaw version
```

## Disable

```bash
clawdbot cron remove "Daily Auto-Update"
```
