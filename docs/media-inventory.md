# Media, Reviews & Social Inventory

Checked on 2026-10-12. Image definitions live in `images` in `src/config/business.js`.

## Genuine Maxim Garage assets (self-hosted in `public/images/`)

Taken from the business's own website through Wix's resize service. **Owner to confirm reuse rights.**

| File | Source | Used on | Status |
|---|---|---|---|
| `maxim-garage-logo.png` (480×399) | `static.wixstatic.com/media/a94034_af16cee1…~mv2.png` | Header and footer (on a white tile), image fallback, JSON-LD logo | Official logo |
| `favicon.png` | Same logo, resized | Favicon | Official logo |
| `rocky-view-bay-door.jpg` (1600×900) | Poster frame of the business's own homepage video `a94034_9ed9613c…` | About, home, gallery, default OG image | Genuine; shows "Bay 2" and the piston logo |
| `bmw-ecu-programming.jpg` (1000×1000) | `2b095c_6561d626…~mv2.jpg` ("Programm_edited.jpg") | ECU service, home specialism, about, gallery | Appears genuine (shop phone photo) |

These are badged **"Maxim Garage"** wherever they appear.

## Illustrative photography (Unsplash, hotlinked, Unsplash License)

Each ID was checked (HTTP 200) and looked at before use. URLs are forced to JPEG (`fm=jpg`). These photos never carry the "Maxim Garage" badge. The gallery and event pages label them as illustrative.

| Key | Photo ID | Subject | Used for |
|---|---|---|---|
| heroUnderHood | 1625047509248-ec889cbff17f | Technician under the hood, dark bay | Home hero |
| mechanicsUnderHood | 1625047509168-a7026f36de04 | Technicians at an open engine bay | Appointment, careers, gallery |
| engineInspection | 1625047509252-ab38fb5c7343 | Technician in an engine bay | Mechanical repair |
| engineBay | 1486262715619-67b85e0b08d3 | Engine close-up | Quote page, gallery |
| oilService | 1487754180451-c456f719a1fc | Pouring oil | Oil and maintenance |
| wrenchEngine | 1615906655593-ad0386982a0f | Mechanic with wrench | Engine repair |
| handsEngineDark | 1619642751034-765dfdf7c58e | Hands in an engine bay | Gallery |
| wheelImpact | 1613214149922-f1809c99b414 | Impact wrench on a wheel | Brake repair |
| batteryCables | 1597766325363-f5576d851d6a | Battery test clamps | Gallery |
| circuitBoard | 1581092918056-0c4c3acd3789 | Circuit-board repair | Electrical repair |
| tachometer | 1517026575980-3e1e2dedeab4 | Tachometer | Diagnostics, 404 |
| toolWall | 1530124566582-a618bc2615dc | Wall of tools | Gallery page header |
| toolRack | 1530046339160-ce3e530c7d2f | Workshop tool racks | Services page header |
| bmwCoupe | 1580273916550-e323be2ae537 | BMW coupe | Pre-purchase inspection |
| bmwSedan | 1601362840469-51e4d8d58785 | BMW 7 Series | Gallery |
| mercedesGarage | 1590362891991-f776e747a588 | Mercedes in a lit garage | Reviews header, gallery |
| mercedesGrille | 1514316454349-750a7fd3da3a | Mercedes-AMG grille | Alberta inspection |
| rangeRover | 1563720223185-11003d516935 | Range Rover in front of a garage | Contact header, gallery |
| audiLight | 1542282088-fe8426682b8f | Audi headlight | Shared CTA band, gallery |
| porscheGt | 1580274455191-1c62238fa333 | Porsche 911 GT3 | Specials header, gallery |
| porscheClassic | 1588258219511-64eb629cb833 | Classic red Porsche 911 | Event page and home event feature, labelled "Illustrative photo — not taken at the event" |

About 30 more IDs were tested and rejected: supercars that don't fit a repair shop, 404s, or unrelated subjects.

## Considered and rejected

| Asset | Reason |
|---|---|
| Wix stock (`11062b_…` images and videos) | Licensed only for use on Wix sites |
| BMW oil-pour and under-car images (`2b095c_c0a6…`, `2b095c_ce2b…`) | Look like manufacturer marketing photography; rights unclear |
| "Insurance Inspection" graphic | Text baked into the image |
| 2026 ECCM event photos (vsccc.ca) | © @exposure404photography; **linked, not copied** |
| 2026 event poster and sponsor artwork | Third-party artwork; facts were taken from them as text |
| Google Maps / Business Profile photos | Reuse rights unclear; scraping breaks Google's terms |
| Homepage video `a94034_9ed9613c…` | Genuine, but a static shot of the bay door; the poster frame shows the same thing |

## Video

No verified video channel exists (the YouTube link is broken), and no specific Instagram or Facebook post was chosen to embed. **No video player is rendered**, so there are no empty or broken embeds.

## Reviews

| Source | Status |
|---|---|
| Google Business Profile (both locations) | Not retrievable without breaking Google's terms. **Linked** from the Reviews page and the homepage; nothing reproduced |
| BBB | 0 reviews |
| Facebook | Review content not publicly accessible |

The review components (`ReviewCard`, location grouping, homepage preview) are built and render automatically once verified reviews are added to `reviews.items`.

## Social and external links (all checked)

| Link | Status |
|---|---|
| instagram.com/maxims.garage | 200; profile verified |
| facebook.com/calgary.garage | 200; page verified |
| g.co/kgs/HyazDmX (Calgary) | 302 → Google search for 521 35 Ave NE |
| maps.app.goo.gl/k5xTm4yj5af2qb3X6 (Rocky View) | 302 → Google Maps, 285127 Frontier Rd |
| g.page/r/CSvrEKcXxbw6EAE/review | 200 |
| AMVIC registry | Behind a human-verification check; the official link is kept |
| maxgarage.ca/appointment | 200 (current Wix booking form) |
| vsccc.ca, vsccc.ca/page-18180, Global News event listing | 200 |

## Maps

Each location card embeds Google Maps using an address search (`maps.google.com/maps?q=…&output=embed`, no API key). Both embeds return 200. The "Directions" buttons use the business's own Google links.
