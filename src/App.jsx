import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PricingStrip from "./components/PricingStrip";
import WhyBower from "./components/WhyBower";
import Accommodation from "./components/Accommodation";
import Enquiry from "./components/Enquiry";
import Map from "./components/Map";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PricingStrip />
        <WhyBower />
        <Accommodation />
        <Enquiry />
        <Map />
      </main>
      <Footer />
    </>
  );
}
