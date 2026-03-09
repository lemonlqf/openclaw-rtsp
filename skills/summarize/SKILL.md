---
name: summarize
description: "Summarize URLs, files, PDFs, audio, YouTube. Use for: summarizing articles, documents, videos."
metadata: { "openclaw": { "emoji": "📝", "requires": { "bins": ["summarize"] } } }
---

# Summarize

```bash
# Install
brew install steipete/tap/summarize

# Usage
summarize "https://example.com"
summarize "/path/to/file.pdf"
summarize "https://youtu.be/..."
```

## Keys

`OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `GEMINI_API_KEY`

## Flags

`--length short|medium|long|xl`, `--extract-only`, `--json`, `--youtube auto`
