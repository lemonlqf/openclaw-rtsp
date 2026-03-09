---
name: github
description: "Interact with GitHub via `gh` CLI. Use for: issues, PRs, CI runs, and API queries. Specify --repo owner/repo when not in git dir."
---

# GitHub (gh CLI)

## PRs

```bash
gh pr checks 55 --repo owner/repo
gh run list --repo owner/repo --limit 10
gh run view <id> --repo owner/repo
gh run view <id> --repo owner/repo --log-failed
```

## API

```bash
gh api repos/owner/repo/pulls/55 --jq '.title, .state'
```

## JSON Output

```bash
gh issue list --repo owner/repo --json number,title --jq '.[] | "\(.number): \(.title)"'
```
