import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUp, ExternalLink } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="footer-grand">
        <div className="container-custom">
          {/* Top Grid */}
          <div className="footer-top-grid">
            {/* Brand Col */}
            <div className="footer-brand-col">
              <Link to="/">
                <img
                  src="/assets/themes/vasant/images/logo-vasant-valley.svg"
                  alt="Vasant Valley School"
                />
              </Link>
              <p style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
                Excellence in Deed. A self-financing inclusive day school established in 1990, dedicated to nurturing independent minds, ethical values, and global citizens.
              </p>
              <button
                onClick={scrollToTop}
                className="btn-secondary"
                style={{
                  color: '#FFFFFF',
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  fontSize: '0.85rem',
                  padding: '0.6rem 1.25rem',
                }}
              >
                Back to Top <ArrowUp size={14} />
              </button>
            </div>

            {/* Col 1: Academics & Life */}
            <div>
              <h4 className="footer-heading">Academic & Life</h4>
              <ul className="footer-menu-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/vision-philosophy">Vision & Philosophy</Link></li>
                <li><Link to="/learning-experience">The Learning Experience</Link></li>
                <li><Link to="/international-curriculum">International Curriculum</Link></li>
                <li><Link to="/infrastructure">Infrastructure</Link></li>
                <li><Link to="/special-education-needs">Special Education Needs</Link></li>
                <li><Link to="/programmes/intra-school">Intra-School Programmes</Link></li>
                <li><Link to="/programmes/inter-school">Inter-School Programmes</Link></li>
                <li><Link to="/a-day-in-school">A Day in School</Link></li>
              </ul>
            </div>

            {/* Col 2: Institutional & Compliance */}
            <div>
              <h4 className="footer-heading">Institution</h4>
              <ul className="footer-menu-list">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/admission">Admissions</Link></li>
                <li><Link to="/announcements">Announcements</Link></li>
                <li><Link to="/news-events">News & Events</Link></li>
                <li><Link to="/university-placements">College Placements</Link></li>
                <li><Link to="/login">Login Portal</Link></li>
                <li><Link to="/faqs">FAQs</Link></li>
                <li><Link to="/statutory-compliances">Statutory Compliances</Link></li>
                <li><Link to="/privacy-terms">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Col 3: Contact & Location Box */}
            <div>
              <h4 className="footer-heading">Contact & Location</h4>
              <div className="footer-contact-box">
                <div className="footer-contact-item">
                  <Phone size={18} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.5)', display: 'block' }}>Call Us</span>
                    <a href="tel:+911141767940" style={{ color: '#FFFFFF' }}>+91 11 41767940</a>
                  </div>
                </div>

                <div className="footer-contact-item">
                  <Mail size={18} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.5)', display: 'block' }}>Email Us</span>
                    <a href="mailto:info@vasantvalley.edu.in" style={{ color: '#FFFFFF' }}>info@vasantvalley.edu.in</a>
                  </div>
                </div>

                <div className="footer-contact-item" style={{ marginBottom: 0 }}>
                  <MapPin size={18} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.5)', display: 'block' }}>Campus Address</span>
                    <span>Sector C, Vasant Kunj, New Delhi 110070</span>
                    <div style={{ marginTop: '0.5rem' }}>
                      <a
                        href="https://www.google.co.in/maps/place/Vasant+Valley+School/@28.5334421,77.1420857,17z/data=!4m12!1m6!3m5!1s0x390d1c2dca9fdfe5:0xd8b5e5dc38264933!2sVasant+Valley+School!8m2!3d28.5332194!4d77.1440977!3m4!1s0x390d1c2dca9fdfe5:0xd8b5e5dc38264933!8m2!3d28.5332194!4d77.1440977"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          color: 'var(--accent-gold)',
                          fontWeight: 600,
                          fontSize: 0.85 + 'rem',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                        }}
                      >
                        SEE MAP <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom-bar">
            <p>© VASANT VALLEY SCHOOL 2026. ALL RIGHTS RESERVED.</p>

            <div className="social-icons-wrap">
              <a
                href="https://www.facebook.com/Vasantvalleyschoolofficial/"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="Facebook"
              >
                <img src="/assets/themes/vasant/images/Face.svg" alt="Facebook" style={{ width: '18px', height: '18px', filter: 'brightness(0) invert(1)' }} />
              </a>
              <a
                href="https://www.instagram.com/vasantvalleyschoolofficial/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="Instagram"
              >
                <img src="/assets/themes/vasant/images/insta-icon.svg" alt="Instagram" style={{ width: '18px', height: '18px', filter: 'brightness(0) invert(1)' }} />
              </a>
              <a
                href="https://in.linkedin.com/school/vasant-valley-school/"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn"
              >
                <img src="/assets/themes/vasant/images/in-icon.svg" alt="LinkedIn" style={{ width: '18px', height: '18px', filter: 'brightness(0) invert(1)' }} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCRXNIQzX175MX9hMVRWjmaA"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="YouTube"
              >
                <img src="/assets/themes/vasant/images/youtube-icon.svg" alt="YouTube" style={{ width: '18px', height: '18px', filter: 'brightness(0) invert(1)' }} />
              </a>
            </div>

            <p style={{ textAlign: 'right' }}>
              Sector C, Vasant Kunj, New Delhi 110070
            </p>
          </div>
        </div>
      </footer>

      {/* Alumni Recognition Bar */}
      <div className="alumni-acknowledgement-bar">
        <p>
          We are grateful to our alumni, Ishaan Gupta (Class of 2006), Medha Vira Gupta (Class of 2009) and Samvid Gupta (Class of 2010) for their generous support in creating the website.
        </p>
      </div>
    </>
  );
}
