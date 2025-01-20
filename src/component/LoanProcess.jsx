import React from "react";
import { Typography, Box } from "@mui/material";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

const loanSteps = [
  {
    icon: <HowToRegIcon fontSize="large" color="primary" />,
    title: "Apply Online",
    description: "Click on Apply Now, fill out our quick and easy online application."
  },
  {
    icon: <AccountBalanceIcon fontSize="large" color="secondary" />,
    title: "Loan Approval",
    description: "Our team reviews and approves your loan in just 30 minutes."
  },
  {
    icon: <CurrencyRupeeIcon fontSize="large" color="success" />,
    title: "Receive Funds",
    description: "Funds are deposited into your bank account."
  },
  {
    icon: <DoneOutlineIcon fontSize="large" color="info" />,
    title: "Repay Loan",
    description: "Repay your loan in easy installments."
  }
];

const LoanProcess = () => {
  return (
    <Box
      sx={{
        background: "white",
        py: 6,
        px: 3,
        textAlign: "center"
      }}
    >
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          color: "black",
          marginBottom: 1,
          fontWeight: 600,
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
        }}
      >
        How To Apply?
      </Typography>
  <Typography sx={{color: "black",
          marginBottom: 3,
          fontWeight: 500,
          fontSize: { xs: "0.7rem", sm: "0.8rem", md: "1.2rem" },}}>
    Applying for a Business Loan from 100daysfinance is easy in these 4 steps:
  </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: { xs: "center", md: "space-between" },
          gap: { xs: 4, md: 2 }, // Adjust spacing between steps
        }}
      >
        {loanSteps.map((step, index) => (
          <React.Fragment key={index}>
            {/* Icon Box */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: { xs: "100%", md: "200px" }, // Adjust width for responsiveness
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#DCDCDC",
                  borderRadius: "50%",
                  padding: { xs: 3, md: 4 }, // Adjust padding for responsiveness
                  boxShadow: "0 6px 25px rgba(0, 0, 0, 0.15)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: { xs: "90px", md: "120px" }, // Adjust size for responsiveness
                  height: { xs: "90px", md: "120px" },
                  mb: 3,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.15)"
                  },
                }}
              >
                <Box
                  sx={{
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "rotate(360deg)"
                    },
                  }}
                >
                  {step.icon}
                </Box>
              </Box>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  color: "black",
                  fontWeight: 600,
                  fontSize: { xs: "1rem", md: "1.2rem" },
                }}
              >
                {step.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "black",
                  fontWeight: 400,
                  lineHeight: 1.5,
                  fontSize: { xs: "0.8rem", md: "1rem" },
                }}
              >
                {step.description}
              </Typography>
            </Box>

           {/* Horizontal Dotted Line (only between icon boxes, not after the last one) */}
{index < loanSteps.length - 1 && (
  <Box
    sx={{
      width: { xs: "50px", md: "100px" }, // Adjust width for responsiveness
      borderBottom: "3px dotted white",
      marginY: { xs: 2, md: 0 },
      marginTop: { xs: "-5px", md: "-100px" }, // Shift the line upwards (adjust the value to your preference)
      display: { xs: "none", md: "block" }, // Hide dotted line on small screens
    }}
  />
)}

          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default LoanProcess;
