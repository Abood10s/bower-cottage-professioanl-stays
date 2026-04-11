import React, { useState, useRef } from 'react'
import OptimizedImage from './OptimizedImage'

export default function AccommodationCard({
  type,
  name,
  price,
  description,
  amenities,
  airbnbUrl,
  images = [],
}) {
  const [activeImg, setActiveImg] = useState(0)
  const touchStart = useRef(null)

  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (touchStart.current === null) return
    const diff = touchStart.current - e.changedTouches[0].clientX
    if (diff > 50) {
      setActiveImg((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    } else if (diff < -50) {
      setActiveImg((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }
    touchStart.current = null
  }

  return (
    <div className="acc-card">
      {images.length > 0 && (
        <div
          className="acc-card-gallery"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <OptimizedImage
            src={images[activeImg]}
            alt={`${name} - photo ${activeImg + 1}`}
            className="acc-card-img"
            widths={[480, 800]}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {images.length > 1 && (
            <>
              <button
                className="acc-slider-arrow acc-slider-prev"
                onClick={() => setActiveImg((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                aria-label="Previous photo"
              >
                &#8249;
              </button>
              <button
                className="acc-slider-arrow acc-slider-next"
                onClick={() => setActiveImg((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                aria-label="Next photo"
              >
                &#8250;
              </button>
              <div className="acc-slider-counter">
                {activeImg + 1} / {images.length}
              </div>
            </>
          )}
        </div>
      )}
      <div className="acc-card-header">
        <div>
          <div className="acc-card-type">{type}</div>
          <div className="acc-card-title">{name}</div>
        </div>
        <div className="acc-price-badge">
          <span className="acc-price-num">${price}</span>
          <span className="acc-price-pw">Per Week</span>
        </div>
      </div>
      <div className="acc-card-body">
        <p className="acc-card-desc">{description}</p>
        <div className="acc-amenities-label">Everything Included</div>
        <div className="amenities-grid">
          {amenities.map((a, i) => (
            <span className="amenity" key={i}>{a}</span>
          ))}
        </div>
        <div className="acc-actions">
          <a href="#enquiry" className="btn btn-dark acc-btn">Enquire</a>
          <a
            href={airbnbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark acc-btn"
          >
            Book on Airbnb
          </a>
        </div>
      </div>
    </div>
  )
}
