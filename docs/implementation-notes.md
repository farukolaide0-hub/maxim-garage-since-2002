# Implementation Notes

## Commands

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/ (plus per-route HTML, sitemap, robots)
npm run preview   # serve dist/ locally
npm run lint      # oxlint
```

## Stack

React 19 · Vite 8 · React Router 7 · Lucide icons · plain CSS. No UI framework. Runtime dependencies: `react`, `react-dom`, `react-router-dom`, `lucide-react`.
Fonts: **Barlow Condensed** (headings, 600–800) and **Inter** (body), from Google Fonts.

## Colour system (Black & White Edition)

- Palette tokens (top of `src/styles/global.css`): `--color-black` #050505, `--color-dark` #0D0D0D, `--color-charcoal` #171717, `--color-surface` #202020, `--color-border` #353535, `--color-gray` #A8A8A8, `--color-light-gray` #D4D4D4, `--color-white` #FFFFFF, `--color-off-white` #F5F5F5.
- Components use **role** variables (`--accent`, `--accent-ink`, `--text`, `--surface`, `--line`, …). On dark sections, accent = white and accent text = black. Inside `.section--light`, white form cards and the highlighted price card, the roles are redefined locally, so the same components invert without extra CSS.
- Light sections: Home (About, Locations), Services (Also available), service-page body, About (How we work, Locations), Reviews (Social), Specials (offers), Careers (vacancies), Contact (locations), Event (links) and Privacy.
- Active and selected states use white underlines or white fills, never colour.
- Photographs and Google Maps embeds keep their natural colour.
- **Verified automatically:** a static scan finds no non-grey hex or rgb value in `src/`, `index.html` or `vite.config.js`. A runtime scan of 15 routes checks the computed colour, background, border, outline, fill, stroke and box shadow of every element, at rest and while hovering every link and button, and finds only greys. A contrast scan confirms every button and badge stands out from its background, with text contrast of at least 4.5:1.

## Routes

| Route | Page |
|---|---|
| `/` | Home: hero, services, electronics specialism, about, reviews, event feature, gallery, locations |
| `/services` | Service directory and "also available" list |
| `/services/:slug` | 9 detail pages: `vehicle-diagnostics`, `electrical-repair`, `ecu-reprogramming`, `oil-change`, `brake-repair`, `engine-repair`, `mechanical-repair`, `pre-purchase-inspection`, `alberta-insurance-inspection` |
| `/about` | Story, approach, team, AMVIC licence, locations |
| `/reviews` | Official Google listings per location, a write-a-review call to action, socials (review cards appear once reviews are added) |
| `/specials` | Pre-purchase inspection packages (the only published offer) |
| `/gallery` | Filterable gallery with an accessible lightbox |
| `/contact` | Locations with maps, hours, email, socials, message form |
| `/appointment` | Appointment request form (supports `?service=slug`) |
| `/get-a-quote` | Quote request form (supports `?service=slug`) |
| `/careers` | Three vacancies (expandable) and an application or enquiry form |
| `/events/european-classic-car-show-2026` | Past-event recap of ECCM 2026 |
| `/privacy` | Privacy policy matching the new site |
| `*` | Branded 404 (`noindex`) |

## Code structure

```
src/
  config/business.js        ← ALL business content, colours, images, SEO
  components/
    layout/   Navbar, Footer, PageLayout, CtaBand
    home/     Hero, ServicesPreview, SpecialismFeature, AboutPreview, ReviewPreview, EventFeature, GalleryPreview, LocationsPreview
    services/ ServicesGrid, ServiceCard
    reviews/  ReviewCard, ReviewListings
    gallery/  GalleryGrid, Lightbox
    contact/  LocationCard, MapEmbed, HoursList
    forms/    EnquiryForm (shared), fieldSets.js, validation.js
    ui/       Button (+TextLink), SectionHeading, Breadcrumbs, PageHeader, Media, Icon
  pages/      one file per route
  hooks/      usePageMeta.js (title, description, canonical, OG on navigation)
  styles/     global.css (tokens, base, UI, header, footer) · pages.css (sections and pages)
```

## Forms: how they behave

All four forms (appointment, quote, contact, careers) use one shared `EnquiryForm`.

- **Validation in the browser:** required fields; email format; phone with at least 10 digits; **VIN of exactly 17 characters, letters and numbers only, no I, O or Q** (typed letters are upper-cased automatically, with a live 17-character counter); preferred date must be today or later and **not a Sunday** (the shop is closed); details at least 10 characters. Errors are linked to their fields (`aria-describedby`), and the first invalid field receives focus.
- **Delivery (no backend yet):** a valid form opens the visitor's email app with the request filled in, addressed to `garagemaxims@gmail.com`. The page says plainly that **nothing has been sent yet** until the visitor presses send. No booking or delivery is ever claimed.
- **Sending directly:** set `forms.endpoint` in the config to a form service such as Formspree or Basin. The form then POSTs JSON and shows success or error based on the real response. Never put secret keys in the config, because it ships to the browser.
- **Careers:** the old site accepted file uploads. The new form opens the visitor's email app so they can attach their résumé.

## Booking

"Book an Appointment" goes to the site's own `/appointment` request form. The existing Wix booking form (`maxgarage.ca/appointment`) is linked as an alternative.
> ⚠️ If this site replaces the Wix site on the same domain, that Wix URL will stop working. Before launch, remove `contact.externalBookingUrl` or point it at a real booking tool.

## SEO

- At build time, `vite.config.js` writes **a separate HTML file for every route**, each with its own title, description, canonical URL, Open Graph tags and JSON-LD. Crawlers see correct metadata without running JavaScript, and deep links work on any static host.
- `sitemap.xml` (21 URLs), `robots.txt` and a `404.html` (noindex) are generated from the config.
- JSON-LD: an `Organization` with two `AutoRepair` departments (address, phone, map link, hours, logo, social links), plus an `Event` on the event page. **No ratings or reviews are included.**
- `usePageMeta` keeps the same tags in sync during client-side navigation.
- `seo.siteUrl` is `https://www.maxgarage.ca`; change it if you deploy elsewhere.

## Accessibility

Skip link · visible white focus rings (black on light surfaces) · `aria-current` on the active nav link · the mobile menu is `inert` when closed, Escape closes it and returns focus to the button, focus moves into it when it opens, and page scroll is locked while it's open · the gallery lightbox is a modal dialog with a focus trap, arrow keys and Escape, and returns focus afterwards · gallery filters use `aria-pressed` · careers vacancies use native `<details>` · links that open a new tab say so to screen readers · on navigation, focus moves to `<main>` and the page scrolls to the top · `prefers-reduced-motion` turns off smooth scroll, transitions and hover zoom · one `<h1>` per page.

## Testing (2026-10-12)

Headless Chrome (puppeteer-core, run from a temporary folder outside the project):

- **All 16 test routes** (every page, sample service pages and a 404) at **375, 768, 1280 and 1920 px**, on both the dev server and the production build: no horizontal overflow, no broken images, no console errors, no `href="#"` links, exactly one `<h1>`, correct page titles.
- **29 interaction checks passed**:
  - every internal link resolves to a real route
  - all external links use `target="_blank"` with `rel="noopener noreferrer"`
  - touch targets are at least 32px on all 21 routes
  - `?service=` prefills the form, and a service page's quote button prefills the quote form
  - required-field errors appear and the first invalid field receives focus
  - VIN length, letter and upper-case rules work
  - Sunday dates are rejected
  - a valid submit shows the honest "nothing sent yet" notice, with no false confirmation
  - gallery filters and `aria-pressed` work
  - the lightbox opens, traps focus, responds to arrow keys and Escape, and restores focus
  - careers accordion, unknown service slug → 404 with noindex, skip link first in tab order, `aria-current`, canonical updates per route, reduced motion, no runtime errors
- **8 mobile-menu checks passed:** menu opens, focus moves inside, scroll is locked, Escape closes it, focus returns, the closed menu is inert, and same-route links close it.
- `npm run lint`: clean. `npm run build`: passes.

## Open items for the owner

1. **Reviews:** paste verified Google reviews word for word into `reviews.items` to show the review cards.
2. **Colour:** strictly monochrome, as requested. If a brand accent is wanted later, change the role values in `brand.colors` and in `.section--light`.
3. **Phone 587-969-0107:** appears on BBB and in the old legal pages but not on the official contact pages. Confirm before adding it.
4. **Image rights:** confirm reuse of the logo and the two shop photos. More genuine shop photos (including from Instagram) would strengthen the gallery. Add them to `images` with `genuine: true`.
5. **Privacy policy:** rewritten to match this site. Have it reviewed, and update it if analytics or a form service are added. The old **Terms of Use** belonged to another business and were not carried over.
6. **Form delivery:** connect `forms.endpoint` for direct submissions.
7. **Video:** add an official embed once a channel or post is chosen.
8. **Specials:** inspection prices are copied from the current site with no end date. Update the config if they change.
9. **Event page:** past-event recap. When the club announces next year's date, update `event` in the config (`status`, dates, `homeFeature`).
