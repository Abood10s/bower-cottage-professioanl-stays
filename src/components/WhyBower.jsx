import React from 'react'
import SectionHeader from './SectionHeader'
import FeatureCard from './FeatureCard'
import OptimizedImage from './OptimizedImage'
import { useScrollReveal } from '../hooks/useScrollReveal'

const features = [
  {
    icon: '🌿',
    title: 'Genuinely Peaceful',
    description: 'No traffic noise, no neighbours, no interruptions. Just birdsong, mountain air, and the kind of silence that actually lets you switch off.',
  },
  {
    icon: '🥾',
    title: 'Beautiful Walks from the Door',
    description: 'The Grand Canyon Loop, Walls Cave, and the Grose Valley are minutes away. Step outside and explore some of the most stunning bushwalks in NSW.',
  },
  {
    icon: '🛁',
    title: 'Arrive & It\'s All Done',
    description: 'Everything is already set up — quality linen, stocked kitchenette, firewood ready, spa filled. No packing lists, no errands. Just walk in and relax.',
  },
  {
    icon: '🔥',
    title: 'A Real Retreat, Not a Rental',
    description: 'Light the fire, pour a glass, sink into the spa. This is a place designed to restore you — not just house you. You\'ll leave feeling like yourself again.',
  },
]

export default function WhyBower() {
  const ref = useScrollReveal()

  return (
    <section className="why-section" id="why">
      <div className="why-layout reveal" ref={ref}>
        <div className="why-text">
          <SectionHeader
            label="Why Bower Cottage"
            title='A respite that <em>restores</em> you'
          />
          <p className="why-body">
            Medicine is relentless. You give everything to your patients, your team,
            your shift — and there's rarely anything left for you. Bower Cottage exists
            so you have somewhere quiet, beautiful, and already set up to come and simply
            be still for a while.
          </p>
          <p className="why-sub">
            Set on an acre-and-a-quarter in Blackheath, with the Blue Mountains National
            Park at the back fence. Walk out the door and you're on trails through ancient
            bushland, towering sandstone, and valleys that make the world feel very far away.
          </p>
          <div className="why-image">
            <OptimizedImage
              src="/assets/bush-trail.jpg"
              alt="Bush walking trail near Bower Cottage"
              widths={[480, 800, 1600]}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="features-list">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}
