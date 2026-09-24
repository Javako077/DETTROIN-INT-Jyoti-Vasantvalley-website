import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, FileText, ArrowRight, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/Shared/PageHeader';
import SectionHeader from '../../components/Shared/SectionHeader';

export default function Admission() {
  const steps = [
    'Online Registration Form Submission',
    'Verification of Original Documents',
    'Interaction & Assessment (where applicable)',
    'Publication of Selected Candidates List',
    'Fee Payment & Formal Admission',
  ];

  const documents = [
    'Birth Certificate copy',
    'Proof of Residence',
    'Transfer Certificate from previous school',
    'Passport size photographs',
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-main)' }}>
      <PageHeader title="Admissions Overview" breadcrumb={[{ label: 'Admissions' }]} />

      {/* Intro Banner */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}
          >
            <span className="badge-pill" style={{ marginBottom: '1.25rem' }}>
              Enrollment Guidelines
            </span>
            <h2
              className="heading-serif"
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
                lineHeight: 1.25,
                color: 'var(--text-primary)',
                marginBottom: '1.5rem',
              }}
            >
              Welcome to Vasant Valley School Admissions. We welcome applications from students who seek a holistic, inclusive, and rigorous educational experience.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Main Grid: Procedure & Required Documents */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container-custom">
          <div className="grid-responsive grid-responsive-2" style={{ gap: '3rem' }}>
            {/* Left: Admission Procedure */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="card-luxury"
              style={{ padding: '2.5rem' }}
            >
              <span className="badge-pill" style={{ marginBottom: '1.25rem' }}>
                Step-by-Step
              </span>
              <h3 className="heading-serif" style={{ color: 'var(--accent-crimson)', fontSize: '2rem', marginBottom: '1.5rem' }}>
                Admission Procedure
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {steps.map((step, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--accent-crimson)',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        flexShrink: 0,
                      }}
                    >
                      {idx + 1}
                    </div>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: 500, paddingTop: '2px' }}>
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Important Documents */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="card-luxury"
              style={{ padding: '2.5rem' }}
            >
              <span className="badge-pill" style={{ marginBottom: '1.25rem' }}>
                <FileText size={14} /> Checklist
              </span>
              <h3 className="heading-serif" style={{ color: 'var(--accent-crimson)', fontSize: '2rem', marginBottom: '1.5rem' }}>
                Important Documents
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', backgroundColor: 'var(--bg-subtle)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                {documents.map((doc, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle2 size={20} style={{ color: 'var(--accent-crimson)', flexShrink: 0 }} />
                    <span style={{ fontSize: '1.05rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                      – {doc}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '2.5rem' }}>
                <Link to="/faqs" className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                  Frequently Asked Questions <HelpCircle size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
