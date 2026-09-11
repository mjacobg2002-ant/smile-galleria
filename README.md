# Smile Galleria — Website

A modern rebuild of the homepage for **Smile Galleria — Family & Cosmetic Dentistry at Tysons Corner**
(Dr. Wilson J. Kim, DDS · McLean, VA). Static site — plain HTML/CSS/JS, no build step. Deploys to Vercel as-is.

## Files
```
index.html      # Full responsive homepage
styles.css      # Design system (teal + gold, Fraunces/Inter)
script.js       # Nav, appointment form, scroll reveal
assets/*.jpg    # Photography (professional stock — see note)
vercel.json     # Static hosting config
```

## Deploy to Vercel
1. Import this repo at https://vercel.com/new
2. Framework preset: **Other** (no build command; output = repo root)
3. Deploy.

## Content — sourced from the practice's own site & listings
All practice details were pulled from tysonssmilegalleria.com and public listings, and are used verbatim
where possible:
- **Practice:** Smile Galleria — Family & Cosmetic Dentistry at Tysons Corner
- **Dentist:** Wilson J. Kim, DDS (Columbia University 2000; B.A. Colgate 1993; U.S. Air Force Captain; practicing since 2000; VA since 2006; English & Korean; father of three)
- **Address:** 8251 Greensboro Drive, Suite 120, McLean, VA 22102
- **Phone:** (703) 992-7272 · **Email:** DrKim@TysonsSmileGalleria.com
- **Hours:** Mon–Fri 9:00 am – 5:00 pm; Saturday & evening appointments available
- **Services:** preventative, general/restorative, cosmetic (veneers, whitening), orthodontics (Invisalign/braces), pediatric, emergencies
- **Reviews:** real, attributed patient quotes (Kimberly B., Rhonda F., Carrie & family, Pete L., Stuart L.)
- **Social:** Facebook (/smilegalleria), Yelp (/biz/smile-galleria-mclean)

## Photos — the practice's own images
The site uses **Smile Galleria's real photography and logo**, sourced from tysonssmilegalleria.com:
Dr. Kim's portrait, the real logo, the reception/waiting area, treatment room, digital X-ray, the
interior sign, and the practice's smile imagery. A few originals are low-resolution (they came from the
old site) — if you have higher-res versions, drop them in over the same filenames in `assets/` and no
code changes are needed.

## To finish before launch
- **Appointment form** — `#bookForm` in `script.js` validates and confirms only; connect it to your
  provider (Formspree / practice CRM / email) to receive submissions.
- **Verify hours** — third-party listings show Mon–Fri 9–5; the site also advertises Saturday & evening
  appointments. Confirm current hours.
- **Higher-res photos** — optional, for the Dr. Kim portrait and office shots.

## Brand
- Palette: soft teal (`--teal-700 #0e5563`) + warm gold accent (`--gold #c79a52`) on near-white.
- Type: Fraunces (serif display), Inter (body).
- Voice: calm, trustworthy, comfort-first — "What does your smile say about you?"
