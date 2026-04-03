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
    <div className={`flex flex-col gap-3 ${centered ? 'items-center text-center' : ''}`}>
      <span className="text-xs font-body font-medium uppercase tracking-widest text-accent">
        {eyebrow}
      </span>
      <h2
        className="font-display font-bold text-white leading-tight"
        style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', letterSpacing: '-0.02em' }}
      >
        {headline}
      </h2>
      {subCopy && (
        <p className="font-body text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl">
          {subCopy}
        </p>
      )}
    </div>
  )
}
