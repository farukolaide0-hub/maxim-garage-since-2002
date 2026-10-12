import ServicesGrid from '../components/services/ServicesGrid.jsx'
import Icon from '../components/ui/Icon.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Button from '../components/ui/Button.jsx'
import { additionalServices, nav, services, servicesPage } from '../config/business.js'
import { usePageMetaFor } from '../hooks/usePageMeta.js'

export default function Services() {
  usePageMetaFor(servicesPage.path)
  return (
    <>
      <PageHeader
        eyebrow={servicesPage.eyebrow}
        title={servicesPage.title}
        text={servicesPage.text}
        image={servicesPage.image}
        crumbs={[{ label: nav.links[1].label }]}
      >
        <Button to={nav.cta.to} icon="Calendar">
          {nav.cta.label}
        </Button>
        <Button to={nav.quoteCta.to} variant="outline" icon="Tag">
          {nav.quoteCta.label}
        </Button>
      </PageHeader>

      <section className="section" aria-label={servicesPage.eyebrow}>
        <div className="container">
          <ServicesGrid items={services} headingLevel={2} />
        </div>
      </section>

      {additionalServices.length > 0 && (
        <section className="section section--light section--tight" aria-labelledby="additional-title">
          <div className="container additional">
            <SectionHeading id="additional-title" title={servicesPage.additionalTitle} text={servicesPage.additionalText} />
            <ul className="chip-list">
              {additionalServices.map((s) => (
                <li key={s}>
                  <Icon name="Check" size={16} />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  )
}
