# BubbleAlert UI (Frontend only)

A clean React + Tailwind UI for your BubbleAlert developer assistant.
It assumes a backend that provides these endpoints (optional):

- `POST /api/index` { corpus, index, chunk?, overlap? }
- `POST /api/ask` { index, q, k?, model?, show? }
- `GET /api/tasks/list`
- `POST /api/tasks/add|toggle|delete`
- `POST /api/upload` (multipart: file, target)
- `POST /api/transcribe` (multipart: audio)

If you don't have a backend yet, the UI will still run; actions will fail with a helpful message.

## Quick start

```bash
npm i
cp .env.example .env         # edit VITE_API_BASE if needed
npm run dev
```

Open http://localhost:5173

## Build
```bash
npm run build
npm run preview
```

## Notes
- Keep your API key server-side. The UI only talks to the backend using `VITE_API_BASE`.
- Voice recording uses the browser MediaRecorder (WebM). Make sure your backend `/api/transcribe` accepts `audio/webm`.
