const heights = [22, 38, 28, 52, 34, 46, 26, 42, 20, 36, 24, 48]

export function Waveform({ className = '' }) {
  return (
    <div className={`flex h-14 items-end gap-1.5 ${className}`} aria-hidden="true">
      {heights.map((height, index) => (
        <span
          key={`${height}-${index}`}
          className="wave-bar w-1.5 rounded-full bg-current/90"
          style={{
            height,
            animationDelay: `${index * 90}ms`,
          }}
        />
      ))}
    </div>
  )
}
