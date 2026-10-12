import { useState } from 'react'
import { brand, galleryPage } from '../../config/business.js'

/**
 * Image in a fixed-ratio container (ratio set in CSS) with object-fit: cover.
 * Falls back to a branded panel if the image fails to load.
 * `badge` shows whether the photo is a genuine Maxim Garage photo.
 */
export default function Media({ image, className = '', eager = false, sizes, badge = false, children }) {
  const [failed, setFailed] = useState(!image?.src)

  return (
    <div className={`media ${className}`}>
      {!failed && (
        <img
          src={image.src}
          alt={image.alt}
          sizes={sizes}
          loading={eager ? 'eager' : 'lazy'}
          fetchPriority={eager ? 'high' : undefined}
          decoding="async"
          onError={() => setFailed(true)}
        />
      )}
      {failed && (
        <div className="media__fallback" role="img" aria-label={image?.alt}>
          <span className="logo-tile logo-tile--lg">
            <img src={brand.logo.src} alt="" width={brand.logo.width} height={brand.logo.height} />
          </span>
        </div>
      )}
      {badge && image?.genuine && <span className="media__badge">{galleryPage.genuineLabel}</span>}
      {children}
    </div>
  )
}
