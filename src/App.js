import ReadyModel from "./components/ReadyModel";
import WhatWeDoModel from "./components/WhatWeDoModel";
import PortfolioModel from "./components/PortfolioModel";
import PricingModel from "./components/PricingModel";
import WhoWeAreModel from "./components/WhoWeAreModel";
import TestimonialModel from "./components/TestimonialModel";
import OurTeamModel from "./components/OurTeamModel";
import LatestNews from "./components/LatestNewsModel";
import ContactUsModel from "./components/ContactUsModel";
import Footer from "./components/Footer";
import NavBarModel from "./components/NavBarModel";
import BuildModel from "./components/BuildModel";
import WhiteModel from "./components/WhiteModel";
import React, { useRef } from "react";

function App() {
  const aboutUsRef = useRef(null);
  const whatWeDoRef = useRef(null);
  const portfolioRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 56; // Replace with your navbar's actual height
      const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      element.scrollIntoView({ behavior: 'smooth', block: 'start', top: y });
    } else {
      console.error(`Element with ID "${sectionId}" not found.`);
    }
  };
  

  return (
    <div className="h-full min-h-full">
      <NavBarModel scrollToSection={scrollToSection} />
      <BuildModel />
      <WhiteModel />
      <div ref={aboutUsRef} id="about-us">
        <WhoWeAreModel />
      </div>
      <div ref={whatWeDoRef} id="what-we-do">
        <WhatWeDoModel />
      </div>
      <div ref={portfolioRef} id="portfolio">
        <PortfolioModel />
      </div>
      <ReadyModel />
      <div ref={portfolioRef} id="review">
        <TestimonialModel />
      </div>
      <div ref={portfolioRef} id="pricing">
        <PricingModel />
      </div>
      <OurTeamModel />
      <div ref={portfolioRef} id="blog">
        <LatestNews />
      </div>
      <div ref={portfolioRef} id="contact">
        <ContactUsModel />
      </div>
      <Footer />
    </div>
  );
}

export default App;
