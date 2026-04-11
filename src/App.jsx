import React from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PricingStrip from "./components/PricingStrip";
import WhyBower from "./components/WhyBower";
import Accommodation from "./components/Accommodation";
import Enquiry from "./components/Enquiry";
import BookingConditions from "./components/BookingConditions";
import FAQ from "./components/FAQ";
import Map from "./components/Map";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: {
            fontFamily: "inherit",
            fontSize: "0.9rem",
            letterSpacing: "0.02em",
          },
          success: {
            style: { background: "#5a8a5e", color: "#fff" },
          },
          error: {
            style: { background: "#c25b42", color: "#fff" },
          },
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <PricingStrip />
        <WhyBower />
        <Accommodation />
        <Enquiry />
        <BookingConditions />
        <FAQ />
        <Map />
      </main>
      <Footer />
    </>
  );
}
