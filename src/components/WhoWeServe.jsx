import React from 'react';
import { Cloud, DollarSign, Heart } from 'lucide-react';

const WhoWeServe = () => {
  const segments = [
    {
      icon: Cloud,
      title: 'SaaS Selling to US/EU Enterprise',
      description: 'Break into enterprise markets with SOC 2 compliance that removes procurement blockers and builds instant credibility.'
    },
    {
      icon: DollarSign,
      title: 'FinTech Platforms',
      description: 'Handle payment data securely with compliance frameworks that satisfy regulators, investors, and enterprise clients.'
    },
    {
      icon: Heart,
      title: 'Healthcare & Sensitive Data Startups',
      description: 'Protect patient data and unlock healthcare partnerships with HIPAA-ready security infrastructure.'
    }
  ];

  return (
    <section className="section-container" id="services">
      <div className="section-content">
        <div className="section-header">
          <h2 className="section-title">Who We Serve</h2>
          <p className="section-subtitle">
            We help you unlock bigger customers with security that scales.
          </p>
        </div>

        <div className="card-grid">
          {segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <div 
                key={index} 
                className="service-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-icon-wrapper">
                  <Icon className="card-icon" size={32} />
                </div>
                <h3 className="card-title">{segment.title}</h3>
                <p className="card-description">{segment.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;