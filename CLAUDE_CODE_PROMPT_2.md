Wire the new photos into the portfolio. They're already resized in `public/images/` and listed in `src/data/media.js` — don't touch `Photos/` (raw originals, gitignored).

New manifest keys:
- `media.electrum` (3) → Experience › Escudería Electrum entry
- `media.rocketry` (2) → Experience › Experimental Rocketry Courses entry
- `media.swimming` (2) → Experience › Varsity Swimming Team entry
- `media.active` now has triathlon bike + run + bouldering → Beyond Engineering › Active Life (already wired, just confirm all 3 show)

Tasks:
1. Add the gallery to those 3 Experience entries using the existing `MediaGallery` component, same way the Materials Research entry does it (add a `media` field to each experience object — don't hardcode paths in JSX).
2. Use `media.electrum[0]` or `[2]` as a cover image on the Electrum card if the card layout supports one; otherwise skip.
3. Make sure the Beyond Engineering expanded panel doesn't clip with 3 photos in Active Life.
4. `npm run build`, then `npm run preview` and confirm every new image loads (no 404s in the network tab).
5. Commit: `feat(experience): add electrum, rocketry, swimming and triathlon photos`. Don't push — I'll review first.
6. Summary under 150 words.
