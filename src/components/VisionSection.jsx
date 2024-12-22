import React, { useState, useEffect, useMemo } from 'react';
import img1 from '../assets/pexels-tima-miroshnichenko-6474446.jpg';
import img2 from '../assets/pexels-kampus-8730067.jpg';
import img3 from '../assets/pexels-pixabay-276671.jpg';

const VisionSection = () => {
    
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = useMemo(() => [
    {
      image: img1,
      text: "We continuously strive to provide the best living experience. Today, better than yesterday. Tomorrow, better than today. By developing landmark buildings and expansive residences in record time, ensuring the most fulfilling lives to their occupants.",
    },
    {
      image: img2,
      text: "By making all their dreams come true at prices they can easily afford, outperforming our promises through continuous innovations and improvements in designs, specifications, and service standards.",
    },
    {
      image: img3,
      text: "We will make our Group a significant contributor in transforming our nation from a developing to a developed one by being a responsible corporate citizen and taking every opportunity to make this world a better place.",
    },
  ], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    
    <section className="flex flex-col justify-center items-center py-10 bg-gray-100">
       {/* Section Heading with Slide Animation */}
       <div
          className="relative overflow-hidden mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-2 animate-slide-left">
            Vision
          </h2>
          <p className="text-gray-500 text-lg">
            Where we see ourselves
          </p>
        </div>
      <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-8 px-4">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
  <img
    src={slides[currentSlide].image}
    alt={`Slide ${currentSlide + 1}`}
    className="w-full h-80 rounded-lg object-cover"
  />
</div>


        {/* Content Section */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
          <p className="text-gray-800 text-lg leading-relaxed mb-6">{slides[currentSlide].text}</p>
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-10 h-10 flex items-center justify-center rounded-full border ${
                  currentSlide === index
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
                onClick={() => setCurrentSlide(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
