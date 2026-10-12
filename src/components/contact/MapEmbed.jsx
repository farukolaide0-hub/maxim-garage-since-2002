import { contactPage } from '../../config/business.js'
import { mapsEmbedUrl } from '../../utils/links.js'

export default function MapEmbed({ location }) {
  if (!location.mapQuery) return null
  return (
    <div className="map-embed">
      <iframe
        src={mapsEmbedUrl(location.mapQuery)}
        title={contactPage.mapTitle(location.name)}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}
