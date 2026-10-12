import { Link } from 'react-router-dom'
import { brand, contact, footer, hours, locations, nav, services, social } from '../../config/business.js'
import { externalProps, telHref } from '../../utils/links.js'
import Icon from '../ui/Icon.jsx'

// Evaluated once per page load, so the copyright year is always current.
const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link to="/" className="logo-tile logo-tile--lg" aria-label={`${brand.name} — home`}>
            <img src={brand.logo.src} alt="" width={brand.logo.width} height={brand.logo.height} loading="lazy" />
          </Link>
          <p>{footer.blurb}</p>
          {social.length > 0 && (
            <ul className="footer__social">
              {social.map((s) => (
                <li key={s.id}>
                  <a href={s.url} aria-label={`${brand.name} on ${s.label}`} {...externalProps(s.url)}>
                    <Icon name={s.id} size={20} />
                  </a>
                </li>
              ))}
            </ul>
          )}
          <a href={contact.amvicUrl} className="footer__amvic" {...externalProps(contact.amvicUrl)}>
            <Icon name="BadgeCheck" size={18} />
            {footer.amvicLabel}
          </a>
        </div>

        <nav aria-label="Footer">
          <h2 className="footer__title">{footer.columns.explore}</h2>
          <ul className="footer__list">
            {[...nav.links, nav.cta, nav.quoteCta, ...footer.extraLinks].map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="footer__title">{footer.columns.services}</h2>
          <ul className="footer__list">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`}>{s.shortTitle || s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer__title">{footer.columns.visit}</h2>
          {locations.map((loc) => (
            <address key={loc.id} className="footer__location">
              <strong>{loc.name}</strong>
              <span>{loc.street}</span>
              <span>
                {loc.city}, {loc.region} {loc.postalCode}
              </span>
              <a href={telHref(loc.phone)}>
                <Icon name="Phone" size={15} />
                {loc.phone.display}
              </a>
            </address>
          ))}
          <a href={`mailto:${contact.email}`} className="footer__email">
            <Icon name="Mail" size={15} />
            {contact.email}
          </a>

          <h2 className="footer__title footer__title--spaced">{footer.columns.hours}</h2>
          <ul className="footer__hours">
            {hours.map((h) => (
              <li key={h.days}>
                <span>{h.short}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>{footer.copyright(year)}</p>
        <p>
          {brand.name} · {locations.map((l) => l.name).join(' · ')}
        </p>
      </div>
    </footer>
  )
}
