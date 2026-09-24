import React from 'react';
import { motion } from 'framer-motion';
import { Globe, BookOpen, GraduationCap } from 'lucide-react';
import PageHeader from '../components/Shared/PageHeader';
import SectionHeader from '../components/Shared/SectionHeader';

export default function InternationalCurriculum() {
  return (
    <div style={{ backgroundColor: 'var(--bg-main)' }}>
      <PageHeader
        title="International Curriculum (Cambridge IGCSE & A-Levels)"
        breadcrumb={[{ label: 'International Curriculum' }]}
      />

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '980px', margin: '0 auto', textAlign: 'center' }}
          >
            <span className="badge-pill" style={{ marginBottom: '1.25rem' }}>
              <Globe size={14} /> Cambridge CAIE Qualification
            </span>
            <h2
              className="heading-serif"
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
                lineHeight: 1.35,
                color: 'var(--text-primary)',
                marginBottom: '1.5rem',
              }}
            >
              Vasant Valley School offers Cambridge Assessment International Education (CAIE) alongside CBSE, giving students global academic flexibility, rigour, and international college admissions readiness.
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container-custom">
          <div className="grid-responsive grid-responsive-2" style={{ gap: '2.5rem' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-luxury"
              style={{ padding: '2.5rem' }}
            >
              <div style={{ display: 'inline-flex', padding: '0.85rem', background: 'rgba(159, 6, 34, 0.08)', borderRadius: 'var(--radius-md)', color: 'var(--accent-crimson)', marginBottom: '1.25rem' }}>
                <BookOpen size={28} />
              </div>
              <h3 className="heading-serif" style={{ color: 'var(--accent-crimson)', fontSize: '1.6rem', marginBottom: '1rem' }}>
                IGCSE (Classes 9 & 10)
              </h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Broad-based international qualification encouraging learner-centred and enquiry-based approaches to learning.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="card-luxury"
              style={{ padding: '2.5rem' }}
            >
              <div style={{ display: 'inline-flex', padding: '0.85rem', background: 'rgba(159, 6, 34, 0.08)', borderRadius: 'var(--radius-md)', color: 'var(--accent-crimson)', marginBottom: '1.25rem' }}>
                <GraduationCap size={28} />
              </div>
              <h3 className="heading-serif" style={{ color: 'var(--accent-crimson)', fontSize: '1.6rem', marginBottom: '1rem' }}>
                Cambridge A-Levels (Classes 11 & 12)
              </h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Subject specialization preparing students for top universities in India, USA, UK, Canada, and worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
