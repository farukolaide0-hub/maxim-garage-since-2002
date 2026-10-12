import AboutPreview from '../components/home/AboutPreview.jsx'
import EventFeature from '../components/home/EventFeature.jsx'
import GalleryPreview from '../components/home/GalleryPreview.jsx'
import Hero from '../components/home/Hero.jsx'
import LocationsPreview from '../components/home/LocationsPreview.jsx'
import ReviewPreview from '../components/home/ReviewPreview.jsx'
import ServicesPreview from '../components/home/ServicesPreview.jsx'
import SpecialismFeature from '../components/home/SpecialismFeature.jsx'
import { usePageMetaFor } from '../hooks/usePageMeta.js'

export default function Home() {
  usePageMetaFor('/')
  return (
    <>
      <Hero />
      <ServicesPreview />
      <SpecialismFeature />
      <AboutPreview />
      <ReviewPreview />
      <EventFeature />
      <GalleryPreview />
      <LocationsPreview />
    </>
  )
}
