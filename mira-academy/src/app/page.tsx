'use client';

import HeroSection from '../components/HeroSection';
import FeaturedCourses from '../components/FeaturedCourses';
import FeaturedPrograms from '../components/FeaturedPrograms';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AboutUsSection from '../components/AboutUsSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import StatsSection from '../components/StatsSection';
import InstructorsSection from '../components/InstructorsSection';
import BlogSection from '../components/BlogSection';
import CTASection from '../components/CTASection';
import UpskillSection from '../components/UpskillSection';
import PartnersSection from '../components/PartnersSection';
import StudentProjectsSection from '../components/StudentProjectsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <PartnersSection />
      <FeaturedCourses />
      <FeaturedPrograms />
      <UpskillSection />
      <AboutUsSection />
      <FeaturesSection />
      <InstructorsSection />
      <StudentProjectsSection />
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
    </>
  );
}
