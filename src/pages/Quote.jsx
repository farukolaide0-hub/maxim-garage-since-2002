import { useLocation } from 'react-router-dom'
import EnquiryForm from '../components/forms/EnquiryForm.jsx'
import { quoteFields, serviceFromQuery } from '../components/forms/fieldSets.js'
import Icon from '../components/ui/Icon.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import { contactPage, locations, nav, quotePage } from '../config/business.js'
import { usePageMetaFor } from '../hooks/usePageMeta.js'
import { telHref } from '../utils/links.js'

export default function Quote() {
  usePageMetaFor(quotePage.path)
  const { search } = useLocation()
  return (
    <>
      <PageHeader
        eyebrow={quotePage.eyebrow}
        title={quotePage.title}
        text={quotePage.text}
        image={quotePage.image}
        crumbs={[{ label: nav.quoteCta.label }]}
      />
      <section className="section">
        <div className="container contact-layout contact-layout--form-first">
          <EnquiryForm key={search} fields={quoteFields} subjectKey="quote" initialValues={serviceFromQuery(search)} />
          <div className="contact-layout__info">
            <div className="info-card">
              <h2>
                <Icon name="Info" size={20} />
                {quotePage.whyVinTitle}
              </h2>
              <p>{quotePage.whyVinText}</p>
            </div>
            <div className="info-card">
              <h2>
                <Icon name="MessageSquare" size={20} />
                {quotePage.nextTitle}
              </h2>
              <p>{quotePage.nextText}</p>
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
          </div>
        </div>
      </section>
    </>
  )
}
