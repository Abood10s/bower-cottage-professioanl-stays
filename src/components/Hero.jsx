import React from "react";
import OptimizedImage from "./OptimizedImage";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <OptimizedImage
          src="/assets/hero-landscape.jpg"
          alt="Blue Mountains landscape"
          className="hero-bg-img"
          widths={[480, 800, 1600]}
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
        />
      </div>
      <div className="hero-content">
        <div className="hero-left">
          <p className="hero-location">Blackheath · Blue Mountains</p>
          <h1 className="hero-title">
            A proper rest,
            <br />
            <em>Between Shifts.</em>
          </h1>
          <p className="hero-desc">
            Fully furnished, weekly-cleaned accommodation for medical
            professionals, locums,student doctors, and allied health workers -
            set on the edge of the Blue Mountains National Park.
          </p>
          <div className="hero-actions">
            <a href="#enquiry" className="btn btn-teal">
              Enquire About a Stay
            </a>
            <a href="#accommodation" className="btn btn-outline">
              View Accommodations
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
