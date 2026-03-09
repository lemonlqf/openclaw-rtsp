---
name: humanize-ai-text
description: "Detect and transform AI text to bypass detection. Use for: rewriting AI content to sound human."
metadata: { "openclaw": { "emoji": "🎭" } }
---

# Humanize AI

⚠️ Ethically risky - bypasses AI detectors

## Scripts

```bash
python scripts/detect.py text.txt    # Scan
python scripts/transform.py text.txt -o clean.txt  # Rewrite
python scripts/compare.py text.txt -o clean.txt   # Compare
```

## Detect

- Critical: citation bugs, knowledge cutoff
- High: AI vocabulary, puffery
- Medium: filler phrases
- Style: curly quotes, em dashes

## Options

`-a` aggressive, `-q` quiet, `-j` JSON
