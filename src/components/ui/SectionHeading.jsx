export default function SectionHeading({ id, eyebrow, title, text, align = 'start', as: Tag = 'h2', children }) {
  return (
    <header className={`section-heading${align === 'center' ? ' section-heading--center' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Tag id={id} className="section-heading__title">
        {title}
      </Tag>
      {text && <p className="section-heading__text">{text}</p>}
      {children}
    </header>
  )
}
