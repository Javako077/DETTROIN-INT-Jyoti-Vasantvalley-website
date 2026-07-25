import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="card-luxury"
            style={{
              padding: '1.5rem 2rem',
              borderColor: isOpen ? 'var(--accent-crimson)' : 'var(--border-light)',
            }}
          >
            <div
              onClick={() => toggleItem(index)}
              style={{
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '1.15rem',
                color: isOpen ? 'var(--accent-crimson)' : 'var(--text-primary)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <span>{item.title}</span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ color: isOpen ? 'var(--accent-crimson)' : 'var(--text-muted)' }}
              >
                <ChevronDown size={20} />
              </motion.div>
            </div>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{ paddingTop: '1.25rem', marginTop: '1rem', borderTop: '1px solid var(--border-light)', color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1.05rem' }}>
                    {typeof item.content === 'string' ? <p>{item.content}</p> : item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
