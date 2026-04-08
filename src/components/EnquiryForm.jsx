import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

// ── EmailJS config ──
// Sign up at https://www.emailjs.com (free: 200 emails/month)
// 1. Create an Email Service (Gmail, Outlook, etc.) → copy Service ID
// 2. Create an Email Template with these variables:
//    {{first_name}}, {{last_name}}, {{email}}, {{phone}},
//    {{check_in}}, {{check_out}}, {{accommodation}}, {{message}}
// 3. Copy your Public Key from Account → API Keys
const SERVICE_ID = 'YOUR_SERVICE_ID'
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

export default function EnquiryForm() {
  const formRef = useRef()
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const today = new Date().toISOString().split('T')[0]

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus('success')
        formRef.current.reset()
        setTimeout(() => setStatus('idle'), 6000)
      })
      .catch(() => {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      })
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="enquiry-form" aria-label="Enquiry form">
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input
            id="first_name"
            type="text"
            name="first_name"
            placeholder="Anna"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name</label>
          <input
            id="last_name"
            type="text"
            name="last_name"
            placeholder="Smith"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="anna@hospital.com.au"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="04XX XXX XXX"
          />
        </div>
        <div className="form-group">
          <label htmlFor="check_in">Check In</label>
          <input
            id="check_in"
            type="date"
            name="check_in"
            min={today}
          />
        </div>
        <div className="form-group">
          <label htmlFor="check_out">Check Out</label>
          <input
            id="check_out"
            type="date"
            name="check_out"
            min={today}
          />
        </div>
        <div className="form-group full">
          <label htmlFor="accommodation">Accommodation</label>
          <select id="accommodation" name="accommodation">
            <option value="">Select accommodation...</option>
            <option value="Bower Above - $700/week">Bower Above - $700/week</option>
            <option value="Bower Cottage - $750/week">Bower Cottage - $750/week</option>
            <option value="Either / Flexible">Either / Flexible</option>
          </select>
        </div>
        <div className="form-group full">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us about your placement - duration, any specific requirements, or just say hello."
          />
        </div>
        <div className="form-group full form-submit">
          <button
            type="submit"
            className="btn btn-teal submit-btn"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Enquiry'}
          </button>
        </div>
      </div>

      {status === 'success' && (
        <p className="form-success" role="alert">
          Thank you for your enquiry - Anna will be in touch shortly.
        </p>
      )}
      {status === 'error' && (
        <p className="form-error" role="alert">
          Something went wrong - please try again or email info@bowercottage.com.au directly.
        </p>
      )}
    </form>
  )
}
