import React from 'react';
import { CheckCircle, Target, Heart, Star } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every detail matters in creating the perfect space"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We love what we do and it shows in our work"
    },
    {
      icon: Star,
      title: "Excellence",
      description: "Committed to delivering only the highest quality"
    }
  ];

  const achievements = [
    "500+ Successful Projects",
    "Award-Winning Designs",
    "Certified Professionals",
    "10+ Years Experience",
    "100% Client Satisfaction",
    "Eco-Friendly Solutions"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                About <span className="text-amber-600">SS HomeDecor</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Founded by Mr. Satyendra Bhagat, SS HomeDecor has been serving Delhi with over a decade of experience in construction and interior design. We specialize in creating beautiful, 
                functional spaces that reflect your personality and lifestyle.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Under Mr. Bhagat's leadership, our team of skilled professionals combines traditional craftsmanship with modern techniques 
                to deliver exceptional results that exceed expectations across Delhi and surrounding areas.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="font-bold text-slate-800 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Our Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Interior design"
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Construction work"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="https://images.pexels.com/photos/159045/the-interior-of-the-repair-interior-design-159045.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Modern design"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Beautiful interior"
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-amber-500 text-white p-6 rounded-xl shadow-2xl">
              <div className="text-center">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-amber-100">Years Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;