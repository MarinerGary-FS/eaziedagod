interface SectionHeaderProps {
  eyebrow: string
  headline: string
  subCopy?: string
  centered?: boolean
}

export default function SectionHeader({
  eyebrow,
  headline,
  subCopy,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={`flex flex-col gap-4 ${centered ? 'items-center text-center' : ''}`}>
      {/* Eyebrow with accent rule */}
      <div className={`flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
        {!centered && (
          <div
            className="h-px w-12"
            style={{ background: 'linear-gradient(to right, #6C5CE7, transparent)' }}
          />
        )}
        <span className="eyebrow">{eyebrow}</span>
      </div>

      {/* Headline */}
      <h2
        className="font-display font-black text-white leading-[0.95] tracking-tight"
        style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', letterSpacing: '-0.03em' }}
      >
        {headline}
      </h2>

      {/* Sub copy */}
      {subCopy && (
        <p className="font-body text-text-secondary leading-relaxed max-w-xl" style={{ fontSize: '1.0625rem' }}>
          {subCopy}
        </p>
      )}
    </div>
  )
}
