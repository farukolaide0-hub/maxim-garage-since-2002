import { Link } from 'react-router-dom'
import { breadcrumbs } from '../../config/business.js'
import Icon from './Icon.jsx'

// items: [{ label, to? }] — the last item is the current page.
export default function Breadcrumbs({ items }) {
  const all = [{ label: breadcrumbs.home, to: '/' }, ...items]
  return (
    <nav aria-label={breadcrumbs.label} className="breadcrumbs">
      <ol>
        {all.map((item, i) => {
          const last = i === all.length - 1
          return (
            <li key={item.label}>
              {last || !item.to ? (
                <span aria-current={last ? 'page' : undefined}>{item.label}</span>
              ) : (
                <Link to={item.to}>{item.label}</Link>
              )}
              {!last && <Icon name="ChevronRight" size={14} />}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
