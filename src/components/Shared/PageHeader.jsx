import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function PageHeader({ title, badge = 'Vasant Valley School', breadcrumb = [] }) {
  return (
    <div
      style={{
        backgroundColor: 'var(--bg-dark)',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
        padding: '6rem 0 5rem 0',
      }}
    >
      {/* Background Architectural Glow & Pattern */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(159, 6, 34, 0.25) 0%, rgba(12, 23, 38, 0) 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.4,
          pointerEvents: 'none',
        }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 2 }}>
        {/* Breadcrumb Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.875rem',
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '1.25rem',
          }}
        >
          <Link to="/" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }}>
            Home
          </Link>
          {breadcrumb.map((item, index) => (
            <React.Fragment key={index}>
              <ChevronRight size={14} style={{ color: 'rgba(255, 255, 255, 0.4)' }} />
              {item.path ? (
                <Link to={item.path} style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }}>
                  {item.label}
                </Link>
              ) : (
                <span style={{ color: 'var(--accent-gold)' }}>{item.label}</span>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Badge & Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="badge-pill badge-pill-light" style={{ marginBottom: '1rem' }}>
            {badge}
          </span>
          <h1
            className="heading-serif"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 1.15,
              maxWidth: '900px',
            }}
          >
            {title}
          </h1>
        </motion.div>
      </div>
    </div>
  );
}
