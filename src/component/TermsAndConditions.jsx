import React from 'react';
import { Box, Typography, Container, Paper, Divider } from '@mui/material';
import { Fade } from '@mui/material';
import ApplyNowImage from '../assets/image/Terms-Conditon-Banner-Image.jpg'; // Replace with your image path

const TermsAndConditions = () => {
    return (
        <div>
            <Box 
                sx={{ 
                    minHeight: '100vh',
                    padding: '30px',
                    background: "white  ", // Top-to-bottom gradient
                }}
            >
                 <img 
          src={ApplyNowImage} 
          alt="Apply Now" 
          style={{
            width: '100%',
            height: '90vh', // Fixed height
            marginTop: '0px',
            borderRadius: '30px',
            objectFit: 'cover', // Ensures the image is cropped properly to fit
          }}        />
        
                <Container maxWidth="lg">

                    {/* Terms and Conditions Content */}
                    <Paper elevation={3} sx={{ borderRadius: '8px', overflow: 'hidden' , color:'black', backgroundColor: 'transparent',  padding:{xs:1,md:8}}}>
                                            {/* Prominent Heading */}
                    <Box sx={{ textAlign: 'center', mt: 4 }}>
                        <Fade in timeout={1000}>
                            <Typography 
                                variant="h3" 
                                gutterBottom 
                                sx={{    
                                    marginBottom:'30px',
                                    color: 'black', 
                                    fontWeight: 'bold', 
                                    fontSize: '36px', 
                                    letterSpacing: '0.05em',
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': { transform: 'scale(1.05)' }
                                }}
                            >
                                Terms and Conditions
                            </Typography>
                        </Fade>
                    </Box>

                        <Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                            Welcome to 100daysfinance. By accessing or using our services, you agree to comply with and be bound by these Terms and Conditions. These Terms constitute a legal agreement between you (the "Borrower" or "User") and Pawansut Holdings Limited("Company," "we," "our," or "us"). If you do not agree to these Terms, please refrain from using our services.                            </Typography>
                            {/* <Typography>
                                These Terms and Conditions constitute a legal agreement between you and Pawansut Holdings Limited(an NBFC registered with RBI for lending purposes), which governs your use of our website and services. Please read these terms carefully. If you do not agree with these terms, you should refrain from using this website or applying for loans through 100daysfinance.
                            </Typography> */}
                        </Box>
                        <Divider sx={{ my: 2 }} />

                        <Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
                        <Typography variant="h6" gutterBottom sx={{  fontWeight: 'bold' }}>
                            1. Definitions
                        </Typography>
                        <Typography>
                            In these Terms, unless the context requires otherwise:
                        </Typography>
                        <ul>
                            <li>"Borrower" refers to any individual, small vendor, or SME applying for a loan.</li>
                            <li>"Loan" refers to the financial product offered by the Company, including principal, interest, and any applicable fees.</li>
                            <li>"Repayment Schedule" refers to the agreed timeline for loan repayment.</li>
                            <li>"Collateral" refers to any asset pledged by the Borrower to secure the loan, if applicable.</li>
                            <li>"Default" refers to the failure of the Borrower to repay the loan as per the agreed terms.</li>
                        </ul>
                    </Box>
                    <Divider sx={{ my: 2 }} />

                    <Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                            2. Eligibility Criteria
                        </Typography>
                        <Typography>
                            To apply for a loan, you must:
                        </Typography>
                        <ul>
                            <li>Be a citizen or a legal resident of India with a valid PAN and Aadhaar card.</li>
                            <li>Be at least 21 years old and not older than 60 years at the time of loan maturity.</li>
                            <li>Own or operate a registered small business or SME with a valid business registration certificate.</li>
                            <li>Maintain an active bank account in the name of the business.</li>
                            <li>Provide proof of income and business activity for the past 12 months.</li>
                        </ul>
                    </Box>
                    <Divider sx={{ my: 2 }} />

                    <Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
                        <Typography variant="h6" gutterBottom sx={{  fontWeight: 'bold' }}>
                            3. Loan Terms
                        </Typography>
                        <Typography>
                            <ul>
                                <li><strong>Loan Amount:</strong> ₹50,000 to ₹5,00,000.</li>
                                <li><strong>Tenure:</strong> Fixed at 100 days.</li>
                                <li><strong>Interest Rate:</strong> Determined based on creditworthiness, business performance, and prevailing market conditions.</li>
                                <li><strong>Processing Fee:</strong> A non-refundable processing fee will be deducted from the loan amount at the time of disbursement.</li>
                                <li><strong>Prepayment:</strong> Borrowers may prepay the loan in full or in part before the due date, subject to applicable prepayment charges.</li>
                            </ul>
                        </Typography>
                    </Box>
                    <Divider sx={{ my: 2 }} />

                    <Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
                        <Typography variant="h6" gutterBottom sx={{  fontWeight: 'bold' }}>
                            4. Loan Application Process
                        </Typography>
                        <Typography>
                            <ul>
                                <li><strong>Online Application:</strong> Submit your loan application through 100daysfinance by providing accurate and up-to-date information.</li>
                                <li><strong>Document Submission:</strong> Upload the required documents, including:
                                    <ul>
                                        <li>PAN Card and Aadhaar Card (for identity verification).</li>
                                        <li>Business registration certificate or GST registration.</li>
                                        <li>Last 6 months' bank statements.</li>
                                        <li>Proof of business address.</li>
                                    </ul>
                                </li>
                                <li><strong>Credit Assessment:</strong> We will assess your creditworthiness based on your financial history, business performance, and other relevant factors.</li>
                                <li><strong>Approval & Agreement:</strong> Upon approval, you will receive the loan agreement for acceptance.</li>
                            </ul>
                        </Typography>
                    </Box>
                    <Divider sx={{ my: 2 }} />

                    <Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
                        <Typography variant="h6" gutterBottom sx={{  fontWeight: 'bold' }}>
                            5. Repayment and Default
                        </Typography>
                        <Typography>
                            Loan repayments must be made as per the agreed repayment schedule. Failure to repay may result in:
                            <ul>
                                <li>Late payment fees.</li>
                                <li>Reporting to credit bureaus, affecting your credit score.</li>
                                <li>Legal action to recover outstanding amounts.</li>
                            </ul>
                        </Typography>
                    </Box>
                    <Divider sx={{ my: 2 }} />

                    <Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
                        <Typography variant="h6" gutterBottom sx={{  fontWeight: 'bold' }}>
                            6. Data Privacy and Security
                        </Typography>
                        <Typography>
                            We take your privacy seriously. Your personal and financial information will be securely handled and used solely for loan processing and communication purposes, in compliance with data protection laws.
                        </Typography>
                    </Box>
                    <Divider sx={{ my: 2 }} />

                    <Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                            7. Amendments to Terms
                        </Typography>
                        <Typography>
                            We reserve the right to modify or update these Terms and Conditions at any time. Updated terms will be posted on the website. It is your responsibility to stay informed.
                        </Typography>
                    </Box>

                        <Divider sx={{ my: 2 }} />

                        <Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                            8. Fees and Charges
                        </Typography>
                        <Typography>
                            The following fees and charges may apply:
                            <ul>
                                <li><b>Processing Fee:</b> As per the loan agreement.</li>
                                <li><b>Prepayment Charges:</b> No prepayment charges.</li>
                                <li><b>Late Payment Penalty:</b> Penal interest will be charged as per policy.</li>
                                <li><b>Legal and Recovery Charges:</b> As applicable in case of default.</li>
                            </ul>
                        </Typography>
                    </Box>
                    <Divider sx={{ my: 2 }} />

                    {/* Section 9: Borrower's Obligations */}
                    <Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                            9. Borrower’s Obligations
                        </Typography>
                        <Typography>
                            The Borrower agrees to:
                            <ul>
                                <li>Use the loan amount strictly for business purposes as declared during the application process.</li>
                                <li>Provide accurate and truthful information during the application and throughout the loan tenure.</li>
                                <li>Notify the Company of any significant changes in business operations, financial status, or contact information.</li>
                            </ul>
                        </Typography>
                    </Box>
                    <Divider sx={{ my: 2 }} />

                    {/* Section 10: Privacy and Data Security */}
                    <Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                            10. Privacy and Data Security
                        </Typography>
                        <Typography>
                            We are committed to safeguarding your personal and business information. Please review our Privacy Policy for details on data collection, usage, and storage.
                        </Typography>
                    </Box>
                    <Divider sx={{ my: 2 }} />

                    {/* Section 11: Limitation of Liability */}
                    <Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                            11. Limitation of Liability
                        </Typography>
                        <Typography>
                            The Company shall not be liable for:
                            <ul>
                                <li>Any indirect, incidental, or consequential damages arising from the use of our services.</li>
                                <li>Losses resulting from delays in loan processing or disbursement due to factors beyond our control.</li>
                                <li>Decisions made based on inaccurate or incomplete information provided by the Borrower.</li>
                            </ul>
                        </Typography>
                    </Box>
                    <Divider sx={{ my: 2 }} />

                    {/* Section 12: Termination of Services */}
                    <Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                            12. Termination of Services
                        </Typography>
                        <Typography>
                            The Company reserves the right to terminate or suspend your access to our services at any time without prior notice if:
                            <ul>
                                <li>You violate these Terms.</li>
                                <li>You provide false or misleading information.</li>
                                <li>You engage in fraudulent or unlawful activities.</li>
                            </ul>
                        </Typography>
                    </Box>
                    <Divider sx={{ my: 2 }} />

                    {/* Section 13: Governing Law and Jurisdiction */}
                    <Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                            13. Governing Law and Jurisdiction
                        </Typography>
                        <Typography>
                            These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in New Delhi.
                        </Typography>
                    </Box>
                    <Divider sx={{ my: 2 }} />

                    {/* Section 14: Contact Us */}
                    <Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                            14. Contact Us
                        </Typography>
                        <Typography>
                            For any inquiries, assistance, or complaints, please contact us:
                            <ul>
                                <li><b>Nodal Officer:</b> S-370, Panchsheel Park, New Delhi, 110017.</li>
                                <li><b>Email:</b> <a href="mailto:info@100daysfinance.com">info@100daysfinance.com</a></li>
                                <li><b>Phone:</b> 9999999341</li>
                            </ul>
                        </Typography>
                    </Box>

                    </Paper>
                </Container>
            </Box>
        </div>
    );
};

export default TermsAndConditions;
