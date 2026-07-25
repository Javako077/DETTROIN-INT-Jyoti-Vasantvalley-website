import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Compass, BookOpen, Trophy, Image } from 'lucide-react';
import PageHeader from '../components/Shared/PageHeader';
import SectionHeader from '../components/Shared/SectionHeader';

export default function Infrastructure() {
  const facilities = [
    { title: 'Built-up Area', desc: '4 acres of state-of-the-art campus within an 8-acre lush green space.', icon: Building2 },
    { title: 'Amphitheatre', desc: 'An open amphitheatre connecting the junior and senior wings for assemblies and events.', icon: Compass },
    { title: 'Libraries & Labs', desc: 'Modern science, computer, and STEM labs with extensive digital & physical library resources.', icon: BookOpen },
    { title: 'Sports Grounds', desc: 'Dedicated football grounds, basketball courts, squash courts, and athletic facilities.', icon: Trophy },
  ];

  const galleryImages = [
    {
      title: 'Red & Beige Sandstone Architecture',
      desc: 'The iconic architectural structure designed for an ideal learning environment.',
      src: '/assets/uploads/2021/04/about-image.jpg',
    },
    {
      title: '8-Acre Lush Green Campus',
      desc: 'Four acres of built-up area nestled within eight acres of green forest cover.',
      src: '/assets/uploads/2021/04/image-vasant.png',
    },
    {
      title: 'Open Amphitheatre & Connecting Wings',
      desc: 'Connecting the Junior and Senior wings for daily assemblies and cultural events.',
      src: '/assets/themes/vasant/images/ji.jpg',
    },
    {
      title: 'Interactive Learning & Student Spaces',
      desc: 'Modern, well-ventilated classrooms designed around evolving educational paradigms.',
      src: '/assets/uploads/2021/04/image-vasant2.png',
    },
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-main)' }}>
      <PageHeader title="Infrastructure & Campus" breadcrumb={[{ label: 'Infrastructure' }]} />

      {/* Top Campus Banner Image */}
      <section style={{ marginTop: '-3rem', position: 'relative', zIndex: 10 }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="img-frame"
            style={{ maxHeight: '520px' }}
          >
            <img src="/assets/uploads/2021/04/about-image.jpg" alt="Building Block Infrastructure" />
          </motion.div>
        </div>
      </section>

      {/* Main Architectural Statement */}
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
              8-Acre Sanctuary
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
              The School is divided into two wings, with an open amphitheatre connecting them. This eight acre campus has a built-up area of four acres, while the rest of the space comprises a lush, green cover.
            </h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              The red and beige sandstone building was designed and built keeping in mind the ideal environment for children, the philosophy of the school and evolving paradigms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Building & Campus Architectural Gallery */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container-custom">
          <SectionHeader
            badge="Architecture & Campus"
            title="Building & Campus Showcase"
            subtitle="Explore the red sandstone architecture, open amphitheatre, and lush green campus environments."
          />

          <div className="grid-responsive grid-responsive-2" style={{ gap: '2.5rem' }}>
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="card-luxury"
                style={{ padding: '1.5rem' }}
              >
                <div className="img-frame" style={{ height: '300px', marginBottom: '1.5rem' }}>
                  <img src={img.src} alt={img.title} />
                </div>
                <h3 className="heading-serif" style={{ fontSize: '1.4rem', color: 'var(--accent-crimson)', marginBottom: '0.5rem' }}>
                  {img.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                  {img.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Cards Grid */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container-custom">
          <SectionHeader badge="Campus Highlights" title="World-Class Facilities" />

          <div className="grid-responsive grid-responsive-2" style={{ gap: '2rem' }}>
            {facilities.map((fac, i) => {
              const IconComp = fac.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="card-luxury"
                  style={{ padding: '2.5rem' }}
                >
                  <div style={{ display: 'inline-flex', padding: '0.85rem', background: 'rgba(159, 6, 34, 0.08)', borderRadius: 'var(--radius-md)', color: 'var(--accent-crimson)', marginBottom: '1.25rem' }}>
                    <IconComp size={28} />
                  </div>
                  <h3 className="heading-serif" style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                    {fac.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                    {fac.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
