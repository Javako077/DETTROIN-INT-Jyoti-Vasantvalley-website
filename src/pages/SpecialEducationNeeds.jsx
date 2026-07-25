import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, Users, Sparkles } from 'lucide-react';
import PageHeader from '../components/Shared/PageHeader';
import SectionHeader from '../components/Shared/SectionHeader';

export default function SpecialEducationNeeds() {
  return (
    <div style={{ backgroundColor: 'var(--bg-main)' }}>
      <PageHeader title="Special Education Needs (SEN)" breadcrumb={[{ label: 'Special Education Needs' }]} />

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
              Inclusive Education
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
              Vasant Valley School is committed to inclusive education. The Special Education Needs department works closely with students, teachers, and parents to provide individualized education plans (IEPs), specialized support, and adaptive learning strategies to ensure equal opportunities for all learners.
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
                <HeartHandshake size={28} />
              </div>
              <h3 className="heading-serif" style={{ color: 'var(--accent-crimson)', fontSize: '1.6rem', marginBottom: '1rem' }}>
                Individualized Learning Plans
              </h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Every child with special education needs receives customized academic and developmental intervention, enabling them to participate fully in mainstream school life.
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
                <Users size={28} />
              </div>
              <h3 className="heading-serif" style={{ color: 'var(--accent-crimson)', fontSize: '1.6rem', marginBottom: '1rem' }}>
                Specialist Educators & Therapists
              </h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Our experienced team of special educators, speech therapists, occupational therapists, and counselors foster a nurturing and empowering learning environment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
