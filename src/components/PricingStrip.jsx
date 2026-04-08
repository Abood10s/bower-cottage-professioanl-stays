import React from 'react'

const items = [
  { value: '$700', label: 'Per Week - Bower Above', isPrice: true },
  { value: '$750', label: 'Per Week - Bower Cottage', isPrice: true },
  { value: 'All Bills', label: 'Included (Gas, Elec, WiFi)', isPrice: false },
  { value: 'Weekly', label: 'Professional Cleaning', isPrice: false },
  { value: 'Flexible', label: 'Short & Longer Term Stays', isPrice: false },
]

export default function PricingStrip() {
  return (
    <div className="pricing-strip">
      <div className="pricing-grid">
        {items.map((item, i) => (
          <div className="pricing-item" key={i}>
            <div className={`price-big ${item.isPrice ? '' : 'price-text'}`}>
              {item.value}
            </div>
            <div className="price-sep" />
            <div className="price-label">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
