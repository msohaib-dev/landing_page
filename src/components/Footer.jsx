import React from 'react';
import { Shield } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <img 
              src="https://i.ibb.co/qb9yd8k/deltar-w-m-removebg-preview.png" 
              alt="DELTARQ" 
              className="footer-logo"
            />
            <p className="footer-tagline">We secure ambition.</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-title">Services</h4>
              <button onClick={() => scrollToSection('services')} className="footer-link">Who We Serve</button>
              <button onClick={() => scrollToSection('execution')} className="footer-link">Our Process</button>
              <button onClick={() => scrollToSection('pricing')} className="footer-link">Pricing</button>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Company</h4>
              <button onClick={() => scrollToSection('hero')} className="footer-link">About</button>
              <button onClick={() => scrollToSection('contact')} className="footer-link">Contact</button>
              <a href="https://www.linkedin.com/in/msohaib-dev/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Connect</h4>
              <a href="mailto:sohaib.015.m@gmail.com" className="footer-link">Email Us</a>
              <a href="https://wa.me/923126745890" target="_blank" rel="noopener noreferrer" className="footer-link">WhatsApp</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-border"></div>
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {new Date().getFullYear()} DELTARQ. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <button className="footer-bottom-link">Privacy Policy</button>
              <button className="footer-bottom-link">Terms of Service</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;