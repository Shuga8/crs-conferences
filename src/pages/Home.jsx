import React from "react";
import {
  Navigation,
  Hero,
  Counts,
  About,
  Guests,
  OurPatners,
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
    </>
  );
};

export default Home;
