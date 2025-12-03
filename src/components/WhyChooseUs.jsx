import React, { useEffect, useState, useRef } from 'react';
import { Clock, Users, MessageCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [weeks, setWeeks] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && weeks < 12) {
      const timer = setTimeout(() => {
        setWeeks(prev => Math.min(prev + 1, 12));
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [isVisible, weeks]);

  const metrics = [
    {
      icon: Clock,
      value: `${weeks}`,
      suffix: 'Weeks',
      label: 'To Audit-Ready Readiness'
    },
    {
      icon: Users,
      value: 'Built by',
      subtitle: 'Engineers + Risk Experts',
      label: 'Who Speak Your Language'
    },
    {
      icon: MessageCircle,
      value: 'Designed for',
      subtitle: 'Startups',
      label: 'Growth-Focused Approach'
    }
  ];

  return (
    <section className="section-container section-dark" ref={sectionRef}>
      <div className="section-content">
        <div className="section-header">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            Social Proof & Expertise
          </p>
        </div>

        <div className="metrics-grid">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div 
                key={index} 
                className="metric-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="metric-icon" size={40} />
                <div className="metric-value">
                  {metric.value}
                  {metric.suffix && <span className="metric-suffix">{metric.suffix}</span>}
                </div>
                {metric.subtitle && <div className="metric-subtitle">{metric.subtitle}</div>}
                <p className="metric-label">{metric.label}</p>
              </div>
            );
          })}
        </div>

        <div className="quote-box">
          <div className="quote-icon">"</div>
          <p className="quote-text">You build the product. We build the trust.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;