import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageLayout from './components/layout/PageLayout.jsx'
import { brand, event } from './config/business.js'
import About from './pages/About.jsx'
import Appointment from './pages/Appointment.jsx'
import Careers from './pages/Careers.jsx'
import Contact from './pages/Contact.jsx'
import Event2026 from './pages/Event2026.jsx'
import Gallery from './pages/Gallery.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import Privacy from './pages/Privacy.jsx'
import Quote from './pages/Quote.jsx'
import Reviews from './pages/Reviews.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import Services from './pages/Services.jsx'
import Specials from './pages/Specials.jsx'

// Brand colours from the config become CSS custom properties.
const root = document.documentElement.style
root.setProperty('--accent', brand.colors.accent)
root.setProperty('--accent-bright', brand.colors.accentBright)
root.setProperty('--accent-ink', brand.colors.accentInk)

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="about" element={<About />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="specials" element={<Specials />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="get-a-quote" element={<Quote />} />
          <Route path="careers" element={<Careers />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path={event.path.slice(1)} element={<Event2026 />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
