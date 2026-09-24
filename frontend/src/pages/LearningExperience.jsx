import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles, Award } from 'lucide-react';
import PageHeader from '../components/Shared/PageHeader';
import SectionHeader from '../components/Shared/SectionHeader';

export default function LearningExperience() {
  return (
    <div style={{ backgroundColor: 'var(--bg-main)' }}>
      <PageHeader title="The Learning Experience" breadcrumb={[{ label: 'The Learning Experience' }]} />

      {/* Top Image Banner */}
      <section style={{ marginTop: '-2.5rem', position: 'relative', zIndex: 10 }}>
        <div className="container-custom" style={{ maxWidth: '720px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="img-frame-diagram"
          >
            <img src="/assets/uploads/2021/04/learning-image-image.png" alt="The Vasant Valley Learning Experience" />
          </motion.div>
        </div>
      </section>

      {/* Core Philosophy Banner */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-main)' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}
          >
            <span className="badge-pill" style={{ marginBottom: '1.25rem' }}>
              <BookOpen size={14} /> Pedagogical Excellence
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
              Learning with Understanding
            </h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              While high academic achievement is a priority, the school aims to create a community of well-rounded individuals, who are compassionate and confident. This fosters a spirit of cooperation and mutual respect among the students and teachers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Curriculum & Pedagogy Card */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-luxury"
            style={{ padding: '3.5rem 3rem', maxWidth: '1000px', margin: '0 auto' }}
          >
            <span className="badge-pill" style={{ marginBottom: '1rem' }}>
              <Sparkles size={14} /> Academic Framework
            </span>
            <h3 className="heading-serif" style={{ color: 'var(--accent-crimson)', fontSize: '2.2rem', marginBottom: '1.5rem' }}>
              Curriculum & Pedagogy
            </h3>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              Our curriculum is designed to provide a deep understanding of core academic disciplines while building critical thinking, problem-solving, and creative abilities. Experiential learning, interdisciplinary projects, and continuous assessment empower every learner to realize their potential.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
