import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, BookOpen, Compass, Award, Calendar, Bell } from 'lucide-react';
import HeroSlider from '../../components/Shared/HeroSlider';
import SectionHeader from '../../components/Shared/SectionHeader';

export default function Home() {
  const heroSlides = [
    {
      image: '/wp-content/uploads/2026/07/20114219/laissez_faire_2026_1.jpg',
      title: '23rd Laissez Faire',
    },
    {
      image: '/wp-content/uploads/2026/07/17193236/laissez_faire_202612.jpg',
      title: '',
    },
    {
      image: '/wp-content/uploads/2026/07/20114222/laissez_faire_2026_2.jpg',
      title: '',
    },
    {
      image: '/wp-content/uploads/2026/07/20114506/laissez_faire_2026_7-1.jpg',
      title: '',
    },
    {
      image: '/wp-content/uploads/2026/07/20114230/laissez_faire_2026_6.jpg',
      title: '',
    },
    {
      image: '/wp-content/uploads/2026/07/20114458/laissez_faire_2026_4-1.jpg',
      title: 'nurturing independent minds',
    },
  ];

  const announcements = [
    {
      title: 'Class 12 CBSE Marksheet',
      content:
        'CBSE Marksheets of the All India Senior School Certificate Examination for Class XII are available and can be collected from the Senior School Office on any working day between 10:00 a.m to 3:00 p.m. from Wednesday, 3rd June,2026 onwards.',
      link: '/announcements',
    },
    {
      title: 'Vasant Valley Centre for Excellence in Education',
      content:
        'We are pleased to introduce the Vasant Valley Centre for Excellence in Education. This initiative is rooted in our school’s long-standing commitment to excellence in teaching and learning. Our work at the Centre draws on thirty-six years of experience in nurturing professional learning communities...',
      link: '/announcements',
    },
    {
      title: 'Announcing Vasant Valley School, Gurgaon',
      content:
        'We are very happy to announce that Vasant Valley School, founded and run by Education Today for over 36 years, is expanding. The first of the new Vasant Valley Schools will open in Gurgaon and will be led by a team of experienced educators.',
      link: '/announcements',
    },
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-main)', overflow: 'hidden' }}>
      {/* 1. Luxury Hero Slider */}
      <HeroSlider slides={heroSlides} />

      {/* 2. Key Statement Banner */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-subtle)', position: 'relative' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', maxWidth: '980px', margin: '0 auto' }}
          >
            <span className="badge-pill" style={{ marginBottom: '1.5rem' }}>
              <Sparkles size={14} /> Academic Leadership
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
              Vasant Valley School encourages students to push the boundaries of current understanding and set benchmarks in the field of education.
            </h2>
            <p
              style={{
                fontSize: '1.2rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '820px',
                margin: '0 auto',
              }}
            >
              Our objective is to inculcate in our students ethical values, nurture original thinking and develop a sense of national identity as well as global citizenship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Announcements Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container-custom">
          <SectionHeader
            badge="Latest Updates"
            title="Important Announcements"
            subtitle="Stay informed with key notices, results, and institutional news."
          />

          <div className="grid-responsive grid-responsive-3">
            {announcements.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="card-luxury"
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-crimson)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.85rem' }}>
                    <Bell size={16} /> Notice
                  </div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', lineHeight: 1.3 }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {item.content}
                  </p>
                </div>
                <div>
                  <Link
                    to={item.link}
                    className="btn-secondary"
                    style={{ fontSize: '0.85rem', padding: '0.5rem 1.1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}
                  >
                    announcements <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Excellence in Deed Spotlight */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-main)', position: 'relative' }}>
        <div className="container-custom">
          <div className="grid-responsive grid-responsive-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="badge-pill" style={{ marginBottom: '1rem' }}>
                <Award size={14} /> Our School Motto
              </span>
              <h3 className="heading-serif" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '1.5rem', color: 'var(--accent-crimson)' }}>
                “Excellence in Deed”
              </h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                The School’s motto sets the standard for Vasant Valley School. Individualized attention for each student, a "process-focused" learning framework, equity of all stakeholders and commitment to society are the pillars of the School’s philosophy. We believe that education is an enjoyable and interactive process.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <Link to="/vision-philosophy" className="btn-primary">
                  VISION <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="img-frame"
              style={{ minHeight: '420px' }}
            >
              <picture>
                <source media="(max-width: 650px)" srcSet="/wp-content/themes/vasant/images/students.jpg" />
                <img src="/wp-content/uploads/2021/04/image-vasant2.png" alt="Vasant Valley Students" />
              </picture>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Founders & Heritage Showcase */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark)', color: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
        <div className="container-custom" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}
          >
            <span className="badge-pill badge-pill-light" style={{ marginBottom: '1.5rem' }}>
              Established 1990
            </span>
            <h4
              className="heading-serif"
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
                lineHeight: 1.3,
                marginBottom: '1.5rem',
                color: '#FFFFFF',
              }}
            >
              Vasant Valley School was established in 1990 by Mr. Aroon Purie and Mrs. Rekha Purie as an initiative of the Education Today Trust.
            </h4>
            <p style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.7, marginBottom: '2rem' }}>
              The school began its journey with around 200 students and 16 teachers in July 1990. It is a self-financing inclusive day school spread over eight acres of land in Vasant Kunj, New Delhi, India.
            </p>
            <Link to="/about" className="btn-primary" style={{ backgroundColor: 'var(--accent-gold)', borderColor: 'var(--accent-gold)', color: '#0C1726' }}>
              About Us <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 6. Education as Preparation for Life */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-main)' }}>
        <div className="container-custom">
          <div className="grid-responsive grid-responsive-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="img-frame"
              style={{ minHeight: '420px' }}
            >
              <picture>
                <source media="(max-width: 650px)" srcSet="/wp-content/themes/vasant/images/ji.jpg" />
                <img src="/wp-content/uploads/2021/04/image-vasant.png" alt="Campus Life" />
              </picture>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="badge-pill" style={{ marginBottom: '1rem' }}>
                <Compass size={14} /> Life at Campus
              </span>
              <h3 className="heading-serif" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '1.5rem' }}>
                Education is <br /> preparation for life.
              </h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
                The school day comprises academic and nonacademic Learning Experiences and is planned with special focus on the developmental needs of our students. The entire Campus is a “Classroom” and learning is continuous.
              </p>
              <Link to="/a-day-in-school" className="btn-primary">
                A DAY IN SCHOOL <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Architectural Campus & Infrastructure */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}
          >
            <span className="badge-pill" style={{ marginBottom: '1.25rem' }}>
              8-Acre Green Campus
            </span>
            <h4 className="heading-serif" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.3, marginBottom: '1.5rem' }}>
              The School is divided into two wings, with an open amphitheatre connecting them. This eight acre campus has a built-up area of four acres, while the rest of the space comprises a lush, green cover.
            </h4>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
              The red and beige sandstone building was designed and built keeping in mind the ideal environment for children, the philosophy of the school and evolving paradigms.
            </p>
            <Link to="/infrastructure" className="btn-secondary">
              INFRASTRUCTURE <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 8. Learning with Understanding */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container-custom">
          <div className="grid-responsive grid-responsive-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="badge-pill" style={{ marginBottom: '1rem' }}>
                <BookOpen size={14} /> Pedagogical Philosophy
              </span>
              <h3 className="heading-serif" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '1.5rem' }}>
                Learning with Understanding
              </h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
                While high academic achievement is a priority, the school aims to create a community of well-rounded individuals, who are compassionate and confident. This fosters a spirit of cooperation and mutual respect among the students and teachers.
              </p>
              <Link to="/learning-experience" className="btn-primary">
                LEARNING EXPERIENCE <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="img-frame-diagram"
            >
              <Link to="/learning-experience" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <img src="/wp-content/uploads/2021/04/learning-image-image.png" alt="Learning Experience" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
