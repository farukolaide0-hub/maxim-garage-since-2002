import { home } from '../../config/business.js'
import Button from '../ui/Button.jsx'
import Icon from '../ui/Icon.jsx'
import Media from '../ui/Media.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

export default function SpecialismFeature() {
  const { specialism } = home
  return (
    <section className="section section--alt" aria-labelledby="specialism-title">
      <div className="container split">
        <figure className="split__media">
          <Media image={specialism.image} className="frame frame--square" badge />
          <figcaption>{specialism.caption}</figcaption>
        </figure>
        <div className="split__content">
          <SectionHeading id="specialism-title" eyebrow={specialism.eyebrow} title={specialism.title} text={specialism.text} />
          <ul className="check-list check-list--grid">
            {specialism.points.map((p) => (
              <li key={p}>
                <Icon name="Check" size={18} />
                {p}
              </li>
            ))}
          </ul>
          <Button to={specialism.link.to} variant="outline" iconEnd="ArrowRight">
            {specialism.link.label}
          </Button>
        </div>
      </div>
    </section>
  )
}
