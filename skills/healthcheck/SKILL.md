---
name: healthcheck
description: "Host security hardening for OpenClaw. Use when: security audits, firewall/SSH hardening, risk posture review, exposure assessment, cron scheduling, or version checks on machines running OpenClaw (laptop/workstation/Pi/VPS)."
---

# Host Hardening

## Core Rules

- Require explicit approval before changes
- Never modify remote access without confirming connection method
- Prefer reversible changes with rollback plan
- Number choices for easy user response (reply with digit)

## Workflow

### 1. Establish Context

Ask once for permission to run read-only checks. Infer from environment first.

Determine: OS, privilege level, access path, network exposure, backup status.

### 2. Run Checks (read-only)

```bash
# OS info
uname -a  # Linux
sw_vers   # macOS

# Listening ports
ss -ltnup  # Linux
lsof -nP -iTCP -sTCP:LISTEN  # macOS

# Firewall
ufw status  # Linux
pfctl -s info  # macOS

# OpenClaw
openclaw security audit --deep
openclaw update status
```

### 3. Risk Profiles (choose one)

1. **Home/Workstation Balanced** - firewall on, remote access LAN/tailnet only
2. **VPS Hardened** - deny-by-default, minimal ports, key-only SSH
3. **Developer Convenience** - more local services, explicit warnings
4. **Custom** - user-defined constraints

### 4. Produce Plan

Show before changes: target profile, gaps, step-by-step commands, rollback plan.

### 5. Execute (with confirmations)

For each step: show command, explain impact, confirm access preserved.

### 6. Verify

Re-check firewall, ports, remote access, run `openclaw security audit` again.

## Required Confirmations

- Firewall/port changes
- SSH/RDP config
- Package installs
- Service enable/disable
- Scheduling tasks

## Cron Scheduling

After hardening pass, offer:

> "Schedule periodic audits via `openclaw cron add`?"

If yes, ask for cadence and output location.

## Commands

```bash
openclaw security audit [--deep] [--fix] [--json]
openclaw update status
openclaw cron add --name <name> ...
```
