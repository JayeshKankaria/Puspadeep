import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MeetTheTeamSection = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center px-4">
        {/* Section Heading with Slide Animation */}
        <div
          className="relative overflow-hidden mb-12"
          data-aos="slide-right"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-2 animate-slide-left">
          The Generation Next
          
          </h2>
          <p className="text-gray-500 text-lg">
          Meet the team
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Member 1 */}
          <div
            className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden"
            data-aos="fade-up"
          >
            <img
              src="src\assets\mem1.jpg"
              alt="Arun Sancheti"
              className="w-full h-72 object-cover"
            />
            <div className="p-6 text-center">
              <h4 className="text-xl font-semibold text-gray-800">
                Arun Sancheti
              </h4>
              <span className="text-gray-500">Director</span>
            </div>
          </div>

          {/* Member 2 */}
          <div
            className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden"
            data-aos="fade-up"
          >
            <img
              src="src\assets\mem2.jpg"
              alt="Gaurav Dugar"
              className="w-full h-72 object-cover"
            />
            <div className="p-6 text-center">
              <h4 className="text-xl font-semibold text-gray-800">
                Gaurav Dugar
              </h4>
              <span className="text-gray-500">Managing Director</span>
            </div>
          </div>

          {/* Member 3 */}
          <div
            className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden"
            data-aos="fade-up"
          >
            <img
              src="src\assets\mem3.jpg"
              alt="Ravi Dugar"
              className="w-full h-72 object-cover"
            />
            <div className="p-6 text-center">
              <h4 className="text-xl font-semibold text-gray-800">
                Ravi Dugar
              </h4>
              <span className="text-gray-500">Director</span>
            </div>
          </div>

          {/* Member 4 */}
          <div
            className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden"
            data-aos="fade-up"
          >
            <img
              src="src\assets\mem4.jpg"
              alt="Prashant Chopra"
              className="w-full h-72 object-cover"
            />
            <div className="p-6 text-center">
              <h4 className="text-xl font-semibold text-gray-800">
                Prashant Chopra
              </h4>
              <span className="text-gray-500">Chairman</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeamSection;
