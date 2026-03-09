---
name: api-gateway
description: "Access 100+ APIs via Maton (Google, Slack, Notion, etc.). Use for: calling third-party APIs with managed OAuth."
metadata: { "openclaw": { "emoji": "🌉", "requires": { "env": ["MATON_API_KEY"] } } }
---

# API Gateway

```bash
export MATON_API_KEY="key"  # maton.ai/settings
```

**Base:** `https://gateway.maton.ai/{app}/{path}`

## Quick

| API | Path |
|-----|------|
| Slack | `/slack/api/chat.postMessage` |
| Notion | `/notion/v1/databases/{id}` |
| Sheets | `/google-sheets/v4/spreadsheets/{id}` |
| Gmail | `/google-mail/gmail/v1/users/me/messages` |
| HubSpot | `/hubspot/crm/v3/objects/contacts` |

## Python

```python
import os, requests
h = {'Authorization': f'Bearer {os.environ["MATON_API_KEY"]}'}
requests.post('https://gateway.maton.ai/slack/api/chat.postMessage',
    headers=h, json={'channel': 'C01234', 'text': 'Hi'})
```

## Errors

400: no connection, 401: bad key, 429: rate limited
