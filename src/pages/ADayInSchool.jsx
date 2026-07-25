import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Sun, BookOpen, Coffee, Palette, Award } from 'lucide-react';
import PageHeader from '../components/Shared/PageHeader';
import SectionHeader from '../components/Shared/SectionHeader';

export default function ADayInSchool() {
  const scheduleItems = [
    { time: '08:00 AM', event: 'Morning Assembly & Registration' },
    { time: '08:30 AM', event: 'Academic Period 1 & 2' },
    { time: '10:30 AM', event: 'Morning Snack & Outdoor Play' },
    { time: '11:00 AM', event: 'Academic Period 3 & 4 (STEM / Humanities)' },
    { time: '01:00 PM', event: 'Lunch Break & Activity Time' },
    { time: '01:45 PM', event: 'Co-Curriculars: Sports, Visual & Performing Arts' },
    { time: '03:00 PM', event: 'Reflection & Departure' },
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-main)' }}>
      <PageHeader title="A Day in School" breadcrumb={[{ label: 'A Day in School' }]} />

      {/* Top Banner Image Frame */}
      <section style={{ marginTop: '-3rem', position: 'relative', zIndex: 10 }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="img-frame"
            style={{ maxHeight: '500px' }}
          >
            <img src="/assets/themes/vasant/images/ji.jpg" alt="A Day in School" />
          </motion.div>
        </div>
      </section>

      {/* Core Life Banner */}
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
              Campus Life Rhythm
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
              Education is preparation for life.
            </h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              The school day comprises academic and nonacademic Learning Experiences and is planned with special focus on the developmental needs of our students. The entire Campus is a “Classroom” and learning is continuous.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Schedule Timeline Grid */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container-custom">
          <SectionHeader
            badge="Daily Schedule"
            title="Daily Routine & Timetable"
            subtitle="A thoughtfully balanced blend of academics, creative pursuits, sports, and reflection."
          />

          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {scheduleItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="card-luxury"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.5rem 2rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      padding: '0.6rem 1rem',
                      backgroundColor: 'rgba(159, 6, 34, 0.08)',
                      borderRadius: 'var(--radius-full)',
                      color: 'var(--accent-crimson)',
                      fontWeight: 700,
                      fontFamily: 'var(--font-accent)',
                      fontSize: '0.95rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <Clock size={16} />
                    {item.time}
                  </div>
                </div>

                <span style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', textAlign: 'right' }}>
                  {item.event}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
