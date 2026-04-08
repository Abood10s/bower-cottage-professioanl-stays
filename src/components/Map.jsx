import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Map() {
  const ref = useScrollReveal()

  return (
    <section className="map-section">
      <div className="map-container reveal" ref={ref}>
        <div className="map-header">
          <span className="section-label">Find Us</span>
          <h2 className="section-title">
            Blackheath, <em>Blue Mountains</em>
          </h2>
          <p className="map-desc">
            Minutes from Katoomba, the Grand Canyon Loop Walk, and
            some of the most beautiful bushwalks in NSW.
          </p>
        </div>
        <div className="map-frame">
          <iframe
            title="Bower Cottage Location"
            src="https://maps.google.com/maps?q=Grand+Canyon+Walking+Track,+Blackheath+NSW&z=15&output=embed"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <a
          href="https://www.google.com/maps/search/Grand+Canyon+Walking+Track,+Blackheath+NSW"
          target="_blank"
          rel="noopener noreferrer"
          className="map-link"
        >
          View on Google Maps &rarr;
        </a>
      </div>
    </section>
  )
}
