import LocationCard from '../components/contact/LocationCard.jsx'
import Button from '../components/ui/Button.jsx'
import Icon from '../components/ui/Icon.jsx'
import Media from '../components/ui/Media.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import { aboutPage, home, locations, nav } from '../config/business.js'
import { usePageMetaFor } from '../hooks/usePageMeta.js'

export default function About() {
  usePageMetaFor(aboutPage.path)
  const { story, approach, team, licence } = aboutPage
  return (
    <>
      <PageHeader
        eyebrow={aboutPage.eyebrow}
        title={aboutPage.title}
        text={aboutPage.text}
        image={aboutPage.image}
        crumbs={[{ label: nav.links[2].label }]}
      />

      <section className="section" aria-labelledby="story-title">
        <div className="container split">
          <figure className="split__media">
            <Media image={aboutPage.image} className="frame frame--tall" badge />
            <figcaption>{home.about.caption}</figcaption>
          </figure>
          <div className="split__content">
            <SectionHeading id="story-title" eyebrow={story.eyebrow} title={story.title} />
            <div className="prose">
              {story.paragraphs.map((p) => (
                <p key={p.slice(0, 30)}>{p}</p>
              ))}
            </div>
            <div className="licence">
              <Icon name="BadgeCheck" size={28} />
              <div>
                <strong>{licence.title}</strong>
                <p>{licence.text}</p>
                <Button href={licence.link.href} variant="ghost" size="sm" iconEnd="ArrowUpRight">
                  {licence.link.label}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--light" aria-labelledby="approach-title">
        <div className="container">
          <SectionHeading id="approach-title" eyebrow={approach.eyebrow} title={approach.title} />
          <ul className="feature-grid">
            {approach.items.map((item) => (
              <li key={item.title} className="feature">
                <span className="feature__icon" aria-hidden="true">
                  <Icon name={item.icon} size={24} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="team-title">
        <div className="container split split--reverse">
          <figure className="split__media">
            <Media image={team.image} className="frame frame--square" badge />
            <figcaption>{team.caption}</figcaption>
          </figure>
          <div className="split__content">
            <SectionHeading id="team-title" eyebrow={team.eyebrow} title={team.title} />
            <div className="prose">
              {team.paragraphs.map((p) => (
                <p key={p.slice(0, 30)}>{p}</p>
              ))}
            </div>
            <Button to={team.link.to} variant="outline" icon="Briefcase">
              {team.link.label}
            </Button>
          </div>
        </div>
      </section>

      <section className="section section--light" aria-labelledby="about-locations-title">
        <div className="container">
          <SectionHeading id="about-locations-title" eyebrow={home.locations.eyebrow} title={home.locations.title} />
          <div className="locations-grid locations-grid--two">
            {locations.map((loc) => (
              <LocationCard key={loc.id} location={loc} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
