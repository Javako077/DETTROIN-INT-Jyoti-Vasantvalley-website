import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Bell, Newspaper, Sparkles } from 'lucide-react';
import PageHeader from '../../components/Shared/PageHeader';
import SectionHeader from '../../components/Shared/SectionHeader';

export default function NewsEvents() {
  const [filter, setFilter] = useState('all');

  const newsList = [
    { title: 'Class 12 CBSE Marksheet Availability', category: 'announcement', date: 'June 2026', desc: 'CBSE Marksheets of the All India Senior School Certificate Examination for Class XII are available in Senior School Office.' },
    { title: '23rd Laissez Faire Event Success', category: 'event', date: 'July 2026', desc: 'The 23rd edition of Laissez Faire economic symposium witnessed participation from top schools across India.' },
    { title: 'RoboCup Nationals 2026 Achievements', category: 'news', date: 'May 2026', desc: 'Vasant Valley robotics team secured top positions at the RoboCup Nationals.' },
    { title: 'Cambridge A-Level & IGCSE Results', category: 'news', date: 'May 2026', desc: 'Outstanding academic results declared for Cambridge A-Level and IGCSE examinations.' },
  ];

  const filteredNews = filter === 'all' ? newsList : newsList.filter(n => n.category === filter);

  return (
    <div style={{ backgroundColor: 'var(--bg-main)' }}>
      <PageHeader title="News & Announcements" breadcrumb={[{ label: 'News & Events' }]} />

      {/* Filter Tabs */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container-custom">
          <SectionHeader
            badge="Updates Directory"
            title="School Chronicle & Events"
            subtitle="Explore recent academic updates, competitive achievements, and official notices."
          />

          {/* Filter Pills */}
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
            {['all', 'news', 'event', 'announcement'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: '0.6rem 1.4rem',
                  borderRadius: 'var(--radius-full)',
                  border: filter === cat ? '1px solid var(--accent-crimson)' : '1px solid var(--border-medium)',
                  backgroundColor: filter === cat ? 'var(--accent-crimson)' : 'var(--bg-surface)',
                  color: filter === cat ? '#FFFFFF' : 'var(--text-primary)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  textTransform: 'capitalize',
                  transition: 'all 0.3s ease',
                  boxShadow: filter === cat ? '0 4px 14px rgba(159, 6, 34, 0.25)' : 'none',
                }}
              >
                {cat === 'all' ? 'All Updates' : cat + 's'}
              </button>
            ))}
          </div>

          {/* News Grid */}
          <div className="grid-responsive grid-responsive-2" style={{ gap: '2rem' }}>
            <AnimatePresence mode="popLayout">
              {filteredNews.map((item, index) => (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="card-luxury"
                  style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                      <span className="badge-pill" style={{ fontSize: '0.75rem' }}>
                        {item.category === 'event' ? <Calendar size={12} /> : item.category === 'announcement' ? <Bell size={12} /> : <Newspaper size={12} />}
                        {item.category}
                      </span>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                        {item.date}
                      </span>
                    </div>

                    <h3 className="heading-serif" style={{ fontSize: '1.45rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                      {item.title}
                    </h3>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
