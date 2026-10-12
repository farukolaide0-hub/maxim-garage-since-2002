import EnquiryForm from '../components/forms/EnquiryForm.jsx'
import { careersFields } from '../components/forms/fieldSets.js'
import Icon from '../components/ui/Icon.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import { careersPage, footer } from '../config/business.js'
import { usePageMetaFor } from '../hooks/usePageMeta.js'

export default function Careers() {
  usePageMetaFor(careersPage.path)
  return (
    <>
      <PageHeader
        eyebrow={careersPage.eyebrow}
        title={careersPage.title}
        text={careersPage.text}
        image={careersPage.image}
        crumbs={[{ label: footer.extraLinks[0].label }]}
      />

      <section className="section section--light" aria-labelledby="vacancies-title">
        <div className="container">
          <SectionHeading id="vacancies-title" title={careersPage.vacanciesTitle} text={careersPage.intro} />
          <div className="vacancies">
            {careersPage.vacancies.map((v) => (
              <details key={v.title} className="vacancy">
                <summary>
                  <span className="vacancy__icon" aria-hidden="true">
                    <Icon name="Briefcase" size={22} />
                  </span>
                  <span className="vacancy__head">
                    <h3>{v.title}</h3>
                    <span>{v.summary}</span>
                  </span>
                  <span className="vacancy__toggle" aria-hidden="true" />
                </summary>
                <div className="vacancy__body">
                  {v.lists.map((list) => (
                    <div key={list.title}>
                      <h4>{list.title}</h4>
                      <ul className="check-list">
                        {list.items.map((item) => (
                          <li key={item}>
                            <Icon name="Check" size={18} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </details>
            ))}
          </div>
          <p className="note">
            <Icon name="Info" size={20} />
            {careersPage.listedNote}
          </p>
        </div>
      </section>

      <section className="section section--alt" aria-label={careersPage.formTitle}>
        <div className="container contact-layout">
          <div className="contact-layout__info">
            <div className="info-card">
              <h2>{careersPage.conditions.title}</h2>
              <ul className="check-list">
                {careersPage.conditions.items.map((item) => (
                  <li key={item}>
                    <Icon name="Check" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <EnquiryForm fields={careersFields} subjectKey="careers" title={careersPage.formTitle} intro={careersPage.formText} />
        </div>
      </section>
    </>
  )
}
