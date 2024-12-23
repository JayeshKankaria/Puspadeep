import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VisionSection from './VisionSection';
import MeetTheTeamSection from './MeetTheTeamSection';

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

  const solutions = [
    { 
      title: 'Putty & Painting', 
      description: 'Professional painting services with premium quality putty work for a flawless finish' 
    },
    { 
      title: 'WallPaper', 
      description: 'Expert wallpaper installation with a wide range of modern and classic designs' 
    },
    { 
      title: 'WaterProofing', 
      description: 'Comprehensive waterproofing solutions to protect your property from water damage' 
    },
  ];

  const navigation = [
    { name: 'About', href: '#about' },          //about, projects, awards, our team,contatct, get quotation
    {name: 'Projects', href:'#project'},
    {name: 'Awards', href:'#awards'},
    {name: 'Our Team', href:'#team'},
    { name: 'Contact', href: '#contact' },
    
    //{ name: 'Admin', href: '/admin' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 mt-[-10px]">
               <Link to="/" className="text-2xl font-bold text-red-600">
                    <img
                     src="src\assets\LOGO.jpeg"
                     alt="Company Logo"
                     className="h-[70px] w-auto"
                     />
                </Link>
            </div>


            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navigation.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-orange-700 hover:text-orange-500 transition-colors"

                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <button className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Get Quotation
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-red-800 hover:text-orange-600 transition-colors"
              >
                {isMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              {navigation.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block py-2 text-orange-700 hover:text-orange-500 transition-colors"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
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


      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-red-700 to-red-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Business Today
          </h1>
          <p className="text-xl text-orange-100 mb-8">
            Empower your team with cutting-edge solutions designed for modern businesses
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-100 transition-colors">
              Get Started
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

       {/* CTA Section */}
       <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of satisfied customers who have transformed their business
          </p>
          <button className="bg-red-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors inline-flex items-center gap-2">
            Contact Sales <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <VisionSection></VisionSection>

      {/* Solutions Section */}
        <section id="solutions" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
                <div key={index} className="p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <CheckCircle className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
                </div>
            ))}
            </div>
        </div>
        </section>

       
        
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