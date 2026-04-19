import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import { useScrollReveal } from "../hooks/useScrollReveal";

const faqs = [
  {
    question: "Who is Bower Cottage designed for?",
    answer:
      "Bower Cottage is designed specifically for healthcare professionals \u2014 including locum doctors, student doctors, nurses, and allied health workers \u2014 who need comfortable, well-equipped accommodation during a placement or rotation in the Blue Mountains region.",
  },
  {
    question: "How do I book?",
    answer:
      "For stays of fewer than 14 nights, please book directly through our Airbnb listings. For stays of 14 nights or longer, submit an enquiry through our website and Anna will be in touch to arrange everything.",
  },
  {
    question: "What\u2019s included in the weekly rate?",
    answer:
      "Caretaker onsite. Everything. Gas, electricity, fast NBN WiFi, weekly professional cleaning, all linen and towels. Double spa with rainwater shower and shampoo, conditioner, body wash. Fully equipped kitchenette with fridge, small freezer, microwave/convection oven, rice cooker, induction cooktop, toaster etc plus pantry items like olive oil, vinegar, soy sauce etc. Selection of teas, plunger coffee, hot chocolate. Washing machine, dryer. Lockable storage box for hiking, climbing equipment etc. Scrabble, chess board, cards. Instant, slow combustion style gas log fire, air conditioning, electric blankets, hot water bottle. Marshall Bluetooth Speaker and 48 inch TV. Weber BBQ.",
  },
  {
    question: "Do I need to provide anything before my booking is confirmed?",
    answer:
      "For direct bookings (14 nights or more), you\u2019ll need to provide a current letter of employment or placement confirmation from your employer or agency, along with your first month\u2019s payment and a security deposit equivalent to one week\u2019s rent.",
  },
  {
    question: "How does payment work for longer stays?",
    answer:
      "Your first month is paid upfront to secure the booking, alongside the security deposit. After that, you\u2019ll be invoiced at the start of each month, payable in advance by direct bank transfer.",
  },
  {
    question: "What is the security deposit and when do I get it back?",
    answer:
      "The deposit is equivalent to one week\u2019s rent ($700 for A Bower Above, $750 for Bower Cottage). It is returned within five business days of your departure, following a routine property inspection.",
  },
  {
    question: "Can I extend my stay?",
    answer:
      "Absolutely \u2014 subject to availability. Just let Anna know as early as possible and she\u2019ll do her best to accommodate you.",
  },
  {
    question: "How much notice do I need to give if I want to leave?",
    answer:
      "For direct bookings, a minimum of 14 days\u2019 written notice is required. Please email info@bowercottage.com.au.",
  },
  {
    question: "Is there parking?",
    answer: "Yes, off-street parking is available at the property.",
  },
  {
    question: "How far is it from the hospital?",
    answer:
      "Bower Cottage is located in Blackheath, approximately 15 minutes from Katoomba and the Blue Mountains District Hospital.",
  },
  {
    question: "What are the check-in and check-out times?",
    answer:
      "Check-in is from 3:00pm. Check-out is by 10:30am. Both properties offer self check-in for your convenience.",
  },
];

export default function FAQ() {
  const ref = useScrollReveal();
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container reveal" ref={ref}>
        <SectionHeader
          label="Common questions, answered"
          title="FAQ's"
          centered
          specialclass="faqs-label"
        />
        <div className="faq-list">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`faq-item ${openIndex === i ? "faq-item--open" : ""}`}>
              <button
                className="faq-header"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}>
                <span className="faq-question">{item.question}</span>
                <span className="faq-icon">
                  {openIndex === i ? "\u2212" : "+"}
                </span>
              </button>
              <div className="faq-body">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
