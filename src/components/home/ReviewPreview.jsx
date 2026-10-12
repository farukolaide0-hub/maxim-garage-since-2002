import { home, reviews, reviewsPage } from '../../config/business.js'
import ReviewCard from '../reviews/ReviewCard.jsx'
import ReviewListings from '../reviews/ReviewListings.jsx'
import { TextLink } from '../ui/Button.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

/** Shows verified reviews when present; otherwise links to the official listings. */
export default function ReviewPreview() {
  const items = reviews.items.slice(0, 3)
  return (
    <section className="section section--alt" aria-labelledby="home-reviews-title">
      <div className="container">
        <div className="section-head-row">
          <SectionHeading
            id="home-reviews-title"
            eyebrow={home.reviews.eyebrow}
            title={home.reviews.title}
            text={items.length ? undefined : reviewsPage.homeFallback.text}
          />
          <TextLink to={home.reviews.link.to}>{home.reviews.link.label}</TextLink>
        </div>
        {items.length > 0 ? (
          <div className="review-grid">
            {items.map((r) => (
              <ReviewCard key={`${r.name}-${r.date}`} review={r} />
            ))}
          </div>
        ) : (
          <ReviewListings compact />
        )}
      </div>
    </section>
  )
}
