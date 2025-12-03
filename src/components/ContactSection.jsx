import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Linkedin } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Frontend validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    // TODO: Backend email integration
    // For now, simulate success
    setTimeout(() => {
      toast.success('Message sent! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', company: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="section-container section-dark" id="contact">
      <div className="section-content">
        <div className="section-header">
          <h2 className="section-title">Let's Make Your Next Enterprise Deal a YES.</h2>
          <p className="section-subtitle">
            Ready to turn security into your competitive advantage?
          </p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <h3 className="contact-info-title">Get in Touch</h3>
            <p className="contact-info-text">
              Whether you're just exploring compliance or ready to start your SOC 2 journey, we're here to help.
            </p>

            <div className="contact-methods">
              <a href="mailto:sohaib.015.m@gmail.com" className="contact-method">
                <Mail className="contact-method-icon" />
                <div>
                  <div className="contact-method-label">Email</div>
                  <div className="contact-method-value">sohaib.015.m@gmail.com</div>
                </div>
              </a>

              <a href="https://wa.me/923126745890" target="_blank" rel="noopener noreferrer" className="contact-method">
                <MessageSquare className="contact-method-icon" />
                <div>
                  <div className="contact-method-label">WhatsApp</div>
                  <div className="contact-method-value">+92 312 6745890</div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/msohaib-dev/" target="_blank" rel="noopener noreferrer" className="contact-method">
                <Linkedin className="contact-method-icon" />
                <div>
                  <div className="contact-method-label">LinkedIn</div>
                  <div className="contact-method-value">Connect with us</div>
                </div>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="company" className="form-label">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                rows="4"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;