import React, { useEffect, useState } from 'react';

const TypingEffect = ({ text, delay = 0 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const startTyping = () => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev + text[currentIndex]);
          setCurrentIndex(currentIndex + 1);
        }, 50);

        return () => clearTimeout(timeout);
      } else {
        setIsTypingComplete(true);
      }
    };

    const initialDelay = setTimeout(() => {
      startTyping();
    }, delay);

    return () => clearTimeout(initialDelay);
  }, [currentIndex, text, delay]);

  return (
    <span className="typing-effect">
      {currentText}
      {!isTypingComplete && <span className="cursor">|</span>}
    </span>
  );
};

const TeamMemberCard = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        relative flex flex-col items-center bg-white rounded-lg overflow-hidden
        transform transition-all duration-500 ease-in-out
        hover:shadow-2xl hover:-translate-y-2
        ${isHovered ? 'z-10' : 'z-0'}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full overflow-hidden">
        <div className={`
          absolute inset-0 bg-gradient-to-t from-black/60 to-transparent
          transform transition-opacity duration-500
          ${isHovered ? 'opacity-70' : 'opacity-0'}
        `} />
        <img
          src={member.image}
          alt={member.name}
          className={`
            w-full h-72 object-cover
            transform transition-transform duration-700
            ${isHovered ? 'scale-110' : 'scale-100'}
          `}
        />
      </div>
      <div className={`
        absolute bottom-0 left-0 right-0 p-6 text-center
        transform transition-all duration-500
        ${isHovered ? 'translate-y-0 bg-transparent' : 'translate-y-0 bg-white'}
      `}>
        <h4 className={`
          text-xl font-semibold mb-2 transition-colors duration-500
          ${isHovered ? 'text-white' : 'text-gray-800'}
        `}>
          {member.name}
        </h4>
        <span className={`
          block transition-colors duration-500
          ${isHovered ? 'text-gray-200' : 'text-gray-500'}
        `}>
          {member.role}
        </span>
      </div>
    </div>
  );
};

const MeetTheTeamSection = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  // Fetch data from the backend
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
         const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/team-members`); 
         const data = await response.json();
         setTeamMembers(data);
      } catch (error) {
         console.error('Failed to fetch team members:', error);
      }
   };
   
    

    fetchTeamMembers();
  }, []);

  // Animation visibility
  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 600);
    return () => clearTimeout(timeout);
  }, []);

  // Group team members by role
  const groupedTeamMembers = teamMembers.reduce((acc, member) => {
    acc[member.role] = acc[member.role] || [];
    acc[member.role].push(member);
    return acc;
  }, {});

  return (
    <section id="team" className="py-16 bg-orange-100 overflow-hidden">
      <div className="container mx-auto text-center px-4">
        <div className={`
          transform transition-all duration-1000
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}>
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Backbone Of The Company
          </h2>
          <p className="text-gray-500 text-lg">Meet the team</p>
        </div>

        {Object.entries(groupedTeamMembers).map(([role, members], roleIndex) => (
          <div 
            key={roleIndex}
            className={`
              mb-12 transform transition-all duration-1000 delay-${roleIndex * 200}
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
            `}
          >
            <h3 className="text-2xl font-semibold text-gray-700 mb-6">
              <TypingEffect text={role} delay={roleIndex * 500} />
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {members.map((member, index) => (
                <div
                  key={index}
                  className={`
                    transform transition-all duration-1000
                    delay-${(roleIndex * 2 + index) * 200}
                    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                  `}
                >
                  <TeamMemberCard member={member} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetTheTeamSection;
