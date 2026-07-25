import React from 'react';
import { motion } from 'framer-motion';
import { Users, Search } from 'lucide-react';
import PageHeader from '../../components/Shared/PageHeader';
import SectionHeader from '../../components/Shared/SectionHeader';

export default function BatchConnect() {
  return (
    <div style={{ backgroundColor: 'var(--bg-main)' }}>
      <PageHeader title="Batch Connect" breadcrumb={[{ label: 'Batch Connect' }]} />

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container-custom">
          <SectionHeader
            badge="Directory Search"
            title="Batches Directory"
            subtitle="Connect with your batchmates and view batchwise alumni directories."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-luxury"
            style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '3.5rem 2.5rem' }}
          >
            <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(159, 6, 34, 0.08)', borderRadius: '50%', color: 'var(--accent-crimson)', marginBottom: '1.5rem' }}>
              <Users size={32} />
            </div>
            <h3 className="heading-serif" style={{ fontSize: '1.8rem', color: 'var(--accent-crimson)', marginBottom: '1rem' }}>
              Batchwise Alumni Listings
            </h3>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
              Select your passing batch to view alumni listings and batch networks.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <input
                type="text"
                placeholder="Enter Graduation Year (e.g. 2015)"
                style={{
                  padding: '0.85rem 1.25rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--border-medium)',
                  fontSize: '0.95rem',
                  width: '280px',
                  outline: 'none',
                }}
              />
              <button className="btn-primary">
                Search Batch <Search size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
