'use client'

interface MarqueeBarProps {
  items: string[]
}

export default function MarqueeBar({ items }: MarqueeBarProps) {
  // Double items for seamless loop
  const doubled = [...items, ...items]

  return (
    <div
      className="overflow-hidden py-3 border-y"
      style={{
        background: 'rgba(212, 175, 55, 0.04)',
        borderColor: 'rgba(212, 175, 55, 0.12)',
      }}
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-display font-medium text-xs uppercase tracking-widest mx-4 flex-shrink-0"
            style={{ color: item === '·' ? '#D4AF37' : 'rgba(255,255,255,0.4)' }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
