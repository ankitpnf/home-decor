import React from 'react';
import { Building, Palette, Layout, Hammer } from 'lucide-react';

interface ServiceModalProps {
  service: {
    icon: any;
    title: string;
    description: string;
    features: string[];
    image: string;
    detailedDescription: string;
    process: string[];
    benefits: string[];
  };
  isOpen: boolean;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
          >
            <span className="text-xl font-bold text-gray-600">×</span>
          </button>
        </div>
        
        <div className="p-8">
          <div className="flex items-center mb-6">
            <div className="bg-amber-100 p-3 rounded-lg mr-4">
              <service.icon className="h-8 w-8 text-amber-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-800">{service.title}</h2>
          </div>
          
          <p className="text-gray-600 mb-6 text-lg">{service.detailedDescription}</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Our Process</h3>
              <ul className="space-y-3">
                {service.process.map((step, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                      {idx + 1}
                    </div>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  onClose();
                }}
                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300"
              >
                Get Quote
              </button>
              <button 
                onClick={() => window.open('tel:+919582857461')}
                className="border-2 border-amber-600 text-amber-600 px-6 py-3 rounded-lg hover:bg-amber-600 hover:text-white transition-all duration-300"
              >
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = React.useState<any>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openServiceModal = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const services = [
    {
      icon: Building,
      title: "Construction Work",
      description: "Complete construction services from foundation to finishing, ensuring quality and durability in every project.",
      features: ["Residential Construction", "Commercial Buildings", "Renovations", "Structural Work"],
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600",
      detailedDescription: "SS HomeDecor provides comprehensive construction services with over 10 years of experience in Delhi. From residential homes to commercial buildings, we handle every aspect of construction with precision and quality. Our team of certified professionals ensures that every project meets the highest standards of safety and durability.",
      process: [
        "Initial consultation and site survey",
        "Detailed planning and design approval",
        "Foundation and structural work",
        "Construction and finishing work",
        "Quality inspection and handover"
      ],
      benefits: [
        "Licensed and insured contractors",
        "Quality materials and workmanship",
        "Timely project completion",
        "Competitive pricing",
        "Post-construction support"
      ]
    },
    {
      icon: Palette,
      title: "Interior Design",
      description: "Transform your spaces with our creative interior design solutions that blend functionality with aesthetics.",
      features: ["Space Planning", "Color Consultation", "Furniture Selection", "Lighting Design"],
      image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600",
      detailedDescription: "Our interior design team creates stunning, functional spaces that reflect your personality and lifestyle. We work closely with clients to understand their vision and transform it into reality using the latest design trends and high-quality materials.",
      process: [
        "Design consultation and requirement analysis",
        "Concept development and mood boards",
        "3D visualization and client approval",
        "Material selection and procurement",
        "Installation and styling"
      ],
      benefits: [
        "Personalized design solutions",
        "Latest trends and materials",
        "3D visualization before execution",
        "Budget-friendly options",
        "Complete project management"
      ]
    },
    {
      icon: Layout,
      title: "Building Layouts",
      description: "Expert architectural planning and layout design to maximize space efficiency and functionality.",
      features: ["Floor Planning", "3D Visualization", "Space Optimization", "Blueprint Creation"],
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
      detailedDescription: "Our architectural planning services focus on creating optimal layouts that maximize space utilization while ensuring functionality and aesthetic appeal. We use advanced software for precise planning and visualization.",
      process: [
        "Site analysis and measurement",
        "Initial layout concepts",
        "3D modeling and visualization",
        "Client feedback and revisions",
        "Final blueprint preparation"
      ],
      benefits: [
        "Optimized space utilization",
        "Compliance with building codes",
        "Professional blueprints",
        "Cost-effective solutions",
        "Future expansion planning"
      ]
    },
    {
      icon: Hammer,
      title: "Development & Build",
      description: "End-to-end development services bringing your vision from concept to reality with precision.",
      features: ["Project Management", "Quality Control", "Timeline Management", "Cost Optimization"],
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600",
      detailedDescription: "Complete development and build services from initial concept to final handover. We manage every aspect of your project, ensuring quality, timeline adherence, and cost optimization throughout the development process.",
      process: [
        "Project planning and feasibility study",
        "Design development and approvals",
        "Construction management",
        "Quality assurance and testing",
        "Final inspection and handover"
      ],
      benefits: [
        "Single point of contact",
        "Integrated project management",
        "Quality assurance at every stage",
        "Transparent pricing",
        "Warranty and after-sales service"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Our <span className="text-amber-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive construction and design services to bring your vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-amber-100 p-3 rounded-lg mr-4">
                      <service.icon className="h-8 w-8 text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => openServiceModal(service)}
                    className="mt-6 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {selectedService && (
        <ServiceModal
          service={selectedService}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </section>
  );
};

export default Services;