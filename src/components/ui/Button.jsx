import { Link } from 'react-router-dom'
import { footer } from '../../config/business.js'
import { isExternal } from '../../utils/links.js'
import Icon from './Icon.jsx'

/**
 * A link styled as a button. Pass `to` for internal routes, or `href` for
 * tel:, mailto: and external URLs.
 * variant: 'primary' | 'outline' | 'light' | 'ghost'
 */
export default function Button({ to, href, children, variant = 'primary', size, icon, iconEnd, block, className = '', ...rest }) {
  const classes = ['btn', `btn--${variant}`, size && `btn--${size}`, block && 'btn--block', className].filter(Boolean).join(' ')
  const content = (
    <>
      {icon && <Icon name={icon} size={18} />}
      <span>{children}</span>
      {iconEnd && <Icon name={iconEnd} size={18} />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }

  const external = isExternal(href)
  return (
    <a href={href} className={classes} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
      {content}
      {external && <span className="visually-hidden"> {footer.newTab}</span>}
    </a>
  )
}

/** Inline arrow link ("Learn more →"), internal or external. */
export function TextLink({ to, href, children, icon = 'ArrowRight', className = '', ...rest }) {
  const classes = `text-link ${className}`
  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        <span>{children}</span>
        <Icon name={icon} size={16} />
      </Link>
    )
  }
  const external = isExternal(href)
  return (
    <a href={href} className={classes} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
      <span>{children}</span>
      <Icon name={external ? 'ArrowUpRight' : icon} size={16} />
      {external && <span className="visually-hidden"> {footer.newTab}</span>}
    </a>
  )
}
