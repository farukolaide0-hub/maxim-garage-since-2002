// Absolute http(s) links open in a new tab; internal routes, tel: and mailto: do not.
export const isExternal = (href = '') => /^https?:\/\//i.test(href)

export const externalProps = (href) =>
  isExternal(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {}

export const mapsEmbedUrl = (query) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=15&output=embed`

export const telHref = (phone) => `tel:${phone.tel}`
