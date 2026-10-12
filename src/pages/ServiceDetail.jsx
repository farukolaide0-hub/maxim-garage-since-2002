import { useParams } from 'react-router-dom'
import HoursList from '../components/contact/HoursList.jsx'
import ServicesGrid from '../components/services/ServicesGrid.jsx'
import Button, { TextLink } from '../components/ui/Button.jsx'
import Icon from '../components/ui/Icon.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import { breadcrumbs, contact, locations, nav, seo, services, servicesPage, specialsPage } from '../config/business.js'
import usePageMeta from '../hooks/usePageMeta.js'
import NotFound from './NotFound.jsx'
import { telHref } from '../utils/links.js'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)
  if (!service) return <NotFound />
  return <ServiceDetailContent service={service} />
}

function ServiceDetailContent({ service }) {
  usePageMeta(seo.servicePage(service))

  const { detail } = servicesPage
  const related = service.related.map((r) => services.find((s) => s.slug === r)).filter(Boolean)
  const bookTo = `${nav.cta.to}?service=${service.slug}`
  const quoteTo = `${nav.quoteCta.to}?service=${service.slug}`

  return (
    <>
      <PageHeader
        eyebrow={servicesPage.eyebrow}
        title={service.title}
        text={service.summary}
        image={service.image}
        crumbs={[{ label: breadcrumbs.services, to: servicesPage.path }, { label: service.shortTitle || service.title }]}
      >
        <Button to={bookTo} icon="Calendar">
          {nav.cta.label}
        </Button>
        <Button href={telHref(contact.primaryPhone)} variant="outline" icon="Phone">
          {contact.primaryPhone.display}
        </Button>
      </PageHeader>

      <section className="section section--light">
        <div className="container detail">
          <div className="detail__main">
            <p className="lead">{service.intro}</p>

            <div className="detail__columns">
              <div className="panel">
                <h2 className="panel__title">
                  <Icon name="CircleAlert" size={22} />
                  {detail.problemsTitle}
                </h2>
                <ul className="check-list check-list--muted">
                  {service.problems.map((p) => (
                    <li key={p}>
                      <Icon name="ArrowRight" size={16} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="panel">
                <h2 className="panel__title">
                  <Icon name={service.icon} size={22} />
                  {detail.offeringTitle}
                </h2>
                <ul className="check-list">
                  {service.offering.map((o) => (
                    <li key={o}>
                      <Icon name="Check" size={18} />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {service.checklist && (
              <div className="panel panel--accent">
                <h2 className="panel__title">
                  <Icon name="ClipboardCheck" size={22} />
                  {service.checklistTitle}
                </h2>
                <ul className="check-list check-list--grid">
                  {service.checklist.map((c) => (
                    <li key={c}>
                      <Icon name="Check" size={18} />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {service.note && (
              <p className="note">
                <Icon name="Info" size={20} />
                {service.note}
              </p>
            )}

            {service.pricingLink && <TextLink to={specialsPage.path}>{detail.pricingLabel}</TextLink>}

          </div>

          <aside className="detail__aside">
            <div className="aside-card">
              <h2>{detail.ctaTitle}</h2>
              <p>{detail.ctaText}</p>
              <Button to={bookTo} icon="Calendar" block>
                {nav.cta.label}
              </Button>
              <Button to={quoteTo} variant="outline" icon="Tag" block>
                {nav.quoteCta.label}
              </Button>
              <ul className="aside-card__phones">
                {locations.map((l) => (
                  <li key={l.id}>
                    <a href={telHref(l.phone)}>
                      <Icon name="Phone" size={16} />
                      <span>
                        <strong>{l.name}</strong> {l.phone.display}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <HoursList compact />
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section--alt" aria-labelledby="related-title">
          <div className="container">
            <div className="section-head-row">
              <SectionHeading id="related-title" title={detail.relatedTitle} />
              <TextLink to={servicesPage.path}>{detail.allServicesLabel}</TextLink>
            </div>
            <ServicesGrid items={related} />
          </div>
        </section>
      )}
    </>
  )
}
