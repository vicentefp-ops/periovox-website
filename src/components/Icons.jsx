function Icon({ className = '', children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

export function ArrowUpRightIcon({ className = 'h-4 w-4' }) {
  return (
    <Icon className={className}>
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </Icon>
  )
}

export function ArrowRightIcon({ className = 'h-4 w-4' }) {
  return (
    <Icon className={className}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </Icon>
  )
}

export function MicrophoneIcon({ className = 'h-5 w-5' }) {
  return (
    <Icon className={className}>
      <path d="M12 16a4 4 0 0 0 4-4V7a4 4 0 1 0-8 0v5a4 4 0 0 0 4 4Z" />
      <path d="M5 11a7 7 0 0 0 14 0" />
      <path d="M12 18v4" />
    </Icon>
  )
}

export function SparklesIcon({ className = 'h-5 w-5' }) {
  return (
    <Icon className={className}>
      <path d="m12 3 1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2L12 3Z" />
      <path d="m5 14 .8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14Z" />
      <path d="m19 13 .7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8Z" />
    </Icon>
  )
}

export function BrowserIcon({ className = 'h-5 w-5' }) {
  return (
    <Icon className={className}>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="M3 9h18" />
      <path d="M7 7h.01" />
      <path d="M10 7h.01" />
      <path d="M13 7h.01" />
    </Icon>
  )
}

export function GlobeIcon({ className = 'h-5 w-5' }) {
  return (
    <Icon className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18" />
      <path d="M12 3a15 15 0 0 0 0 18" />
    </Icon>
  )
}

export function UsersIcon({ className = 'h-5 w-5' }) {
  return (
    <Icon className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9.5" cy="7" r="3.5" />
      <path d="M21 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </Icon>
  )
}

export function ClipboardIcon({ className = 'h-5 w-5' }) {
  return (
    <Icon className={className}>
      <rect x="6" y="4" width="12" height="16" rx="2" />
      <path d="M9 4.5h6" />
      <path d="M9 9h6" />
      <path d="M9 13h6" />
    </Icon>
  )
}

export function WorkflowIcon({ className = 'h-5 w-5' }) {
  return (
    <Icon className={className}>
      <path d="M5 7h9" />
      <path d="m10 3 4 4-4 4" />
      <path d="M19 17H10" />
      <path d="m14 13-4 4 4 4" />
    </Icon>
  )
}

export function HardwareIcon({ className = 'h-5 w-5' }) {
  return (
    <Icon className={className}>
      <rect x="4" y="5" width="10" height="14" rx="2" />
      <path d="M8 8h2" />
      <path d="M18 7v10" />
      <path d="M16 9h4" />
      <path d="M16 15h4" />
    </Icon>
  )
}

export function ChartIcon({ className = 'h-5 w-5' }) {
  return (
    <Icon className={className}>
      <path d="M4 20V6" />
      <path d="M10 20V10" />
      <path d="M16 20V4" />
      <path d="M22 20H2" />
    </Icon>
  )
}

export function ReportIcon({ className = 'h-5 w-5' }) {
  return (
    <Icon className={className}>
      <path d="M7 3h7l5 5v13H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      <path d="M14 3v6h6" />
      <path d="M9 13h6" />
      <path d="M9 17h6" />
    </Icon>
  )
}

export function TimelineIcon({ className = 'h-5 w-5' }) {
  return (
    <Icon className={className}>
      <path d="M6 5v14" />
      <path d="M18 5v14" />
      <path d="M6 9h12" />
      <path d="M6 15h12" />
      <circle cx="12" cy="9" r="1.6" />
      <circle cx="12" cy="15" r="1.6" />
    </Icon>
  )
}

export function ShieldIcon({ className = 'h-5 w-5' }) {
  return (
    <Icon className={className}>
      <path d="M12 3 5 6v6c0 5 3.4 8.6 7 9 3.6-.4 7-4 7-9V6l-7-3Z" />
      <path d="m9.5 12 1.7 1.7L14.8 10" />
    </Icon>
  )
}

export function BannerIcon({ className = 'h-5 w-5' }) {
  return (
    <Icon className={className}>
      <rect x="3" y="6" width="18" height="10" rx="2" />
      <path d="M7 20v-4" />
      <path d="M17 20v-4" />
      <path d="M7 10h10" />
    </Icon>
  )
}

export function CheckIcon({ className = 'h-5 w-5' }) {
  return (
    <Icon className={className}>
      <path d="m5 12 4.2 4.2L19 6.5" />
    </Icon>
  )
}

export function MenuIcon({ className = 'h-5 w-5' }) {
  return (
    <Icon className={className}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </Icon>
  )
}

export function CloseIcon({ className = 'h-5 w-5' }) {
  return (
    <Icon className={className}>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </Icon>
  )
}

export function MailIcon({ className = 'h-5 w-5' }) {
  return (
    <Icon className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m5 8 7 5 7-5" />
    </Icon>
  )
}

export function CookieIcon({ className = 'h-5 w-5' }) {
  return (
    <Icon className={className}>
      <path d="M14.5 3a4.5 4.5 0 0 0 4.5 4.5A4.5 4.5 0 0 1 14.5 12 4.5 4.5 0 0 1 10 7.5 4.5 4.5 0 0 1 14.5 3Z" />
      <path d="M12 4.5A7.5 7.5 0 1 0 19.5 12" />
      <circle cx="8" cy="9" r=".8" fill="currentColor" stroke="none" />
      <circle cx="7.5" cy="14" r=".8" fill="currentColor" stroke="none" />
      <circle cx="12.5" cy="16" r=".8" fill="currentColor" stroke="none" />
    </Icon>
  )
}

export function FacebookIcon({ className = 'h-5 w-5' }) {
  return (
    <Icon className={className}>
      <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v5h4v-5h3l1-4h-4V8a1 1 0 0 1 1-1Z" />
    </Icon>
  )
}

export function InstagramIcon({ className = 'h-5 w-5' }) {
  return (
    <Icon className={className}>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="16.5" cy="7.5" r=".9" fill="currentColor" stroke="none" />
    </Icon>
  )
}

export function LinkedInIcon({ className = 'h-5 w-5' }) {
  return (
    <Icon className={className}>
      <rect x="4" y="9" width="3.5" height="11" />
      <circle cx="5.75" cy="5.8" r="1.3" />
      <path d="M11 20V9h3.5v1.9c.8-1.3 2-2.3 4-2.3 2.8 0 4.5 1.9 4.5 5.3V20h-3.5v-5.4c0-1.6-.6-2.7-2.1-2.7-1.2 0-1.9.8-2.2 1.6-.1.3-.2.8-.2 1.3V20Z" />
    </Icon>
  )
}
