import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  Box,
  Stack,
  Hidden,
} from "@mui/material";

import logo from "../assets/image/100 Days Finance.png"; // Adjust the path based on your structure
import sidebarBg from "../assets/image/Vector.png"; // Your SVG background

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation(); // Get current location to determine the active page

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Determine if the current page is the Home page
  const isHomePage = location.pathname === "/";

  return (
    <>
      {/* Navbar */}
      <AppBar
        position="absolute" // Full cover positioning
        sx={{
          backgroundColor: "transparent", // Semi-transparent overlay effect
          boxShadow: "none",
          zIndex: 1400, // Ensure it appears above all other components
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            minHeight: "64px",
            margin: "40px",
          }}
        >
          <Link
            to="/"
            style={{ display: "flex", alignItems: "center" }}
            onClick={scrollToTop}
          >
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                width: { xs: "100px", md: "50%" }, // Responsive sizing
                height: "auto", // Maintain aspect ratio
              }}
            />
          </Link>

          {/* Buttons in a single row */}
          <Stack direction="row" spacing={2}>
            <Button
              component={Link}
              to="/apply-now"
              variant="contained"
              sx={{
                fontWeight: 100,
                fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "14px" },
                borderRadius: "50px",
                padding: { xs: "5px 12px", sm: "7px 15px", md: "10px 20px" },
                backgroundColor: "#005D9F",
                color: "white",
                whiteSpace: "nowrap",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                "&:hover": {
                  backgroundColor: "#1A2617",
                  color: "white",
                },
              }}
            >
              Apply Now
            </Button>

            {/* Hide these buttons on small screens */}
            <Hidden smDown>
              {isHomePage ? (
                <>
                  <Button
                    id="eligiblepeople-button"
                    component="a"
                    href="#eligible-people"
                    variant="contained"
                    sx={{
                      fontWeight: 100,
                      fontSize: {
                        xs: "12px",
                        sm: "14px",
                        md: "16px",
                        lg: "14px",
                      },
                      borderRadius: "50px",
                      padding: {
                        xs: "5px 12px",
                        sm: "7px 15px",
                        md: "10px 20px",
                      },
                      backgroundColor: "#005D9F",
                      color: "white",
                      whiteSpace: "nowrap",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      "&:hover": {
                        backgroundColor: "#1A2617",
                        color: "white",
                      },
                    }}
                  >
                    Eligible Profiles
                  </Button>

                  <Button
                    id="calculator-button"
                    component="a"
                    href="#calculator-grid-container"
                    variant="contained"
                    sx={{
                      fontWeight: 100,
                      fontSize: {
                        xs: "12px",
                        sm: "14px",
                        md: "16px",
                        lg: "14px",
                      },
                      borderRadius: "50px",
                      padding: {
                        xs: "5px 12px",
                        sm: "7px 15px",
                        md: "10px 20px",
                      },
                      backgroundColor: "#005D9F",
                      color: "white",
                      whiteSpace: "nowrap",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      "&:hover": {
                        backgroundColor: "#1A2617",
                        color: "white",
                      },
                    }}
                  >
                    Loan Calculator
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    component={Link}
                    to="/#eligible-people"
                    variant="contained"
                    sx={{
                      fontWeight: 100,
                      fontSize: {
                        xs: "12px",
                        sm: "14px",
                        md: "16px",
                        lg: "14px",
                      },
                      borderRadius: "50px",
                      padding: {
                        xs: "5px 12px",
                        sm: "7px 15px",
                        md: "10px 20px",
                      },
                      backgroundColor: "#005D9F",
                      color: "white",
                      whiteSpace: "nowrap",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      "&:hover": {
                        backgroundColor: "#1A2617",
                        color: "white",
                      },
                    }}
                  >
                    Eligible Profiles
                  </Button>

                  <Button
                    component={Link}
                    to="/#calculator-grid-container"
                    variant="contained"
                    sx={{
                      fontWeight: 100,
                      fontSize: {
                        xs: "12px",
                        sm: "14px",
                        md: "16px",
                        lg: "14px",
                      },
                      borderRadius: "50px",
                      padding: {
                        xs: "5px 12px",
                        sm: "7px 15px",
                        md: "10px 20px",
                      },
                      backgroundColor: "#005D9F",
                      color: "white",
                      whiteSpace: "nowrap",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      "&:hover": {
                        backgroundColor: "#1A2617",
                        color: "white",
                      },
                    }}
                  >
                    Loan Calculator
                  </Button>
                </>
              )}
            </Hidden>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Right Sticky Sidebar with Toggle Button */}
      <Drawer
        anchor="right"
        variant="persistent"
        open={true} // Keep the drawer open at all times
        sx={{
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: 100, // Fixed width
            height: "250px",
            position: "fixed",
            top: "200px",
            bottom: "200px",
            right: 0,
            backgroundColor: "rgba(255, 255, 255, 0)",
            overflowX: "hidden",
            paddingTop: "20px",
            paddingBottom: "16px",
            backgroundImage: `url(${sidebarBg})`,
            backgroundSize: "cover",
            border: "none",
          },
        }}
      >
        {/* Sidebar Content */}
        <List
          sx={{
            position: "relative",
            zIndex: 1,
            paddingY: 3, // Remove padding around the List
          }}
        >
          <ListItem
            button
            component={Link}
            to="/"
            onClick={scrollToTop}
            sx={{ paddingY: 0.5, color: "black" }} // Adjust vertical padding
          >
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/about-us"
            onClick={scrollToTop}
            sx={{ paddingY: 0.5, color: "black" }} // Adjust vertical padding
          >
            <ListItemText primary="About" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/repay-now"
            onClick={scrollToTop}
            sx={{ paddingY: 0.5, color: "black" }} // Adjust vertical padding
          >
            <ListItemText primary="Repay" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/contact-us"
            onClick={scrollToTop}
            sx={{ paddingY: 0.5, color: "black" }} // Adjust vertical padding
          >
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
