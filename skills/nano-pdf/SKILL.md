---
name: nano-pdf
description: "Edit PDFs with natural-language instructions using nano-pdf CLI. Use for: editing PDF text, fixing typos, changing titles on specific pages."
metadata: { "openclaw": { "emoji": "📄", "requires": { "bins": ["nano-pdf"] }, "install": [{ "id": "uv", "kind": "uv", "package": "nano-pdf" }] } }
---

# nano-pdf

Edit PDF pages with natural language.

## Install

```bash
uv tool install nano-pdf
```

## Usage

```bash
nano-pdf edit <file.pdf> <page> "<instruction>"
```

**Example:**
```bash
nano-pdf edit deck.pdf 1 "Change title to 'Q3 Results'"
```

## Notes

- Page numbers may be 0-based or 1-based — retry if off by one
- Always sanity-check output before sending
