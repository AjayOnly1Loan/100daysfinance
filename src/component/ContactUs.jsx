import React from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import Swal from "sweetalert2"; // Import SweetAlert
import aboutImage from "../assets/image/Contact-Us-Banner-Image (1) (1).jpg";

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Thank You!",
      text: "Thank you for connecting!",
      confirmButtonText: "OK",
    });
  };

  return (
    <Box
      sx={{
        background: "white",

        minHeight: "100vh",
        padding: "30px",
      }}
    >
      {/* About Image Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "40vh", sm: "70vh", md: "85vh", lg: "90vh" },
          overflow: "hidden",
          mb: 2,
        }}
      >
        <Box
          component="img"
          src={aboutImage}
          alt="Contact Us"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            border: "2px solid none",
            borderRadius: "30px",
          }}
        />
      </Box>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          marginTop: "80px",
          background: "transparent",
          padding: "10px",
          borderRadius: "20px",
          color: "black", // Text color white
          mb: 10,
          mx: "auto",
          maxWidth: "900px",
        }}
      >
        <Grid container spacing={3}>
          {/* Row 1 */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              required
              InputProps={{
                sx: { borderRadius: "15px", height: "50px", color: "black" }, // Text color black
              }}
              InputLabelProps={{
                style: { color: "black" }, // Label color black
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "black", // Border color black
                  },
                  "&:hover fieldset": {
                    borderColor: "orange", // Hover effect
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "orange", // Focus effect
                  },
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "black", // Placeholder color black
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              required
              type="email"
              InputProps={{
                sx: { borderRadius: "15px", height: "50px", color: "black" },
              }}
              InputLabelProps={{
                style: { color: "black" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "black",
                  },
                  "&:hover fieldset": {
                    borderColor: "orange",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "orange",
                  },
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "black",
                },
              }}
            />
          </Grid>

          {/* Row 2 */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              required
              type="tel"
              InputProps={{
                sx: { borderRadius: "15px", height: "50px", color: "black" },
              }}
              InputLabelProps={{
                style: { color: "black" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "black",
                  },
                  "&:hover fieldset": {
                    borderColor: "orange",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "orange",
                  },
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "black",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="City"
              variant="outlined"
              fullWidth
              required
              InputProps={{
                sx: { borderRadius: "15px", height: "50px", color: "black" },
              }}
              InputLabelProps={{
                style: { color: "black" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "black",
                  },
                  "&:hover fieldset": {
                    borderColor: "orange",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "orange",
                  },
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "black",
                },
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth required>
              <InputLabel style={{ color: "black" }}>Message Type</InputLabel>
              <Select
                variant="outlined"
                defaultValue=""
                sx={{
                  borderRadius: "15px",
                  color: "black",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "black", // White border color for the outline
                    },
                    "&:hover fieldset": {
                      borderColor: "orange", // Orange border on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "orange", // Orange border when focused
                    },
                  },
                  "& .MuiSelect-icon": {
                    color: "black", // Set the dropdown icon color to black
                  },
                }}
              >
                <MenuItem value="Query">Query</MenuItem>
                <MenuItem value="Feedback">Feedback</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            {/* Text Field for Customer Message */}
            <TextField
              label="Your Message"
              variant="outlined"
              fullWidth
              required
              multiline
              rows={4}
              InputProps={{
                sx: { borderRadius: "15px", color: "black" },
              }}
              InputLabelProps={{
                style: { color: "black" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "black",
                  },
                  "&:hover fieldset": {
                    borderColor: "orange",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "orange",
                  },
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "black",
                },
              }}
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{
                padding: "10px",
                borderRadius: "15px",
                backgroundColor: "black",
                color: "white",
                "&:hover": {
                  backgroundColor: "#e0e0de",
                  color: "black",
                },
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Contact Information */}
      <Box sx={{ textAlign: "center", marginBottom: "40px" }}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 6 }}
        >
          {/* Email */}
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRight: { sm: "2px dotted #ccc", xs: "none" },
            }}
          >
            <Box
              sx={{
                padding: "20px",
                color: "black",
                borderRadius: "12px",
                backgroundColor: "transparent",
                textAlign: "center",
              }}
            >
              <Typography variant="h6">Email</Typography>
              <Typography>info@100daysfinance.com</Typography>
            </Box>
          </Grid>

          {/* Phone */}
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRight: { sm: "2px dotted #ccc", xs: "none" },
            }}
          >
            <Box
              sx={{
                padding: "20px",
                color: "black",
                borderRadius: "12px",
                backgroundColor: "transparent",
                textAlign: "center",
              }}
            >
              <Typography variant="h6">Phone</Typography>
              <Typography>+91 9999999341</Typography>
            </Box>
          </Grid>

          {/* Address */}
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                padding: "20px",
                color: "black",
                borderRadius: "12px",
                backgroundColor: "transparent",
                textAlign: "center",
              }}
            >
              <Typography variant="h6">Address</Typography>
              <Typography>
                S-370, Panchsheel Park, New Delhi 110017, India
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Google Map */}
      <Box
        component="iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14003.909599614117!2d77.2116778697754!3d28.54194914193025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3b58f859605%3A0x31390d03b89ecdc3!2sS-370%2C%20Panchsheel%20Park%2C%20New%20Delhi%2C%20110017%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
        sx={{
          width: "100%",
          height: "400px",
          border: 0,
          borderRadius: "20px",
          mt: 5,
        }}
        allowFullScreen
        loading="lazy"
      />
    </Box>
  );
};

export default ContactUs;
