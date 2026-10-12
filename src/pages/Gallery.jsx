import GalleryGrid from '../components/gallery/GalleryGrid.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import { galleryPage, nav } from '../config/business.js'
import { usePageMetaFor } from '../hooks/usePageMeta.js'

export default function Gallery() {
  usePageMetaFor(galleryPage.path)
  return (
    <>
      <PageHeader
        eyebrow={galleryPage.eyebrow}
        title={galleryPage.title}
        text={galleryPage.text}
        image={galleryPage.image}
        crumbs={[{ label: nav.links[5].label }]}
      />
      <section className="section" aria-label={galleryPage.title}>
        <div className="container">
          <GalleryGrid items={galleryPage.items} filters />
        </div>
      </section>
    </>
  )
}
