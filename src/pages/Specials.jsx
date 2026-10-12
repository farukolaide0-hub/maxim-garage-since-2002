import Button from '../components/ui/Button.jsx'
import Icon from '../components/ui/Icon.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import { nav, specialsPage } from '../config/business.js'
import { usePageMetaFor } from '../hooks/usePageMeta.js'

export default function Specials() {
  usePageMetaFor(specialsPage.path)
  return (
    <>
      <PageHeader
        eyebrow={specialsPage.eyebrow}
        title={specialsPage.title}
        text={specialsPage.text}
        image={specialsPage.image}
        crumbs={[{ label: nav.links[4].label }]}
      />

      {specialsPage.offers.map((offer) => (
        <section key={offer.id} className="section section--light" aria-labelledby={`offer-${offer.id}`}>
          <div className="container">
            <SectionHeading id={`offer-${offer.id}`} eyebrow={offer.eyebrow} title={offer.title} text={offer.intro} />
            <ul className="price-grid">
              {offer.packages.map((pkg) => (
                <li key={pkg.name} className={`price-card${pkg.highlight ? ' price-card--highlight' : ''}`}>
                  {pkg.highlight && <span className="price-card__flag">{pkg.highlight}</span>}
                  <h3 className="price-card__name">{pkg.name}</h3>
                  <p className="price-card__where">
                    <Icon name="MapPin" size={16} />
                    {pkg.where}
                  </p>
                  <p className="price-card__price">{pkg.price}</p>
                  <ul className="check-list">
                    {pkg.items.map((item) => (
                      <li key={item}>
                        <Icon name="Check" size={18} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button to={offer.cta.to} variant={pkg.highlight ? 'primary' : 'outline'} block>
                    {offer.cta.label}
                  </Button>
                </li>
              ))}
            </ul>
            <p className="note">
              <Icon name="Info" size={20} />
              {offer.validity}
            </p>
          </div>
        </section>
      ))}

      <section className="section section--alt section--tight" aria-labelledby="no-more-title">
        <div className="container social-row">
          <SectionHeading id="no-more-title" title={specialsPage.noMoreTitle} text={specialsPage.noMoreText} />
          <Button to={specialsPage.noMoreCta.to} icon="Tag">
            {specialsPage.noMoreCta.label}
          </Button>
        </div>
      </section>
    </>
  )
}
