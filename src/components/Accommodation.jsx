import React from 'react'
import SectionHeader from './SectionHeader'
import AccommodationCard from './AccommodationCard'
import { useScrollReveal } from '../hooks/useScrollReveal'

const sharedAmenities = [
  'Queen bed, quality linen',
  'Double spa bath',
  'Well equipped kitchenette',
  'Slow combustion gas fire',
  'Air conditioning',
  'Fast fibre WiFi',
  'All electricity included',
  'Weekly professional clean',
  'Sunny deck with Weber BBQ',
  'Work desk & chair',
  'Towels & toiletries',
  'Washer & dryer',
  'Self check-in',
]

const properties = [
  {
    type: 'Studio',
    name: 'A Bower Above',
    price: 700,
    description:
      'A beautifully appointed, self contained studio perched above and to the side of the main property, with sweeping views and a serene sense of elevation. Light-filled, modern, and private - your own treehouse in the Blue Mountains.',
    amenities: sharedAmenities,
    airbnbUrl: 'https://airbnb.com/h/abowerabove',
    images: ['/assets/bower-above-1.jpg', '/assets/bower-above-2.jpg'],
  },
  {
    type: 'Cottage',
    name: 'Bower Cottage',
    price: 750,
    description:
      'A charming, fully self-contained cottage set within the beautiful grounds. Private, peaceful, and thoughtfully furnished - everything you need for a restorative stay in the mountains, without a thing to worry about.',
    amenities: sharedAmenities,
    airbnbUrl: 'https://airbnb.com/h/bowercottage',
    images: ['/assets/bower-cottage-1.jpg', '/assets/bower-cottage-2.jpg'],
  },
]

export default function Accommodation() {
  const ref = useScrollReveal()

  return (
    <section className="accommodation-section" id="accommodation">
      <div className="acc-intro">
        <SectionHeader
          label="Accommodation"
          title='Two private <em>retreats</em>'
          centered
        />
        <p>
          Both accommodations are fully self-contained, private, and set on a stunning
          acre-and-a-quarter property in Blackheath. Each is ideally suited for one or
          two professionals.
        </p>
      </div>

      <div className="acc-cards reveal" ref={ref}>
        {properties.map((prop, i) => (
          <AccommodationCard key={i} {...prop} />
        ))}
      </div>
    </section>
  )
}
