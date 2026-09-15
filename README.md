# Smile Galleria — Homepage Redesign Concept

A modern, homepage-only redesign concept for **Smile Galleria — Family & Cosmetic Dentistry at Tysons Corner**
(Dr. Wilson J. Kim, DDS · McLean, VA). Static site — plain HTML/CSS/JS, no build step. Deploys to Vercel as-is.

> This is a sales-presentation concept, not a deployment to the practice's live domain.

## Files
```
index.html      # Full responsive homepage
styles.css      # Design system (teal + gold, Fraunces/Inter)
script.js       # Nav drawer (focus trap/Esc/scroll-lock), demo form, mobile bar, scroll reveal
assets/*        # First-party photography & logo (see manifest below)
vercel.json     # Static hosting config
```

## Run locally
No build needed. From the repo root:
```
python3 -m http.server 8000
```
Then open http://localhost:8000. (Or just open `index.html` in a browser.)

## Deploy to Vercel
1. Import this repo at https://vercel.com/new
2. Framework preset: **Other** (no build command; output = repo root)
3. Deploy.

## Design direction
- **Gallery-inspired, editorial** feel that fits the "Smile Galleria" name — refined image framing,
  generous whitespace, serif display type — without becoming a literal art-gallery theme.
- Palette: soft teal (`--teal-700 #0e5563`) + warm gold accent (`--gold #c79a52`) on near-white.
- Type: Fraunces (serif display), Inter (body). Responsive `clamp()` sizing throughout.
- Voice: calm, trustworthy, comfort-first. Headline: "Confident smiles start with comfortable care."

## Content integrity
All copy uses only facts verifiable from tysonssmilegalleria.com:
- **Dentist:** Wilson J. Kim, DDS — Columbia University DDS (2000), B.A. Colgate (1993),
  U.S. Air Force dentist, practicing since 2000, private practice in Virginia since 2006,
  English & Korean, father of three. *(No rank, awards, board certifications, or memberships are claimed.)*
- **Address:** 8251 Greensboro Drive, Suite 120, McLean, VA 22102
- **Phone:** (703) 992-7272 · **Fax:** (703) 992-7284 · **Email:** DrKim@TysonsSmileGalleria.com
- **Availability:** "Saturday & evening appointments available. Call for current availability."
  *(No weekly schedule is invented — the live site does not publish one.)*
- **Insurance:** "Most insurance plans accepted" (no insurers named).
- **Reviews:** real, attributed patient quotes (Carrie & family, Rhonda F., Kimberly B., Pete L., Stuart L.).
  *(No star ratings, review counts, dates, or platform badges are fabricated.)*
- **Schema:** Dentist/LocalBusiness JSON-LD with only verified fields — no `openingHours`, no ratings.

## Photos
Images are stored locally (nothing is hotlinked). The current set is a batch of enhanced,
high-resolution versions derived from the practice's first-party imagery on tysonssmilegalleria.com.
See the **asset manifest** in `ASSETS.md` for what each is derived from, dimensions, and where it's used.
Confirm with the client that these enhanced images are approved before public launch.

## Concept badge
`script.js` has a `SHOW_CONCEPT_BADGE` flag (default `true`) that shows the floating
"Homepage Redesign Concept" badge and the footer disclaimer. Set it to `false` before production.

## To finish before launch (client confirmation)
- **Appointment form** — `#bookForm` is a labeled **demo**: it validates and shows a demo message but
  sends nothing. Connect it to a secure booking provider / CRM to receive submissions.
- **Office hours** — confirm current weekly hours (intentionally omitted here).
- **Social links** — none are included; add verified profile URLs if desired.
- **Enhanced photography** — the high-res image set is enhanced/upscaled; confirm approval for use.
