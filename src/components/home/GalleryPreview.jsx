import { galleryPage, home } from '../../config/business.js'
import GalleryGrid from '../gallery/GalleryGrid.jsx'
import { TextLink } from '../ui/Button.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

export default function GalleryPreview() {
  const items = galleryPage.items.slice(0, home.gallery.count)
  return (
    <section className="section" aria-labelledby="home-gallery-title">
      <div className="container">
        <div className="section-head-row">
          <SectionHeading id="home-gallery-title" eyebrow={home.gallery.eyebrow} title={home.gallery.title} />
          <TextLink to={home.gallery.link.to}>{home.gallery.link.label}</TextLink>
        </div>
        <GalleryGrid items={items} />
      </div>
    </section>
  )
}
