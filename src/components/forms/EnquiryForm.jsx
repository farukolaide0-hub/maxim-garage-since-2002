import { useId, useRef, useState } from 'react'
import { forms } from '../../config/business.js'
import Icon from '../ui/Icon.jsx'
import { normaliseVin, todayIso, validateAll, validateField } from './validation.js'

/**
 * Shared form for appointments, quotes, contact and careers.
 *
 * fields: [{ name, type, required, options?, autoComplete?, full?, hint?, placeholder? }]
 *   type: text | email | tel | vin | date | select | textarea
 *   options (select): [{ value, label }]
 *
 * Delivery: forms.endpoint ? POST JSON : open the visitor's email app.
 * The form never claims a message was sent unless the endpoint confirms it.
 */
export default function EnquiryForm({ fields, subjectKey, initialValues = {}, title, intro, className = '' }) {
  const uid = useId()
  const formRef = useRef(null)
  const blank = Object.fromEntries(fields.map((f) => [f.name, '']))
  const [values, setValues] = useState({ ...blank, ...initialValues })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | mailto | success | error

  const fieldById = (name) => `${uid}-${name}`

  const update = (field) => (e) => {
    const value = field.type === 'vin' ? normaliseVin(e.target.value) : e.target.value
    setValues((v) => ({ ...v, [field.name]: value }))
    if (touched[field.name]) setErrors((err) => ({ ...err, [field.name]: validateField(field, value) }))
    if (status === 'mailto' || status === 'error' || status === 'success') setStatus('idle')
  }

  const blur = (field) => () => {
    setTouched((t) => ({ ...t, [field.name]: true }))
    setErrors((err) => ({ ...err, [field.name]: validateField(field, values[field.name]) }))
  }

  const describe = (field) => {
    const option = field.options?.find((o) => o.value === values[field.name])
    return option ? option.label : values[field.name]
  }

  const submit = async (e) => {
    e.preventDefault()
    const found = validateAll(fields, values)
    setErrors(found)
    setTouched(Object.fromEntries(fields.map((f) => [f.name, true])))
    const firstInvalid = fields.find((f) => found[f.name])
    if (firstInvalid) {
      document.getElementById(fieldById(firstInvalid.name))?.focus()
      return
    }

    const subject = `${forms.subjects[subjectKey]} — ${values.name}`
    const lines = fields
      .filter((f) => f.type !== 'textarea' && values[f.name])
      .map((f) => `${forms.labels[f.name]}: ${describe(f)}`)
    const text = fields.filter((f) => f.type === 'textarea').map((f) => values[f.name])
    const body = [...lines, '', ...text].join('\n')

    if (!forms.endpoint) {
      window.location.href = `mailto:${forms.recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      setStatus('mailto')
      return
    }

    setStatus('sending')
    try {
      const payload = Object.fromEntries(fields.map((f) => [forms.labels[f.name], describe(f)]))
      const res = await fetch(forms.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...payload, _subject: subject }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setStatus('success')
      setValues(blank)
      setTouched({})
    } catch {
      setStatus('error')
    }
  }

  const renderControl = (field) => {
    const invalid = touched[field.name] && errors[field.name]
    const describedBy = [field.hint && `${fieldById(field.name)}-hint`, invalid && `${fieldById(field.name)}-error`]
      .filter(Boolean)
      .join(' ')
    const common = {
      id: fieldById(field.name),
      name: field.name,
      value: values[field.name],
      onChange: update(field),
      onBlur: blur(field),
      required: field.required,
      'aria-invalid': invalid ? 'true' : undefined,
      'aria-describedby': describedBy || undefined,
    }

    switch (field.type) {
      case 'select':
        return (
          <select {...common}>
            <option value="" disabled={field.required}>
              {field.placeholder}
            </option>
            {field.options.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        )
      case 'textarea':
        return <textarea rows={5} placeholder={field.placeholder} {...common} />
      case 'date':
        return <input type="date" min={todayIso()} {...common} />
      case 'vin':
        return (
          <input
            type="text"
            inputMode="text"
            autoCapitalize="characters"
            autoComplete="off"
            spellCheck={false}
            maxLength={20}
            placeholder={field.placeholder}
            className="input--mono"
            {...common}
          />
        )
      default:
        return <input type={field.type} autoComplete={field.autoComplete} inputMode={field.type === 'tel' ? 'tel' : undefined} {...common} />
    }
  }

  return (
    <form ref={formRef} className={`form-card ${className}`} onSubmit={submit} noValidate aria-labelledby={title ? `${uid}-title` : undefined}>
      {(title || intro) && (
        <div className="form-card__head">
          {title && <h2 id={`${uid}-title`}>{title}</h2>}
          {intro && <p>{intro}</p>}
        </div>
      )}
      <p className="form-card__required">{forms.requiredNote}</p>

      <div className="form-grid">
        {fields.map((field) => (
          <div key={field.name} className={`field${field.full ? ' field--full' : ''}`}>
            <label htmlFor={fieldById(field.name)}>
              {forms.labels[field.name]}
              {field.required && (
                <span className="field__req" aria-hidden="true">
                  {' '}
                  *
                </span>
              )}
            </label>
            {renderControl(field)}
            {field.type === 'vin' && values[field.name] && (
              <span className="field__counter" aria-hidden="true">
                {values[field.name].length}/17
              </span>
            )}
            {field.hint && (
              <span id={`${fieldById(field.name)}-hint`} className="field__hint">
                {field.hint}
              </span>
            )}
            {touched[field.name] && errors[field.name] && (
              <span id={`${fieldById(field.name)}-error`} className="field__error">
                <Icon name="CircleAlert" size={15} />
                {errors[field.name]}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="form-card__footer">
        <button type="submit" className="btn btn--primary btn--block" disabled={status === 'sending'}>
          <Icon name={forms.endpoint ? 'ArrowRight' : 'Mail'} size={18} />
          <span>{status === 'sending' ? forms.sending : forms.endpoint ? forms.submitEndpoint : forms.submitMailto}</span>
        </button>

        <div aria-live="polite">
          {status === 'mailto' && (
            <p className="notice notice--info">
              <Icon name="Info" size={20} />
              {forms.notices.mailto}
            </p>
          )}
          {status === 'success' && (
            <p className="notice notice--success">
              <Icon name="CircleCheck" size={20} />
              {forms.notices.success}
            </p>
          )}
          {status === 'error' && (
            <p className="notice notice--error" role="alert">
              <Icon name="CircleAlert" size={20} />
              {forms.errors.send}
            </p>
          )}
        </div>
        <p className="form-card__fallback">{forms.fallback}</p>
      </div>
    </form>
  )
}
