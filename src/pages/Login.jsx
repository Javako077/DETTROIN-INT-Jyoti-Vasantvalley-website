import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, UserCheck, CheckCircle2 } from 'lucide-react';
import PageHeader from '../components/Shared/PageHeader';

export default function Login() {
  const [activeTab, setActiveTab] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-main)' }}>
      <PageHeader title="School Portal Login" breadcrumb={[{ label: 'Login' }]} />

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="card-luxury"
            style={{
              maxWidth: '480px',
              margin: '0 auto',
              padding: '2.5rem',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(159, 6, 34, 0.08)',
                  color: 'var(--accent-crimson)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem auto',
                }}
              >
                <Lock size={26} />
              </div>
              <h3 className="heading-serif" style={{ fontSize: '1.65rem' }}>Portal Authentication</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                Access Student, Parent, and Faculty online portals.
              </p>
            </div>

            {/* Tab Switcher */}
            <div
              style={{
                display: 'flex',
                backgroundColor: 'var(--bg-subtle)',
                borderRadius: 'var(--radius-full)',
                padding: '4px',
                marginBottom: '2rem',
              }}
            >
              <button
                type="button"
                onClick={() => setActiveTab('student')}
                style={{
                  flex: 1,
                  padding: '0.7rem',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  backgroundColor: activeTab === 'student' ? 'var(--accent-crimson)' : 'transparent',
                  color: activeTab === 'student' ? '#FFFFFF' : 'var(--text-secondary)',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                Student Login
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('parent')}
                style={{
                  flex: 1,
                  padding: '0.7rem',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  backgroundColor: activeTab === 'parent' ? 'var(--accent-crimson)' : 'transparent',
                  color: activeTab === 'parent' ? '#FFFFFF' : 'var(--text-secondary)',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                Parent Login
              </button>
            </div>

            {loggedIn ? (
              <div
                style={{
                  backgroundColor: 'rgba(78, 110, 93, 0.1)',
                  border: '1px solid var(--accent-sage)',
                  color: 'var(--accent-sage)',
                  padding: '2rem',
                  borderRadius: 'var(--radius-md)',
                  textAlign: 'center',
                }}
              >
                <CheckCircle2 size={40} style={{ margin: '0 auto 0.75rem auto', display: 'block' }} />
                <h4 style={{ fontSize: '1.15rem' }}>Successfully logged in as {activeTab}!</h4>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                    Email / Portal ID
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-medium)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                    placeholder={activeTab === 'student' ? 'student@vasantvalley.edu.in' : 'parent@vasantvalley.edu.in'}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-medium)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                    placeholder="••••••••"
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem', width: '100%', justifyContent: 'center' }}>
                  Log In <UserCheck size={16} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
