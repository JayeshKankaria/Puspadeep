import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FirstFamilySection = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      {/* Container */}
      <div className="container mx-auto text-center px-4">
        {/* Heading Section */}
        <div
          className="relative overflow-hidden mb-12"
          data-aos="slide-right"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            The First Family
          </h2>
          <p className="text-gray-500 text-lg">The minds behind the company</p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Member 1 */}
          <div
            className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden"
            data-aos="fade-up"
          >
            <a
              //href="https://psgroup.in/Management/Pradip-Kumar-Chopra"
              className="block"
            >
              <img
                src="src\assets\fam1.jpg"
                alt="Pradip Kumar Chopra"
                className="w-full h-72 object-cover"
              />
              <div className="p-6 text-center">
                <h4 className="text-xl font-semibold text-gray-800">
                  Pradip Kumar Chopra
                </h4>
                <span className="text-gray-500">Director</span>
              </div>
            </a>
          </div>

          {/* Member 2 */}
          <div
            className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden"
            data-aos="fade-up"
          >
            <a
              //href="https://psgroup.in/Management/Surendra-Kumar-Dugar"
              className="block"
            >
              <img
                src="src\assets\fam2.jpg"
                alt="Surendra Kumar Dugar"
                className="w-full h-72 object-cover"
              />
              <div className="p-6 text-center">
                <h4 className="text-xl font-semibold text-gray-800">
                  Surendra Kumar Dugar
                </h4>
                <span className="text-gray-500">Director</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstFamilySection;
