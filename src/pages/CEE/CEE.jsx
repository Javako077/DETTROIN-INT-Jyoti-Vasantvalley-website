import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import PageHeader from '../../components/Shared/PageHeader';
import SectionHeader from '../../components/Shared/SectionHeader';

export default function CEE() {
  return (
    <div style={{ backgroundColor: 'var(--bg-main)' }}>
      <PageHeader title="Centre for Excellence in Education (CEE)" breadcrumb={[{ label: 'CEE' }]} />

      {/* Main Philosophy Banner */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '980px', margin: '0 auto', textAlign: 'center' }}
          >
            <span className="badge-pill" style={{ marginBottom: '1.25rem' }}>
              36 Years of Educational Innovation
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
              We are pleased to introduce the Vasant Valley Centre for Excellence in Education. This initiative is rooted in our school’s long-standing commitment to excellence in teaching and learning. Our work at the Centre draws on thirty-six years of experience in nurturing professional learning communities, mentoring educators, and aligning academic practices with child-centred values that define Vasant Valley School.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Detail Cards */}
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
                <GraduationCap size={28} />
              </div>
              <h3 className="heading-serif" style={{ color: 'var(--accent-crimson)', fontSize: '1.6rem', marginBottom: '1rem' }}>
                Teacher Mentorship
              </h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Conducting workshops, peer mentoring programs, and pedagogical innovation forums to empower school educators across India.
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
                <BookOpen size={28} />
              </div>
              <h3 className="heading-serif" style={{ color: 'var(--accent-crimson)', fontSize: '1.6rem', marginBottom: '1rem' }}>
                Curriculum & Research
              </h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Developing evidence-based educational resources, assessment models, and inclusive learning strategies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
