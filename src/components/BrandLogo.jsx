const sizeClasses = {
  sm: 'h-10 w-10',
  md: 'h-12 w-12',
  lg: 'h-16 w-16',
  xl: 'h-16 w-16 sm:h-20 sm:w-20',
}

const titleClasses = {
  sm: 'text-base sm:text-lg',
  md: 'text-lg sm:text-xl',
  lg: 'text-xl sm:text-2xl',
  xl: 'text-[1.75rem] sm:text-[2.3rem]',
}

export function BrandLogo({
  className = '',
  markOnly = false,
  size = 'md',
  compactText = false,
  tagline = 'Voice periodontal charting',
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className={`relative inline-flex ${sizeClasses[size]} shrink-0 items-center justify-center`}>
        <span className="absolute inset-0 rounded-[1.5rem] bg-[radial-gradient(circle_at_30%_20%,rgba(0,178,235,0.22),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(0,226,174,0.2),transparent_58%)] blur-md" />
        <span className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[1.35rem] border border-white/85 bg-white/[0.92] shadow-soft">
          <img src="/periovox-logo.svg" alt="PerioVoxAI logo" className="h-[74%] w-[74%] object-contain" />
        </span>
      </span>
      {!markOnly && (
        <div className="leading-none">
          <div className={`font-display font-semibold tracking-[-0.04em] text-ink ${titleClasses[size]}`}>PerioVoxAI</div>
          <div className={`mt-1 text-[0.68rem] uppercase tracking-[0.28em] text-slate-400 ${compactText ? 'hidden sm:block' : ''}`}>
            {tagline}
          </div>
        </div>
      )}
    </div>
  )
}
