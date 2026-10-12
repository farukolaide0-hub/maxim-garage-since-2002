# Maxim Garage website

A multipage website for Maxim Garage (Northeast Calgary and Rocky View County), built with React, Vite and React Router.

```bash
npm install
npm run dev     # local development
npm run build   # production build in dist/
```

## Editing content

**Text, phone numbers, hours, services, prices, images, colours, event details and SEO all live in one file:** `src/config/business.js`.
If a value is `null`, or a list is empty, the matching element is hidden automatically (for example, reviews appear only once real ones are added).

## Docs

- `docs/website-audit.md`: findings from the current site and the design decisions they led to
- `docs/business-data.md`: every business fact and where it was verified
- `docs/media-inventory.md`: images, reviews, social links and their status
- `docs/implementation-notes.md`: routes, forms, SEO, testing, and open items before launch
