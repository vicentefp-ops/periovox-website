const alignments = {
  left: 'items-start text-left',
  center: 'items-center text-center',
}

export function SectionHeader({
  label,
  title,
  description,
  align = 'left',
  className = '',
}) {
  return (
    <div className={`flex flex-col ${alignments[align]} ${className}`}>
      <span className="section-tag">{label}</span>
      <h2 className="section-title text-balance">{title}</h2>
      <p className="section-copy text-balance">{description}</p>
    </div>
  )
}
