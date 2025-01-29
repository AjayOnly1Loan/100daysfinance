import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Grid,
  InputAdornment,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import {
  Person,
  Email,
  Phone,
  Business,
  CurrencyRupee,
  AccountBalance,
  LocationCity,
  PinDrop,
  Map,
  CleaningServices,
} from "@mui/icons-material";
import Swal from "sweetalert2"; // Import SweetAlert2
import ApplyNowImage from "../assets/image/Apply-Now-Banner-Image.jpg"; // Replace with your image path

const ApplyNow = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [formValues, setFormValues] = useState({
    fullName: "",
    pan: "",
    mobile: "",
    aadhaar: "",
    personalEmail: "",
    businessName: "",
    propertyType: "",
    gstNo: "",
    loanAmount: "",
    turnover: "",
    pinCode: "",
    state: "",
    city: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const handlePincodeChange = async (e) => {
    const value = e.target.value;

    // Only allow numeric input and ensure the pincode has no more than 6 digits
    if (/^\d{0,6}$/.test(value)) {
      setFormValues({ ...formValues, pinCode: value });

      // If the pincode has exactly 6 digits, fetch city and state
      if (value.length === 6) {
        try {
          const response = await fetch(
            `https://api.postalpincode.in/pincode/${value}`
          );
          const data = await response.json();

          if (data[0].Status === "Success") {
            const { Block, State } = data[0].PostOffice[0];
            setCity(Block);
            setState(State);
            setFormValues((pre) => ({ ...pre, city: Block, state: State }));
          } else {
            // Handle invalid pin code case
            setCity("");
            setState("");
            Swal.fire({
              icon: "error",
              title: "Invalid Pincode",
              text: "Please enter a valid pincode.",
            });
          }
        } catch (error) {
          console.error("Error fetching pincode data:", error);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "An error occurred while fetching data. Please try again later.",
          });
        }
      } else {
        // Reset city and state if pincode is incomplete
        setCity("");
        setState("");
      }
    } else {
      // Clear the pincode and reset city/state if input is invalid
      setFormValues({ ...formValues, pinCode: "" });
      setCity("");
      setState("");
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let error = "";

    // Mobile: Only digits and max 10 characters
    if (name === "mobile" && (!/^\d*$/.test(value) || value.length > 10)) {
      error = "Mobile number must be a 10-digit number";
    }

    // PAN: Validate the PAN number format
    if (name === "pan") {
      const panInput = value.toUpperCase(); // Convert PAN to uppercase for consistency
      if (panInput.length <= 10) {
        if (
          /^[A-Z]{0,5}$/.test(panInput) || // First 5 characters must be letters
          /^[A-Z]{5}\d{0,4}$/.test(panInput) || // Next 4 characters must be digits
          /^[A-Z]{5}\d{4}[A-Z]?$/.test(panInput) // Last character must be a letter
        ) {
          setFormValues({ ...formValues, [name]: panInput });
          error = ""; // Clear any error message
        } else {
          error =
            "PAN format should be 5 letters, 4 digits, and 1 letter (e.g., ABCDE1234F).";
        }
      }
    }

    // Aadhaar: Only digits and max 12 characters
    if (name === "aadhaar" && (!/^\d*$/.test(value) || value.length > 12)) {
      error = "Aadhaar number must be a 12-digit number";
    }

    // Update form values and reset errors for the specific field
    setFormValues({ ...formValues, [name]: value });
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const validateForm = () => {
    const errors = {};

    // Validation checks for PAN, Aadhaar, and Mobile
    const aadhaarValid = /^\d{12}$/.test(formValues.aadhaar);
    const emailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(
      formValues.personalEmail
    );
    const pinCodeValid = /^\d{6}$/.test(formValues.pinCode);
    const mobileValid = /^\d{10}$/.test(formValues.mobile); // Validate mobile number
    const panValid = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formValues.pan); // Validate PAN format

    if (!aadhaarValid)
      errors.aadhaar = "Aadhaar number must be a 12-digit number";
    if (!mobileValid) errors.mobile = "Mobile number must be a 10-digit number";
    if (!panValid) errors.pan = "Invalid PAN format (e.g., ABCDE1234F)";
    if (!emailValid) errors.personalEmail = "Invalid email format";
    if (!pinCodeValid) errors.pinCode = "PinCode must be 6 digits";
    if (!termsAccepted)
      errors.termsAccepted = "You must accept the Terms & Conditions";
    // if (!state) errors.state = 'Please select a state';
    // if (!city) errors.city = 'Please select a city';

    // Required field checks
    Object.keys(formValues).forEach((field) => {
      if (!formValues[field]) {
        errors[field] = "This field is required";
      }
    });

    return errors;
  };

  const handleCheckboxChange = (event) => {
    setTermsAccepted(event.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validateForm(); // Validate form and get errors
    // Check for validation errors
    if (Object.keys(errors).length >= 2) {
      setFormErrors(errors); // Set the errors in state
      return; // Prevent submission
    }

    // Proceed with form submission if there are no errors
    try {
      const response = await fetch("https://api.120daysfinance.com/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          ...formValues,
          // state: state,
          // city: city,
          termsAccepted,
          source: "website",
        }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const result = await response.json();

      Swal.fire({
        title: "Success!",
        text: "Our executive will call you or revert you back in 24 hours.",
        icon: "success",
        confirmButtonText: "OK",
      });

      // Reset form after successful submission
      setFormValues({
        pan: "",
        mobile: "",
        aadhaar: "",
        personalEmail: "",
        businessName: "",
        propertyType: "",
        gstNo: "",
        loanAmount: "",
        turnover: "",
        pinCode: "",
        state: "",
        city: "",
      });
      setTermsAccepted(false);

      setFormErrors({}); // Reset form errors
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div>
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
            height: { xs: "40vh", sm: "70vh", md: "80vh", lg: "90vh" },
            overflow: "hidden",
            mb: 2,
          }}
        >
          <Box
            component="img"
            src={ApplyNowImage}
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

        <Container maxWidth="xl" sx={{ mt: 4 }}>
          {/* Form Section */}
          <Box
            component="form"
            id="loanForm"
            // onSubmit={handleSubmit}

            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              backgroundColor: " transparent",
              padding: 2,
              borderRadius: 2,
              boxShadow: 3,
              width: "100%",
            }}
          >
            {/* Personal Information Section */}
            <Typography variant="h6" gutterBottom sx={{ color: "black" }}>
              Personal Information
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={handleInputChange}
                  name="fullName"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Box
                          sx={{
                            backgroundColor: "white",
                            borderRadius: "50%",
                            padding: "4px",
                          }}
                        >
                          <Person sx={{ color: "black" }} />
                        </Box>
                      </InputAdornment>
                    ),
                    style: {
                      color: "black", // Text color
                    },
                  }}
                  placeholder="Enter your full name"
                  sx={{
                    mb: 2,
                    color: "black", // Text color
                    borderRadius: "8px",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "black", // Border color
                      },
                      "&:hover fieldset": {
                        borderColor: "black", // Border color on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "black", // Border color on focus
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "black", // Label color
                    },
                    "& .MuiInputBase-input": {
                      color: "black", // Text input color
                    },
                    "& .MuiOutlinedInput-root .MuiInputBase-input::placeholder":
                      {
                        color: "black", // Placeholder color
                      },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="PAN Card"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={handleInputChange}
                  name="pan"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Box
                          sx={{
                            backgroundColor: "white",
                            borderRadius: "50%",
                            padding: "4px",
                          }}
                        >
                          <AccountBalance sx={{ color: "black" }} />
                        </Box>
                      </InputAdornment>
                    ),
                    style: {
                      color: "white", // Text color
                    },
                  }}
                  placeholder="Enter your PAN number"
                  sx={{
                    mb: 2,
                    color: "black", // Text color
                    borderRadius: "8px",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "black", // Border color
                      },
                      "&:hover fieldset": {
                        borderColor: "black", // Border color on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "black", // Border color on focus
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "black", // Label color
                    },
                    "& .MuiInputBase-input": {
                      color: "black", // Text input color
                    },
                    "& .MuiOutlinedInput-root .MuiInputBase-input::placeholder":
                      {
                        color: "black", // Placeholder color
                      },
                  }}
                />
                {formErrors.pan && (
                  <Typography color="error">{formErrors.pan}</Typography>
                )}
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Aadhar Card"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={handleInputChange}
                  name="aadhaar"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Box
                          sx={{
                            backgroundColor: "white",
                            borderRadius: "50%",
                            padding: "4px",
                          }}
                        >
                          <AccountBalance sx={{ color: "black" }} />
                        </Box>
                      </InputAdornment>
                    ),
                    style: {
                      color: "white", // Text color
                    },
                  }}
                  placeholder="Enter your Aadhar number"
                  sx={{
                    mb: 2,
                    color: "black", // Text color
                    borderRadius: "8px",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "black", // Border color
                      },
                      "&:hover fieldset": {
                        borderColor: "black", // Border color on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "black", // Border color on focus
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "black", // Label color
                    },
                    "& .MuiInputBase-input": {
                      color: "black", // Text input color
                    },
                    "& .MuiOutlinedInput-root .MuiInputBase-input::placeholder":
                      {
                        color: "black", // Placeholder color
                      },
                  }}
                />
                {formErrors.aadhaar && (
                  <Typography color="error">{formErrors.aadhaar}</Typography>
                )}
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  label="Mobile Number"
                  type="tel"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={handleInputChange}
                  name="mobile"
                  inputProps={{ minLength: 10, maxLength: 10 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Box
                          sx={{
                            backgroundColor: "white",
                            borderRadius: "50%",
                            padding: "4px",
                          }}
                        >
                          <Phone sx={{ color: "black" }} />
                        </Box>
                      </InputAdornment>
                    ),
                    style: {
                      color: "white", // Text color
                    },
                  }}
                  placeholder="Enter your mobile number"
                  sx={{
                    mb: 2,
                    color: "black", // Text color
                    borderRadius: "8px",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "black", // Border color
                      },
                      "&:hover fieldset": {
                        borderColor: "black", // Border color on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "black", // Border color on focus
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "black", // Label color
                    },
                    "& .MuiInputBase-input": {
                      color: "black", // Text input color
                    },
                    "& .MuiOutlinedInput-root .MuiInputBase-input::placeholder":
                      {
                        color: "black", // Placeholder color
                      },
                  }}
                />
                {formErrors.mobile && (
                  <Typography color="error">{formErrors.mobile}</Typography>
                )}
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Personal Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={handleInputChange}
                  name="personalEmail"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Box
                          sx={{
                            backgroundColor: "white",
                            borderRadius: "50%",
                            padding: "4px",
                          }}
                        >
                          <Email sx={{ color: "black" }} />
                        </Box>
                      </InputAdornment>
                    ),
                    style: {
                      color: "white", // Text color
                    },
                  }}
                  placeholder="Enter your personal email"
                  sx={{
                    mb: 2,
                    color: "black", // Text color
                    borderRadius: "8px",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "black", // Border color
                      },
                      "&:hover fieldset": {
                        borderColor: "black", // Border color on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "black", // Border color on focus
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "black", // Label color
                    },
                    "& .MuiInputBase-input": {
                      color: "black", // Text input color
                    },
                    "& .MuiOutlinedInput-root .MuiInputBase-input::placeholder":
                      {
                        color: "black", // Placeholder color
                      },
                  }}
                />
              </Grid>
            </Grid>

            {/* Financial Information Section */}
            <Typography
              variant="h6"
              gutterBottom
              sx={{ mt: 4, color: "black" }}
            >
              Financial Information
            </Typography>
            <Grid container spacing={3}>
              {/* Business Name */}
              <Grid item xs={12} md={6}>
                <TextField
                  label="Business Name"
                  variant="outlined"
                  fullWidth
                  onChange={handleInputChange}
                  name="businessName"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Box
                          sx={{
                            backgroundColor: "white",
                            borderRadius: "50%",
                            padding: "4px",
                          }}
                        >
                          <Business sx={{ color: "black" }} />
                        </Box>
                      </InputAdornment>
                    ),
                  }}
                  placeholder="Enter your business name"
                  sx={{
                    mb: 2,
                    color: "black", // Text color
                    borderRadius: "8px",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "black", // Border color
                      },
                      "&:hover fieldset": {
                        borderColor: "black", // Border color on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "black", // Border color on focus
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "black", // Label color
                    },
                    "& .MuiInputBase-input": {
                      color: "black", // Text input color
                    },
                    "& .MuiOutlinedInput-root .MuiInputBase-input::placeholder":
                      {
                        color: "black", // Placeholder color
                      },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Business Property"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={handleInputChange}
                  select
                  name="propertyType"
                  placeholder="Property Type"
                  sx={{
                    mb: 2,
                    borderRadius: "8px",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "black", // Border color
                      },
                      "&:hover fieldset": {
                        borderColor: "black", // Border color on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "black", // Border color on focus
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "black", // Label color
                    },
                    "& .MuiInputBase-input": {
                      color: "black", // Text input color
                    },
                    "& .MuiSelect-icon": {
                      color: "black", // Dropdown icon color
                      position: "absolute",
                      right: "16px", // Align to the right of the input box
                      top: "50%", // Vertically align icon
                      transform: "translateY(-50%)", // Center the icon
                    },
                    "& option": {
                      backgroundColor: "white", // Dropdown option background
                      color: "black", // Dropdown option text color
                    },
                  }}
                  SelectProps={{
                    native: true, // Native HTML <select>
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Box
                          sx={{
                            backgroundColor: "white",
                            borderRadius: "50%",
                            padding: "4px",
                          }}
                        >
                          <Business sx={{ color: "black" }} />
                        </Box>
                      </InputAdornment>
                    ),
                  }}
                  defaultValue="" // Ensures the default placeholder works properly
                >
                  <option value="" disabled>
                    Property Type
                  </option>
                  <option value="own">Own</option>
                  <option value="rental">Rental</option>
                </TextField>
              </Grid>

              {/* GST Number */}
              <Grid item xs={12} md={6}>
                <TextField
                  label="GST No"
                  variant="outlined"
                  fullWidth
                  onChange={handleInputChange}
                  name="gstNo"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Box
                          sx={{
                            backgroundColor: "white",
                            borderRadius: "50%",
                            padding: "4px",
                          }}
                        >
                          <Business sx={{ color: "black" }} />
                        </Box>
                      </InputAdornment>
                    ),
                  }}
                  placeholder="Enter your GST number"
                  sx={{
                    mb: 2,
                    color: "black", // Text color
                    borderRadius: "8px",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "black", // Border color
                      },
                      "&:hover fieldset": {
                        borderColor: "black", // Border color on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "black", // Border color on focus
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "black", // Label color
                    },
                    "& .MuiInputBase-input": {
                      color: "black", // Text input color
                    },
                    "& .MuiOutlinedInput-root .MuiInputBase-input::placeholder":
                      {
                        color: "black", // Placeholder color
                      },
                  }}
                />
              </Grid>

              {/* Loan Amount */}
              <Grid item xs={12} md={6}>
                <TextField
                  label="Loan Amount (₹)"
                  type="number"
                  variant="outlined"
                  onChange={handleInputChange}
                  fullWidth
                  required
                  name="loanAmount"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Box
                          sx={{
                            backgroundColor: "white",
                            borderRadius: "50%",
                            padding: "4px",
                          }}
                        >
                          <CurrencyRupee sx={{ color: "black" }} />
                        </Box>
                      </InputAdornment>
                    ),
                  }}
                  placeholder="Enter loan amount"
                  sx={{
                    mb: 2,
                    color: "black", // Text color
                    borderRadius: "8px",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "black", // Border color
                      },
                      "&:hover fieldset": {
                        borderColor: "black", // Border color on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "black", // Border color on focus
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "black", // Label color
                    },
                    "& .MuiInputBase-input": {
                      color: "black", // Text input color
                    },
                    "& .MuiOutlinedInput-root .MuiInputBase-input::placeholder":
                      {
                        color: "black", // Placeholder color
                      },
                  }}
                />
              </Grid>

              {/* Yearly Turnover */}
              <Grid item xs={12} md={6}>
                <TextField
                  label="Yearly Turnover (₹)"
                  type="number"
                  variant="outlined"
                  fullWidth
                  onChange={handleInputChange}
                  required
                  name="turnover"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Box
                          sx={{
                            backgroundColor: "white",
                            borderRadius: "50%",
                            padding: "4px",
                          }}
                        >
                          <CurrencyRupee sx={{ color: "black" }} />
                        </Box>
                      </InputAdornment>
                    ),
                  }}
                  placeholder="Enter yearly turnover"
                  sx={{
                    mb: 2,
                    color: "black", // Text color
                    borderRadius: "8px",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "black", // Border color
                      },
                      "&:hover fieldset": {
                        borderColor: "black", // Border color on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "black", // Border color on focus
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "black", // Label color
                    },
                    "& .MuiInputBase-input": {
                      color: "black", // Text input color
                    },
                    "& .MuiOutlinedInput-root .MuiInputBase-input::placeholder":
                      {
                        color: "black", // Placeholder color
                      },
                  }}
                />
              </Grid>

              {/* State */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  name="state"
                  label="State"
                  value={state}
                  error={!!formErrors.state}
                  helperText={formErrors.state || ""}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Box
                          sx={{
                            backgroundColor: "white",
                            borderRadius: "50%",
                            padding: "4px",
                          }}
                        >
                          <Map sx={{ color: "black" }} />
                        </Box>
                      </InputAdornment>
                    ),
                  }}
                  placeholder="Enter state"
                  sx={{
                    mb: 2,
                    color: "black", // Text color
                    borderRadius: "8px",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "black", // Border color
                      },
                      "&:hover fieldset": {
                        borderColor: "black", // Border color on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "black", // Border color on focus
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "black", // Label color
                    },
                    "& .MuiInputBase-input": {
                      color: "black", // Text input color
                    },
                    "& .MuiOutlinedInput-root .MuiInputBase-input::placeholder":
                      {
                        color: "black", // Placeholder color
                      },
                  }}
                />
              </Grid>

              {/* City */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  name="city"
                  label="City"
                  value={city}
                  error={!!formErrors.city}
                  helperText={formErrors.city || ""}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Box
                          sx={{
                            backgroundColor: "white",
                            borderRadius: "50%",
                            padding: "4px",
                          }}
                        >
                          <LocationCity sx={{ color: "black" }} />
                        </Box>
                      </InputAdornment>
                    ),
                  }}
                  placeholder="Enter city"
                  sx={{
                    mb: 2,
                    color: "black", // Text color
                    borderRadius: "8px",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "black", // Border color
                      },
                      "&:hover fieldset": {
                        borderColor: "black", // Border color on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "black", // Border color on focus
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "black", // Label color
                    },
                    "& .MuiInputBase-input": {
                      color: "black", // Text input color
                    },
                    "& .MuiOutlinedInput-root .MuiInputBase-input::placeholder":
                      {
                        color: "black", // Placeholder color
                      },
                  }}
                />
              </Grid>

              {/* Pincode */}
              <Grid item xs={12} md={6}>
                <TextField
                  label="Select Pincode"
                  variant="outlined"
                  fullWidth
                  required
                  name="pinCode"
                  onChange={handlePincodeChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Box
                          sx={{
                            backgroundColor: "white",
                            borderRadius: "50%",
                            padding: "4px",
                          }}
                        >
                          <PinDrop sx={{ color: "black" }} />
                        </Box>
                      </InputAdornment>
                    ),
                  }}
                  placeholder="Enter pincode"
                  sx={{
                    mb: 2,
                    color: "black", // Text color
                    borderRadius: "8px",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "black", // Border color
                      },
                      "&:hover fieldset": {
                        borderColor: "black", // Border color on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "black", // Border color on focus
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "black", // Label color
                    },
                    "& .MuiInputBase-input": {
                      color: "black", // Text input color
                    },
                    "& .MuiOutlinedInput-root .MuiInputBase-input::placeholder":
                      {
                        color: "black", // Placeholder color
                      },
                  }}
                />
              </Grid>
            </Grid>
            {/* Checkbox for Terms and Privacy */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    required
                    checked={termsAccepted}
                    onChange={handleCheckboxChange}
                    sx={{ color: "black" }}
                  />
                }
                label={
                  <span style={{ color: "black" }}>
                    I accept the{" "}
                    <a href="/terms-condition" style={{ color: "#4caf50" }}>
                      Terms and Conditions
                    </a>{" "}
                    and{" "}
                    <a href="/privacy-policy" style={{ color: "#4caf50" }}>
                      Privacy Policy
                    </a>
                  </span>
                }
              />
            </Box>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              onClick={handleSubmit}
              sx={{
                backgroundColor: "white",
                color: "black",
                fontWeight: "bold",
                borderRadius: "30px",
                "&:hover": { backgroundColor: "#e0e0de" },
                fontSize: "14px", // Smaller font size for the button
                padding: "8px ", // Smaller padding
              }}
            >
              Apply Now
            </Button>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default ApplyNow;
