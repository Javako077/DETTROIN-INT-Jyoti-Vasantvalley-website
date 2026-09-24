import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Send, CheckCircle2 } from 'lucide-react';
import PageHeader from '../../components/Shared/PageHeader';
import SectionHeader from '../../components/Shared/SectionHeader';

export default function CareerConnect() {
  const [submitted, setSubmitted] = useState(false);

  const openings = [
    { position: 'Senior School Mathematics Educator', department: 'Academics (Senior Wing)', exp: '5+ years' },
    { position: 'Special Education Educator', department: 'SEN Department', exp: '3+ years' },
    { position: 'Physical Education & Sports Coach', department: 'Sports & Athletics', exp: '2+ years' },
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-main)' }}>
      <PageHeader title="Careers at Vasant Valley School" breadcrumb={[{ label: 'Careers' }]} />

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container-custom">
          <SectionHeader
            badge="Join Our Faculty"
            title="Current Job Openings"
            subtitle="Join a dedicated community of passionate educators and professionals."
          />

          <div className="grid-responsive grid-responsive-3" style={{ gap: '2rem', marginBottom: '4rem' }}>
            {openings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-luxury"
                style={{ padding: '2rem' }}
              >
                <div style={{ display: 'inline-flex', padding: '0.75rem', background: 'rgba(159, 6, 34, 0.08)', borderRadius: 'var(--radius-sm)', color: 'var(--accent-crimson)', marginBottom: '1rem' }}>
                  <Briefcase size={22} />
                </div>
                <h4 className="heading-serif" style={{ color: 'var(--accent-crimson)', fontSize: '1.35rem', marginBottom: '0.75rem' }}>
                  {job.position}
                </h4>
                <p style={{ margin: '0.4rem 0', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  <strong>Department:</strong> {job.department}
                </p>
                <p style={{ margin: '0.4rem 0', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  <strong>Experience:</strong> {job.exp}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Application Form Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-luxury"
            style={{ maxWidth: '650px', margin: '0 auto', padding: '3rem 2.5rem' }}
          >
            <h3 className="heading-serif" style={{ color: 'var(--accent-crimson)', fontSize: '1.8rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              Apply Online
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
                <h4 style={{ fontSize: '1.15rem' }}>Thank you for applying. Our HR team will contact you shortly!</h4>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                    Full Name *
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
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
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
                    Position Applied For *
                  </label>
                  <input
                    type="text"
                    placeholder="Role Title"
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

                <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem', width: '100%', justifyContent: 'center' }}>
                  Submit Application <Send size={16} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
