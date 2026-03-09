---
name: youtube
description: "YouTube Data API v3 via Maton gateway. Use for: searching videos, managing playlists, channel data, comments, subscriptions. Requires MATON_API_KEY env."
metadata: { "openclaw": { "emoji": "▶️", "requires": { "env": ["MATON_API_KEY"] } } }
---

# YouTube API

## Setup

```bash
export MATON_API_KEY="your-key"  # Get from maton.ai/settings
```

**Base URL:** `https://gateway.maton.ai/youtube/youtube/v3/`

## Common Endpoints

| Endpoint | Use |
|----------|-----|
| `/search?q=...&type=video` | Search videos |
| `/videos?id={id}&part=snippet,statistics` | Video details |
| `/channels?mine=true` | My channel |
| `/playlists?mine=true` | My playlists |
| `/subscriptions?mine=true` | My subscriptions |
| `/commentThreads?videoId={id}` | Comments |

## Examples

```python
import os, requests
headers = {'Authorization': f'Bearer {os.environ["MATON_API_KEY"]}'}

# Search
requests.get('https://gateway.maton.ai/youtube/youtube/v3/search',
    params={'part': 'snippet', 'q': 'tutorial', 'type': 'video'},
    headers=headers).json()

# My playlists
requests.get('https://gateway.maton.ai/youtube/youtube/v3/playlists',
    params={'part': 'snippet', 'mine': True}, headers=headers).json()
```

## IDs

- Video: 11 chars (e.g., `dQw4w9WgXcQ`)
- Channel: starts with `UC`
- Playlist: starts with `PL` or `UU`

## Errors

- 400: Missing connection / invalid request
- 401: Invalid API key
- 403: Quota exceeded
- 429: Rate limited (10/sec)

## Resources

- [YouTube Data API](https://developers.google.com/youtube/v3)
- [Quota Calculator](https://developers.google.com/youtube/v3/determine_quota_cost)
