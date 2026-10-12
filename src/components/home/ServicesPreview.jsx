import { home, services, servicesPage } from '../../config/business.js'
import ServicesGrid from '../services/ServicesGrid.jsx'
import { TextLink } from '../ui/Button.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

export default function ServicesPreview() {
  const featured = services.filter((s) => s.featured).slice(0, 6)
  const { servicesIntro } = home
  return (
    <section className="section" aria-labelledby="home-services-title">
      <div className="container">
        <div className="section-head-row">
          <SectionHeading id="home-services-title" eyebrow={servicesIntro.eyebrow} title={servicesIntro.title} text={servicesIntro.text} />
          <TextLink to={servicesPage.path}>{servicesIntro.linkLabel}</TextLink>
        </div>
        <ServicesGrid items={featured} />
      </div>
    </section>
  )
}
