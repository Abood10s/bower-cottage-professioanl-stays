import React from 'react'

export default function SectionHeader({ label, title, centered = false, lightLabel = false }) {
  const style = centered ? { textAlign: 'center' } : {}
  const ruleStyle = centered
    ? { margin: '1.2rem auto 2rem' }
    : { margin: '1.2rem 0 2rem' }

  return (
    <div style={style}>
      <p className="section-label" style={lightLabel ? { color: 'var(--gold)' } : {}}>
        {label}
      </p>
      <h2
        className="section-title"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className="section-rule" style={ruleStyle} />
    </div>
  )
}
