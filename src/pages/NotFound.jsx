import Button from '../components/ui/Button.jsx'
import Media from '../components/ui/Media.jsx'
import { images, notFoundPage, seo } from '../config/business.js'
import usePageMeta from '../hooks/usePageMeta.js'

export default function NotFound() {
  usePageMeta({ ...seo.notFound, noindex: true })
  return (
    <section className="not-found" aria-labelledby="page-title">
      <Media image={images.tachometer} className="not-found__media" eager />
      <div className="container not-found__inner">
        <span className="eyebrow">{notFoundPage.eyebrow}</span>
        <p className="not-found__code" aria-hidden="true">
          404
        </p>
        <h1 id="page-title">{notFoundPage.title}</h1>
        <p>{notFoundPage.text}</p>
        <div className="inline-actions">
          {notFoundPage.links.map((l, i) => (
            <Button key={l.to} to={l.to} variant={i === 0 ? 'primary' : 'outline'}>
              {l.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
