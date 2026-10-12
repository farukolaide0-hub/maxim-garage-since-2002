import Breadcrumbs from './Breadcrumbs.jsx'
import Media from './Media.jsx'

/** Banner at the top of every inner page: image, breadcrumbs, H1 and intro. */
export default function PageHeader({ eyebrow, title, text, image, crumbs, children }) {
  return (
    <section className="page-header" aria-labelledby="page-title">
      {image && <Media image={image} className="page-header__media" eager />}
      <div className="container page-header__inner">
        {crumbs && <Breadcrumbs items={crumbs} />}
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 id="page-title" className="page-header__title">
          {title}
        </h1>
        {text && <p className="page-header__text">{text}</p>}
        {children && <div className="page-header__actions">{children}</div>}
      </div>
    </section>
  )
}
