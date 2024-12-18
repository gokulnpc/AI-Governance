import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/landing/Navbar";
import { Hero } from "../components/landing/Hero";
import { Features } from "../components/landing/Features";
import { Footer } from "../components/landing/Footer";

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // Load particles.js from CDN
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js";
    script.async = true;

    script.onload = () => {
      // @ts-expect-error: particlesJS is not typed
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 1000,
            },
          },
          color: {
            value: ["#3b82f6", "#6366f1", "#8b5cf6", "#d946ef"],
          },
          shape: {
            type: ["circle", "triangle", "edge"],
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
          },
          opacity: {
            value: 0.6,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#3b82f6",
            opacity: 0.2,
            width: 1,
            shadow: {
              enable: true,
              blur: 5,
              color: "#3b82f6",
            },
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "bounce",
            bounce: true,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: ["grab", "bubble"],
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 200,
              line_linked: {
                opacity: 0.4,
              },
            },
            bubble: {
              distance: 250,
              size: 6,
              duration: 2,
              opacity: 0.8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
        fps_limit: 60,
        background: {
          color: "#ffffff",
          opacity: 0,
        },
      });
    };

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const handleDemoClick = () => {
    navigate("/platform");
  };

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div
        id="particles-js"
        className="absolute inset-0 z-0"
        style={{
          position: "fixed", // Makes it stay fixed while scrolling
          pointerEvents: "none", // Ensures clicks pass through to content
        }}
      />
      <main className="pt-16">
        {" "}
        {/* Add padding-top to account for fixed navbar */}
        <Hero onDemoClick={handleDemoClick} />
        <Features />
        <Footer onDemoClick={handleDemoClick} />
      </main>
    </div>
  );
};
