import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { brand, contact, nav } from '../../config/business.js'
import { telHref } from '../../utils/links.js'
import Button from '../ui/Button.jsx'
import Icon from '../ui/Icon.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const [menuPath, setMenuPath] = useState(pathname)
  const toggleRef = useRef(null)
  const menuRef = useRef(null)

  // Close the mobile menu whenever the route changes.
  if (menuPath !== pathname) {
    setMenuPath(pathname)
    setOpen(false)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const onResize = () => window.innerWidth > 1180 && setOpen(false)
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    document.body.classList.add('menu-open')
    const frame = requestAnimationFrame(() => menuRef.current?.querySelector('a')?.focus())
    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
      document.body.classList.remove('menu-open')
    }
  }, [open])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="topbar">
        <div className="container topbar__inner">
          <span>
            <Icon name="MapPin" size={15} />
            {nav.topBar.areas}
          </span>
          <span>
            <Icon name="Clock" size={15} />
            {nav.topBar.hours}
          </span>
          <a href={`mailto:${contact.email}`}>
            <Icon name="Mail" size={15} />
            {contact.email}
          </a>
        </div>
      </div>

      <div className="navbar">
        <div className="container navbar__inner">
          <Link to="/" className="navbar__brand">
            <span className="logo-tile">
              <img src={brand.logo.src} alt={brand.logo.alt} width={brand.logo.width} height={brand.logo.height} />
            </span>
          </Link>

          <nav aria-label="Main" className="navbar__nav">
            <ul className="navbar__links">
              {nav.links.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} end={link.to === '/'} className="navbar__link">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="navbar__actions">
            <a href={telHref(contact.primaryPhone)} className="navbar__phone">
              <span className="navbar__phone-icon">
                <Icon name="Phone" size={18} />
              </span>
              {contact.primaryPhone.display}
            </a>
            <Button to={nav.cta.to} size="sm" className="navbar__cta">
              {nav.cta.label}
            </Button>
            <button
              ref={toggleRef}
              type="button"
              className="navbar__toggle"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <Icon name={open ? 'X' : 'Menu'} size={24} />
              <span className="visually-hidden">{open ? nav.closeLabel : nav.menuLabel}</span>
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={menuRef}
        className={`mobile-menu${open ? ' is-open' : ''}`}
        inert={!open}
        onClick={(e) => e.target.closest('a') && setOpen(false)}
      >
        <div className="container mobile-menu__inner">
          <nav aria-label="Mobile">
            <ul className="mobile-menu__links">
              {nav.links.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} end={link.to === '/'}>
                    {link.label}
                    <Icon name="ArrowRight" size={20} />
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mobile-menu__actions">
            <Button to={nav.cta.to} icon="Calendar" block>
              {nav.cta.label}
            </Button>
            <Button to={nav.quoteCta.to} variant="outline" icon="Tag" block>
              {nav.quoteCta.label}
            </Button>
            <Button href={telHref(contact.primaryPhone)} variant="ghost" icon="Phone" block>
              {contact.primaryPhone.display}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
