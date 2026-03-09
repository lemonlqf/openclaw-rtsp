---
name: openai-whisper
description: "Local speech-to-text with Whisper CLI. Use for: transcribing audio/video to text. No API key."
metadata: { "openclaw": { "emoji": "🎙️", "requires": { "bins": ["whisper"] } } }
---

# Whisper

```bash
# Install
brew install openai-whisper

# Usage
whisper audio.mp3 --model medium --output_format txt
whisper audio.m4a --task translate --output_format srt
```

- Models: `~/.cache/whisper`, default `turbo`
- Smaller = faster, larger = accurate
