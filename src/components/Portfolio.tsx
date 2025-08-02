import React, { useState } from 'react';
import { ExternalLink, ArrowLeft, ArrowRight, X, Phone, Mail } from 'lucide-react';

interface ProjectModalProps {
  project: {
    title: string;
    category: string;
    image: string;
    description: string;
    details?: string;
    features?: string[];
    location?: string;
    duration?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors shadow-lg"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        
        <div className="p-8">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold">
                {project.category}
              </span>
              {project.location && (
                <span className="text-gray-500 text-sm">{project.location}</span>
              )}
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-2">{project.title}</h2>
            <p className="text-gray-600 text-lg">{project.description}</p>
          </div>
          
          {project.details && (
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-800 mb-3">Project Details</h3>
              <p className="text-gray-700 leading-relaxed">{project.details}</p>
            </div>
          )}
          
          {project.features && (
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-800 mb-3">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {project.duration && (
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Project Duration</h3>
              <p className="text-gray-700">{project.duration}</p>
            </div>
          )}
          
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Interested in Similar Work?</h3>
            <p className="text-gray-600 mb-4">
              Contact SS HomeDecor for your construction and interior design needs in Delhi
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => window.open('tel:+919582857461')}
                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300 flex items-center space-x-2"
              >
                <Phone className="h-4 w-4" />
                <span>Call: +91 9582857461</span>
              </button>
              <button 
                onClick={() => window.open('mailto:ssons.homedecore@gmail.com')}
                className="border-2 border-amber-600 text-amber-600 px-6 py-3 rounded-lg hover:bg-amber-600 hover:text-white transition-all duration-300 flex items-center space-x-2"
              >
                <Mail className="h-4 w-4" />
                <span>Email Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const projects = [
    {
      title: "Modern Living Room",
      category: "Interior Design",
      image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Contemporary living space with minimalist design",
      details: "This modern living room project showcases our expertise in creating sophisticated, functional spaces. We transformed a traditional room into a contemporary masterpiece using neutral tones, premium materials, and strategic lighting.",
      features: [
        "Custom furniture design",
        "Premium lighting solutions",
        "Space optimization",
        "Modern color palette",
        "High-quality materials",
        "Functional storage solutions"
      ],
      location: "South Delhi",
      duration: "6 weeks"
    },
    {
      title: "Luxury Villa Construction",
      category: "Construction",
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete villa construction with modern amenities",
      details: "A comprehensive construction project featuring a 4-bedroom luxury villa with modern architecture, premium finishes, and sustainable building practices. This project demonstrates our capability in handling large-scale residential construction.",
      features: [
        "4 bedrooms with attached bathrooms",
        "Modern kitchen with island",
        "Spacious living areas",
        "Private garden and terrace",
        "Premium fixtures and fittings",
        "Energy-efficient design"
      ],
      location: "Gurgaon",
      duration: "8 months"
    },
    {
      title: "Office Interior Design",
      category: "Commercial",
      image: "https://images.pexels.com/photos/159045/the-interior-of-the-repair-interior-design-159045.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Professional office space design and layout",
      details: "Complete office renovation for a tech company, focusing on creating a productive work environment with modern aesthetics, collaborative spaces, and employee comfort zones.",
      features: [
        "Open workspace design",
        "Meeting room solutions",
        "Ergonomic furniture",
        "Modern lighting systems",
        "Acoustic solutions",
        "Brand integration"
      ],
      location: "Noida",
      duration: "4 weeks"
    },
    {
      title: "Residential Complex",
      category: "Construction",
      image: "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Multi-story residential building project",
      details: "A 3-story residential complex with 12 apartments, featuring modern amenities, earthquake-resistant structure, and sustainable construction practices.",
      features: [
        "12 residential units",
        "Earthquake-resistant design",
        "Modern amenities",
        "Parking facilities",
        "Landscaped gardens",
        "Security systems"
      ],
      location: "East Delhi",
      duration: "12 months"
    },
    {
      title: "Kitchen Renovation",
      category: "Interior Design",
      image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete kitchen makeover with modern appliances",
      details: "A stunning kitchen transformation featuring modular design, premium appliances, and optimized storage solutions. This project showcases our ability to maximize functionality in compact spaces.",
      features: [
        "Modular kitchen design",
        "Premium appliances",
        "Granite countertops",
        "Optimized storage",
        "Modern lighting",
        "Breakfast counter"
      ],
      location: "Central Delhi",
      duration: "3 weeks"
    },
    {
      title: "Bedroom Design",
      category: "Interior Design",
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Elegant bedroom design with custom furniture",
      details: "A luxurious master bedroom design featuring custom furniture, walk-in wardrobe, and a private seating area. The design emphasizes comfort, elegance, and functionality.",
      features: [
        "Custom furniture design",
        "Walk-in wardrobe",
        "Private seating area",
        "Premium bedding solutions",
        "Ambient lighting",
        "Luxury finishes"
      ],
      location: "West Delhi",
      duration: "4 weeks"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(projects.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(projects.length / 3)) % Math.ceil(projects.length / 3));
  };

  return (
    <section id="portfolio" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Our <span className="text-amber-400">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our recent projects and see how we transform spaces into beautiful, functional environments
          </p>
        </div>

        {/* Portfolio Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(projects.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-3 gap-8">
                    {projects.slice(slideIndex * 3, slideIndex * 3 + 3).map((project, index) => (
                      <div
                        key={index}
                        className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                      >
                        <div className="relative overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 right-4">
                              <button 
                                onClick={() => openProjectModal(project)}
                                className="bg-amber-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-amber-600 transition-colors w-full justify-center"
                              >
                                <span>View Details</span>
                                <ExternalLink className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-amber-600 text-sm font-semibold">{project.category}</span>
                          </div>
                          <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                          <p className="text-gray-600">{project.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-amber-500 text-white p-3 rounded-full hover:bg-amber-600 transition-colors shadow-lg"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-amber-500 text-white p-3 rounded-full hover:bg-amber-600 transition-colors shadow-lg"
          >
            <ArrowRight className="h-6 w-6" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(projects.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-amber-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </section>
  );
};

export default Portfolio;