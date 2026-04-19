import React from "react";
import SectionHeader from "./SectionHeader";
import OptimizedImage from "./OptimizedImage";
import { useScrollReveal } from "../hooks/useScrollReveal";

const features = [
  {
    number: "1",
    title: "Quiet, private and away from it all.",
    description:
      "Just birdsong and mountain air. Your own space to decompress and a double spa to relax in at the end of a long day.",
  },
  {
    number: "2",
    title: "Beautiful Walks from the Door.",
    description:
      "The Grand Canyon Loop, Walls Cave and the superb escarpments of the Grose Valley are minutes away.",
  },
  {
    number: "3",
    title: "Work Study and Stay Connected.",
    description:
      "Fast NBN WiFi, a dedicated work desk and all the comforts of home. Perfect for completing paperwork, studying or staying in touch with family.",
  },
  {
    number: "4",
    title: "Flexible hassle free terms",
    description:
      "Weekly stays or longer. No complicated leases. Just move in, settle in and focus on your work - everything else is taken care of.",
  },
];

export default function WhyBower() {
  const heroRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section className="why-section" id="why">
      {/* ── Image + text side by side ── */}
      <div className="why-hero reveal" ref={heroRef}>
        <div className="why-hero-img">
          <OptimizedImage
            src="/assets/bush-trail.jpg"
            alt="Bush walking trail near Bower Cottage"
            widths={[480, 800, 1600]}
            sizes="(max-width: 860px) 100vw, 50vw"
          />
        </div>
        <div className="why-hero-content">
          <SectionHeader
            label="Why Bower Cottage"
            title="More than just a <em>place to sleep</em>"
          />
          <p className="why-hero-body">
            We understand that professionals - especially those on locum
            placements, need more than just four walls and a bed. You need
            somewhere genuinely comfortable and restorative. Somewhere that
            helps you show up at your best.
          </p>
          <p className="why-hero-sub">
            Set on an acre-and-a-quarter in Blackheath, with the Blue Mountains
            National Park at the back fence. Walk out the door and you're on
            trails through ancient bushland, towering sandstone, and valleys
            that make the world feel very far away.
          </p>
        </div>
      </div>

      {/* ── Feature grid ── */}
      <div className="why-features reveal" ref={gridRef}>
        {features.map((f, i) => (
          <div className="why-feature" key={i}>
            <span className="why-feature-num">{f.number}</span>
            <div className="why-feature-rule" />
            <h3 className="why-feature-title">{f.title}</h3>
            <p className="why-feature-desc">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
