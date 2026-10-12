import { useLocation } from 'react-router-dom'
import HoursList from '../components/contact/HoursList.jsx'
import EnquiryForm from '../components/forms/EnquiryForm.jsx'
import { appointmentFields, serviceFromQuery } from '../components/forms/fieldSets.js'
import { TextLink } from '../components/ui/Button.jsx'
import Icon from '../components/ui/Icon.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import { appointmentPage, contact, contactPage, locations, nav } from '../config/business.js'
import { usePageMetaFor } from '../hooks/usePageMeta.js'
import { telHref } from '../utils/links.js'

export default function Appointment() {
  usePageMetaFor(appointmentPage.path)
  const { search } = useLocation()
  return (
    <>
      <PageHeader
        eyebrow={appointmentPage.eyebrow}
        title={appointmentPage.title}
        text={appointmentPage.text}
        image={appointmentPage.image}
        crumbs={[{ label: nav.cta.label }]}
      />
      <section className="section">
        <div className="container contact-layout contact-layout--form-first">
          <EnquiryForm key={search} fields={appointmentFields} subjectKey="appointment" initialValues={serviceFromQuery(search)} />
          <div className="contact-layout__info">
            <div className="info-card">
              <h2>{appointmentPage.stepsTitle}</h2>
              <ol className="steps">
                {appointmentPage.steps.map((step) => (
                  <li key={step.title}>
                    <strong>{step.title}</strong>
                    <span>{step.text}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="info-card">
              <h2>
                <Icon name="Phone" size={20} />
                {contactPage.callLabel}
              </h2>
              <ul className="info-card__list">
                {locations.map((l) => (
                  <li key={l.id}>
                    <a href={telHref(l.phone)} className="info-card__link">
                      {l.name} · {l.phone.display}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="info-card">
              <h2>
                <Icon name="Clock" size={20} />
                {contactPage.hoursTitle}
              </h2>
              <HoursList />
            </div>
            {contact.externalBookingUrl && (
              <div className="info-card info-card--quiet">
                <p>{appointmentPage.externalBooking.text}</p>
                <TextLink href={contact.externalBookingUrl}>{appointmentPage.externalBooking.label}</TextLink>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
