import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const AwardsSection = () => {
  const awards = [
    {
      name: 'Golden Brush Award Scheme',
      year: 2010,
      recipient: 'Pushpadeep Consultancy',
      description: 'Awarded for their association with Asian Paints and excellence in performance',
      images: [
        '/api/placeholder/800/400',
        '/api/placeholder/800/400',
        '/api/placeholder/800/400',
      ],
      
    },

  ];

  const [selectedAward, setSelectedAward] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    if (selectedAward) {
      const awardImages = selectedAward.images;
      setCurrentImage((prev) =>
        prev === awardImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedAward) {
      const awardImages = selectedAward.images;
      setCurrentImage((prev) =>
        prev === 0 ? awardImages.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="awards" className="py-10 bg-white-100 min-h-screen">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-red-700">Our Awards</h2>
        <p className="text-lg text-gray-500">Celebrating Excellence and Recognition</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {awards.map((award, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition hover:scale-105"
            onClick={() => {
              setSelectedAward(award);
              setCurrentImage(0);
            }}
          >
            <img
              src={award.images[0]}
              alt={award.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-gray-800">{award.name}</h4>
              <p className="text-gray-500">{award.year}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Selected Award */}
      {selectedAward && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 relative">
              <button
                onClick={() => setSelectedAward(null)}
                className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100"
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="text-2xl font-semibold text-gray-800 pr-12">
                {selectedAward.name}
              </h3>
              <p className="text-gray-500 mb-4">{selectedAward.year}</p>
              <p className="text-gray-700 mb-6">{selectedAward.description}</p>

              {/* Image Viewer */}
              <div className="relative">
                <img
                  src={selectedAward.images[currentImage]}
                  alt={`${selectedAward.name} ${currentImage + 1}`}
                  className="w-full h-64 object-cover rounded"
                />

                <button
                  onClick={handlePrevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={handleNextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
                  {currentImage + 1} / {selectedAward.images.length}
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                {selectedAward.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-16 h-16 flex-shrink-0 rounded ${
                      currentImage === index ? 'ring-2 ring-blue-500' : ''
                    }`}
                  >
                    <img
                      src={selectedAward.images[index]}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover rounded"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AwardsSection;
