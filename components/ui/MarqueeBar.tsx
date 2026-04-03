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
        background: 'rgba(108, 92, 231, 0.06)',
        borderColor: 'rgba(108, 92, 231, 0.15)',
      }}
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-display font-medium text-xs uppercase tracking-widest mx-4 flex-shrink-0"
            style={{ color: item === '·' ? '#6C5CE7' : 'rgba(255,255,255,0.4)' }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
