import Button from '../components/ui/Button.jsx'
import Icon from '../components/ui/Icon.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import { breadcrumbs, event } from '../config/business.js'
import { usePageMetaFor } from '../hooks/usePageMeta.js'
import { externalProps } from '../utils/links.js'

export default function Event2026() {
  usePageMetaFor(event.path)
  return (
    <>
      <PageHeader
        eyebrow={event.eyebrow}
        title={event.title}
        text={event.subtitle}
        image={event.image}
        crumbs={[{ label: breadcrumbs.events }, { label: event.title }]}
      >
        <span className="tag tag--status">
          <Icon name="CalendarDays" size={16} />
          {event.statusLabel}
        </span>
        <Button href={event.organizerUrl} variant="outline" iconEnd="ArrowUpRight">
          {event.organizer}
        </Button>
      </PageHeader>
      <p className="container image-note image-note--below">{event.imageNote}</p>

      <section className="section" aria-labelledby="event-recap-title">
        <div className="container event-layout">
          <div className="event-layout__recap">
            <SectionHeading id="event-recap-title" eyebrow={event.recap.eyebrow} title={event.recap.title} />
            <div className="prose prose--large">
              {event.recap.paragraphs.map((p) => (
                <p key={p.slice(0, 30)}>{p}</p>
              ))}
            </div>
            <p className="note">
              <Icon name="Info" size={20} />
              {event.nextYear}
            </p>
          </div>
          <aside className="event-layout__facts">
            <h2 id="event-facts-title" className="aside-title">
              {event.factsTitle}
            </h2>
            <dl className="fact-list">
              {event.facts.map((f) => (
                <div key={f.label}>
                  <dt>
                    <Icon name={f.icon} size={18} />
                    {f.label}
                  </dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="section section--light" aria-labelledby="event-links-title">
        <div className="container">
          <SectionHeading id="event-links-title" title={event.linksTitle} text={event.photoCredit} />
          <ul className="link-cards">
            {event.links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="link-card" {...externalProps(l.href)}>
                  <span>
                    <small>{l.source}</small>
                    <strong>{l.label}</strong>
                  </span>
                  <Icon name="ArrowUpRight" size={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
