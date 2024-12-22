import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MeetTheTeamSection = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({ 
      duration: 1000,  // Default duration for all elements
      once: true,  // Animation triggers only once during scroll
    });
  }, []);

  // Array of team members
  const teamMembers = [
    {
      name: "Arun Sancheti",
      role: "CEO",
      image: "src/assets/mem1.jpg",
      animationDelay: 200
    },
    {
      name: "Gaurav Dugar",
      role: "Site Manager",
      image: "src/assets/mem2.jpg",
      animationDelay: 400
    },
    {
      name: "Ravi Dugar",
      role: "Logistics Manager",
      image: "src/assets/mem3.jpg",
      animationDelay: 500
    },
    {
      name: "Prashant Chopra",
      role: "Accountant",
      image: "src/assets/mem4.jpg",
      animationDelay: 600
    }
  ];

  return (
    <section id="team" className="py-16 bg-gray-50">
      <div className="container mx-auto text-center px-4">
        {/* Section Heading with Slide Animation */}
        <div
          className="relative overflow-hidden mb-12"
          data-aos="slide-right"
          data-aos-duration="1500" // Set duration for this specific animation
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-2 animate-slide-left">
            Backbone Of The Company
          </h2>
          <p className="text-gray-500 text-lg">
            Meet the team
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay={member.animationDelay}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-72 object-cover"
              />
              <div className="p-6 text-center">
                <h4 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h4>
                <span className="text-gray-500">{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeamSection;
