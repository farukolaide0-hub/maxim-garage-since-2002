import { home, hours, locations, nav } from '../../config/business.js'
import { telHref } from '../../utils/links.js'
import Button from '../ui/Button.jsx'
import Icon from '../ui/Icon.jsx'
import Media from '../ui/Media.jsx'

export default function Hero() {
  const { hero } = home
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Media image={hero.image} className="hero__media" eager />
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1 id="hero-title" className="hero__title">
            {hero.titleLines.map((line, i) => (
              <span key={line} className={i === hero.accentLine ? 'is-accent' : undefined}>
                {line}
              </span>
            ))}
          </h1>
          <p className="hero__text">{hero.text}</p>
          <div className="hero__actions">
            <Button to={nav.cta.to} icon="Calendar">
              {nav.cta.label}
            </Button>
            <Button to={nav.quoteCta.to} variant="outline" icon="Tag">
              {nav.quoteCta.label}
            </Button>
          </div>
          <ul className="hero__trust">
            {hero.trust.map((item) => (
              <li key={item.label}>
                <Icon name={item.icon} size={18} />
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <aside className="hero__panel" aria-label={home.locations.title}>
          {locations.map((loc) => (
            <a key={loc.id} href={telHref(loc.phone)} className="hero__panel-row">
              <span className="hero__panel-icon">
                <Icon name="Phone" size={18} />
              </span>
              <span>
                <strong>{loc.name}</strong>
                <span>{loc.phone.display}</span>
              </span>
            </a>
          ))}
          <div className="hero__panel-row hero__panel-row--static">
            <span className="hero__panel-icon">
              <Icon name="Clock" size={18} />
            </span>
            <span>
              {hours.map((h) => (
                <span key={h.days} className="hero__panel-hours">
                  <strong>{h.short}</strong> {h.time}
                </span>
              ))}
            </span>
          </div>
        </aside>
      </div>
    </section>
  )
}
