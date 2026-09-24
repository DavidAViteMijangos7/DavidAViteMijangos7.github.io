# Guide — Run your portfolio locally & publish it on GitHub Pages

Stack: React + Vite + Tailwind. Vite is the "engine" that turns `src/` into a website. It has 2 modes:
- **dev server** = the workshop: live, auto-reloads on every save, only on your PC.
- **build** = the finished product: optimized static files in `dist/` that any web host can serve.

GitHub Pages only serves the finished product, so the flow is: edit → test on localhost → push → GitHub builds and publishes.

---

## Part 1 — Run it on localhost

### 1.1 One-time setup (Windows, PowerShell)
```powershell
node -v     # need v20 or newer
npm -v
git --version
```
Missing one? Install **Node.js LTS** from nodejs.org and **Git for Windows** from git-scm.com, then close and reopen the terminal.

### 1.2 Open the project
```powershell
cd "C:\Users\vited\OneDrive\Documents\Portfolio"
```
Tip: in VS Code, `File → Open Folder` → Portfolio, then use the built-in terminal (Ctrl + `).

### 1.3 Install dependencies
```powershell
npm install
```
Reads `package.json` and downloads React, Vite, etc. into `node_modules/`. Only needed the first time, or after `package.json` changes.

### 1.4 Start the dev server
```powershell
npm run dev
```
Output looks like `Local: http://localhost:5173/`. Ctrl+click it. Change any file in `src/`, save, and the browser updates instantly. Stop with **Ctrl + C**.

`localhost` = "this computer". `5173` = the port (the door Vite listens on). Nobody else can see it.

### 1.5 Test the real production build (do this before every push)
```powershell
npm run build     # creates dist/
npm run preview   # serves dist/ at http://localhost:4173
```
If `build` fails here, it'll fail on GitHub too. This is your pre-flight check.

### 1.6 Adding new photos later
1. Put the raw file in `Photos/<project>/` (your archive, not uploaded).
2. Put a web-ready copy in `public/images/<project>/` with a clean name: lowercase, hyphens, no spaces → `rover-arm-1.jpg`. Keep it under ~500 KB (max ~1600 px wide).
3. Add one line to `src/data/media.js`: `{ src: '/images/<project>/rover-arm-1.jpg', alt: 'What it shows' }`.
4. Check it on localhost.

⚠️ Windows ignores upper/lowercase in filenames, GitHub's servers don't. `Photo.JPG` ≠ `photo.jpg` online. Always lowercase.

---

## Part 2 — Publish on GitHub Pages

### 2.1 Pick the repo name (this decides your URL)
| Repo name | URL | Vite `base` |
|---|---|---|
| `DavidAViteMijangos7.github.io` ✅ recommended | `https://davidavitemijangos7.github.io/` | `'/'` |
| `portfolio` | `https://davidavitemijangos7.github.io/portfolio/` | `'/portfolio/'` |

Go with the `.github.io` one: cleanest URL, and the Claude Code prompt already sets `base: '/'`. You only get one of these per account.

### 2.2 Create the repo on GitHub
1. github.com → **New repository**.
2. Name: `DavidAViteMijangos7.github.io`. **Public** (Pages is free only for public repos).
3. Do NOT add README, .gitignore or license (Claude Code creates them locally, avoids conflicts).
4. Create.

### 2.3 Make sure `.gitignore` exists first
It must contain `node_modules/`, `dist/` and `Photos/`. Without it you'd upload ~100 MB of junk. (The Claude Code prompt creates it — verify before step 2.4.)

### 2.4 Push your code (first time)
```powershell
cd "C:\Users\vited\OneDrive\Documents\Portfolio"
git init
git branch -M main
git add .
git status                      # check: NO node_modules, dist or Photos listed
git commit -m "feat: initial portfolio site"
git remote add origin https://github.com/DavidAViteMijangos7/DavidAViteMijangos7.github.io.git
git push -u origin main
```
First push opens a browser window to log in to GitHub (Git Credential Manager). Approve it once.

If git says "please tell me who you are":
```powershell
git config --global user.name "David Vite"
git config --global user.email "david.a.vite.mijangos@gmail.com"
```

### 2.5 Turn on Pages
Repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
The workflow `.github/workflows/deploy.yml` (from the Claude Code prompt) does `npm ci → npm run build → deploy dist/` on every push to `main`.

Watch it in the **Actions** tab: yellow = running, green ✅ = live (~1–2 min). Your site: `https://davidavitemijangos7.github.io/`

### 2.6 Every update after that
```powershell
npm run build                    # pre-flight
git add .
git commit -m "feat(projects): add rover gallery"
git push
```
Push = redeploy. That's the whole loop.

---

## Part 3 — Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| Blank white page online, works locally | Wrong `base` in `vite.config.js` | `'/'` for `.github.io` repo, `'/<repo>/'` otherwise |
| `/projects` works by clicking, 404 on refresh | SPA routing on a static host | `dist/404.html` copy of `index.html` (in the prompt) or switch to `HashRouter` |
| Image works locally, broken online | Case/extension mismatch or file in `Photos/` | Lowercase names, path must exist in `public/` |
| Red ❌ in Actions | Build error | Click the run → read the failed step → run `npm run build` locally, fix, push |
| `git push` rejected | Remote has commits you don't | `git pull --rebase origin main` then push |
| Push very slow / huge | `node_modules` committed | Fix `.gitignore`, `git rm -r --cached node_modules`, commit |

## Part 4 — Finishing touches
- Put the live link in your GitHub profile README (`DavidAViteMijangos7/DavidAViteMijangos7`), LinkedIn "Featured" and your CV header.
- Repo → About (⚙️) → set Website to the live URL + add topics (`portfolio`, `react`, `vite`, `mechatronics`).
- OneDrive tip: syncing `node_modules` is slow. Right-click it → "Free up space", or move the project to `C:\dev\Portfolio` long-term.
