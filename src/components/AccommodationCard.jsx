import React, { useState } from 'react'
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

  return (
    <div className="acc-card">
      {images.length > 0 && (
        <div className="acc-card-gallery">
          <OptimizedImage
            src={images[activeImg]}
            alt={`${name} - photo ${activeImg + 1}`}
            className="acc-card-img"
            widths={[480, 800]}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {images.length > 1 && (
            <div className="acc-gallery-dots">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`acc-gallery-dot${i === activeImg ? ' active' : ''}`}
                  onClick={() => setActiveImg(i)}
                  aria-label={`View photo ${i + 1}`}
                />
              ))}
            </div>
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
