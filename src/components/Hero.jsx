import React from "react";
import OptimizedImage from "./OptimizedImage";

const pills = [
  "Arrive & Unwind — Everything Ready",
  "Bushwalks from the Doorstep",
  "Quiet, Private & Peaceful",
  "National Park at the Back Fence",
];

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
            Your quiet place
            <br />
            <em>to breathe again.</em>
          </h1>
          <p className="hero-desc">
            A peaceful, fully set-up retreat for medical professionals who need
            real rest. No packing lists, no setup, no thinking just arrive,
            exhale, and let the mountain air do the rest.
          </p>
        </div>
        <div className="hero-right">
          <div className="hero-pills">
            {pills.map((pill) => (
              <span className="pill" key={pill}>
                {pill}
              </span>
            ))}
          </div>
          <h4 className="hero-subtitle">Get Started</h4>
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
