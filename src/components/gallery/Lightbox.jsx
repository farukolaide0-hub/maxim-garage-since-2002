import { useEffect, useRef } from 'react'
import { galleryPage } from '../../config/business.js'
import Icon from '../ui/Icon.jsx'

/** Modal photo viewer: Escape closes, arrow keys navigate, focus is trapped. */
export default function Lightbox({ items, index, onClose, onChange }) {
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  const item = items[index]
  const { lightbox, genuineLabel, illustrativeLabel } = galleryPage

  useEffect(() => {
    const previouslyFocused = document.activeElement
    closeRef.current?.focus()
    document.body.classList.add('menu-open')
    return () => {
      document.body.classList.remove('menu-open')
      previouslyFocused?.focus?.()
    }
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') onChange((index + 1) % items.length)
      else if (e.key === 'ArrowLeft') onChange((index - 1 + items.length) % items.length)
      else if (e.key === 'Tab') {
        const focusable = dialogRef.current.querySelectorAll('button')
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [index, items.length, onChange, onClose])

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={lightbox.label} ref={dialogRef} onClick={onClose}>
      <div className="lightbox__frame" onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={item.alt} />
        <div className="lightbox__bar">
          <p>
            <span className={`tag${item.genuine ? ' tag--accent' : ''}`}>{item.genuine ? genuineLabel : illustrativeLabel}</span>
            {item.caption}
          </p>
          <span className="lightbox__count">{lightbox.counter(index + 1, items.length)}</span>
        </div>
      </div>
      <button ref={closeRef} type="button" className="lightbox__btn lightbox__close" onClick={onClose}>
        <Icon name="X" size={24} />
        <span className="visually-hidden">{lightbox.close}</span>
      </button>
      <button
        type="button"
        className="lightbox__btn lightbox__prev"
        onClick={(e) => {
          e.stopPropagation()
          onChange((index - 1 + items.length) % items.length)
        }}
      >
        <Icon name="ChevronLeft" size={28} />
        <span className="visually-hidden">{lightbox.previous}</span>
      </button>
      <button
        type="button"
        className="lightbox__btn lightbox__next"
        onClick={(e) => {
          e.stopPropagation()
          onChange((index + 1) % items.length)
        }}
      >
        <Icon name="ChevronRight" size={28} />
        <span className="visually-hidden">{lightbox.next}</span>
      </button>
    </div>
  )
}
