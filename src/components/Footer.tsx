import React from 'react';
import { Home, Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Construction Work",
    "Interior Design",
    "Building Layouts",
    "Development & Build",
    "Consultation Services"
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/WhatsApp Image 2025-07-12 at 21.12.05_b6705986.jpg" 
                alt="SS HomeDecor Logo" 
                className="h-10 w-10 object-cover rounded-lg shadow-md"
              />
              <div>
                <h3 className="text-2xl font-bold">SS HomeDecor</h3>
                <p className="text-gray-400 text-sm">Home is a dream & we will decor your dream</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              "Home is a dream & we will decor your dream" - Transforming spaces with expert construction and interior design services in Delhi. 
              Your dream home is just a call away with Mr. Satyendra Bhagat and the SS HomeDecor team.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-amber-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-amber-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-amber-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-amber-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-amber-400 transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-amber-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 flex items-center">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-amber-600 p-2 rounded-lg">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-gray-300">+91 9582857461</p>
                  <p className="text-gray-400 text-sm">+91 8588861491</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-amber-600 p-2 rounded-lg">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-gray-300">ssons.homedecore@gmail.com</p>
                  <p className="text-gray-400 text-sm">We reply within 24 hours</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-amber-600 p-2 rounded-lg">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-gray-300">Delhi</p>
                  <p className="text-gray-400 text-sm">India</p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-slate-800 rounded-lg">
                <p className="text-amber-400 font-semibold">Mr. Satyendra Bhagat</p>
                <p className="text-gray-400 text-sm">Founder & Director</p>
                <p className="text-gray-400 text-sm">Monday - Saturday: 9AM - 7PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2024 SS HomeDecor. All rights reserved.
          </p>
          <div className="flex space-x-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;