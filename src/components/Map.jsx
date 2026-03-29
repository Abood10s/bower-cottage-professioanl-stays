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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.!2d150.284!3d-33.633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM4JzAwLjAiUyAxNTDCsDE3JzAwLjAiRQ!5e0!3m2!1sen!2sau!4v1"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <a
          href="https://www.google.com/maps/place/Blackheath+NSW+2785,+Australia"
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
