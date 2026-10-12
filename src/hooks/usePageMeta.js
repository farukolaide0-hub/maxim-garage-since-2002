import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { seo } from '../config/business.js'

function setMeta(selector, attr, value) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement(selector.startsWith('link') ? 'link' : 'meta')
    const [, key, name] = selector.match(/\[(\w+)="([^"]+)"\]/)
    el.setAttribute(key, name)
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

/**
 * Updates title, description, canonical and Open Graph tags on client-side
 * navigation. The same values are written into static HTML at build time.
 */
export default function usePageMeta({ title, description, image, noindex = false }) {
  const { pathname } = useLocation()

  useEffect(() => {
    const fullTitle = title.includes(seo.siteName) ? title : `${title}${seo.titleSuffix}`
    const url = `${seo.siteUrl}${pathname === '/' ? '/' : pathname}`
    const img = new URL(image || seo.defaultImage, seo.siteUrl).href

    document.title = fullTitle
    setMeta('meta[name="description"]', 'content', description)
    setMeta('link[rel="canonical"]', 'href', url)
    setMeta('meta[property="og:title"]', 'content', fullTitle)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]', 'content', url)
    setMeta('meta[property="og:image"]', 'content', img)
    setMeta('meta[name="robots"]', 'content', noindex ? 'noindex' : 'index, follow')
  }, [title, description, image, noindex, pathname])
}

export function usePageMetaFor(path) {
  const page = seo.pages[path]
  usePageMeta({ title: page.title, description: page.description, image: page.image })
}
