import React from "react";
import OptimizedImage from "./OptimizedImage";

const socialLinks = [
  { label: "Instagram", url: "https://www.instagram.com/bower_cottage/" },
  {
    label: "Facebook",
    url: "https://www.facebook.com/bowercottageaccommodation/",
  },
  { label: "Airbnb", url: "https://airbnb.com/h/bowercottage" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <OptimizedImage
          src="/assets/logo.png"
          alt="Bower Cottage"
          className="logo-img footer-logo-img"
          widths={[80, 160, 320]}
          sizes="140px"
        />
        <span className="logo-sub">Professional Stays</span>
      </div>

      <p className="footer-note">
        Blackheath NSW 2785 &nbsp;·&nbsp; anna@bowercottage.com.au &nbsp;·&nbsp;
        +61 404 483 720
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
  );
}
