---
name: coding-agent
description: 'Delegate coding tasks to Codex, Claude Code, Pi. Use when: (1) building/creating apps, (2) reviewing PRs in temp dir, (3) refactoring, (4) iterative coding. NOT for: simple fixes (edit directly), reading code, ACP harness requests, or ~/clawd workspace. Requires pty:true.'
metadata: { "openclaw": { "emoji": "🧩", "requires": { "anyBins": ["claude", "codex", "opencode", "pi"] } } }
---

# Coding Agent

**Always use `pty:true`** - coding agents need a terminal.

## Quick Start

```bash
# One-shot in project (PTY!)
bash pty:true workdir:~/project command:"codex exec --full-auto 'Build a dark mode'"

# Background for long tasks
bash pty:true workdir:~/project background:true command:"codex --yolo 'Refactor auth module'"
```

## Key Patterns

- **Git repo required**: Codex needs `git init` for scratch work
- **workdir**: Focus agent in target directory
- **submit vs write**: `submit` = input + Enter, `write` = raw data

## PR Review (always in temp dir!)

```bash
REVIEW_DIR=$(mktemp -d) && git clone $REPO $REVIEW_DIR && gh pr checkout $NUM
bash pty:true workdir:$REVIEW_DIR command:"codex review --base origin/main"
```

## Process Actions

| Action | Purpose |
|--------|---------|
| `poll` | Check if running |
| `log` | Get output |
| `submit` | Send input + Enter |
| `kill` | Terminate |

## Rules

1. `pty:true` always
2. Never run in `~/.openclaw/` or `~/Projects/openclaw/`
3. Keep user updated on progress
4. `--full-auto` for building, vanilla for reviewing

## Notify on Complete

```bash
bash pty:true background:true command:"codex exec 'task... && openclaw system event --text \"Done\" --mode now'"
```
