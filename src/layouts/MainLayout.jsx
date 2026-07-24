import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import useScrollToTop from '../hooks/useScrollToTop';

export default function MainLayout() {
  useScrollToTop();

  return (
    <div className="site-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main className="main-content" style={{ flex: 1, paddingTop: '105px' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
