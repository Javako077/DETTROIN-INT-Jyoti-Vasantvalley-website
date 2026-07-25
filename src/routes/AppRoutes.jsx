import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import VisionPhilosophy from '../pages/VisionPhilosophy';
import LearningExperience from '../pages/LearningExperience';
import Infrastructure from '../pages/Infrastructure';
import SpecialEducationNeeds from '../pages/SpecialEducationNeeds';
import ADayInSchool from '../pages/ADayInSchool';
import InternationalCurriculum from '../pages/InternationalCurriculum';
import UniversityPlacements from '../pages/UniversityPlacements';
import FAQs from '../pages/FAQs';
import Login from '../pages/Login';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vision-philosophy" element={<VisionPhilosophy />} />
        <Route path="learning-experience" element={<LearningExperience />} />
        <Route path="infrastructure" element={<Infrastructure />} />
        <Route path="special-education-needs" element={<SpecialEducationNeeds />} />
        <Route path="a-day-in-school" element={<ADayInSchool />} />
        <Route path="international-curriculum" element={<InternationalCurriculum />} />
        <Route path="university-placements" element={<UniversityPlacements />} />
        <Route path="faqs" element={<FAQs />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}
