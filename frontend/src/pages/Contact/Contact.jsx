import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import PageHeader from '../../components/Shared/PageHeader';
import SectionHeader from '../../components/Shared/SectionHeader';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{ backgroundColor: 'var(--bg-main)' }}>
      <PageHeader title="Contact Vasant Valley School" breadcrumb={[{ label: 'Contact Us' }]} />

      {/* Main Contact Grid */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container-custom">
          <SectionHeader
            badge="Get in Touch"
            title="We Would Love to Hear From You"
            subtitle="Reach out to Vasant Valley School for general inquiries, admissions, or administrative support."
          />

          <div className="grid-responsive grid-responsive-2" style={{ gap: '3.5rem' }}>
            {/* Left: Contact Info & Embedded Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="heading-serif" style={{ color: 'var(--accent-crimson)', fontSize: '1.8rem', marginBottom: '1.5rem' }}>
                School Contact Info
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ padding: '0.75rem', backgroundColor: 'rgba(159, 6, 34, 0.08)', borderRadius: 'var(--radius-sm)', color: 'var(--accent-crimson)' }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', marginBottom: '0.2rem' }}>Address</h4>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      Sector C, Vasant Kunj, New Delhi 110070, India
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ padding: '0.75rem', backgroundColor: 'rgba(159, 6, 34, 0.08)', borderRadius: 'var(--radius-sm)', color: 'var(--accent-crimson)' }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', marginBottom: '0.2rem' }}>Phone</h4>
                    <a href="tel:+911141767940" style={{ color: 'var(--accent-crimson)', fontWeight: 600 }}>
                      +91 11 41767940
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ padding: '0.75rem', backgroundColor: 'rgba(159, 6, 34, 0.08)', borderRadius: 'var(--radius-sm)', color: 'var(--accent-crimson)' }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', marginBottom: '0.2rem' }}>Email</h4>
                    <a href="mailto:info@vasantvalley.edu.in" style={{ color: 'var(--accent-crimson)', fontWeight: 600 }}>
                      info@vasantvalley.edu.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Frame */}
              <div className="img-frame" style={{ height: '280px' }}>
                <iframe
                  title="Vasant Valley School Location"
                  src="https://maps.google.com/maps?q=Vasant+Valley+School+Vasant+Kunj+New+Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>

            {/* Right: Message Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="card-luxury"
              style={{ padding: '3rem 2.5rem' }}
            >
              <h3 className="heading-serif" style={{ color: 'var(--accent-crimson)', fontSize: '1.8rem', marginBottom: '1.5rem' }}>
                Send Us a Message
              </h3>

              {submitted ? (
                <div
                  style={{
                    backgroundColor: 'rgba(78, 110, 93, 0.1)',
                    border: '1px solid var(--accent-sage)',
                    color: 'var(--accent-sage)',
                    padding: '2rem',
                    borderRadius: 'var(--radius-md)',
                    textAlign: 'center',
                  }}
                >
                  <CheckCircle2 size={42} style={{ margin: '0 auto 1rem auto', display: 'block' }} />
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Message Sent!</h4>
                  <p>Thank you! Your message has been sent successfully.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      required
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-medium)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      required
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-medium)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-medium)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                      Your Message *
                    </label>
                    <textarea
                      placeholder="Type your message here..."
                      rows="4"
                      required
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-medium)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem', width: '100%', justifyContent: 'center' }}>
                    Send Message <Send size={16} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
