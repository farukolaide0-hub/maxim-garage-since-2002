import { contactPage, home, locations } from '../../config/business.js'
import HoursList from '../contact/HoursList.jsx'
import LocationCard from '../contact/LocationCard.jsx'
import Icon from '../ui/Icon.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

export default function LocationsPreview() {
  return (
    <section className="section section--light" aria-labelledby="home-locations-title">
      <div className="container">
        <SectionHeading id="home-locations-title" eyebrow={home.locations.eyebrow} title={home.locations.title} text={home.locations.text} />
        <div className="locations-grid">
          {locations.map((loc) => (
            <LocationCard key={loc.id} location={loc} withMap />
          ))}
          <div className="info-card">
            <h3>
              <Icon name="Clock" size={20} />
              {contactPage.hoursTitle}
            </h3>
            <HoursList />
          </div>
        </div>
      </div>
    </section>
  )
}
