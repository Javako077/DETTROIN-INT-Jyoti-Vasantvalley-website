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
import Admission from '../pages/Admission/Admission';
import NewsEvents from '../pages/NewsEvents/NewsEvents';
import IntraSchool from '../pages/Programmes/IntraSchool';
import InterSchool from '../pages/Programmes/InterSchool';
import AlumniConnect from '../pages/AlumniConnect/AlumniConnect';
import BatchConnect from '../pages/BatchConnect/BatchConnect';
import CareerConnect from '../pages/CareerConnect/CareerConnect';
import CEE from '../pages/CEE/CEE';
import Contact from '../pages/Contact/Contact';

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
        <Route path="programmes/intra-school" element={<IntraSchool />} />
        <Route path="programmes/inter-school" element={<InterSchool />} />
        <Route path="admission" element={<Admission />} />
        <Route path="alumni-connect" element={<AlumniConnect />} />
        <Route path="batch_connect" element={<BatchConnect />} />
        <Route path="career-connect" element={<CareerConnect />} />
        <Route path="announcements" element={<NewsEvents />} />
        <Route path="news-events" element={<NewsEvents />} />
        <Route path="news-and-events" element={<NewsEvents />} />
        <Route path="cee" element={<CEE />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faqs" element={<FAQs />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}
