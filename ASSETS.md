# Asset Manifest — Smile Galleria

All assets are first-party, downloaded from `https://tysonssmilegalleria.com/` and stored locally in
`assets/` (nothing is hotlinked). Photographic PNGs from the source site were re-encoded to optimized JPEG;
the logo is kept as PNG (transparency). No images were upscaled; the source dimensions below are the
largest versions available on the practice's site.

| Local file | Source URL (base: tysonssmilegalleria.com/images/) | Dimensions | Used in |
|---|---|---|---|
| `smile-galleria-logo.png` | `smile galleria logo.png` | 184×149 | Header, footer |
| `dr-wilson-kim-portrait.jpg` | `dr-kim-smile-galleria-portrait.jpg` | 188×179 | Meet Dr. Kim (shown small, not upscaled) |
| `smile-hero.jpg` | `woman-bright-teeth-smile.png` | 600×400 | Hero |
| `smile-cosmetic.jpg` | `man-smile-beard-glasses.png` | 600×400 | Cosmetic Dentistry |
| `smile-family.jpg` | `little-girl-teeth.png` | 600×400 | Family experience (inset) |
| `smile-ortho.jpg` | `brace-girl-funny-face2.png` | 600×400 | Orthodontics & Invisalign |
| `smile-welcome.jpg` | `african-american-lady-smile.png` | 600×400 | New Patients |
| `waiting-room.jpg` | `dentist-waiting-room.jpg` | 850×550 | Welcome section |
| `waiting-room-2.jpg` | `dentist-waiting-room-2.jpg` | 850×550 | Office gallery |
| `reception.jpg` | `reception-smile-galleria-dentist_2.jpg` | 850×550 | Office gallery (anchor) |
| `office-interior-sign.jpg` | `interior-sign-retouched.jpg` | 850×550 | Office gallery, OG/Twitter image |
| `exam-room.jpg` | `exam-room-dentist.jpg` | 850×550 | Family experience |
| `panoramic-xray.jpg` | `x-ray-smile-galleria_2.jpg` | 850×550 | Office gallery |

## Notes
- The "smile" photos (hero, cosmetic, family, ortho, welcome) are marketing images published on the
  practice's own website. They are presented with neutral alt text and are **not** captioned as identified
  patients or as before/after results.
- `-fr` "full-resolution" variants on the source site are actually 263×170 thumbnails — the base filenames
  above are the largest available.
- No before-and-after clinical photos were used.

## Assets that could not be retrieved at higher resolution
- **Dr. Kim portrait** — only 188×179 exists on the source site. Displayed small/framed to avoid visible
  upscaling. A higher-res original should replace `assets/dr-wilson-kim-portrait.jpg` if available.
