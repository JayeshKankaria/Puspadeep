import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const phrases = [
    "Elevate your building’s look",
    "Bring new life to your space",
    "Redefine elegance and function",
    "Experience perfect waterproofing"
  ];
  
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const typingSpeed = 120; // Speed for typing
    const deletingSpeed = 100; // Speed for deleting
    const pauseDuration = 20000; // How long to pause at full phrase
    
    const animateText = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (!isDeleting) {
        // Typing
        if (displayText !== currentPhrase) {
          const nextChar = currentPhrase.substring(0, displayText.length + 1);
          setDisplayText(nextChar);
          return typingSpeed;
        } else {
          // Finished typing
          setIsDeleting(true);
          return pauseDuration;
        }
      } else {
        // Deleting
        if (displayText !== "") {
          const nextChar = currentPhrase.substring(0, displayText.length - 1);
          setDisplayText(nextChar);
          return deletingSpeed;
        } else {
          // Finished deleting
          setIsDeleting(false);
          setCurrentPhraseIndex((current) => 
            current === phrases.length - 1 ? 0 : current + 1
          );
          return typingSpeed;
        }
      }
    };

    const timeout = setTimeout(animateText, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [currentPhraseIndex, displayText, isDeleting]);

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-red-700 to-red-800">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          <span className="inline-block min-h-[1.2em]">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </h1>
        <p className="text-xl text-orange-100 mb-8">
          Empower your team with cutting-edge solutions designed for modern businesses
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-100 transition-colors">
            Send Inquiry
          </button>
          <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
            Price Calculator
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;