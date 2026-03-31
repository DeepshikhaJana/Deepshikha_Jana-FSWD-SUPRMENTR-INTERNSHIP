import React from "react";
import Hero from "../components/Hero";
import Destinations from "../components/Destinations";
import Packages from "../components/Packages";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Destinations />
      <Packages />
      <Testimonials />
    </>
  );
};

export default Home;
