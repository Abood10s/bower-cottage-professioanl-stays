import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <a href="#" className="logo" onClick={closeMenu}>
          <span className="logo-name">Bower Cottage</span>
          <span className="logo-sub">Professional Stays</span>
        </a>

        <ul className="nav-links">
          <li>
            <a href="#why">Why Bower</a>
          </li>
          <li>
            <a href="#accommodation">Accommodation</a>
          </li>
          <li>
            <a href="#enquiry" className="nav-cta">
              Enquire
            </a>
          </li>
        </ul>

        <button
          className={`hamburger ${menuOpen ? "hamburger--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu">
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}>
        <a href="#why" onClick={closeMenu}>
          Why Bower Cottage
        </a>
        <a href="#accommodation" onClick={closeMenu}>
          Accommodation
        </a>
        <a href="#enquiry" onClick={closeMenu}>
          Enquire About a Stay
        </a>
      </div>
    </>
  );
}
