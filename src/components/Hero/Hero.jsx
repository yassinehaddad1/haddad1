import React from 'react';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import './Hero.css';

const channels = [
  { id: 1, logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' },
  { id: 2, logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Shahid.net_New_Logo.png' },
  { id: 3, logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg' },
  { id: 4, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/ESPN_wordmark.svg/1280px-ESPN_wordmark.svg.png' },
  { id: 5, logo: 'https://i0.wp.com/www.maisonshiiba.fr/wp-content/uploads/2023/06/Bein_sport_logo.png?w=1020&ssl=1' },
  { id: 6, logo: 'https://www.citypng.com/public/uploads/preview/hd-hbo-white-logo-transparent-background-701751694708059eqwbw0wzhn.png' },
  { id: 7, logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/ART_logo.png' },
  { id: 8, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Rotana_logo.png/1200px-Rotana_logo.png' },
  // Duplicate channels for seamless scrolling
  { id: 9, logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' },
  { id: 10, logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Shahid.net_New_Logo.png' },
  { id: 11, logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg' },
  { id: 12, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/ESPN_wordmark.svg/1280px-ESPN_wordmark.svg.png' }
];

const Hero = () => {
  return (
    <>
      <section className="hero-section" id="home">
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover Top IPTV Service
              <div className="highlight-text">Channels</div>
            </motion.h1>
            <motion.p 
              className="hero-tagline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Anytime, Anywhere!
            </motion.p>
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="discover-button">
                <span>Get Started</span>
                <ArrowForwardIcon className="arrow-icon" />
              </button>
              <button className="watch-button">
                <PlayArrowIcon className="play-icon" />
                <span>Watch Demo</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <div className="channels-strip">
        <div className="channels-scroll">
          <div className="channels-container">
            {channels.map((channel) => (
              <motion.div
                key={channel.id}
                className="channel-item"
                whileHover={{ scale: 1.1 }}
              >
                <img src={channel.logo} alt="channel logo" className="channel-logo" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
