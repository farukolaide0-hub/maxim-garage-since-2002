import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  Briefcase,
  Calendar,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  CircleCheck,
  ClipboardCheck,
  Clock,
  Cog,
  Cpu,
  Disc3,
  Droplets,
  FileCheck,
  Flag,
  HeartHandshake,
  Info,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Navigation,
  Phone,
  Quote,
  ScanSearch,
  Star,
  Tag,
  Users,
  Wrench,
  X,
  Zap,
} from 'lucide-react'

// Lucide icons used across the site, referenced by name from the config.
const lucide = {
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  Briefcase,
  Calendar,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  CircleCheck,
  ClipboardCheck,
  Clock,
  Cog,
  Cpu,
  Disc3,
  Droplets,
  FileCheck,
  Flag,
  HeartHandshake,
  Info,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Navigation,
  Phone,
  Quote,
  ScanSearch,
  Star,
  Tag,
  Users,
  Wrench,
  X,
  Zap,
}

// Brand marks are not part of Lucide.
const brandPaths = {
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: (
    <path d="M14 21v-7.5h2.6l.4-3H14V8.7c0-.9.3-1.5 1.6-1.5H17V4.5a19 19 0 0 0-2.3-.1c-2.3 0-3.8 1.4-3.8 3.9v2.2H8.3v3h2.6V21" />
  ),
}

export default function Icon({ name, size = 20, strokeWidth = 1.8, className, ...rest }) {
  const LucideIcon = lucide[name]
  if (LucideIcon) {
    return <LucideIcon size={size} strokeWidth={strokeWidth} className={className} aria-hidden="true" focusable="false" {...rest} />
  }
  const path = brandPaths[name]
  if (!path) return null
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {path}
    </svg>
  )
}
