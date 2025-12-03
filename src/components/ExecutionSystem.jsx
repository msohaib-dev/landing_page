import React from 'react';
import { Search, Settings, FileCheck } from 'lucide-react';

const ExecutionSystem = () => {
  const steps = [
    {
      step: '01',
      icon: Search,
      title: 'Security Gap Analysis',
      description: 'We audit your current security posture and create a clear, prioritized action plan with no ambiguity.',
      highlight: 'Clear action plan'
    },
    {
      step: '02',
      icon: Settings,
      title: 'Guided Implementation',
      description: 'We work alongside your team to implement policies, controls, and automation that actually work.',
      highlight: 'Policies, controls, automation'
    },
    {
      step: '03',
      icon: FileCheck,
      title: 'Audit-Ready Package',
      description: 'All evidence organized, documented, and delivered in audit-ready format with full transparency.',
      highlight: 'Evidence organized & delivered'
    }
  ];

  return (
    <section className="section-container" id="execution">
      <div className="section-content">
        <div className="section-header">
          <h2 className="section-title">Our Execution System</h2>
          <p className="section-subtitle">
            3-Step Roadmap
          </p>
        </div>

        <div className="execution-timeline">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index} 
                className="execution-step"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="step-number">{step.step}</div>
                <div className="step-icon-wrapper">
                  <Icon className="step-icon" size={32} />
                </div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                  <div className="step-highlight">{step.highlight}</div>
                </div>
                {index < steps.length - 1 && <div className="step-connector"></div>}
              </div>
            );
          })}
        </div>

        <div className="execution-caption">
          <p>No guesswork. No noise. Just results.</p>
        </div>
      </div>
    </section>
  );
};

export default ExecutionSystem;