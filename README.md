# Unlock Bhuvi

> Some people write paragraphs. I build experiences.

---

## Before you deploy — do this first

Open `src/data/config.js` and set your real WhatsApp number:

```js
export const WHATSAPP_NUMBER = '919876543210'
```

International format, no `+`, no spaces.

---

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`

---

## Deploy to Vercel

**Option A — drag and drop (easiest)**
1. Run `npm run build` — this creates a `dist/` folder
2. Go to vercel.com → New Project → drag in the `dist/` folder
3. Done.

**Option B — GitHub + Vercel (recommended for updates)**
1. Push this folder to a GitHub repo
2. Go to vercel.com → New Project → Import your repo
3. Framework: **Vite** (auto-detected)
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy → done. Every future push auto-deploys.

---

## Easter eggs (for your reference)

| Action | Achievement |
|---|---|
| Click 🌸 flower (bottom-left) | Trusted Human |
| Click ☀️ sun (top-right) | Quiet Thank You |
| Double-click anywhere on the page | Hidden Folder Found |
| Type `coffee` anywhere | Coffee Friend |
| Type `wordle` anywhere | Puzzle Mode |
| Konami code: ↑↑↓↓←→←→BA | Developer Mode |
| Open Batman tab | Batman Offline |
| Open Side Quests tab | Side Quest Accepted |
| Open all 10 tabs | Fully Explored |
| Reach the final room | Emotional Firewall Disabled |

Final room unlocks after visiting **6 tabs**.

---

## File guide

| File | What it does |
|---|---|
| `src/data/config.js` | WhatsApp number — edit this |
| `src/data/tabs.js` | All 10 tab content — edit copy here |
| `src/components/FinalRoom.jsx` | The closing message |
| `src/components/BootSequence.jsx` | The terminal opening |
| `src/data/achievements.js` | XP values and achievement labels |
