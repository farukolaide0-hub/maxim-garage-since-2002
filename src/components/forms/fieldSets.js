import { forms, locations, services } from '../../config/business.js'

// Field definitions for each form, built from the config.
const serviceOptions = [
  ...services.map((s) => ({ value: s.slug, label: s.title })),
  { value: 'other', label: forms.otherService },
]
const locationOptions = locations.map((l) => ({ value: l.id, label: `${l.name} — ${l.street}` }))

const name = { name: 'name', type: 'text', required: true, autoComplete: 'name' }
const email = { name: 'email', type: 'email', required: true, autoComplete: 'email' }
const phone = { name: 'phone', type: 'tel', required: true, autoComplete: 'tel' }
const vin = { name: 'vin', type: 'vin', required: true, full: true, hint: forms.vinHint, placeholder: forms.placeholders.vin }
const service = { name: 'service', type: 'select', required: true, options: serviceOptions, placeholder: forms.servicePlaceholder }
const details = { name: 'details', type: 'textarea', required: true, full: true, placeholder: forms.placeholders.details }

export const appointmentFields = [
  name,
  phone,
  { ...email, full: true },
  vin,
  service,
  { name: 'location', type: 'select', required: false, options: locationOptions, placeholder: forms.locationAny },
  { name: 'date', type: 'date', required: false, full: true },
  details,
]

export const quoteFields = [name, phone, { ...email, full: true }, vin, { ...service, full: true }, details]

export const contactFields = [
  name,
  phone,
  { ...email, full: true },
  { name: 'message', type: 'textarea', required: true, full: true, placeholder: forms.placeholders.message },
]

export const careersFields = [
  name,
  phone,
  { ...email, full: true },
  {
    name: 'position',
    type: 'select',
    required: true,
    full: true,
    options: forms.positions.map((p) => ({ value: p, label: p })),
    placeholder: forms.positionPlaceholder,
  },
  { name: 'message', type: 'textarea', required: true, full: true, placeholder: forms.placeholders.careers },
]

/** Pre-select a service from ?service=slug in the URL. */
export const serviceFromQuery = (search) => {
  const slug = new URLSearchParams(search).get('service')
  return serviceOptions.some((o) => o.value === slug) ? { service: slug } : {}
}
