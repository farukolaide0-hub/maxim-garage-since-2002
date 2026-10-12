import { brand, closedDays, forms } from '../../config/business.js'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
// VINs are 17 characters, letters and digits, excluding I, O and Q.
const VIN_RE = /^[A-HJ-NPR-Z0-9]{17}$/

export const normaliseVin = (value) => value.toUpperCase().replace(/\s/g, '')

/** Today's date (YYYY-MM-DD) in the business's timezone. */
export function todayIso() {
  try {
    return new Intl.DateTimeFormat('en-CA', { timeZone: brand.timezone }).format(new Date())
  } catch {
    return new Date().toISOString().slice(0, 10)
  }
}

/** Returns an error message, or undefined when the value is valid. */
export function validateField(field, rawValue) {
  const value = typeof rawValue === 'string' ? rawValue.trim() : rawValue
  const label = forms.labels[field.name] || field.name
  const { errors } = forms

  if (!value) {
    if (!field.required) return undefined
    return field.type === 'select' || field.type === 'date' ? errors.choose(label) : errors.required(label)
  }

  switch (field.type) {
    case 'email':
      return EMAIL_RE.test(value) ? undefined : errors.email
    case 'tel':
      return value.replace(/\D/g, '').length >= 10 ? undefined : errors.phone
    case 'vin': {
      const vin = normaliseVin(value)
      if (vin.length !== 17) return errors.vinLength(vin.length)
      return VIN_RE.test(vin) ? undefined : errors.vinChars
    }
    case 'date': {
      if (value < todayIso()) return errors.datePast
      const day = new Date(`${value}T12:00:00`).getDay()
      return closedDays.includes(day) ? errors.dateClosed : undefined
    }
    case 'textarea':
      return field.required && value.length < 10 ? errors.details : undefined
    default:
      return undefined
  }
}

export function validateAll(fields, values) {
  const result = {}
  for (const field of fields) {
    const error = validateField(field, values[field.name] ?? '')
    if (error) result[field.name] = error
  }
  return result
}
