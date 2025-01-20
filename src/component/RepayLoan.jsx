import React from 'react';
import WarningIcon from '@mui/icons-material/Warning'; // Import Warning icon
import AXIS from '../assets/image/axis (1).png';
import repayaImage from '../assets/image/Repay (1).jpg';
import { Grid, Box, Typography, Divider } from '@mui/material';

const RepayLoan = () => {
  return (
    <Box 
    sx={{ 
      background: "white", // Right-to-left gradient
      backgroundSize: 'cover',
      minHeight: '100vh',
      padding: { xs: '20px', sm: '30px' }, // Adjust padding for small screens
    }}
  >
    {/* Image Section */}
    <Box 
      sx={{ 
        position: 'relative',
        width: '100%',
        height: { xs: '50vh', sm: '50vh', md: '40vh', lg: '100vh' }, // Responsive height
        overflow: 'hidden',
        mb: 2,
      }}
    >
            <Box
        component="img"
        src={repayaImage}
        alt="Repay Loan"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '90%',
          objectFit: 'cover',
          padding: { xs: '5px', md: '5px' },
          border: '2px solid transparent',
          borderRadius: '50px',
          
        }}
      />

    </Box>
    <Typography
            variant="h5"
            sx={{color:'black',
              fontFamily: 'Inter',
              fontSize: { xs: '22px', sm: '30px' },
              lineHeight: '50px',
              textAlign: 'center',
              padding:9,
            }}
          >
            <strong style={{ color: 'red' }}>Warning:</strong> We are not liable for any payments
            made in personal accounts of employees. Please make all payments in the company’s
            account only.
          </Typography>

      {/* Main Container */}
      <Box
        sx={{mb:8,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          border: '1px solid #ddd',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Left Section - Bank Details */}
     <Box
  sx={{
    flex: 1,
    background: 'linear-gradient(180deg, #AE285D 0%, #5B437C 100%)',
    color: 'white',
    padding: { xs: '20px', sm: '30px' },
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
  }}
>
  {/* Bank Icon and Title */}
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      mb: 5, // Margin between logo and details
    }}
  >
    <img
      src={AXIS}
      alt="AXIS Bank"
      style={{ width: '60px', marginBottom: '-40px' ,marginRight:'140px'}} // Logo size and spacing
    />
    <Typography
      variant="h5"
      sx={{
        ml:4,
        fontWeight: 'bold',
        fontSize: { xs: '18px', sm: '22px' },
        textAlign: 'center',
      }}
    >
      AXIS Bank
    </Typography>
  </Box>

  {/* Bank Details */}
  <Box sx={{ mt: 3 }}>
  <Grid container spacing={2} sx={{ ml: 5 }}>
    {/* Bank Name */}
    <Grid item xs={5} sm={4}>
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: '14px', sm: '16px' },
          lineHeight: '1.8',
          fontWeight: 'bold',
        }}
      >
        Bank Name:
      </Typography>
    </Grid>
    <Grid item xs={7} sm={8}>
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: '14px', sm: '16px' },
          lineHeight: '1.8',
        }}
      >
        AXIS Bank Limited
      </Typography>
    </Grid>

    {/* Name */}
    <Grid item xs={5} sm={4}>
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: '14px', sm: '16px' },
          lineHeight: '1.8',
          fontWeight: 'bold',
        }}
      >
        Name:
      </Typography>
    </Grid>
    <Grid item xs={7} sm={8}>
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: '14px', sm: '16px' },
          lineHeight: '1.8',
        }}
      >
        Pawansut Holdings Limited
      </Typography>
    </Grid>

    {/* Account Number */}
    <Grid item xs={5} sm={4}>
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: '14px', sm: '16px' },
          lineHeight: '1.8',
          fontWeight: 'bold',
        }}
      >
        Account Number:
      </Typography>
    </Grid>
    <Grid item xs={7} sm={8}>
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: '14px', sm: '16px' },
          lineHeight: '1.8',
        }}
      >
        920020009314172
      </Typography>
    </Grid>

    {/* IFSC Code */}
    <Grid item xs={5} sm={4}>
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: '14px', sm: '16px' },
          lineHeight: '1.8',
          fontWeight: 'bold',
        }}
      >
        IFSC Code:
      </Typography>
    </Grid>
    <Grid item xs={7} sm={8}>
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: '14px', sm: '16px' },
          lineHeight: '1.8',
        }}
      >
        UTIB0000160
      </Typography>
    </Grid>

    {/* Branch Name */}
    <Grid item xs={5} sm={4}>
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: '14px', sm: '16px' },
          lineHeight: '1.8',
          fontWeight: 'bold',
        }}
      >
        Branch Name:
      </Typography>
    </Grid>
    <Grid item xs={7} sm={8}>
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: '14px', sm: '16px' },
          lineHeight: '1.8',
        }}
      >
        Saket, New Delhi 110017, India
      </Typography>
    </Grid>

    {/* Account Type */}
    <Grid item xs={5} sm={4}>
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: '14px', sm: '16px' },
          lineHeight: '1.8',
          fontWeight: 'bold',
        }}
      >
        Account Type:
      </Typography>
    </Grid>
    <Grid item xs={7} sm={8}>
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: '14px', sm: '16px' },
          lineHeight: '1.8',
        }}
      >
        Current Account
      </Typography>
    </Grid>
  </Grid>
</Box>

</Box>


        {/* Right Section - Warning Message */}
        <Box
  sx={{
    flex: 1,
    background: '#D9D9D9',
    padding: { xs: '20px', sm: '30px' },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }}
>
  {/* Warning Icon */}
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      mb: 2,
    }}
  >
    <WarningIcon
      sx={{
        fontSize: { xs: '40px', sm: '60px' },
        color: 'red',
       
      }}
    />
  </Box>

  {/* Content */}
  <Typography
    variant="body2"
    sx={{
      fontFamily: 'Inter',
      fontSize: { xs: '16px', sm: '24px' },
      lineHeight: '36px',
      textAlign: 'center',
    }}
  >
    Please repay your loan and interest amount through the following bank:  
    <strong>recovery@100daysfinance.com</strong>.
  </Typography>
</Box>

      </Box>
    </Box>
  );
};

export default RepayLoan;
