import React from 'react';
import { motion } from 'framer-motion';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import './Contact.css';

const Contact = () => {
  const whatsappNumber = '+212679550640'; // Replace with your WhatsApp number
  const whatsappMessage = 'Hello! I\'m interested in your IPTV service.';
  const whatsappUrl = `https://wa.me/${+212679550640}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-subtitle">
            We're here to help! Contact us through any of these channels
          </p>
        </motion.div>

        <div className="contact-cards">
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card whatsapp"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <WhatsAppIcon className="contact-icon" />
            <h3 className="contact-method">WhatsApp</h3>
            <p className="contact-description">Chat with us directly on WhatsApp</p>
            <span className="contact-action">Message Now</span>
          </motion.a>

          <motion.div
            className="contact-card email"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <EmailIcon className="contact-icon" />
            <h3 className="contact-method">Email</h3>
            <p className="contact-description">Send us an email anytime</p>
            <a href="mailto:support@premiumiptv.com" className="contact-action">
              Email Us
            </a>
          </motion.div>

          <motion.div
            className="contact-card support"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <SupportAgentIcon className="contact-icon" />
            <h3 className="contact-method">24/7 Support</h3>
            <p className="contact-description">Get help whenever you need</p>
            <span className="contact-action">Always Available</span>
          </motion.div>
        </div>

        <motion.div
          className="contact-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="cta-title">Ready to get started?</h3>
          <p className="cta-description">
            Contact us now and experience premium IPTV service
          </p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="cta-button">
            <WhatsAppIcon /> Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
