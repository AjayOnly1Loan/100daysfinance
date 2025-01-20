import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Button } from "@mui/material";

const WhoWeAre = () => {
  const content = `Welcome to 100daysfinance, a pioneering financial partner for small businesses across India. Our mission is to empower entrepreneurs with quick, hassle-free loans designed to meet their urgent capital needs or business requirements. With an easy-to-use application process, we specialize in providing 100-days loans, ensuring businesses have the working capital to grow and thrive.`;

  const words = content.split(" ");
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        width: "100%",
        minHeight: { xs: "auto", md: "50vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: { xs: "20px", sm: "40px", md: "60px" },
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-start" },
          gap: { xs: "30px", md: "50px" },
        }}
      >
        {/* Left Section */}
        <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
          <Typography
            variant="h2"
            fontWeight="bold"
            color="black"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              mb: { xs: 2, md: 0 },
             '&:hover': {
                  backgroundColor: '#e0e0de',
                  color:'black'
                },
            }}
          >
            Who We Are?
          </Typography>
        </Box>

        {/* Right Section */}
        <Box sx={{ flex: 2, textAlign: "left", width: "100%" }}>
          <Box sx={{ display: "inline-block" }}>
            {words.map((word, index) => (
              <Typography
                key={index}
                fontSize={{ xs: "14px", sm: "18px", md: "22px" }}
                lineHeight={{ xs: "20px", md: "30px" }}
                fontWeight={100}
                sx={{
                  color: "black",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.3s ease ${index * 0.01}s, transform 0.3s ease ${index * 0.01}s`,
                  display: "inline-block",
                  margin: { xs: "0 3px", sm: "0 5px" },
                }}
              >
                {word}
              </Typography>
            ))}
          </Box>
          <Box
            mt={4}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Button
              variant="contained"
              href="/about-us"
              color="primary"
              size="large"
              sx={{
                borderRadius: "40px",
                fontSize: "1rem",
                padding: "10px 30px",
                backgroundColor: "white",
                color: "black",
                "&:hover": {
                  color: "#140514",
                  backgroundColor: "white",
                },
              }}
            >
              Read More
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WhoWeAre;
