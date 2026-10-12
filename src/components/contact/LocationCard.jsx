import { contactPage } from '../../config/business.js'
import { telHref } from '../../utils/links.js'
import Button from '../ui/Button.jsx'
import Icon from '../ui/Icon.jsx'
import MapEmbed from './MapEmbed.jsx'

export default function LocationCard({ location, withMap = false, headingLevel = 3 }) {
  const Heading = `h${headingLevel}`
  return (
    <article className="location-card">
      {withMap && <MapEmbed location={location} />}
      <div className="location-card__body">
        <span className="location-card__area">{location.area}</span>
        <Heading className="location-card__name">{location.name}</Heading>
        <address>
          <Icon name="MapPin" size={18} />
          <span>
            {location.street}
            <br />
            {location.city}, {location.region} {location.postalCode}
          </span>
        </address>
        <div className="location-card__actions">
          <Button href={telHref(location.phone)} icon="Phone" size="sm">
            {location.phone.display}
          </Button>
          <Button href={location.mapsUrl} variant="outline" icon="Navigation" size="sm">
            {contactPage.directionsLabel}
          </Button>
        </div>
      </div>
    </article>
  )
}
