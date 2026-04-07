import React from "react";
import SectionHeader from "./SectionHeader";
import OptimizedImage from "./OptimizedImage";
import { useScrollReveal } from "../hooks/useScrollReveal";

const features = [
  {
    number: "01",
    title: "Genuinely Peaceful",
    description:
      "No traffic noise, no neighbours, no interruptions. Just birdsong, mountain air, and the kind of silence that actually lets you switch off.",
  },
  {
    number: "02",
    title: "Beautiful Walks from the Door",
    description:
      "The Grand Canyon Loop, Walls Cave, and the Grose Valley are minutes away. Step outside and explore some of the most stunning bushwalks in NSW.",
  },
  {
    number: "03",
    title: "Arrive & It's All Done",
    description:
      "Everything is already set up \u2014 quality linen, stocked kitchenette, firewood ready, spa filled. No packing lists, no errands. Just walk in and relax.",
  },
  {
    number: "04",
    title: "A Real Retreat, Not a Rental",
    description:
      "Light the fire, pour a glass, sink into the spa. This is a place designed to restore you \u2014 not just house you. You'll leave feeling like yourself again.",
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
            title='A respite that <em>restores</em> you'
          />
          <p className="why-hero-body">
            Medicine is relentless. You give everything to your patients, your team,
            your shift &mdash; and there's rarely anything left for you. Bower Cottage exists
            so you have somewhere quiet, beautiful, and already set up to come and simply
            be still for a while.
          </p>
          <p className="why-hero-sub">
            Set on an acre-and-a-quarter in Blackheath, with the Blue Mountains National
            Park at the back fence. Walk out the door and you're on trails through ancient
            bushland, towering sandstone, and valleys that make the world feel very far away.
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
