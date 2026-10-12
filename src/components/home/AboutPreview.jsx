import { contact, footer, home } from '../../config/business.js'
import { externalProps } from '../../utils/links.js'
import Button from '../ui/Button.jsx'
import Icon from '../ui/Icon.jsx'
import Media from '../ui/Media.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

export default function AboutPreview() {
  const { about } = home
  return (
    <section className="section section--light" aria-labelledby="home-about-title">
      <div className="container split split--reverse">
        <figure className="split__media">
          <Media image={about.image} className="frame frame--wide" badge />
          <figcaption>{about.caption}</figcaption>
        </figure>
        <div className="split__content">
          <SectionHeading id="home-about-title" eyebrow={about.eyebrow} title={about.title} text={about.text} />
          <div className="inline-actions">
            <Button to={about.link.to} variant="outline" iconEnd="ArrowRight">
              {about.link.label}
            </Button>
            <a href={contact.amvicUrl} className="badge-link" {...externalProps(contact.amvicUrl)}>
              <Icon name="BadgeCheck" size={20} />
              {footer.amvicLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
