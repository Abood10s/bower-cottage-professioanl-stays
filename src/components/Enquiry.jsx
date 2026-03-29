import React from 'react'
import SectionHeader from './SectionHeader'
import EnquiryForm from './EnquiryForm'
import OptimizedImage from './OptimizedImage'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Enquiry() {
  const ref = useScrollReveal()

  return (
    <section className="enquiry-section" id="enquiry">
      <div className="enquiry-layout reveal" ref={ref}>
        <div className="enquiry-aside">
          <SectionHeader
            label="Get in Touch"
            title='Enquire about<br>a <em>stay</em>'
          />
          <p className="enquiry-desc">
            Ready to book, or just want to check availability? Fill in the form and
            Anna will be in touch shortly. We're happy to accommodate longer placements,
            specific check-in dates, or any other requirements.
          </p>

          <div className="contact-items">
            <div className="contact-item">
              <span className="contact-icon">✉</span>
              <a href="mailto:anna@bowercottage.com.au">anna@bowercottage.com.au</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✆</span>
              <a href="tel:+61404483720">+61 404 483 720</a>
            </div>
          </div>

          <div className="enquiry-image">
            <OptimizedImage
              src="/assets/canyon-walk.jpg"
              alt="Grand Canyon walk, Blue Mountains"
              widths={[480]}
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>

          <div className="enquiry-note">
            <p>
              Located in Blackheath, NSW — on the ancestral lands of the Dharug and
              Gundungurra peoples. Minutes from Katoomba and the Blue Mountains
              District Hospital.
            </p>
          </div>
        </div>

        <EnquiryForm />
      </div>
    </section>
  )
}
