import ReviewCard from '../components/reviews/ReviewCard.jsx'
import ReviewListings from '../components/reviews/ReviewListings.jsx'
import Icon from '../components/ui/Icon.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import { locations, nav, reviews, reviewsPage, social } from '../config/business.js'
import { usePageMetaFor } from '../hooks/usePageMeta.js'
import { externalProps } from '../utils/links.js'

export default function Reviews() {
  usePageMetaFor(reviewsPage.path)
  const byLocation = locations
    .map((loc) => ({ loc, items: reviews.items.filter((r) => r.locationId === loc.id) }))
    .filter((g) => g.items.length)

  return (
    <>
      <PageHeader
        eyebrow={reviewsPage.eyebrow}
        title={reviewsPage.title}
        text={reviewsPage.text}
        image={reviewsPage.image}
        crumbs={[{ label: nav.links[3].label }]}
      />

      {byLocation.map(({ loc, items }) => (
        <section key={loc.id} className="section" aria-labelledby={`reviews-${loc.id}`}>
          <div className="container">
            <SectionHeading id={`reviews-${loc.id}`} title={loc.name} />
            <div className="review-grid">
              {items.map((r) => (
                <ReviewCard key={`${r.name}-${r.date}`} review={r} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section" aria-labelledby="listings-title">
        <div className="container">
          <SectionHeading id="listings-title" title={reviewsPage.listingsTitle} />
          <ReviewListings />
        </div>
      </section>

      {social.length > 0 && (
        <section className="section section--light section--tight" aria-labelledby="social-title">
          <div className="container social-row">
            <SectionHeading id="social-title" title={reviewsPage.socialTitle} text={reviewsPage.socialText} />
            <ul className="social-links">
              {social.map((s) => (
                <li key={s.id}>
                  <a href={s.url} {...externalProps(s.url)}>
                    <Icon name={s.id} size={22} />
                    <span>
                      <strong>{s.label}</strong>
                      {s.handle}
                    </span>
                    <Icon name="ArrowUpRight" size={16} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  )
}
