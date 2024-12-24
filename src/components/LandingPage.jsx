import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VisionSection from './VisionSection';
import MeetTheTeamSection from './MeetTheTeamSection';
import ProjectsSection from './ProjectsSection';
import AwardSection from './AwardSection'
import HeroSection from './HeroSection';
import ServiceSection from './ServiceSection';
import {
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Menu as MenuIcon,
  X as CloseIcon
} from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services'},
    { name: 'Projects', href: '#project' },
    { name: 'Awards', href: '#awards' },
    { name: 'Our Team', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Adjusted height and padding */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex justify-between items-center h-20">
            {/* Logo - Adjusted margin and padding */}
            <div className="flex-shrink-0 py-2">
              <Link to="/" className="text-2xl font-bold text-red-600 block">
                <img
                  src="src\assets\LOGO.jpeg"
                  alt="Company Logo"
                  className="h-16 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Desktop Navigation - Adjusted vertical alignment */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navigation.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-orange-700 hover:text-orange-500 transition-colors py-2"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <button className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Get Quotation
              </button>
            </div>

            {/* Mobile menu button - Adjusted alignment */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-red-800 hover:text-orange-600 transition-colors p-2"
              >
                {isMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 bg-white border-t">
              {navigation.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block py-2 text-orange-700 hover:text-orange-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <button className="w-full mt-4 bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Get Quotation
              </button>
            </div>
          )}
        </nav>
      </header>

      <HeroSection></HeroSection>

      <section id="about" className="py-20 px-6 translate-y-[20px] bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-red-700 text-center mb-12">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-bold text-orange-800">Puspadeep Consultancy & Services (P) Ltd </span>
                is a trusted name in providing high-quality services and finishing solutions for a diverse
                range of projects, from prestigious landmarks to residential properties, in and around Kolkata.
              </p>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                With a commitment to excellence, we have contributed to several iconic projects, including
                <span className="font-semibold"> Tata Medical Centre</span>, one of the nation's leading cancer
                care hospitals, and the expansion of the <span className="font-semibold">Netaji Subhas Chandra Bose
                  International Airport</span> in Kolkata. Alongside these large-scale ventures, we deliver exceptional
                finishing work for individual houses and smaller-scale projects, ensuring the same level of quality
                and attention to detail.
              </p>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                Our dedication to superior craftsmanship and timely execution has earned us various awards year after year,
                solidifying our reputation as a reliable and high-value service provider. At Puspadeep Consultancy & Services (P) Ltd,
                we take pride in exceeding client expectations and setting new benchmarks of excellence in every project we undertake.
              </p>
            </div>

            {/* Image or Visual Element */}
            <div className="flex justify-center">
              <img
                src="src\assets\groupPhoto.jpg"
                alt="Puspadeep Consultancy & Services"
                className="rounded-lg shadow-lg w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>
      <VisionSection></VisionSection>
      <ServiceSection></ServiceSection>
      <ProjectsSection></ProjectsSection>
      <AwardSection></AwardSection>
      <MeetTheTeamSection></MeetTheTeamSection>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600">contact@company.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600">123 Business St, City, Country</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-red-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
export default LandingPage;