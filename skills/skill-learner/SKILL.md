---
name: skill-learner
description: "Learn/install skills from ClawHub. Use when: user asks to learn a skill from URL, installing from clawhub.ai, or browsing available skills."
---

# Skill Learner

## Workflow

### 1. Fetch Skill

- Try `web_fetch` first
- If fails, use browser: `profile:openclaw`
- Extract download URL: `https://wry-manatee-359.convex.site/api/v1/download?slug=<skill>`

### 2. Download & Extract

```powershell
Invoke-WebRequest -Uri "<url>" -OutFile "D:\lqf\projects\opencloak\skills\<name>.zip"
Expand-Archive -Path "<name>.zip" -DestinationPath "D:\lqf\projects\openclaw\skills\<name>" -Force
```

### 3. Verify

```powershell
Get-ChildItem "D:\lqf\projects\openclaw\skills\<name>"
```

## Skills Directory

`D:\lqf\projects\openclaw\skills\`

## Troubleshooting

- `web_fetch` returns title only → use browser with `profile:openclaw`
- Browser fails → check `openclaw gateway status`
