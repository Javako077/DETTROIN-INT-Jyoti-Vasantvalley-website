import React from 'react';

export default function SectionHeader({ badge, title, subtitle, align = 'center', light = false }) {
  const isLeft = align === 'left';

  return (
    <div
      className="section-header-wrap"
      style={{
        textAlign: isLeft ? 'left' : 'center',
        maxWidth: isLeft ? '100%' : '760px',
        margin: isLeft ? '0 0 3rem 0' : '0 auto 3.5rem auto',
      }}
    >
      {badge && (
        <span className={`badge-pill ${light ? 'badge-pill-light' : ''}`} style={{ marginBottom: '1rem' }}>
          {badge}
        </span>
      )}
      {title && (
        <h2
          className="title heading-serif"
          style={{
            color: light ? '#FFFFFF' : 'var(--text-primary)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            lineHeight: 1.2,
          }}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p
          style={{
            marginTop: '1rem',
            fontSize: '1.1rem',
            color: light ? 'rgba(255, 255, 255, 0.85)' : 'var(--text-secondary)',
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
