import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`dark-header ${isScrolled ? 'header-scrolled' : ''}`}
      style={{
        background: isScrolled ? 'rgba(0, 0, 0, 0.95)' : '#000000',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.4s ease-in-out'
      }}
    >
      <div className="header-content">
        <img 
          src="https://i.ibb.co/qb9yd8k/deltar-w-m-removebg-preview.png" 
          alt="DELTARQ" 
          className="dark-logo"
        />
        
        <nav className="dark-nav desktop-nav">
          <button onClick={() => scrollToSection('services')} className="dark-nav-link">Services</button>
          <button onClick={() => scrollToSection('execution')} className="dark-nav-link">Process</button>
          <button onClick={() => scrollToSection('pricing')} className="dark-nav-link">Pricing</button>
          <button onClick={() => scrollToSection('contact')} className="dark-nav-link">Contact</button>
          <a 
            href="https://wa.me/923126745890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary-small"
          >
            WhatsApp Us
          </a>
        </nav>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <button onClick={() => scrollToSection('services')} className="mobile-nav-link">Services</button>
          <button onClick={() => scrollToSection('execution')} className="mobile-nav-link">Process</button>
          <button onClick={() => scrollToSection('pricing')} className="mobile-nav-link">Pricing</button>
          <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">Contact</button>
          <a 
            href="https://wa.me/923126745890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary-small mobile-cta"
          >
            WhatsApp Us
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;