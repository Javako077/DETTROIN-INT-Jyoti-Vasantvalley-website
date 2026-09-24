import React from 'react';
import PageHeader from '../components/Shared/PageHeader';
import SectionHeader from '../components/Shared/SectionHeader';
import Accordion from '../components/Shared/Accordion';

export default function FAQs() {
  const faqList = [
    {
      title: 'What are the school hours for Junior and Senior school?',
      content: 'School hours for Junior School are 8:00 AM to 1:30 PM. Senior School hours are 8:00 AM to 3:00 PM on working days.',
    },
    {
      title: 'What curriculum options are available at Senior level?',
      content: 'Vasant Valley School offers both the CBSE curriculum and the Cambridge IGCSE / A-Levels international qualifications.',
    },
    {
      title: 'How does the school support students with Special Education Needs?',
      content: 'Our SEN department provides comprehensive Individualized Education Plans (IEPs), resource room support, and specialist therapy.',
    },
    {
      title: 'Where can I collect CBSE Marksheets?',
      content: 'Class XII Marksheets can be collected from the Senior School Office on any working day between 10:00 a.m. and 3:00 p.m.',
    },
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-main)' }}>
      <PageHeader title="Frequently Asked Questions (FAQs)" breadcrumb={[{ label: 'FAQs' }]} />

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container-custom">
          <SectionHeader
            badge="Help Center"
            title="Common Questions & Information"
            subtitle="Find answers to common questions about admissions, academics, campus life, and school policies."
          />

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <Accordion items={faqList} />
          </div>
        </div>
      </section>
    </div>
  );
}
