import { event } from '../../config/business.js'
import Button from '../ui/Button.jsx'
import Icon from '../ui/Icon.jsx'
import Media from '../ui/Media.jsx'

export default function EventFeature() {
  const feature = event.homeFeature
  const highlights = event.facts.filter((f) => ['Date', 'Venue', 'Maxim Garage'].includes(f.label))
  return (
    <section className="event-feature" aria-labelledby="event-feature-title">
      <Media image={event.image} className="event-feature__media" />
      <div className="container event-feature__inner">
        <span className="eyebrow">{feature.eyebrow}</span>
        <h2 id="event-feature-title">{feature.title}</h2>
        <p>{feature.text}</p>
        <ul className="event-feature__facts">
          {highlights.map((f) => (
            <li key={f.label}>
              <Icon name={f.icon} size={18} />
              <span>
                <small>{f.label}</small>
                {f.value}
              </span>
            </li>
          ))}
        </ul>
        <Button to={feature.link.to} iconEnd="ArrowRight">
          {feature.link.label}
        </Button>
        <p className="image-note">{event.imageNote}</p>
      </div>
    </section>
  )
}
