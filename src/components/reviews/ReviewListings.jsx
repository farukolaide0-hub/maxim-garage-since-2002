import { contact, locations, reviewsPage } from '../../config/business.js'
import Button from '../ui/Button.jsx'
import Icon from '../ui/Icon.jsx'

/** Links to the official Google listing of each location, plus "write a review". */
export default function ReviewListings({ compact = false }) {
  return (
    <div className={`review-listings${compact ? ' review-listings--compact' : ''}`}>
      {locations.map((loc) => (
        <a key={loc.id} href={loc.mapsUrl} target="_blank" rel="noopener noreferrer" className="review-listing">
          <span className="review-listing__icon" aria-hidden="true">
            <Icon name="MapPin" size={22} />
          </span>
          <span className="review-listing__body">
            <strong>{loc.name}</strong>
            <span>{loc.street}</span>
          </span>
          <span className="review-listing__cta">
            {reviewsPage.listingLabel}
            <Icon name="ArrowUpRight" size={16} />
          </span>
        </a>
      ))}
      <div className="review-write">
        <div>
          <strong>{reviewsPage.writeTitle}</strong>
          <p>{reviewsPage.writeText}</p>
        </div>
        <Button href={contact.googleReviewUrl} icon="Star" size="sm">
          {reviewsPage.writeLabel}
        </Button>
      </div>
    </div>
  )
}
