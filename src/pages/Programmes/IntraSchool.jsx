import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Music, Award } from 'lucide-react';
import PageHeader from '../../components/Shared/PageHeader';
import SectionHeader from '../../components/Shared/SectionHeader';

export default function IntraSchool() {
  const events = [
    { title: 'Founders Day Celebrations', desc: 'Annual extravaganza celebrating talent in drama, music, dance, and fine arts.' },
    { title: 'Inter-House Sports Tournament', desc: 'Athletics, football, cricket, basketball, and table tennis competitions.' },
    { title: 'Science Symposium & Tech Fest', desc: 'Intra-school robotics, coding, and scientific innovation displays.' },
    { title: 'Literary & Debate Week', desc: 'Creative writing, elocution, declamation, and parliamentary debates.' },
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-main)' }}>
      <PageHeader
        title="Intra-School Programmes"
        breadcrumb={[{ label: 'Programmes', path: '/programmes/intra-school' }, { label: 'Intra-School' }]}
      />

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container-custom">
          <SectionHeader
            badge="Internal Co-Curriculars"
            title="Nurturing Talent & House Spirit"
            subtitle="Our intra-school programmes provide every student a platform to discover their talents, build leadership qualities, and foster house spirit through healthy competition."
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
                  <Star size={24} />
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
