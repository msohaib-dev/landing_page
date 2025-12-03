import React from 'react';
import { Cpu, Cloud, GitBranch, Shield } from 'lucide-react';

const TechStack = () => {
  const categories = [
    {
      icon: Cpu,
      title: 'Automation Platforms',
      tools: ['Drata', 'Vanta', 'Secureframe']
    },
    {
      icon: Cloud,
      title: 'Cloud Security',
      tools: ['AWS Controls Mapping', 'Azure Security Center']
    },
    {
      icon: GitBranch,
      title: 'Development Integration',
      tools: ['Jira', 'GitHub', 'GitLab']
    },
    {
      icon: Shield,
      title: 'Endpoint & SIEM',
      tools: ['JAMF / Intune', 'Sentinel / Splunk']
    }
  ];

  return (
    <section className="section-container section-tech">
      <div className="section-content">
        <div className="section-header">
          <h2 className="section-title">Technology & Tools We Support</h2>
          <p className="section-subtitle">
            We integrate leading automation platforms when budget allows
          </p>
        </div>

        <div className="tech-grid">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index} 
                className="tech-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="tech-icon" size={28} />
                <h4 className="tech-title">{category.title}</h4>
                <div className="tech-tools">
                  {category.tools.map((tool, idx) => (
                    <span key={idx} className="tech-badge">{tool}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="tech-note">
          <p>Our solutions fit your stage — startup-friendly, growth-focused.</p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;