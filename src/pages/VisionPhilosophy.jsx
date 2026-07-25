import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Compass, Award, Heart, Globe } from 'lucide-react';
import PageHeader from '../components/Shared/PageHeader';
import SectionHeader from '../components/Shared/SectionHeader';

export default function VisionPhilosophy() {
  return (
    <div style={{ backgroundColor: 'var(--bg-main)' }}>
      <PageHeader title="Vision & Philosophy" breadcrumb={[{ label: 'Vision & Philosophy' }]} />

      {/* Main Vision Statement */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '980px', margin: '0 auto', textAlign: 'center' }}
          >
            <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(159, 6, 34, 0.06)', borderRadius: '50%', color: 'var(--accent-crimson)', marginBottom: '1.5rem' }}>
              <Quote size={36} />
            </div>
            <h2
              className="heading-serif"
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
                lineHeight: 1.4,
                color: 'var(--text-primary)',
                marginBottom: '2rem',
              }}
            >
              We at Vasant Valley School believe that each child entrusted to us will receive education in its finest form. Learning is a lifelong process, and all students and teachers are challenged to exceed their own expectations. This is a holistic experience that synergises the growth of mind, body and spirit. We nurture and prepare generations of individuals, the torchbearers of tomorrow who believe in the strength of their own convictions and take pride in being Indian. They will work together in the spirit of Global Citizenship. Our work in school shapes the future and no constraints shall daunt us.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Motto Spotlight */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container-custom">
          <div className="grid-responsive grid-responsive-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="badge-pill" style={{ marginBottom: '1rem' }}>
                <Award size={15} /> School Motto
              </span>
              <h3 className="heading-serif" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', color: 'var(--accent-crimson)', marginBottom: '1.5rem' }}>
                Excellence in Deed
              </h3>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                The School’s motto sets the standard for Vasant Valley School. Individualized attention for each student, a "process-focused" learning framework, equity of all stakeholders and commitment to society are the pillars of the School’s philosophy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="img-frame"
              style={{ height: '400px', minHeight: '400px' }}
            >
              <img
                src="/assets/uploads/2021/04/image-vasant2.png"
                alt="Vision & Philosophy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
