import fs from 'node:fs'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { brand, contact, event, hours, locations, seo, services, social } from './src/config/business.js'

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const abs = (p) => new URL(p, seo.siteUrl).href
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// Every public route with its SEO metadata, built from the config.
function routes() {
  const pages = Object.entries(seo.pages).map(([route, meta]) => ({ route, ...meta }))
  const servicePages = services.map((s) => ({ route: `/services/${s.slug}`, ...seo.servicePage(s) }))
  return [...pages, ...servicePages]
}

// Structured data from verified config values only (no ratings or reviews).
function businessJsonLd() {
  const openingHours = hours
    .filter((h) => h.opens)
    .map((h) => ({ '@type': 'OpeningHoursSpecification', dayOfWeek: h.dayNumbers.map((d) => DAYS[d]), opens: h.opens, closes: h.closes }))
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: brand.name,
    legalName: brand.legalName,
    url: `${seo.siteUrl}/`,
    logo: abs(brand.logo.src),
    email: contact.email,
    sameAs: social.map((s) => s.url),
    department: locations.map((loc) => ({
      '@type': 'AutoRepair',
      name: `${brand.name} — ${loc.name}`,
      url: `${seo.siteUrl}/`,
      image: abs(seo.defaultImage),
      telephone: loc.phone.tel,
      hasMap: loc.mapsUrl,
      address: {
        '@type': 'PostalAddress',
        streetAddress: loc.street,
        addressLocality: loc.city,
        addressRegion: loc.region,
        postalCode: loc.postalCode,
        addressCountry: 'CA',
      },
      openingHoursSpecification: openingHours,
    })),
  }
}

function eventJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    startDate: `${event.date}T10:00:00-06:00`,
    endDate: `${event.date}T16:00:00-06:00`,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: { '@type': 'Place', name: event.venue, address: event.venueAddress },
    organizer: { '@type': 'Organization', name: event.organizer, url: event.organizerUrl },
    sponsor: { '@type': 'Organization', name: brand.name, url: `${seo.siteUrl}/` },
  }
}

const jsonLd = (data) => `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`

function headTags({ route, title, description, image, noindex }) {
  const fullTitle = title.includes(seo.siteName) ? title : `${title}${seo.titleSuffix}`
  const url = `${seo.siteUrl}${route === '/' ? '/' : route}`
  const tags = [
    `<title>${esc(fullTitle)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
    `<meta name="robots" content="${noindex ? 'noindex' : 'index, follow'}" />`,
    `<link rel="canonical" href="${esc(url)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(seo.siteName)}" />`,
    `<meta property="og:locale" content="${esc(seo.locale)}" />`,
    `<meta property="og:title" content="${esc(fullTitle)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta property="og:image" content="${esc(abs(image || seo.defaultImage))}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    jsonLd(businessJsonLd()),
  ]
  if (route === event.path) tags.push(jsonLd(eventJsonLd()))
  return `<!--seo:start-->\n    ${tags.join('\n    ')}\n    <!--seo:end-->`
}

function seoPlugin() {
  let outDir = 'dist'
  return {
    name: 'maxim-seo',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir)
    },
    transformIndexHtml(html) {
      const fallback = [brand.name, ...locations.map((l) => `${l.name}: ${l.phone.display}`), contact.email].map(esc).join(' · ')
      return html
        .replace('<!--seo-->', headTags({ route: '/', ...seo.pages['/'] }))
        .replace(
          '<!--static-head-->',
          [
            `<meta name="theme-color" content="${esc(seo.themeColor)}" />`,
            `<link rel="icon" type="image/png" href="${esc(seo.favicon)}" />`,
            `<link rel="apple-touch-icon" href="${esc(brand.logo.src)}" />`,
          ].join('\n    '),
        )
        .replace('<!--noscript-->', `<noscript><p style="padding:24px;font-family:sans-serif;color:#fff">${fallback}</p></noscript>`)
    },
    // After the build: one HTML file per route (correct meta without JS,
    // and deep links work on any static host), plus sitemap, robots and 404.
    closeBundle() {
      const indexPath = path.join(outDir, 'index.html')
      if (!fs.existsSync(indexPath)) return
      const template = fs.readFileSync(indexPath, 'utf8')
      const swap = (meta) => template.replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, headTags(meta))

      const all = routes()
      for (const meta of all) {
        if (meta.route === '/') continue
        const dir = path.join(outDir, meta.route)
        fs.mkdirSync(dir, { recursive: true })
        fs.writeFileSync(path.join(dir, 'index.html'), swap(meta))
      }
      fs.writeFileSync(path.join(outDir, '404.html'), swap({ route: '/404', ...seo.notFound, noindex: true }))

      const today = new Date().toISOString().slice(0, 10)
      const urls = all
        .map((m) => `  <url><loc>${seo.siteUrl}${m.route === '/' ? '/' : m.route}</loc><lastmod>${today}</lastmod></url>`)
        .join('\n')
      fs.writeFileSync(
        path.join(outDir, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      )
      fs.writeFileSync(path.join(outDir, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${seo.siteUrl}/sitemap.xml\n`)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), seoPlugin()],
})
