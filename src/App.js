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

function App() {
  return (
    <div className="h-full min-h-full">
      <NavBarModel />
      <BuildModel />
      <WhiteModel />
      <WhoWeAreModel />
      <WhatWeDoModel />
      <PortfolioModel />
      <ReadyModel />
      <TestimonialModel />
      <PricingModel />
      <OurTeamModel />
      <LatestNews />
      <ContactUsModel />
      <Footer />
    </div>
  );
}

export default App;
