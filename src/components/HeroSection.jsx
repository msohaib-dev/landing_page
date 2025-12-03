import React, { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, Zap, TrendingUp } from 'lucide-react';

const HeroSection = ({ scrollY }) => {
  const [trustScore, setTrustScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (trustScore < 97) {
        setTrustScore(prev => Math.min(prev + 2, 97));
      }
    }, 30);
    return () => clearTimeout(timer);
  }, [trustScore]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="hero">
      <div className="matrix-background"></div>
      
      <div className="hero-grid">
        <div className="hero-content" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
          <div className="hero-badge">
            <Shield size={16} />
            <span>Enterprise Security Made Simple</span>
          </div>

          <h1 className="hero-headline">
            Win Customers Faster —<br />
            <span className="gradient-text">We Handle SOC 2.</span>
          </h1>

          <p className="hero-tagline">Enterprise Trust. Startup Speed.</p>

          <div className="hero-promises">
            <div className="promise-item">
              <Zap className="promise-icon" />
              <div>
                <h4>Fast Compliance</h4>
                <p>Close Enterprise Deals</p>
              </div>
            </div>
            <div className="promise-item">
              <Shield className="promise-icon" />
              <div>
                <h4>Zero Confusion</h4>
                <p>Friendly Guided Process</p>
              </div>
            </div>
            <div className="promise-item">
              <TrendingUp className="promise-icon" />
              <div>
                <h4>Security Foundation</h4>
                <p>Future-Proof Your Growth</p>
              </div>
            </div>
          </div>

          <div className="trust-score-container">
            <div className="trust-score-header">
              <span>Enterprise Trust Score</span>
              <span className="trust-score-value">{trustScore}%</span>
            </div>
            <div className="trust-score-bar">
              <div 
                className="trust-score-fill"
                style={{ width: `${trustScore}%` }}
              ></div>
            </div>
          </div>

          <div className="hero-cta-group">
            <button onClick={scrollToContact} className="btn-primary">
              Request a Strategy Call
              <ArrowRight size={20} />
            </button>
            <a 
              href="https://wa.me/923126745890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              WhatsApp Us
              <ArrowRight size={20} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="spline-container">
            <Spline scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;