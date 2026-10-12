import { useState } from 'react'
import { galleryPage } from '../../config/business.js'
import Media from '../ui/Media.jsx'
import Lightbox from './Lightbox.jsx'

export default function GalleryGrid({ items, filters = false }) {
  const [category, setCategory] = useState('all')
  const [openIndex, setOpenIndex] = useState(null)
  const visible = category === 'all' ? items : items.filter((i) => i.category === category)
  const usedCategories = galleryPage.categories.filter((c) => items.some((i) => i.category === c.id))

  return (
    <>
      {filters && usedCategories.length > 1 && (
        <div className="filter-bar" role="group" aria-label={galleryPage.filterLabel}>
          {[{ id: 'all', label: galleryPage.allLabel }, ...usedCategories].map((c) => (
            <button
              key={c.id}
              type="button"
              className="filter-chip"
              aria-pressed={category === c.id}
              onClick={() => setCategory(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>
      )}

      <ul className="gallery-grid">
        {visible.map((item, i) => (
          <li key={item.src}>
            <button type="button" className="gallery-item" onClick={() => setOpenIndex(i)} aria-label={galleryPage.openLabel(item.caption)}>
              <Media image={item} className="gallery-item__media" badge />
              <span className="gallery-item__caption" aria-hidden="true">
                {item.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {openIndex !== null && (
        <Lightbox items={visible} index={openIndex} onClose={() => setOpenIndex(null)} onChange={setOpenIndex} />
      )}
    </>
  )
}
