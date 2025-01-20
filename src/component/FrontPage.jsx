import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import backgroundImage from "../assets/image/Home.jpg";

const FrontPage = () => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset animation when component is out of view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    const element = document.getElementById("animated-box");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <Box
      id="animated-box"
      sx={{
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: { xs: "30vh", md: "100vh" },
        padding: "30px",
        background: "white",
        border: "none",
        height: {
          xs: "20vh",
          sm: "80vh",
          md: "100vh",
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Image Section */}
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: {
            xs: "100%",
            md: "100%",
          },
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "black",
          textAlign: "center",
          boxSizing: "border-box",
          transition: "transform 1s ease-out, opacity 1s ease-out", // Smooth animation
          transform: isVisible ? "scale(1)" : "scale(0.5)", // Scale effect
          opacity: isVisible ? 1 : 0, // Fade-in effect
        }}
      >
       
      </Box>
    </Box>
  );
};

export default FrontPage;
