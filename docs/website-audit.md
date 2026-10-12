# Website Audit: maxgarage.ca

**Audited:** 2026-10-12 · **Method:** raw HTML downloaded with `curl` and the text extracted; links resolved with `curl` and headless Chrome. The current site runs on **Wix**.

Verified facts and sources are in [business-data.md](business-data.md). Media is in [media-inventory.md](media-inventory.md).

## Pages inspected

| Page | Result |
|---|---|
| `/` Home | Inspected: hero, quote form, car-show promo, service tiles, footer |
| `/auto-repair-services-calgary` | Content is loaded by JavaScript. Service names were recovered from the page JSON |
| `/regular-maintenance`, `/vehicle-inspection`, `/alberta-inspection`, Electrical Repair (Cyrillic slug) | Full text inspected; this is the richest content on the site |
| `/engine-repair`, `/vehicle-diag`, `/tune-up`, Mechanical Repair (Cyrillic slug) | **Title only, no content** |
| `/appointment` | Wix form: Name, Email, Cellphone, Date*, Location, VIN, Request |
| Home "Get a Quote" form | Name*, Email*, Phone*, VIN*, details* |
| `/contact` (navigation links to `/contacts`) | Addresses, phones, email, social links |
| `/careers` | Three vacancies and an application form with file upload |
| `/privacy`, `/terms` | **Copied from a BMW dealership template** (see below) |
| `/loyalty` | "Loyalty Program is not available" |
| `/about` | Exists; no content |
| vsccc.ca | Sponsor list, 2026 ECCM page, past-event results |

## Brand identity

- **Logo:** stacked monochrome wordmark: condensed "MAXIM", "GARAGE" reversed out of a black rounded plate, and "-EST.2002-". A second mark, a piston emblem, appears on the shop's bay door and in the sponsor artwork but is not available as a file.
- **Site theme colours (Wix variables):** charcoal `#282936` (most used), white, red `#D6222C` / `#ED1C24`. The Rocky View shop has **red** siding.
- **Fonts:** Playfair Display, Raleway, Poppins and two custom fonts, which makes the typography inconsistent.

### Palette decision: Black & White Edition
The site uses a **strictly monochrome** interface: black, white and neutral greys only. There are no interface hues (no red, orange or blue, and no coloured gradients, icons, badges or hover states). This keeps faith with the official logo, which is itself black and white.

- Dark sections: near-black `#050505` and charcoal surfaces, white headings, grey body text, grey borders. Primary buttons are white with black text; secondary buttons have a white outline.
- Light sections (`.section--light`): off-white `#F5F5F5` with black type. The same components invert automatically (primary buttons become black with white text).
- Photographs and map embeds keep their natural colour. No colour overlay or filter is applied, only a neutral black gradient for text legibility.
- The logo keeps its original black-on-white colours on a small white tile.

## Weaknesses found

1. **Legal pages are wrong.** The privacy policy and terms describe a different business: calgarybmw.ca, the SM360 platform, connect@calgarybmw.ca, Quebec jurisdiction, online accounts and vehicle financing. This is a compliance risk. The new privacy page describes what the new site actually does.
2. **Empty service pages.** Four service pages and the About page have only a title.
3. **Broken or odd links.** The YouTube link has no channel. Two pages use Cyrillic "copy of new page" slugs. Russian-language page titles leak into the site data.
4. **Outdated promotion.** A July 2026 event is still the main homepage feature in October.
5. **Navigation** hides Services and booking behind "More".
6. **Inconsistent phone formats** (403-667-59-47 vs 403-401-6963).
7. **Hours** are shown as seven day names with three times underneath, which is hard to read.
8. **Mixed imagery:** stock thumbnails in different styles. The real shop footage is only used as a background.
9. **Heavy pages** (about 1.2 MB of HTML before assets) and a fixed-position Wix layout on mobile.

## How the redesign responds

- A real multipage structure with dedicated, content-rich pages for 9 services, written from the official service-page text.
- Booking, quote and call actions in the header, hero, every service page, a shared call-to-action band and the footer.
- Both locations everywhere, with click-to-call, directions and maps.
- Inspection pricing on its own Specials page, using only the published offer.
- The car-show promotion turned into an honest **past-event recap** that confirms the Silver Sponsorship from the organizer's own site.
- Genuine shop photos are badged "Maxim Garage", and all other photos are labelled illustrative.
- A privacy policy rewritten to match the site's real data handling.
