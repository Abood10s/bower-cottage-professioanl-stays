import React from 'react'

const socialLinks = [
  { label: 'Instagram', url: 'https://www.instagram.com/bower_cottage/' },
  { label: 'Facebook', url: 'https://www.facebook.com/bowercottageaccommodation/' },
  { label: 'Airbnb', url: 'https://airbnb.com/h/bowercottage' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <span className="footer-logo-name">Bower Cottage</span>
        <span className="logo-sub">Retreat</span>
      </div>

      <p className="footer-note">
        Blackheath NSW 2785 &nbsp;·&nbsp; anna@bowercottage.com.au &nbsp;·&nbsp; +61 404 483 720
      </p>

      <ul className="footer-links">
        {socialLinks.map((link) => (
          <li key={link.label}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
