import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const tiers = [
    {
      name: 'Comprehensive SOC 2 Implementation',
      description: 'Full guidance, tools, policies, evidence',
      features: [
        'Complete SOC 2 Type I & II preparation',
        'Policy documentation & control implementation',
        'Evidence collection & organization',
        'Audit readiness verification',
        'Tool integration & automation setup',
        'Ongoing support during audit'
      ],
      timeline: '10-12 weeks typical timeline',
      highlight: false
    },
    {
      name: 'Audit-Ready Compliance Retainer',
      description: 'We maintain controls & stay ready throughout the year',
      features: [
        'Continuous compliance monitoring',
        'Quarterly security reviews',
        'Policy updates & documentation',
        'Evidence management system',
        'Annual audit preparation',
        'Priority support & consultation'
      ],
      timeline: 'Annual engagement',
      highlight: true
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-container" id="pricing">
      <div className="section-content">
        <div className="section-header">
          <h2 className="section-title">Flexible, Stage-Based Pricing</h2>
          <p className="section-subtitle">
            Pricing depends on scope — we make it predictable & efficient.
          </p>
        </div>

        <div className="pricing-grid">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`pricing-card ${tier.highlight ? 'pricing-card-highlight' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="pricing-header">
                <h3 className="pricing-title">{tier.name}</h3>
                <p className="pricing-description">{tier.description}</p>
              </div>

              <div className="pricing-features">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="pricing-feature">
                    <CheckCircle size={18} className="feature-check" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pricing-timeline">
                <Clock size={16} />
                <span>{tier.timeline}</span>
              </div>

              <button onClick={scrollToContact} className="btn-pricing">
                Get Started
                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Clock = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

export default Pricing;