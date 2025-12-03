import React from 'react';
import { Shield, FileCheck, Lock, Code, Users, Search } from 'lucide-react';

const WhatWeDeliver = () => {
  const services = [
    { icon: Shield, title: 'SOC 2 Type I & II', description: 'Complete audit preparation and certification support' },
    { icon: FileCheck, title: 'ISO 27001', description: 'International security management standards' },
    { icon: Lock, title: 'HIPAA / GDPR Readiness', description: 'Healthcare and privacy compliance frameworks' },
    { icon: Code, title: 'AppSec & SDLC Hardening', description: 'Secure development lifecycle integration' },
    { icon: Users, title: 'Vendor Risk & Governance', description: 'Third-party security assessment programs' },
    { icon: Search, title: 'Penetration Testing + Cloud Security', description: 'Active threat detection and prevention' }
  ];

  return (
    <section className="section-container section-dark">
      <div className="section-content">
        <div className="section-header">
          <h2 className="section-title">What We Deliver</h2>
          <p className="section-subtitle">
            Full Compliance Scope
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="service-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="service-icon" size={28} />
                <div className="service-content">
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="callout-box">
          <Shield className="callout-icon" size={24} />
          <p className="callout-text">
            Not just SOC 2 — full cybersecurity coverage when needed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDeliver;