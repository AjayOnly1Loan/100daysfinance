import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Import your images
import image1 from '../assets/image/silai.webp';
import image2 from '../assets/image/badai.webp';
import image3 from '../assets/image/Saloon.png';
import image4 from '../assets/image/hotidukan.webp';
import image5 from '../assets/image/shopkeeper.webp';
import image6 from '../assets/image/Small Buisness Owner.png';
import image7 from '../assets/image/Startup.png';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '150vh',
    backgroundColor: 'white',
    paddingLeft: '20px',
    paddingRight: '40px',
  },
  outerBox: {
    width: '100%',
    height: '85%',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '16px',
    overflow: 'hidden',
    position: 'relative',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    fontWeight: 600,
    fontSize: '50px',
    color: '#333',
  },
  middleBox: {
    border: '1.5px solid #000000',
    width: '97%',
    height: '80%',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    padding: 10,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  imageWrapper: {
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  imageContainer: {
    flex: 'none',
    padding: '0 1px',
  },
  image: {
    width: 'auto',
    height: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  dotsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 10px',
  },
  button: {
    backgroundColor: '#ffffff',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
    zIndex: 1,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '50%', // Optional for circular buttons
  },
  leftButton: {
    marginRight: '10px', // Add spacing between the button and dots
  },
  rightButton: {
    marginLeft: '10px', // Add spacing between the button and dots
  },
  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    margin: '0 5px',
    backgroundColor: '#ccc',
    cursor: 'pointer',
    '&.active': {
      backgroundColor: '#333',
    },
  },
  // Media query for smaller screens
  '@media (max-width: 600px)': {
    container: {
      height: '60vh',
      paddingLeft: '10px',
      paddingRight: '10px',
    },
    imageWrapper: {
      height: '300px',
    },
    image: {
      height: '30vh',
    },
  },
}));

const ScrollImages = ({ id="eligible-people" }) => {
  const classes = useStyles();
  const images = [image1, image2, image3, image4, image5, image6, image7];
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  // Function to scroll based on the direction (+1 for next, -1 for previous)
  const handleScroll = (direction) => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;

    setCurrentIndex(newIndex);

    const scrollPosition = (scrollContainerRef.current.scrollWidth / images.length) * newIndex;
    scrollContainerRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    const scrollPosition = (scrollContainerRef.current.scrollWidth / images.length) * index;
    scrollContainerRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
  };

  // Effect for automatic scrolling
  useEffect(() => {
    if (isHovered) return; // Pause auto-scroll if hovered

    // Set up automatic scrolling every 5 seconds (5000ms)
    const autoScroll = setInterval(() => {
      handleScroll(1); // Scroll forward (next image)
    }, 5000);

    // Clear the interval when the component is unmounted or the index changes
    return () => clearInterval(autoScroll);
  }, [currentIndex, isHovered]); // Depend on `isHovered` and `currentIndex`

  return (
    <Box
      className={classes.container}
      id={id} // Pass the `id` prop here
      onMouseEnter={() => setIsHovered(true)} // Pause auto-scroll on hover
      onMouseLeave={() => setIsHovered(false)} // Resume auto-scroll when hover ends
    >
     <Box className={classes.outerBox}>
  <Typography sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
    Eligible Profiles
  </Typography>
  <Box className={classes.middleBox}>
    <Box
      className={classes.imageWrapper}
      ref={scrollContainerRef}
      onMouseWheel={(e) => {
        e.preventDefault();
        scrollContainerRef.current.scrollLeft += e.deltaY;
      }}
    >
      {images.map((img, index) => (
        <Box className={classes.imageContainer} key={index}>
          <img src={img} alt={`image-${index}`} className={classes.image} />
        </Box>
      ))}
    </Box>
  </Box>
  <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
    <button
      className={`${classes.button} ${classes.leftButton}`}
      onClick={() => handleScroll(-1)}
    >
      &#60;
    </button>
    <Box className={classes.dotsContainer}>
      {images.map((_, index) => (
        <div
          key={index}
          className={`${classes.dot} ${currentIndex === index ? 'active' : ''}`}
          onClick={() => handleDotClick(index)}
        />
      ))}
    </Box>
    <button
      className={`${classes.button} ${classes.rightButton}`}
      onClick={() => handleScroll(1)}
    >
      &#62;
    </button>
  </Box>
</Box>

    </Box>
  );
};

export default ScrollImages;
