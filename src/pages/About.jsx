import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/Shared/PageHeader';
import SectionHeader from '../components/Shared/SectionHeader';

export default function About() {
  const formerLeaders = [
    {
      name: 'Ranu Dattagupta',
      img: '/assets/uploads/2021/06/ranu.jpg',
      role: 'PRINCIPAL 1998 - 1999 | HEAD OF SENIOR SCHOOL 1997 – 1999',
    },
    {
      name: 'Paramjit Kaur Narang',
      img: '/assets/uploads/2021/06/narang.jpg',
      role: 'Head of School 2001 - 2002 | Head of Senior School 2000 - 2001 | Head of Junior School 1993 - 2000',
    },
    {
      name: 'Peilu Oberoi',
      img: '/assets/uploads/2021/06/23153834/Peilu-Oberoi-1.jpg',
      role: 'Principal 2000-2006 | Head of Junior School 2000-2006',
    },
    {
      name: 'Rekha Bakshi',
      img: '/assets/uploads/2021/06/23153518/Rekha-Bakshi-1.jpg',
      role: 'HEAD OF JUNIOR SCHOOL 2006 – 2019',
    },
    {
      name: 'Abha Ranjan',
      img: '/assets/uploads/2021/06/image.jpg',
      role: 'HEAD OF SPECIAL SECTION 1997 - 2002',
    },
    {
      name: 'Shalini Dave',
      img: '/assets/uploads/2021/06/23153556/Shalini-Dave-1.jpg',
      role: 'HEAD OF SPECIAL SECTION 2002 – 2012',
    },
    {
      name: 'Sushmita Mitra',
      img: '/assets/uploads/2021/04/23153632/Sushmita-Mitra-1.jpg',
      role: 'HEAD OF SPECIAL SECTION 2012 – 2022',
    },
    {
      name: 'Rekha Krishnan',
      img: '/assets/uploads/2021/04/14142323/Rekha-Krishnan.jpg',
      role: 'Principal 2006 - March 2025',
    },
  ];

  const currentLeaders = [
    {
      name: 'Sharmila Bakshi',
      role: 'Principal',
      img: '/assets/uploads/2021/04/sharmila.jpg',
    },
    {
      name: 'Vijay Trivedi',
      role: 'HEAD OF SENIOR SCHOOL',
      img: '/assets/uploads/2025/04/02175614/vijay_trivedi_2-scaled.jpg',
    },
    {
      name: 'Mona Datta',
      role: 'HEAD OF JUNIOR SCHOOL',
      img: '/assets/uploads/2021/04/mona-dutta.jpg',
    },
    {
      name: 'A. P. John',
      role: 'ADMINISTRATIVE HEAD',
      img: '/assets/uploads/2021/04/john.jpg',
    },
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-main)' }}>
      {/* 1. Hero Banner */}
      <PageHeader title="About Vasant Valley School" breadcrumb={[{ label: 'About Us' }]} />

      {/* 2. Top Campus Image Frame */}
      <section style={{ marginTop: '-3rem', position: 'relative', zIndex: 10 }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="img-frame"
            style={{ maxHeight: '520px' }}
          >
            <img src="/assets/uploads/2021/04/about-image.jpg" alt="About Us Banner" />
          </motion.div>
        </div>
      </section>

      {/* 3. Vision & Founders Banner */}
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
              Founders’ Vision
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
              Run by the Education Today Trust, Vasant Valley School is the realisation of Mr. Aroon Purie and Mrs. Rekha Purie’s vision of the ideal school experience for children.
            </h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
              Mr. and Mrs. Purie envisioned a learning experience in which the Arts and Sports are as important as academic learning and wanted to create a paradigm where being a good citizen was more important than being a good student. Vasant Valley School aims to nurture independent minds, and create a space where students are encouraged to actualise their innate and unique potential.
            </p>
            <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--accent-crimson)', marginTop: '1.5rem' }}>
              Mrs. Rekha Purie is the Chairperson of Vasant Valley School.
            </p>
          </motion.div>

          {/* Founders Grid */}
          <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="card-luxury"
              style={{ width: '280px', textAlign: 'center', padding: '1.5rem' }}
            >
              <div className="img-frame" style={{ borderRadius: 'var(--radius-sm)', marginBottom: '1.25rem' }}>
                <img src="/assets/uploads/2021/04/14104110/Rekha-Purie-1.jpg" alt="Ms. Rekha Purie" />
              </div>
              <h3 className="heading-serif" style={{ fontSize: '1.25rem' }}>Ms. Rekha Purie</h3>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Chairperson</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="card-luxury"
              style={{ width: '280px', textAlign: 'center', padding: '1.5rem' }}
            >
              <div className="img-frame" style={{ borderRadius: 'var(--radius-sm)', marginBottom: '1.25rem' }}>
                <img src="/assets/uploads/2021/04/14104201/Aroon-Purie-2.jpg" alt="Mr. Aroon Purie" />
              </div>
              <h3 className="heading-serif" style={{ fontSize: '1.25rem' }}>Mr. Aroon Purie</h3>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Founder</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Founding Pioneers (Mr. Ved Vyas & Mr. Arun Kapur) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-subtle)' }} id="learn-frombest">
        <div className="container-custom">
          <SectionHeader badge="Historical Foundations" title="Our Founding Educational Pioneers" />

          <div className="grid-responsive grid-responsive-2" style={{ gap: '3rem' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-luxury"
              style={{ padding: '2.5rem' }}
            >
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{ width: '120px', height: '140px', flexShrink: 0 }} className="img-frame">
                  <img src="/assets/uploads/2021/04/23153712/Ved-Vyas-1-1.jpg" alt="Mr. Ved Vyas" />
                </div>
                <div>
                  <h3 className="heading-serif" style={{ fontSize: '1.5rem' }}>Mr. Ved Vyas</h3>
                  <span style={{ color: 'var(--accent-crimson)', fontSize: '0.9rem', fontWeight: 600 }}>Founder-Principal, Modern School VV</span>
                </div>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1rem' }}>
                Mr. Ved Vyas was the Founder-Principal of Modern School, Vasant Vihar. In the initial years, Mr. Vyas worked very closely with Mr. and Mrs. Purie to establish the vision and philosophy of Vasant Valley School. Mr. Vyas’s love for the Arts and Literature is reflected in the core curriculum of the School. He wrote the lyrics of the School Song “Shreshtha Tamaya Karmane” which translates to “Excellence in Deed”, the School Motto.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card-luxury"
              style={{ padding: '2.5rem' }}
            >
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{ width: '120px', height: '140px', flexShrink: 0 }} className="img-frame">
                  <img src="/assets/uploads/2021/04/23153756/Arun-Kapur-1.jpg" alt="Mr. Arun Kapur" />
                </div>
                <div>
                  <h3 className="heading-serif" style={{ fontSize: '1.5rem' }}>Mr. Arun Kapur</h3>
                  <span style={{ color: 'var(--accent-crimson)', fontSize: '0.9rem', fontWeight: 600 }}>First Headmaster (1990 - 2020)</span>
                </div>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1rem' }}>
                Mr. Arun Kapur was appointed the first Headmaster of Vasant Valley School in 1990. Mr. Kapur along with the initial group of 16 teachers ensured the implementation of the School’s vision. Mr. Kapur continued to Head the School for the next 30 years, till his retirement in 2020. Under his leadership Vasant Valley School grew from strength to strength and gained recognition as one of the foremost coeducational day schools in India.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Former Leaders */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container-custom">
          <SectionHeader
            badge="Legacy of Leadership"
            title="Former School Leaders"
            subtitle="The School stands proud and tall on the shoulders of those who have strengthened the motto of Excellence in Deed over the last 30 years."
          />

          <div className="grid-responsive grid-responsive-4" style={{ gap: '2rem' }}>
            {formerLeaders.map((leader, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
                className="card-luxury"
                style={{ padding: '1.5rem', textAlign: 'center' }}
              >
                <div className="img-frame" style={{ width: '100%', height: '220px', marginBottom: '1.25rem' }}>
                  <img src={leader.img} alt={leader.name} />
                </div>
                <h4 className="heading-serif" style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>{leader.name}</h4>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Current Leadership Team */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-surface)', color: '#FFFFFF', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="container-custom">
          <SectionHeader
            badge="Current Governance"
            title="The Current Leadership Team"
            subtitle="Steering Vasant Valley School towards futuristic educational excellence."
            light
          />

          <div className="grid-responsive grid-responsive-4" style={{ gap: '2rem' }}>
            {currentLeaders.map((leader, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.5rem',
                  textAlign: 'center',
                }}
              >
                <div className="img-frame" style={{ width: '100%', height: '240px', marginBottom: '1.25rem' }}>
                  <img src={leader.img} alt={leader.name} />
                </div>
                <h4 className="heading-serif" style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '0.4rem' }}>{leader.name}</h4>
                <span className="badge-pill badge-pill-light" style={{ fontSize: '0.75rem' }}>
                  {leader.role}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
