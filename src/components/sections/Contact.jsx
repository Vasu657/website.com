import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2 className="section-heading">Get In Touch</h2>
            <p className="contact-description">
              We'd love to hear from you! Reach out to us using any of the following contact methods.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📍</div>
                <div className="method-details">
                  <h3>Our Location</h3>
                  <p>Bangalore, Karnataka, India</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">📞</div>
                <div className="method-details">
                  <h3>Phone Number</h3>
                  <p>+91 (911) 380-8288</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">✉️</div>
                <div className="method-details">
                  <h3>Email Address</h3>
                  <p>vasughanta660@gmail.com</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">🕙</div>
                <div className="method-details">
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 9AM - 5PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-map">
  <iframe
    title="Bangalore Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6435804062226!2d77.59456277510135!3d12.934637687373115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15edac2be375%3A0x5d51a200851c4139!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1710012345678!5m2!1sen!2sin"
    width="100%"
    height="390"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

        </div>

        <div className="subscribe-section">
          <div className="subscribe-content">
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter to receive the latest news and special offers.</p>
            <div className="subscribe-cta">
              <button className="btn btn-subscribe">Subscribe Now</button>
            </div>
          </div>
          <div className="subscribe-decoration">
            <div className="decoration-icon">📬</div>
          </div>
        </div>

        <div className="social-links">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <button className="social-icon" aria-label="Phone">📱</button>
            <button className="social-icon" aria-label="Profile">👤</button>
            <button className="social-icon" aria-label="Camera">📸</button>
            <button className="social-icon" aria-label="Twitter">🐦</button>
            <button className="social-icon" aria-label="Link">🔗</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;