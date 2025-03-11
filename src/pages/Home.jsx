import React from "react";
import {
  Navigation,
  Hero,
  Counts,
  About,
  Guests,
  OurPatners,
  Footer,
} from "../components";

const Home = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Counts />
      <About />
      <Guests />
      <OurPatners />
      <Footer />
    </>
  );
};

export default Home;
