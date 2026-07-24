import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, LogIn, ChevronDown, Menu, X, Phone, Mail, MapPin, ExternalLink, GraduationCap } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/news-events?s=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className={`header-glass ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Secondary Announcement / Utility Bar */}
      <div className="top-bar-notice">
        <div className="container-custom top-bar-container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <Phone size={13} style={{ color: 'var(--accent-gold)' }} />
              <a href="tel:+911141767940" style={{ color: 'inherit' }}>+91 11 41767940</a>
            </span>
            <span className="d-none d-md-inline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <Mail size={13} style={{ color: 'var(--accent-gold)' }} />
              <a href="mailto:info@vasantvalley.edu.in" style={{ color: 'inherit' }}>info@vasantvalley.edu.in</a>
            </span>
          </div>

          <ul className="top-bar-links">
            <li>
              <a href="https://portals.veracross.eu/vasantvalleyschool/faculty" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                School ERP <ExternalLink size={11} />
              </a>
            </li>
            <li><Link to="/cee">Centre for Excellence</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      {/* Main Horizontal Navbar */}
      <div className="container-custom main-nav-container">
        {/* Brand Logo */}
        <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
          <img
            src="/wp-content/themes/vasant/images/logo-vasant-valley.svg"
            alt="Vasant Valley School"
          />
        </Link>

        {/* Desktop Horizontal Navigation Links */}
        <ul className="desktop-nav-menu">
          <li className="nav-item-desktop">
            <Link
              to="/"
              className={`nav-link-desktop ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>

          <li className="nav-item-desktop">
            <Link
              to="/about"
              className={`nav-link-desktop ${location.pathname === '/about' ? 'active' : ''}`}
            >
              About Us
            </Link>
          </li>

          <li className="nav-item-desktop">
            <Link
              to="/vision-philosophy"
              className={`nav-link-desktop ${location.pathname === '/vision-philosophy' ? 'active' : ''}`}
            >
              Vision & Philosophy
            </Link>
          </li>

          {/* Academics & Life Dropdown */}
          <li
            className="nav-item-desktop"
            onMouseEnter={() => setActiveDropdown('academics')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span className="nav-link-desktop" style={{ cursor: 'pointer' }}>
              Academics <ChevronDown size={14} />
            </span>
            <AnimatePresence>
              {activeDropdown === 'academics' && (
                <motion.ul
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="nav-dropdown-menu"
                >
                  <li className="nav-dropdown-item"><Link to="/learning-experience" onClick={() => setActiveDropdown(null)}>The Learning Experience</Link></li>
                  <li className="nav-dropdown-item"><Link to="/international-curriculum" onClick={() => setActiveDropdown(null)}>International Curriculum</Link></li>
                  <li className="nav-dropdown-item"><Link to="/special-education-needs" onClick={() => setActiveDropdown(null)}>Special Education Needs</Link></li>
                  <li className="nav-dropdown-item"><Link to="/a-day-in-school" onClick={() => setActiveDropdown(null)}>A Day in School</Link></li>
                  <li className="nav-dropdown-item"><Link to="/university-placements" onClick={() => setActiveDropdown(null)}>College Placements</Link></li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          {/* Programmes Dropdown */}
          <li
            className="nav-item-desktop"
            onMouseEnter={() => setActiveDropdown('programmes')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span className="nav-link-desktop" style={{ cursor: 'pointer' }}>
              Programmes <ChevronDown size={14} />
            </span>
            <AnimatePresence>
              {activeDropdown === 'programmes' && (
                <motion.ul
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="nav-dropdown-menu"
                >
                  <li className="nav-dropdown-item"><Link to="/programmes/intra-school" onClick={() => setActiveDropdown(null)}>Intra-School Programmes</Link></li>
                  <li className="nav-dropdown-item"><Link to="/programmes/inter-school" onClick={() => setActiveDropdown(null)}>Inter-School Programmes</Link></li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          <li className="nav-item-desktop">
            <Link
              to="/infrastructure"
              className={`nav-link-desktop ${location.pathname === '/infrastructure' ? 'active' : ''}`}
            >
              Infrastructure
            </Link>
          </li>

          <li className="nav-item-desktop">
            <Link
              to="/news-events"
              className={`nav-link-desktop ${location.pathname === '/news-events' ? 'active' : ''}`}
            >
              News & Events
            </Link>
          </li>

          <li className="nav-item-desktop">
            <Link
              to="/admission"
              className={`nav-link-desktop ${location.pathname === '/admission' ? 'active' : ''}`}
            >
              Admissions
            </Link>
          </li>

          {/* Community & Careers Dropdown */}
          <li
            className="nav-item-desktop"
            onMouseEnter={() => setActiveDropdown('community')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span className="nav-link-desktop" style={{ cursor: 'pointer' }}>
              Connect <ChevronDown size={14} />
            </span>
            <AnimatePresence>
              {activeDropdown === 'community' && (
                <motion.ul
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="nav-dropdown-menu"
                >
                  <li className="nav-dropdown-item"><Link to="/alumni-connect" onClick={() => setActiveDropdown(null)}>Alumni Connect</Link></li>
                  <li className="nav-dropdown-item"><Link to="/batch_connect" onClick={() => setActiveDropdown(null)}>Batch Directory</Link></li>
                  <li className="nav-dropdown-item"><Link to="/career-connect" onClick={() => setActiveDropdown(null)}>Careers at Vasant Valley</Link></li>
                  <li className="nav-dropdown-item"><Link to="/cbse-public-disclosures" onClick={() => setActiveDropdown(null)}>CBSE Disclosures</Link></li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        </ul>

        {/* Right Actions */}
        <div className="nav-actions-right">
         
          <button
            className="search-trigger-btn"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Search website"
          >
            <Search size={18} />
          </button>

          <Link to="/login" className="login-nav-btn">
            <LogIn size={16} />
            <span>Log in</span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Quick Search Modal Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: 'var(--bg-surface)',
              borderBottom: '1px solid var(--border-medium)',
              boxShadow: 'var(--shadow-card)',
              padding: '1.25rem 0',
            }}
          >
            <div className="container-custom">
              <form onSubmit={handleSearchSubmit} style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ flex: 1, position: 'relative' }}>
                  <input
                    type="text"
                    placeholder="Search announcements, news, events, admissions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.25rem 0.85rem 3rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid var(--border-medium)',
                      fontSize: '1rem',
                      fontFamily: 'var(--font-sans)',
                      outline: 'none',
                    }}
                  />
                  <Search
                    size={20}
                    style={{
                      position: 'absolute',
                      left: '1rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'var(--text-muted)',
                    }}
                  />
                </div>
                <button type="submit" className="btn-primary">
                  Search
                </button>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setIsSearchOpen(false)}
                >
                  Cancel
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Collapsible Navigation Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-nav-panel"
          >
            <ul className="mobile-nav-list">
              <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
              <li><Link to="/about" onClick={closeMobileMenu}>About Us</Link></li>
              <li><Link to="/vision-philosophy" onClick={closeMobileMenu}>Vision & Philosophy</Link></li>
              <li><Link to="/learning-experience" onClick={closeMobileMenu}>The Learning Experience</Link></li>
              <li><Link to="/international-curriculum" onClick={closeMobileMenu}>International Curriculum</Link></li>
              <li><Link to="/special-education-needs" onClick={closeMobileMenu}>Special Education Needs</Link></li>
              <li><Link to="/programmes/intra-school" onClick={closeMobileMenu}>Intra-School Programmes</Link></li>
              <li><Link to="/programmes/inter-school" onClick={closeMobileMenu}>Inter-School Programmes</Link></li>
              <li><Link to="/infrastructure" onClick={closeMobileMenu}>Infrastructure</Link></li>
              <li><Link to="/a-day-in-school" onClick={closeMobileMenu}>A Day in School</Link></li>
              <li><Link to="/news-events" onClick={closeMobileMenu}>News & Events</Link></li>
              <li><Link to="/admission" onClick={closeMobileMenu}>Admissions</Link></li>
              <li><Link to="/university-placements" onClick={closeMobileMenu}>College Placements</Link></li>
              <li><Link to="/alumni-connect" onClick={closeMobileMenu}>Alumni Connect</Link></li>
              <li><Link to="/career-connect" onClick={closeMobileMenu}>Careers</Link></li>
              <li><Link to="/contact" onClick={closeMobileMenu}>Contact Us</Link></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
