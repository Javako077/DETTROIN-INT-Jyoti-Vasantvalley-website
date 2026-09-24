import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Compass, Globe, Award } from 'lucide-react';
import PageHeader from '../../components/Shared/PageHeader';
import SectionHeader from '../../components/Shared/SectionHeader';

export default function InterSchool() {
  const events = [
    { title: '23rd Laissez Faire', desc: 'Preeminent inter-school economics and business symposium hosting over 40 schools.' },
    { title: 'Synapse Science Fest', desc: 'Inter-school science competition promoting analytical thinking and experimental research.' },
    { title: 'Vortex Math Symposium', desc: 'Inter-school mathematics olympiad and quiz competition.' },
    { title: 'Speakers Forum & Jaipur Debate', desc: 'Prestigious national inter-school debating championships.' },
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-main)' }}>
      <PageHeader
        title="Inter-School Programmes"
        breadcrumb={[{ label: 'Programmes', path: '/programmes/intra-school' }, { label: 'Inter-School' }]}
      />

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container-custom">
          <SectionHeader
            badge="National Conventions"
            title="Preeminent Inter-School Meets"
            subtitle="Vasant Valley School hosts signature national and regional inter-school meets across academics, debating, science, sports, and culture."
          />

          <div className="grid-responsive grid-responsive-2" style={{ gap: '2rem' }}>
            {events.map((event, index) => (
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
                  <Trophy size={24} />
                </div>
                <h3 className="heading-serif" style={{ color: 'var(--accent-crimson)', fontSize: '1.45rem', marginBottom: '0.75rem' }}>
                  {event.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                  {event.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
