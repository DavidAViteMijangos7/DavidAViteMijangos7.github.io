# Prompt for Claude Code — Portfolio update

Copy everything below the line into Claude Code, opened in this `Portfolio` folder.

---

You're working on my personal portfolio: React 19 + Vite 6 + Tailwind 4 + react-router-dom 7 + lucide-react. Pages live in `src/pages/` (Home, Projects, Experience, Skills). Goal: wire in my new photos/videos, fix broken or placeholder content, and make the repo deploy-ready for GitHub Pages as a user site at `https://davidavitemijangos7.github.io/`.

Rules:
- Conventional Commits, one commit per logical block (e.g. `feat(projects): add image galleries`, `fix(home): remove pasted text`, `ci: add GitHub Pages workflow`).
- Don't invent facts about me. Anything marked **ASK ME** → stop and ask before writing content.
- Keep the current design language (stone/violet palette, rounded-xl cards, fade-in-up animations).
- Run `npm run build` at the end and fix all errors. If the CI workflow would break, tell me — don't silently work around it.

## 1. Media is already prepared — just wire it
- All web-ready images/videos are in `public/images/`, `public/videos/`, `public/certificates/`.
- `src/data/media.js` is a manifest exporting `media` with keys: `goalkeeper`, `exoskeleton`, `materials` (includes `type: 'video'` items), `printing3d`, `active`, `hobbies` (empty), `culture` (empty), `certificates.cswaExam`.
- `Photos/` holds my raw originals — do NOT reference it from code; add it to `.gitignore`.

## 2. Reusable gallery + lightbox
- Create `src/components/MediaGallery.jsx`: thumbnail grid (`loading="lazy"`, `object-cover`, aspect-square or 4/3) that opens a lightbox with prev/next arrows, keyboard support (←, →, Esc), a caption from `alt`, and an `n / total` counter.
- Videos: render `<video controls muted playsInline preload="metadata">` in both the grid and the lightbox.
- Replace the 3 duplicated modal implementations (Projects, Experience, Skills) with this one component / a shared `Lightbox.jsx`.

## 3. Projects page
- Exoskeleton: replace the `/images/placeholder.jpg` evidence with `media.exoskeleton` (CAD → FEA → mass analysis order, as in the manifest).
- Robotic Goalkeeper: add `media.goalkeeper`. Remove the `https://youtube.com/placeholder` button (**ASK ME** if I have a real video link).
- Add a gallery section inside each card (always-visible thumbnail strip of the first 3 + "View all N"), not only inside the collapsed highlights. Raise the `max-h-96` expand limit so content isn't clipped.
- Fix typos: "proyects" → "projects", "satelite" → "satellite", "squematics" → "schematics", "conections" → "connections", "lead the structural" → "led the structural".

## 4. Experience page
- Materials Science Research entry: add `media.materials` gallery (2 photos + 3 videos).
- Beyond Engineering → Active Life: use `media.active` (bouldering photo). Mention bouldering in the text next to triathlon/gym/HYROX.
- Hobbies and Culture currently point to 6 non-existent images (`/images/hobby-*.jpg`, `/images/culture-*.jpg`). Drive all three grids from the manifest and hide the grid when the array is empty — no broken images.
- Remove the `max-h-[900px]` cap on the expandable body (or compute it) so it doesn't clip.

## 5. Skills page
- Certificate paths are wrong: `c-programming.jpg` → `c-programming.png`, `r-data.jpg` → `r-data.png`. (GitHub Pages is case- and extension-sensitive.)
- `matlab.jpg` doesn't exist → keep the cert text, drop `imagePath` until I add the file.
- CSWA: add a second credential image `media.certificates.cswaExam` (exam score 240/240).
- 3D Printing evidence → `media.printing3d`. SolidWorks "View FEA Stress Maps" → FEA images from `media.exoskeleton`.
- Fusion 360 / KiCad / MDF evidence still point to `/images/placeholder.jpg` → hide those buttons until real images exist.
- GitHub evidence links `https://github.com/placeholder` → **ASK ME** for the real repo URLs; hide any I don't have.

## 6. Home page bugs
- Aerospace card `detail` contains pasted junk ("RoversTarea 15 - Equipment Servicing: reglas, flujo y separación de responsabilidades" + a line break). Replace with: `'Satellites & rovers, ADCS, experimental rocketry'`.
- Bio typos: "diferent" → "different", "proyects" → "projects". Tighten the paragraph, same meaning.
- Inconsistencies — **ASK ME**: Home says Monterrey Campus but the swim team says Querétaro Campus; varsity dates are "Aug 2024 – Dec 2025" on Home vs "2023 — Present" on Experience; hardcoded "20-year-old" (suggest removing the age).
- "Download CV" points to `/cv_david_vite.pdf` which doesn't exist → hide the button if I don't provide the PDF; **ASK ME** first.
- Add a GitHub contact link (`https://github.com/DavidAViteMijangos7`) next to Email and LinkedIn.

## 7. Deploy-ready for GitHub Pages
- `index.html`: `lang="en"` (content is English), add Open Graph tags (title, description, `og:image` = one exoskeleton render), replace the Vite favicon with a simple "DV" SVG favicon in `public/`.
- SPA routing: BrowserRouter 404s on refresh at `/projects` on GitHub Pages. Add a build step that copies `dist/index.html` → `dist/404.html` (e.g. `"build": "vite build && node -e \"require('fs').copyFileSync('dist/index.html','dist/404.html')\""` — ESM project, so use a `.cjs` script or `cp` if cleaner).
- `vite.config.js`: `base: '/'` (user site). Add a comment explaining it must become `'/<repo-name>/'` if the repo is renamed.
- Add `.github/workflows/deploy.yml`: on push to `main` + manual dispatch → `actions/checkout`, `actions/setup-node` (Node 20, npm cache), `npm ci`, `npm run build`, `actions/upload-pages-artifact` (path `dist`), `actions/deploy-pages`. Permissions: `pages: write`, `id-token: write`, `contents: read`.
- `.gitignore`: `node_modules/`, `dist/`, `Photos/`, `.DS_Store`, `*.log`, `.env*`.
- Delete the stale `dist/` folder and `dist/read.me` from the repo.
- `LICENSE`: MIT, © 2026 David Andre Vite Mijangos.
- `README.md` with the 8-section standard: pitch → demo (live link + screenshot) → problem → install → usage (`npm run dev/build/preview`) → architecture (folder tree + where to add a new project/photo) → results → license.
- Note in the README that this is a web project, so it doesn't use my template-python/template-cpp starters.

## 8. Final check
- `npm run build` passes, then `npm run preview` and list which routes/images you verified.
- Grep `src/` for `placeholder` and any `/images/` or `/certificates/` path that has no file in `public/` — report every one left.
- Give me a short summary (under 300 words) of what changed + the list of **ASK ME** items still open.
