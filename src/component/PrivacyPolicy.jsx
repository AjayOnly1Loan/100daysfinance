import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Container, Paper, Divider, Slide, Fade } from '@mui/material';
import privacyImage from '../assets/image/Privacy-Policy-(1).jpg';

const PrivacyPolicy = () => {
    const sections = [
        {
            title: "Privacy Policy",
            content: [
                "  At 100daysfinance.com, your privacy and trust are of utmost importance to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you access our website or use our services. We are committed to ensuring that your data is handled securely and transparently."
            ]
        },
        {
            title: "1. Information We Collect",
            content: [
                "When you interact with 100daysfinance.com, we may collect the following types of information:",
                "• Personal Identification Information: Name, email address, phone number, physical address, date of birth, PAN, Aadhar details, etc.",
                "• Financial Information: Bank account details, income statements, GST Number, credit history when applying for a loan, Statement of Bank Account, etc."
            ]
        },
        
        {
            title: "2. How We Use Your Information",
            content: [
                "We use your information to: ",
                "• Evaluate your loan eligibility and process applications effectively.",
                "• Provide better service by understanding your preferences and feedback.",
                "• Communicate important updates, notifications, and respond to inquiries.",
                "• Ensure compliance with legal and regulatory requirements, including KYC and AML norms."
            ]
        },
        
        {
            title: "3. Sharing Your Information",
            content: [
                "We do not sell or rent your personal information to third parties. However, we may share your data under the following circumstances:",
                "• With trusted third-party service providers who assist in delivering our services, such as payment processors, verification agencies, etc.",
                "• To comply with legal obligations, regulatory requests, or to protect the rights and safety of 100daysfinance.com and its users.",
                "• With Pawansut Holdings Limited, our parent NBFC, for processing loan applications and facilitating transactions."
            ]
        },
        
        {
            title: "4. Data Security",
            content: [
                "100daysfinance.com takes appropriate measures to protect your personal and financial data. We use industry-standard encryption methods and secure servers to prevent unauthorized access, data breaches, or misuse of information."
            ]
        },
        
        {
            title: "5. Cookies",
            content: [
                "Our website may use cookies to improve the user experience. Cookies are small text files stored on your device that help us understand how you use our website. You can choose to accept or decline cookies in your browser settings. However, declining cookies may affect your ability to use certain features on the site."
            ]
        },
        {
            title: "6. Your Rights",
            content: [
                "You have the right to:",
                "• Access the personal information we hold about you.",
                "• Request corrections to any inaccurate or incomplete information.",
                "• Opt out of marketing communications at any time.",
                "• Request deletion of your personal data, subject to legal obligations."
            ]
        },
        
        {
            title: "7. Retention of Information",
            content: [
                "We retain your information as long as it is necessary for business or legal reasons, and securely delete it when it is no longer needed."
            ]
        },
        
        {
            title: "8. Changes to This Privacy Policy",
            content: [
                "We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically."
            ]
        },
        
       
        {
            title: "9. Contact Us",
            content: [
                "If you have any questions, please contact us at:",
                "• Email: info@100daysfinance",
                "• Phone: +91 9999999341",
                "• Address: S-370, Panchsheel Park,New Delhi 110017, India",
               
            ]
        }
    ];

    const [isVisible, setIsVisible] = useState(false);
    const policyRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        });

        if (policyRef.current) observer.observe(policyRef.current);
        
        return () => {
            if (policyRef.current) observer.unobserve(policyRef.current);
        };
    }, []);

    return (
        <div ref={policyRef}>
            <Box 
                sx={{ 
                    minHeight: '100vh',
                    padding: '30px',
                    background: "white", // Top-to-bottom gradient
                }}
            >
                {/* Image Section */}
                <Box 
    sx={{ 
        position: 'relative',
        width: '100%',
        height: { xs: '60vh', sm: '60vh', md: '80vh', lg: '90vh' }, // Same height as the image
        overflow: 'hidden',
        mb: 2,
    }}
>
    <Slide direction="left" in={isVisible} timeout={1000}>
        <img 
            src={privacyImage} 
            alt="Privacy Policy" 
            style={{
                width: '100%', 
                height: '100%', // Matches the Box height
                objectFit: 'cover',
                borderRadius: '50px'
            }} 
        />
    </Slide>
</Box>

                <Container maxWidth="lg">
                    {/* Prominent Heading */}
                    <Box sx={{ textAlign: 'center', mt: 4 }}>
                        <Fade in={isVisible} timeout={1000}>
                            <Typography 
                                variant="h3" 
                                gutterBottom 
                                sx={{ 
                                    marginTop:{xs:'40px',md:'80px'},
                                    mb:{xs:2,md:5},
                                    color: 'black', 
                                    fontWeight: 'bold', 
                                    fontSize:{xs:'2rem',md:'2.8rem'} , 
                                    letterSpacing: '0.05em',
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': { transform: 'scale(1.05)' }
                                }}
                            >
                                Privacy Policy
                            </Typography>
                        </Fade>
                    </Box>

                    {/* Policy Content */}
                    <Paper elevation={3} sx={{ color: 'black', borderRadius: '8px', overflow: 'hidden' ,marginTop:{xs:0,md:'-30px'},marginBottom:'-20px',  backgroundColor: 'transparent',  padding:{xs:1,md:8}}}>
                    {sections.map((section, sectionIndex) => (
                            <div key={sectionIndex}>
                                <Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
                                    <Fade in={isVisible} timeout={1000 + sectionIndex * 500}>
                                        <Typography 
                                            variant="h6" 
                                            gutterBottom 
                                            sx={{ color: 'black', fontWeight: 'bold' }}
                                        >
                                            {section.title}
                                        </Typography>
                                    </Fade>
                                    {section.content.map((line, lineIndex) => (
                                        <Fade in={isVisible} timeout={1200 + sectionIndex * 500 + lineIndex * 500} key={lineIndex}>
                                            <Typography>{line}</Typography>
                                        </Fade>
                                    ))}
                                </Box>
                                <Divider sx={{ my: 2 }} />
                            </div>
                        ))}
                    </Paper>
                </Container>
            </Box>
        </div>
    );
};

export default PrivacyPolicy;
