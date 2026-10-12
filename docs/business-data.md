# Verified Business Data

Every business fact on the website, with its source. Checked on **2026-10-12**.
Values live in `src/config/business.js`.

## Identity

| Item | Value | Source |
|---|---|---|
| Trading name | Maxim Garage | maxgarage.ca (logo, page titles) |
| Legal name | Maxim Garage Inc. | maxgarage.ca footer copyright |
| "Est. 2002" | Printed on the official logo | Logo file on maxgarage.ca |
| Background | "Small family business with over 20 years of experience in our home country", now in Canada with two Alberta locations | maxgarage.ca/careers |
| Alberta start date | BBB lists the business as started **2023-06-12** | bbb.org profile (third party) |
| Licence | "AMVIC licensed business", with a link to the AMVIC registry | maxgarage.ca footer. The registry record itself could not be viewed because the site shows a human-verification check |

**Wording decision:** "established in 2002" is always paired with the home-country history. The site never says the business has been in Calgary since 2002.

## Locations and contact

| Item | Value | Source |
|---|---|---|
| Calgary | 521 35 Ave NE, Calgary, AB T2E 2K9 · **403-667-5947** | maxgarage.ca footer and /contact |
| Rocky View County | Bay 2 – 285127 Frontier Rd, Rocky View County, AB T1X 0N2 · **403-401-6963** | maxgarage.ca footer and /contact |
| Main phone | 403-401-6963 | maxgarage.ca homepage hero; also supplied in the project brief |
| Email | garagemaxims@gmail.com | maxgarage.ca/contact |
| Hours | Mon–Fri 9:00 AM–6:00 PM · Sat 9:00 AM–4:00 PM · Sun closed | Every maxgarage.ca page (one schedule for the business) |
| Google (Calgary) | https://g.co/kgs/HyazDmX → "521 35 Ave NE, Calgary" | Link on maxgarage.ca; redirect checked |
| Google Maps (Rocky View) | https://maps.app.goo.gl/k5xTm4yj5af2qb3X6 → "285127 Frontier Rd" | Link on maxgarage.ca; redirect checked |
| Google review link | https://g.page/r/CSvrEKcXxbw6EAE/review | "Reviews" link in the maxgarage.ca footer |
| Instagram | https://www.instagram.com/maxims.garage, "MAXIM GARAGE (@maxims.garage)" | Link on maxgarage.ca; profile metadata checked |
| Facebook | https://www.facebook.com/calgary.garage, "Maxim.Garage \| Northeast Calgary AB" | Link on maxgarage.ca; page metadata checked |
| YouTube | **Not published.** The site links to `youtube.com/user/` with no channel name | maxgarage.ca |
| WhatsApp | **Not published** | n/a |

### Conflicting or unverified data (not published)

| Item | Where it appears | Why it is left out |
|---|---|---|
| **587-969-0107** | BBB profile; the old privacy policy and terms | Not on the official contact pages. Owner to confirm |
| 587-969-5205 | One business-listing aggregator | Unverified |
| connect@calgarybmw.ca, calgarybmw.ca, "SM360", Quebec jurisdiction | Old maxgarage.ca privacy policy and terms | **Copied from a BMW dealership template.** Not Maxim Garage data |

## Services (all advertised on maxgarage.ca)

| Service | Source | Own page |
|---|---|---|
| Vehicle diagnostics | Homepage, /vehicle-inspection, /electrical page | ✔ |
| Electrical repair, ECU repair, CAN-bus, comfort electrics, data recovery, key and control-unit cloning | Electrical Repair page | ✔ |
| ECU reprogramming, module flashing, BMW coding | Homepage hero and meta description, Electrical page, Careers ("retrofitting") | ✔ |
| Regular maintenance and oil changes (Liqui Moly) | /regular-maintenance | ✔ |
| Brake repair and inspection | Homepage hero; /regular-maintenance brake section | ✔ |
| Engine repair | Homepage service list | ✔ (detail limited to the diagnostic approach in /vehicle-inspection) |
| Mechanical repair (suspension, steering, transmission service) | Homepage | ✔ |
| Pre-purchase inspection ($119 / $189 / $149) | /vehicle-inspection | ✔ |
| Alberta insurance inspection report | /alberta-inspection | ✔ |
| Transmission service, auto glass repair | Homepage text | Listed only |
| Tire rotation | Careers (mechanic duties) | Listed only |
| Tune-ups | A "Tune UP" page exists (empty) | Listed only |

**Claims used with care:**
- "Over 25 years" in automotive electronics (Electrical page): attributed to the team's experience.
- "Certified BMW specialists" (/vehicle-inspection): shown as "BMW specialists who previously worked in dealerships", because I could not check the certification.

## Offers

| Offer | Details | Source |
|---|---|---|
| Pre-purchase inspection, described by the business as a "Special offer" | Standard on lift $119 · Premium on lift $189 (odometer check, paintwork, printed Carfax) · Mobile $149 | /vehicle-inspection |
| Loyalty program | The page says "Loyalty Program is not available" | /loyalty, **not shown** |

No other discounts are published.

## Careers (as listed in October 2026)

Automotive Service Technician / Mechanic; Administrator-Consultant (service advisor); Diagnostic Technician / Apprentice. Conditions: 5/2 or 6/1 schedule, 8-hour day, bi-weekly pay, paid vacation, uniform, corporate events, meal discounts and repair discounts. Source: maxgarage.ca/careers.

## European Classic Car Meet 2026

| Item | Value | Source |
|---|---|---|
| Official name | European Classic Car Meet (ECCM). The old site called it "European Classic Car Show 2026" | vsccc.ca |
| Date and time | Saturday July 18, 2026 (rain date July 25); registration 8–10 AM; public show 10 AM–4 PM | Event poster shown on maxgarage.ca; Global News listing |
| Venue | Stanley Park, 416 Park Ave SW, Calgary | Global News community event listing |
| Organizer | Vintage Sports Car Club of Calgary; poster also names Continental Auto Service | vsccc.ca; poster |
| Theme | "Celebrating 100 years of Mercedes-Benz" | Poster |
| Charity | Veterans Association Food Bank | Poster; Global News |
| Fees | Car registration $20; free for spectators | Poster; Global News |
| Maxim Garage's role | **Silver Sponsor** (logo shown under "Silver Sponsors") | vsccc.ca homepage sponsor list; maxgarage.ca |
| Maxim Garage's plans for the day | Meet visitors, discuss cars and repairs, give away service gift certificates | maxgarage.ca homepage |
| Result | "Close to 300 cars and motorcycles filled the field" | vsccc.ca homepage |
| Status on 2026-10-12 | **Past event** | Date |
| Official photos | By @exposure404photography on vsccc.ca/page-18180 | vsccc.ca (linked, not copied) |

## Reviews

- Google Business Profile reviews could not be retrieved without scraping Google, which breaks its terms. **No reviews are reproduced on the site.**
- BBB: 0 customer reviews, not accredited. BBB's letter rating is not displayed.
- No other review platforms were found.
- To add reviews: copy them word for word, with permission, into `reviews.items` in the config.
