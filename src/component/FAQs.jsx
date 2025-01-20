import React from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
    Paper,
    Container,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { keyframes } from '@mui/system';
import ApplyNowImage from '../assets/image/Faq-Banner-Image (2).jpg'; // Replace with your image path

const FAQs = () => {
    // Animation for lines coming in one by one
    const lineAnimation = keyframes`
        0% {
            opacity: 0;
            transform: translateY(20px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    `;

    return (
        <Box 
        sx={{ 
          background: "white", // Top-to-bottom gradient

          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh', // Adjust height as needed
          padding: '30px',
        }}
      >
      {/* Image Section - Full Width */}
      <Box 
        sx={{ 
          position: 'relative', // Make the container relative for absolute positioning
          mb: 6
        }}
      >
       <Box sx={{ height: 'auto', maxHeight: '90vh', overflow: 'hidden', position: 'relative' }}>
  <img 
    src={ApplyNowImage} 
    alt="Apply Now" 
    style={{ 
      width: '100%', 
      height: '90vh',  // This makes the image take up the full height of the box
      objectFit: 'cover', // Ensures the image covers the container without distortion
      borderRadius: '30px' 
    }} 
  />
</Box>

                <Typography
                    variant="h3"
                    sx={{
                        marginTop:'70px',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: 'black',
                        mb: 4,
                        fontSize: '3rem',
                        padding: '0.5rem',
                        borderRadius: '8px',
                    }}
                >
                    Frequently Asked Questions
                </Typography>
                <Paper elevation={3} sx={{ color: 'black', borderRadius: '8px', overflow: 'hidden', backgroundColor: 'transparent' }}>
  <div className="accordion-wrapper">
    {[
      {
        id: 'faq1',
        question: '1. What is 100daysfinance?',
        answer: `100daysfinance is an online platform operated by Pawansut Holdings Limited, an RBI-registered NBFC, offering short-term business loans to small vendors, micro-entrepreneurs, and SMEs across India.`,
      },
      {
        id: 'faq2',
        question: '2. What types of loans do you offer?',
        answer: `We offer short-term business loans ranging from ₹50,000 to ₹5,00,000 with a fixed tenure of 100 days.`,
      },
      {
        id: 'faq3',
        question: '3. Who is eligible to apply for a loan?',
        answer: `You are eligible to apply if you:<br />● Are an Indian citizen or its resident.<br />● Are between 21 and 60 years of age.<br />● Own or operate a registered small business, vendor, or SME.<br />● Can provide necessary business and financial documents.`,
      },
      {
        id: 'faq4',
        question: '4. What documents are required to apply for a loan?',
        answer: `You will need the following documents:<br />● PAN and Aadhaar card (for identity verification).<br />● Business registration certificate or GST registration.<br />● Last 6 months' bank statements.<br />● Proof of business address.<br />● Income proof (if applicable).`,
      },
      {
        id: 'faq5',
        question: '5. How can I apply for a loan?',
        answer: `You can apply for a loan by following these steps:<br />1. Visit 100daysfinance.<br />2. Complete the online loan application form.<br />3. Upload the required documents.<br />4. Submit the application for review.`,
      },
      {
        id: 'faq6',
        question: '6. How long does it take to get a loan approved?',
        answer: `Loan approval typically takes 30 minutes after you submit all the required documents. However, this may vary depending on the completeness and accuracy of the information provided.`,
      },
      {
        id: 'faq7',
        question: '7. How is the loan amount disbursed?',
        answer: `Upon approval, the loan amount is disbursed directly to the bank account you provided during the application process within 30 minutes.`,
      },
      {
        id: 'faq8',
        question: '8. What is the interest rate on the loan?',
        answer: `The interest rate varies based on your credit profile, business performance, and other factors. The exact rate will be communicated to you during the loan approval process.`,
      },
      {
        id: 'faq9',
        question: '9. Are there any processing fees?',
        answer: `Yes, a non-refundable processing fee is charged as a percentage of the loan amount. This fee will be deducted from the loan disbursement.`,
      },
      {
        id: 'faq10',
        question: '10. Can I prepay the loan before the 100-day term?',
        answer: `Yes, you can prepay the loan before the term ends. And there are no prepayment charges.`,
      },
      {
        id: 'faq11',
        question: '11. What happens if I miss a repayment?',
        answer: `If you miss a repayment:<br />● A late payment fee will be charged as per the loan agreement.<br />● Your credit score may be negatively impacted.<br />● Continued default may result in legal action or recovery proceedings.`,
      },
      {
        id: 'faq12',
        question: '12. How can I make loan repayments?',
        answer: `You can repay the loan through:<br />● Bank transfers (NEFT/RTGS/IMPS).<br />● UPI payments.<br />● Post-dated cheques (if applicable).`,
      },
      {
        id: 'faq13',
        question: '13. Is there a penalty for late payments?',
        answer: `Yes, a late payment penalty will be charged as per the terms mentioned in your loan agreement. The penalty is typically a percentage of the overdue amount.`,
      },
      {
        id: 'faq14',
        question: '14. Will my loan application affect my credit score?',
        answer: `Submitting a loan application will not impact your credit score. However, defaulting on loan repayments or making late payments can negatively affect your credit score.`,
      },
      {
        id: 'faq15',
        question: '15. How can I contact customer support?',
        answer: `You can reach our customer support team for any inquiries or assistance through:<br />● Email: info@100daysfinance.com<br />● Phone: 9999999341<br />● Address: S-370, Panchsheel Park, New Delhi, 110017.`,
      },
    ].map((faq, index) => (
      <Accordion
        key={faq.id}
        sx={{
          color: 'black',
          fontFamily: 'cursive',
          marginBottom: '1rem',
          backgroundColor: 'transparent',
          animation: `${lineAnimation} 0.5s ease-in-out ${index * 0.2}s forwards`,
          opacity: 0,
          transform: 'translateY(20px)',
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: 'black', // Default color is black
                transition: 'color 0.3s ease', // Smooth color transition
                '.Mui-expanded &': {
                  color: 'black', // Change to white when expanded
                },
                '&:hover': {
                  color: 'black', // White icon on hover
                },
              }}
            />
          }
          aria-controls={`${faq.id}-content`}
          id={`${faq.id}-header`}
          sx={{
            color: 'black',
            '&:hover': {
              backgroundColor: 'white', // Black background on hover
              color: 'black', // White text on hover
            },
            '&.Mui-expanded': {
              backgroundColor: '#D3D3D3',
              color: 'black',
            },
          }}
        >
          <Typography>{faq.question}</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            animation: `${lineAnimation} 0.5s ease-in-out`,
          }}
        >
          <Typography dangerouslySetInnerHTML={{ __html: faq.answer }} />
        </AccordionDetails>
      </Accordion>
    ))}
  </div>
</Paper>

            </Box>
        </Box>
    );
};

export default FAQs;