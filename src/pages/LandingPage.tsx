import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/landing/Navbar";
import { Background } from "../components/landing/Background";
import { Hero } from "../components/landing/Hero";
import { Features } from "../components/landing/Features";
import { GetStarted } from "../components/landing/GetStarted";

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleDemoClick = () => {
    navigate("/platform");
  };

  return (
    <div className="relative min-h-screen">
      <Background />
      <Navbar />
      <main className="pt-16">
        {" "}
        {/* Add padding-top to account for fixed navbar */}
        <Hero onDemoClick={handleDemoClick} />
        <Features />
        <GetStarted onDemoClick={handleDemoClick} />
      </main>
    </div>
  );
};
