import { locations, reviewsPage } from '../../config/business.js'
import { externalProps } from '../../utils/links.js'
import Icon from '../ui/Icon.jsx'

// Renders a single verified review from the config.
export default function ReviewCard({ review }) {
  const location = locations.find((l) => l.id === review.locationId)
  return (
    <figure className="review-card">
      {review.rating && (
        <div className="review-card__stars" role="img" aria-label={`${review.rating} out of 5 stars`}>
          {Array.from({ length: 5 }, (_, i) => (
            <Icon key={i} name="Star" size={18} fill={i < review.rating ? 'currentColor' : 'none'} />
          ))}
        </div>
      )}
      <blockquote>
        <p>{review.quote}</p>
      </blockquote>
      <figcaption>
        <strong>{review.name}</strong>
        <span>{[review.date, location?.name].filter(Boolean).join(' · ')}</span>
        {review.sourceUrl && (
          <a href={review.sourceUrl} {...externalProps(review.sourceUrl)}>
            {reviewsPage.sourceLabel}
          </a>
        )}
      </figcaption>
    </figure>
  )
}
