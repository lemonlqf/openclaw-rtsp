---
name: weather
description: "Get weather and forecasts via wttr.in. Use when: user asks about weather, temperature, or forecasts. NOT for: historical data, severe alerts, or detailed meteorological analysis."
metadata: { "openclaw": { "emoji": "🌤️" } }
---

# Weather

## Commands

```bash
# Current (one-liner)
curl "wttr.in/London?format=3"

# Detailed
curl "wttr.in/London?0"

# 3-day forecast
curl "wttr.in/London"

# Week forecast
curl "wttr.in/London?format=v2"
```

## Format Codes

`%l` location, `%c` condition, `%t` temp, `%f` feels like, `%w` wind, `%h` humidity

## Quick Examples

```bash
# Weather summary
curl -s "wttr.in/London?format=%l:+%c+%t+(feels+%f)"

# Rain check
curl -s "wttr.in/London?format=%l:+%c+%p"

# JSON
curl "wttr.in/London?format=j1"
```

## Notes

- No API key needed
- Rate limited - don't spam
- Supports airport codes: `curl wttr.in/ORD`
