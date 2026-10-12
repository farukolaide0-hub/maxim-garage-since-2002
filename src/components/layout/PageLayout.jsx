import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { footer } from '../../config/business.js'
import CtaBand from './CtaBand.jsx'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'

// Routes that already end in a form or their own call to action.
const NO_CTA_BAND = ['/appointment', '/get-a-quote', '/contact', '/careers']

export default function PageLayout() {
  const { pathname, search } = useLocation()

  // New page: start at the top and move focus to the main content
  // (skipped on first load so the browser keeps its default behaviour).
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    const main = document.getElementById('main')
    if (main && document.activeElement && document.activeElement !== document.body) {
      main.focus({ preventScroll: true })
    }
  }, [pathname, search])

  return (
    <>
      <a href="#main" className="skip-link">
        {footer.skipLink}
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Outlet />
        {!NO_CTA_BAND.includes(pathname) && <CtaBand />}
      </main>
      <Footer />
    </>
  )
}
