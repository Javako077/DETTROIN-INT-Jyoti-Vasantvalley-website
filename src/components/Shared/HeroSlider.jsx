import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';

export default function HeroSlider({ slides = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying || slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (!slides || slides.length === 0) return null;

  const currentSlide = slides[currentIndex];

  return (
    <div
      style={{
        position: 'relative',
        height: '85vh',
        minHeight: '600px',
        maxHeight: '900px',
        width: '100%',
        backgroundColor: '#0C1726',
        overflow: 'hidden',
      }}
    >
      {/* Slide Image with Parallax / Scale Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${currentSlide.image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          {/* Subtle Gradient Overlays for Readability & Luxury */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(180deg, rgba(12, 23, 38, 0.4) 0%, rgba(12, 23, 38, 0.2) 40%, rgba(12, 23, 38, 0.85) 100%)',
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Slide Content Overlay */}
      <div
        className="container-custom"
        style={{
          position: 'relative',
          zIndex: 10,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          paddingBottom: '5rem',
        }}
      >
        <div style={{ maxWidth: '800px' }}>
          <motion.div
            key={`badge-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="badge-pill badge-pill-light" style={{ marginBottom: '1.25rem' }}>
              Vasant Valley School
            </span>
          </motion.div>

          <motion.h1
            key={`title-${currentIndex}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="heading-serif"
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
              color: '#FFFFFF',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              textTransform: currentSlide.title ? 'none' : 'uppercase',
            }}
          >
            {currentSlide.title || 'Excellence in Deed'}
          </motion.h1>

          <motion.p
            key={`sub-${currentIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              color: 'rgba(255, 255, 255, 0.85)',
              fontSize: '1.15rem',
              fontWeight: 400,
              maxWidth: '600px',
            }}
          >
            A self-financing inclusive day school nurturing ethics, original thinking, and global citizenship.
          </motion.p>
        </div>

        {/* Controls Bar at Bottom */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '3rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
          }}
        >
          {/* Counter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#FFFFFF' }}>
            <span style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: 'var(--font-accent)' }}>
              {String(currentIndex + 1).padStart(2, '0')}
            </span>
            <div
              style={{
                width: '80px',
                height: '2px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <motion.div
                key={currentIndex}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: isPlaying ? 5.5 : 0, ease: 'linear' }}
                style={{
                  height: '100%',
                  backgroundColor: 'var(--accent-crimson)',
                }}
              />
            </div>
            <span style={{ fontSize: '0.9rem', opacity: 0.6, fontFamily: 'var(--font-accent)' }}>
              {String(slides.length).padStart(2, '0')}
            </span>
          </div>

          {/* Navigation Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            </button>
            <button
              onClick={handlePrev}
              aria-label="Previous slide"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next slide"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
