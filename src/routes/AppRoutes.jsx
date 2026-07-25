import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import VisionPhilosophy from '../pages/VisionPhilosophy';
import Login from '../pages/Login';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vision-philosophy" element={<VisionPhilosophy />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}
