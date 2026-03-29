import React from 'react'

export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <div>
        <h4 className="feature-card-title">{title}</h4>
        <p className="feature-card-desc">{description}</p>
      </div>
    </div>
  )
}
