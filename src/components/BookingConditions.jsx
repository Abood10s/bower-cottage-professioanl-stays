import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import { useScrollReveal } from "../hooks/useScrollReveal";

const conditions = [
  {
    title: "Short Stays (Under 14 Nights)",
    content:
      "Stays of fewer than 14 nights are booked directly through Airbnb. Please visit our Airbnb listings for A Bower Above and Bower Cottage to check availability and complete your booking.",
  },
  {
    title: "Extended Professional Stays (14 Nights or More)",
    content:
      "For stays of 14 nights or longer, bookings are made directly through Bower Cottage. Submit an enquiry via our website and Anna will be in touch to confirm availability and arrange the details.",
  },
  {
    title: "Verification of Employment",
    content:
      "All direct bookings require a current letter of employment or placement confirmation from your employer or placement agency prior to booking confirmation. This may be emailed to info@bowercottage.com.au.",
  },
  {
    title: "Security Deposit",
    content:
      "A security deposit equivalent to one week\u2019s rent is required for all direct bookings. This is held for the duration of your stay and returned within five business days of departure, following a property inspection.",
  },
  {
    title: "Payment",
    content:
      "Extended stays are billed monthly, in advance. Your first month\u2019s payment is required alongside the security deposit to secure your booking. Subsequent months are invoiced and payable at the start of each new month. We accept direct bank transfer.",
  },
  {
    title: "Check-In & Check-Out",
    content: "Check-in is from 3:00pm. Check-out is by 10:30am.",
  },
  {
    title: "Cancellation",
    content:
      "A minimum of 14 days\u2019 written notice is required to end your stay. Notice should be sent to info@bowercottage.com.au.",
  },
  {
    title: "Minimum Stay",
    content: "A minimum stay of two nights applies to all bookings.",
  },
];

export default function BookingConditions() {
  const ref = useScrollReveal();
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="conditions-section" id="booking">
      <div className="conditions-container reveal" ref={ref}>
        <SectionHeader
          label="Everything you need to know"
          title="Booking Conditions"
          centered
          specialclass="conditions-label"
        />
        <div className="conditions-list">
          {conditions.map((item, i) => (
            <div
              key={i}
              className={`condition-item ${openIndex === i ? "condition-item--open" : ""}`}>
              <button
                className="condition-header"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}>
                <span className="condition-title">{item.title}</span>
                <span className="condition-icon">
                  {openIndex === i ? "\u2212" : "+"}
                </span>
              </button>
              <div className="condition-body">
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
