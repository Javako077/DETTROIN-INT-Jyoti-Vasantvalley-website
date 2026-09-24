import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Send, CheckCircle2, Award } from 'lucide-react';
import PageHeader from '../../components/Shared/PageHeader';
import SectionHeader from '../../components/Shared/SectionHeader';

export default function AlumniConnect() {
  const [formData, setFormData] = useState({ name: '', passoutYear: '', email: '', occupation: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-main)' }}>
      <PageHeader title="Alumni Connect Network" breadcrumb={[{ label: 'Alumni Connect' }]} />

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container-custom">
          <SectionHeader
            badge="Global Community"
            title="Over 30 Years of Alumni Excellence"
            subtitle="Stay connected with Vasant Valley School. Over 30 years of alumni excellence across the world!"
          />

          <div className="grid-responsive grid-responsive-2" style={{ gap: '3.5rem' }}>
            {/* Left Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="card-luxury"
              style={{ padding: '2.5rem' }}
            >
              <h3 className="heading-serif" style={{ color: 'var(--accent-crimson)', fontSize: '1.75rem', marginBottom: '1.5rem' }}>
                Register in Alumni Directory
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
                  <CheckCircle2 size={40} style={{ margin: '0 auto 0.75rem auto', display: 'block' }} />
                  <h4 style={{ fontSize: '1.15rem' }}>Thank you for registering in the Vasant Valley Alumni Network!</h4>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Your Full Name"
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
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                      Year of Passing *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 2012"
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
                      value={formData.passoutYear}
                      onChange={(e) => setFormData({ ...formData, passoutYear: e.target.value })}
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
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                      Current Occupation / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="Designation & Company Name"
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-medium)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                      value={formData.occupation}
                      onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem', width: '100%', justifyContent: 'center' }}>
                    Submit Alumni Info <Send size={16} />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Right Mentorship & Reconnect */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="card-luxury"
              style={{ padding: '2.5rem' }}
            >
              <div style={{ display: 'inline-flex', padding: '0.85rem', background: 'rgba(159, 6, 34, 0.08)', borderRadius: 'var(--radius-md)', color: 'var(--accent-crimson)', marginBottom: '1.25rem' }}>
                <Users size={28} />
              </div>
              <h3 className="heading-serif" style={{ color: 'var(--accent-crimson)', fontSize: '1.75rem', marginBottom: '1.25rem' }}>
                Alumni Mentorship & Reconnect
              </h3>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Our alumni regularly participate in career guidance sessions, guest lectures, and student mentorship programs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
