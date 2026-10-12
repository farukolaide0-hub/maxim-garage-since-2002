import { contact, ctaBand, images, nav } from '../../config/business.js'
import { telHref } from '../../utils/links.js'
import Button from '../ui/Button.jsx'
import Media from '../ui/Media.jsx'

export default function CtaBand() {
  return (
    <section className="cta-band" aria-labelledby="cta-band-title">
      <Media image={images.audiLight} className="cta-band__media" />
      <div className="container cta-band__inner">
        <div>
          <span className="eyebrow">{ctaBand.eyebrow}</span>
          <h2 id="cta-band-title">{ctaBand.title}</h2>
          <p>{ctaBand.text}</p>
        </div>
        <div className="cta-band__actions">
          <Button to={nav.cta.to} icon="Calendar">
            {nav.cta.label}
          </Button>
          <Button to={nav.quoteCta.to} variant="outline" icon="Tag">
            {nav.quoteCta.label}
          </Button>
          <Button href={telHref(contact.primaryPhone)} variant="ghost" icon="Phone">
            {contact.primaryPhone.display}
          </Button>
        </div>
      </div>
    </section>
  )
}
