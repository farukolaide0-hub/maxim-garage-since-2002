import PageHeader from '../components/ui/PageHeader.jsx'
import { footer, privacyPage } from '../config/business.js'
import { usePageMetaFor } from '../hooks/usePageMeta.js'

export default function Privacy() {
  usePageMetaFor(privacyPage.path)
  return (
    <>
      <PageHeader
        eyebrow={privacyPage.eyebrow}
        title={privacyPage.title}
        text={`${privacyPage.updatedLabel}: ${privacyPage.updated}`}
        crumbs={[{ label: footer.extraLinks[2].label }]}
      />
      <section className="section section--light">
        <div className="container legal">
          {privacyPage.sections.map((s) => (
            <section key={s.title} className="legal__section">
              <h2>{s.title}</h2>
              {s.body.map((p) => (
                <p key={p.slice(0, 30)}>{p}</p>
              ))}
            </section>
          ))}
        </div>
      </section>
    </>
  )
}
