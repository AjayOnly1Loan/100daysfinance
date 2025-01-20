import React from "react";
import {
  Box,
  Typography,
  Divider,
  Grid,
  IconButton,
} from "@mui/material";
import { Facebook, YouTube, Instagram,LinkedIn } from "@mui/icons-material";
import xLogo from "../assets/image/logo.webp"; // Replace with your actual path

import Logo from '../assets/image/Artboard 1 (1).webp'; // Adjust the path based on your structure

const Footer = () => {
  return (
    <Box
      sx={{
        background: "white",
        color: "white",
        padding: 4,
        // boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
      }}
    >
      {/* Footer Content */}
      <Box
        sx={{
          borderRadius: 5,
          bgcolor: "#D3D3D3",
          color: "black",
          padding: 4,
          textAlign: "center",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
 <Box
  sx={{
    display: "flex", // Align sections in the same row
    justifyContent: "space-between", // Space between sections
    alignItems: "center", // Vertically align sections at the center
    padding: 2,
    gap: 2,
    flexWrap: "wrap", // Allow wrapping on smaller screens if needed
  }}
>
  {/* Quick Links Section */}
  <Box
    sx={{
      flex: 1,
      minWidth: "200px",
      display: "flex",
      flexDirection: "column", // Align title and links vertically
      padding: 2,
      textAlign: "center", // Center the content within the section
    }}
  >
    <Typography
      variant="h6"
      sx={{
        fontWeight: "bold",
       
      }}
    >
      Quick Links
    </Typography>

    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Typography
        component="a"
        href="/terms-condition"
        sx={{
          textDecoration: "none",
          color: "black",
          "&:hover": {
            color: "#1E90FF",
          },
        }}
      >
        Terms and Conditions
      </Typography>
      <Box sx={{ display: "inline-flex", alignItems: "center" ,marginLeft:{xs:0,md:'70px'}}}>
        <Typography sx={{ mx: 1, color: "black" }}>|</Typography>
        <Typography
          component="a"
          href="/privacy-policy"
          sx={{
            textDecoration: "none",
            color: "black",
            "&:hover": {
              color: "#1E90FF",
            },
          }}
        >
          Privacy Policy
        </Typography>
        <Typography sx={{ mx: 1, color: "black" }}>|</Typography>
        <Typography
          component="a"
          href="/faq"
          sx={{
            textDecoration: "none",
            color: "black",
            "&:hover": {
              color: "#1E90FF",
            },
          }}
        >
          FAQs
        </Typography>
        <Typography sx={{ mx: 1, color: "black" }}>|</Typography>
      </Box>
    </Box>
  </Box>

  {/* Contact Us Section */}
  <Box sx={{ flex: 1, textAlign: "center", minWidth: "200px" }}>
    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
      Contact Us
    </Typography>
    <Typography>Email: info@100daysfinance</Typography>
    <Typography>Phone: +91 9999999341</Typography>
  </Box>

  {/* Reach Out Section */}
  <Box sx={{ flex: 1, textAlign: "center", minWidth: "200px" }}>
    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
      Reach Out
    </Typography>
    <Typography>
    S-370, Panchsheel Park,
    <br/> 
    New Delhi 110017, India
      
    </Typography>
  </Box>
</Box>


        {/* Divider */}
        <Divider
          sx={{
            marginX:'50px',
            my: 1,
            borderColor: "#333", // Dark gray for boldness
            borderWidth: "1.5px", // Make it thicker
            borderStyle: "solid",
          }}
        />
{/* Social Media Section */}
<Grid
  container
  justifyContent="space-between"
  alignItems="center"
  sx={{ mb: 0, flexDirection: { xs: "column", md: "row" }, textAlign: { xs: "center", md: "left" } }}
>
  {/* Left Side: Logo */}
  <Grid item>
    <Box
      sx={{
        alignItems: "center", // Align vertically
        padding: 1,
        marginLeft: { xs: 0, md: "120px" }, // Adjust margin for mobile screens
      }}
    >
      <img
        src={Logo}
        alt="Logo"
        style={{
          width: "auto", // Adjust width automatically
          height: "100px", // Set a fixed height or adjust as needed
          objectFit: "contain", // Ensure the logo fits within the box
        }}
      />
    </Box>
  </Grid>

  {/* Right Side: Social Media Icons */}
  <Grid
  item
  sx={{
    marginRight: { xs: 0, md: "80px" }, // Adjust right margin for mobile
    textAlign: "center", // Center icons on mobile screens
  }}
>
  <Box>
    <IconButton
      component="a"
      href=" https://www.facebook.com/profile.php?id=61569497086384"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        bgcolor: "black",
        color: "white",
        margin: 0.5,
        "&:hover": {
          bgcolor: "gray",
        },
      }}
    >
      <Facebook />
    </IconButton>
    <IconButton
      component="a"
      href="https://www.youtube.com/channel/UCspKy-9xngUXoHOxuI7N1Fg"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        bgcolor: "black",
        color: "white",
        margin: 0.5,
        "&:hover": {
          bgcolor: "gray",
        },
      }}
    >
      <YouTube />
    </IconButton>
    <IconButton
      component="a"
      href="https://www.instagram.com/100.daysfinance/"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        bgcolor: "black",
        color: "white",
        margin: 0.5,
        "&:hover": {
          bgcolor: "gray",
        },
      }}
    >
      <Instagram />
    </IconButton>
    <IconButton
        component="a"
        href="https://x.com/100daysfinance"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          bgcolor: "black",
          color: "white",
          margin: 0.5,
          "&:hover": {
            bgcolor: "gray",
          },
        }}
      >
        <img
          src={xLogo}
          alt="X Logo"
          style={{
            width: 24, // Adjust the width as needed
            height: 24, // Adjust the height as needed
            objectFit: "contain",
          }}
        />
      </IconButton>

      <IconButton
        component="a"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          bgcolor: "black",
          color: "white",
          margin: 0.5,
          "&:hover": {
            bgcolor: "gray",
          },
        }}
      >
        <LinkedIn />
      </IconButton>
        </Box>
</Grid>

</Grid>


        {/* Horizontal Divider */}
        <Divider
          sx={{
            marginX:'50px',

            my: 1,
            borderColor: "#333", // Dark gray for boldness
            borderWidth: "1.5px", // Make it thicker
            borderStyle: "solid",
          }}
        />

        {/* Footer Bottom Section */}
        <Box
          sx={{
            bgcolor: "lightgray",
            padding: 2,
            borderRadius: 2,
            background: "linear-gradient(to right, #f0f0f0, #e0e0e0)",
            textAlign: "center",
          }}
        >
          <Typography variant="body2" color="textSecondary">
            100day Finance, 2024 All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
