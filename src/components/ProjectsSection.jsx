import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const ProjectsSection = () => {
  const projects = useMemo(() => ({
    ongoing: [
      {
        name: 'Project Alpha',
        location: 'New York, USA',
        description: 'A state-of-the-art residential project offering luxurious apartments with stunning views.',
        workDetails: [
          'Foundation work completed with deep piling technology',
          'Structural framework in progress using steel reinforced concrete',
          'Installation of high-speed elevators ongoing',
          'Smart home automation system implementation in planning phase',
          'Sustainable energy systems being integrated'
        ],
        images: [
          '/api/placeholder/800/400',
          '/api/placeholder/800/400',
          '/api/placeholder/800/400',
        ],
      },
      {
        name: 'Project Beta',
        location: 'London, UK',
        description: 'A commercial hub designed for modern businesses with eco-friendly architecture.',
        workDetails: [
          'Green building certification process initiated',
          'Solar panel installation in progress',
          'Smart HVAC systems being configured',
          'Rainwater harvesting system under construction',
          'Workspace customization based on client requirements'
        ],
        images: [
          '/api/placeholder/800/400',
          '/api/placeholder/800/400',
          '/api/placeholder/800/400',
        ],
      },
    ],
    completed: [
      {
        name: 'Tata Medical Centre',
        location: 'Tokyo, Japan',
        description: 'An innovative mixed-use development combining residential and retail spaces.',
        workDetails: [
          'Complete structural development with seismic resistance',
          'Installation of advanced medical equipment and systems',
          'Implementation of specialized hospital management software',
          'Construction of dedicated research facilities',
          'Integration of emergency response systems'
        ],
        images: Array(12).fill('/api/placeholder/800/400'),
      },
    ],
  }), []);

  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' or 'work'

  const handleNextImage = () => {
    if (selectedProject) {
      const projectImages = selectedProject.images;
      setCurrentImage((prev) => 
        prev === projectImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedProject) {
      const projectImages = selectedProject.images;
      setCurrentImage((prev) => 
        prev === 0 ? projectImages.length - 1 : prev - 1
      );
    }
  };

  const ProjectGrid = ({ projects, title }) => (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6 px-4">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition hover:scale-105"
            onClick={() => {
              setSelectedProject(project);
              setCurrentImage(0);
              setActiveTab('overview');
            }}
          >
            <img
              src={project.images[0]}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-gray-800">{project.name}</h4>
              <p className="text-gray-500">{project.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="project" className="py-10 bg-gray-100 min-h-screen">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Our Projects</h2>
        <p className="text-lg text-gray-500">Highlighting Our Most Challenging and Rewarding Projects</p>
      </div>

      <div className="max-w-6xl mx-auto">
        {projects.ongoing.length > 0 && (
          <ProjectGrid projects={projects.ongoing} title="Ongoing Projects" />
        )}
        
        {projects.completed.length > 0 && (
          <ProjectGrid projects={projects.completed} title="Completed Projects" />
        )}
      </div>

      {/* Modal for Selected Project */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100"
              >
                <X className="w-6 h-6" />
              </button>
              
              <h3 className="text-2xl font-semibold text-gray-800 pr-12">
                {selectedProject.name}
              </h3>
              <p className="text-gray-500 mb-4">{selectedProject.location}</p>

              {/* Tab Navigation */}
              <div className="flex space-x-4 mb-6 border-b">
                <button
                  className={`pb-2 px-4 ${
                    activeTab === 'overview'
                      ? 'border-b-2 border-blue-500 text-blue-500'
                      : 'text-gray-500'
                  }`}
                  onClick={() => setActiveTab('overview')}
                >
                  Overview
                </button>
                <button
                  className={`pb-2 px-4 ${
                    activeTab === 'work'
                      ? 'border-b-2 border-blue-500 text-blue-500'
                      : 'text-gray-500'
                  }`}
                  onClick={() => setActiveTab('work')}
                >
                  Work Details
                </button>
              </div>

              {/* Tab Content */}
              <div className="mb-6">
                {activeTab === 'overview' ? (
                  <p className="text-gray-700">{selectedProject.description}</p>
                ) : (
                  <div className="space-y-2">
                    {selectedProject.workDetails.map((detail, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 mr-2"></div>
                        <p className="text-gray-700">{detail}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Image Viewer */}
              <div className="relative">
                <img
                  src={selectedProject.images[currentImage]}
                  alt={`${selectedProject.name} ${currentImage + 1}`}
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
                  {currentImage + 1} / {selectedProject.images.length}
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                {selectedProject.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-16 h-16 flex-shrink-0 rounded ${
                      currentImage === index ? 'ring-2 ring-blue-500' : ''
                    }`}
                  >
                    <img
                      src={selectedProject.images[index]}
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

export default ProjectsSection;