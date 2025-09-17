import React, { useRef, useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import './Contact.css';

export default function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init('RkMNozpNh7vR4DkyX');
    console.log('EmailJS initialized');
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const formData = new FormData(form.current);
      const userName = formData.get('user_name')?.trim();
      const userEmail = formData.get('user_email')?.trim();
      const message = formData.get('message')?.trim();

      if (!userName || !userEmail || !message) {
        throw new Error('Please fill in all required fields');
      }

      // Try the most basic EmailJS template parameters
      const templateParams = {
        user_name: userName,
        user_email: userEmail,
        message: message
      };

      console.log('=== EmailJS Debug Info ===');
      console.log('Service ID:', 'service_n4wl7vl');
      console.log('Template ID:', 'template_uiridjj');
      console.log('Public Key:', 'RkMNozpNh7vR4DkyX');
      console.log('Template Params:', templateParams);

      const response = await emailjs.send(
        'service_n4wl7vl',
        'template_uiridjj',
        templateParams,
        'RkMNozpNh7vR4DkyX'
      );

      console.log('Email sent successfully:', response);
      setSubmitStatus('success');
      form.current.reset();
    } catch (error) {
      console.error('EmailJS Error Details:', error);
      console.error('Error status:', error.status);
      console.error('Error text:', error.text);
      console.error('Full error object:', JSON.stringify(error, null, 2));
      
      let errorMessage = 'Failed to send message. ';

      if (error.message === 'Please fill in all required fields') {
        errorMessage = error.message;
      } else if (error.status === 400) {
        errorMessage += 'Invalid template or service configuration. Check your EmailJS setup.';
      } else if (error.status === 401) {
        errorMessage += 'Authentication failed - check your public key.';
      } else if (error.status === 402) {
        errorMessage += 'EmailJS quota exceeded. Please try again later.';
      } else if (error.status === 404) {
        errorMessage += 'Service or template not found. Check your EmailJS IDs.';
      } else if (error.status === 413) {
        errorMessage += 'Message too large.';
      } else if (error.text) {
        errorMessage += `Error: ${error.text}`;
      } else if (error.message) {
        errorMessage += error.message;
      } else {
        errorMessage += 'Please try again or email me directly.';
      }

      setSubmitStatus('error');
      console.error('Specific error message:', errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Let's Connect</h1>
      <p className="contact-intro">
        I'm always interested in new opportunities and collaborations. 
        Send me a message and I'll get back to you soon!
      </p>

      <div className="contact-form-section">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label htmlFor="user_name" className="form-label">Your Name</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              className="form-input"
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="user_email" className="form-label">Your Email</label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              className="form-input"
              required
              placeholder="Enter your email address"
            />
          </div>

          <div className="form-group">
            <label htmlFor="user_phone" className="form-label">Phone (Optional)</label>
            <input
              type="tel"
              id="user_phone"
              name="user_phone"
              className="form-input"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-textarea"
              required
              rows="5"
              placeholder="Tell me about your project or just say hello..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            className={`form-submit ${isSubmitting ? 'submitting' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {submitStatus === 'success' && (
            <div className="form-message success">
              ✅ Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="form-message error">
              ❌ Failed to send message. Please try again or email me directly.
            </div>
          )}
        </form>
      </div>

      <div className="contact-methods">
        <div className="contact-item">
          <span className="contact-label">Email</span>
          <p className="contact-value">
            <a href="mailto:matthewfslcc28@gmail.com" className="contact-link">
              matthewfslcc28@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
