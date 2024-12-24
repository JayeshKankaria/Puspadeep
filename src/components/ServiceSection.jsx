import React from 'react';
import { CheckCircle } from 'lucide-react';

const services = [
  {
    title: 'Putty & Painting',
    description: 'Professional painting services with premium quality putty work for a flawless finish',
    bgImage: 'https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'// Replace with actual image path
  },
  {
    title: 'WallPaper',
    description: 'Expert wallpaper installation with a wide range of modern and classic designs',
    bgImage: 'https://images.pexels.com/photos/8090444/pexels-photo-8090444.jpeg?auto=compress&cs=tinysrgb&w=300&h=500&dpr=2' // Replace with actual image path
  },
  {
    title: 'WaterProofing',
    description: 'Comprehensive waterproofing solutions to protect your property from water damage',
    bgImage: 'https://images.pexels.com/photos/4490644/pexels-photo-4490644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 '// Replace with actual image path
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Services We Provide</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden h-64"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${service.bgImage})`
                }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300" />
              
              {/* Content */}
              <div className="relative h-full p-6 flex flex-col justify-between text-white">
                <div>
                  <CheckCircle className="w-12 h-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-200">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;