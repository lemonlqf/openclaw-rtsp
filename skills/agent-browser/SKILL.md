---
name: agent-browser
description: "Headless browser automation. Use for: web scraping, form filling, screenshots, testing."
metadata: { "openclaw": { "emoji": "🌐", "requires": { "bins": ["node", "npm"] } } }
---

# Agent Browser

```bash
# Install
npm i -g agent-browser && agent-browser install
```

## Workflow

```bash
open <url>     # Navigate
snapshot -i    # Get elements (@e1, @e2...)
click @e1      # Click
fill @e2 "txt" # Fill
close         # Close
```

## Common

`wait @e1`, `screenshot`, `press Enter`, `upload`, `network route`

## Options

`--session`, `--headed`, `--json`, `--timeout`
