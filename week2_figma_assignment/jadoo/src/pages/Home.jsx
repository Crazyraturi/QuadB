import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Category from "../components/Category";
import TopSelling from "../components/TopSelling";
import NextTrip from "../components/NextTrip";
import Testinomials from "../components/Testinomials";
import Brands from "../components/Brands";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  return (
    <div className="relative min-w-screen overflow-hidden">
      <HeroSection />
      <Category />
      <TopSelling />
      <NextTrip />
      <Testinomials />
      <Brands />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
