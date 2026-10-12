import { Link } from 'react-router-dom'
import { servicesPage } from '../../config/business.js'
import Icon from '../ui/Icon.jsx'
import Media from '../ui/Media.jsx'

/** The whole card is one link to the service page. */
export default function ServiceCard({ service, headingLevel = 3 }) {
  const Heading = `h${headingLevel}`
  return (
    <article className="service-card">
      <Link to={`/services/${service.slug}`} className="service-card__link">
        <Media image={service.image} className="service-card__media" badge />
        <div className="service-card__body">
          <span className="service-card__icon" aria-hidden="true">
            <Icon name={service.icon} size={22} />
          </span>
          <Heading className="service-card__title">{service.title}</Heading>
          <p className="service-card__text">{service.summary}</p>
          <span className="service-card__more">
            {servicesPage.cardLinkLabel}
            <Icon name="ArrowRight" size={16} />
          </span>
        </div>
      </Link>
    </article>
  )
}
