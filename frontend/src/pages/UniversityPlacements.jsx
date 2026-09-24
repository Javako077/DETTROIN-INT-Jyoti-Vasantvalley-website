import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, CheckCircle2 } from 'lucide-react';
import PageHeader from '../components/Shared/PageHeader';
import SectionHeader from '../components/Shared/SectionHeader';

export default function UniversityPlacements() {
  const universities = [
    { country: 'India', list: ['Delhi University (SRCC, St. Stephens, LSR, Hindu)', 'IITs & NITs', 'Ashoka University', 'NALSAR & NLSIU Law Universities', 'Manipal & BITS Pilani'] },
    { country: 'USA & Canada', list: ['Harvard University', 'Stanford University', 'MIT', 'Columbia University', 'University of Toronto', 'UCLA / UC Berkeley'] },
    { country: 'UK & Europe', list: ['University of Oxford', 'University of Cambridge', 'Imperial College London', 'LSE', 'King’s College London'] },
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-main)' }}>
      <PageHeader title="College & University Placements" breadcrumb={[{ label: 'College Placements' }]} />

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '980px', margin: '0 auto', textAlign: 'center' }}
          >
            <span className="badge-pill" style={{ marginBottom: '1.25rem' }}>
              Global Higher Education Pathways
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
              Vasant Valley School graduates secure admissions to premier universities across India and globally. Our college counselling cell provides guidance, portfolio building, and application support.
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container-custom">
          <SectionHeader badge="Destinations" title="Higher Education Acceptance" />

          <div className="grid-responsive grid-responsive-3" style={{ gap: '2rem' }}>
            {universities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-luxury"
                style={{ padding: '2.25rem' }}
              >
                <div style={{ display: 'inline-flex', padding: '0.75rem', background: 'rgba(159, 6, 34, 0.08)', borderRadius: 'var(--radius-sm)', color: 'var(--accent-crimson)', marginBottom: '1.25rem' }}>
                  <GraduationCap size={24} />
                </div>
                <h3 className="heading-serif" style={{ color: 'var(--accent-crimson)', fontSize: '1.5rem', marginBottom: '1.25rem' }}>
                  {item.country}
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {item.list.map((u, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.975rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--accent-crimson)', flexShrink: 0 }} />
                      <span>{u}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
