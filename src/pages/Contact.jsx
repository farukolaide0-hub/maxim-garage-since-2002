import HoursList from '../components/contact/HoursList.jsx'
import LocationCard from '../components/contact/LocationCard.jsx'
import EnquiryForm from '../components/forms/EnquiryForm.jsx'
import { contactFields } from '../components/forms/fieldSets.js'
import Button from '../components/ui/Button.jsx'
import Icon from '../components/ui/Icon.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import { contact, contactPage, locations, nav, social } from '../config/business.js'
import { usePageMetaFor } from '../hooks/usePageMeta.js'
import { externalProps, telHref } from '../utils/links.js'

export default function Contact() {
  usePageMetaFor(contactPage.path)
  return (
    <>
      <PageHeader
        eyebrow={contactPage.eyebrow}
        title={contactPage.title}
        text={contactPage.text}
        image={contactPage.image}
        crumbs={[{ label: nav.links[6].label }]}
      >
        <Button href={telHref(contact.primaryPhone)} icon="Phone">
          {contact.primaryPhone.display}
        </Button>
        <Button to={nav.cta.to} variant="outline" icon="Calendar">
          {nav.cta.label}
        </Button>
      </PageHeader>

      <section className="section section--light" aria-labelledby="locations-title">
        <div className="container">
          <SectionHeading id="locations-title" title={contactPage.locationsTitle} />
          <div className="locations-grid locations-grid--two">
            {locations.map((loc) => (
              <LocationCard key={loc.id} location={loc} withMap />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" aria-label={contactPage.formTitle}>
        <div className="container contact-layout">
          <div className="contact-layout__info">
            <div className="info-card">
              <h2>
                <Icon name="Clock" size={20} />
                {contactPage.hoursTitle}
              </h2>
              <HoursList />
            </div>
            <div className="info-card">
              <h2>
                <Icon name="Mail" size={20} />
                {contactPage.emailTitle}
              </h2>
              <a href={`mailto:${contact.email}`} className="info-card__link">
                {contact.email}
              </a>
            </div>
            {social.length > 0 && (
              <div className="info-card">
                <h2>
                  <Icon name="Users" size={20} />
                  {contactPage.socialTitle}
                </h2>
                <ul className="info-card__list">
                  {social.map((s) => (
                    <li key={s.id}>
                      <a href={s.url} className="info-card__link" {...externalProps(s.url)}>
                        <Icon name={s.id} size={18} />
                        {s.label} · {s.handle}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <EnquiryForm fields={contactFields} subjectKey="contact" title={contactPage.formTitle} intro={contactPage.formText} />
        </div>
      </section>
    </>
  )
}
