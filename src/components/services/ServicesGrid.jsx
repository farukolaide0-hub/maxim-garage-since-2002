import ServiceCard from './ServiceCard.jsx'

export default function ServicesGrid({ items, headingLevel }) {
  return (
    <ul className="service-grid">
      {items.map((service) => (
        <li key={service.slug}>
          <ServiceCard service={service} headingLevel={headingLevel} />
        </li>
      ))}
    </ul>
  )
}
