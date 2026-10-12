import { brand, contactPage, hours } from '../../config/business.js'

// Day of week (0 = Sunday) in the business's own timezone.
function todayInBusinessTz() {
  try {
    const name = new Intl.DateTimeFormat('en-US', { weekday: 'short', timeZone: brand.timezone }).format(new Date())
    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(name)
  } catch {
    return new Date().getDay()
  }
}

export default function HoursList({ compact = false }) {
  const today = todayInBusinessTz()
  return (
    <ul className="hours-list">
      {hours.map((h) => {
        const isToday = h.dayNumbers.includes(today)
        return (
          <li key={h.days} className={isToday ? 'is-today' : undefined}>
            <span>
              {compact ? h.short : h.days}
              {isToday && <em>{contactPage.todayLabel}</em>}
            </span>
            <span>{h.time}</span>
          </li>
        )
      })}
    </ul>
  )
}
