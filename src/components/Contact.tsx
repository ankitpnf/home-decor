import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `
*New Project Inquiry - SS HomeDecor*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Service Required:* ${formData.service}

*Project Details:*
${formData.message}

Please contact me for further discussion.
    `.trim();
    
    // Create email content as backup
    const emailSubject = `New Inquiry from ${formData.name} - ${formData.service}`;
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service Required: ${formData.service}

Project Details:
${formData.message}

---
This inquiry was submitted through the SS HomeDecor website.
    `.trim();
    
    // Show options to user
    const userChoice = confirm(
      `Thank you for your inquiry, ${formData.name}!\n\n` +
      `Choose how you'd like to send your message:\n\n` +
      `Click "OK" to send via WhatsApp (Recommended)\n` +
      `Click "Cancel" to send via Email`
    );
    
    if (userChoice) {
      // Send via WhatsApp
      const whatsappUrl = `https://wa.me/919582857461?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');
      
      alert('WhatsApp is opening with your message pre-filled. Just click send to reach us instantly!');
    } else {
      // Send via Email
      const mailtoLink = `mailto:ssons.homedecore@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      window.open(mailtoLink, '_blank');
      
      alert('Your email client is opening. If it doesn\'t work, please call us directly at +91 9582857461');
    }
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 9582857461 / +91 8588861491",
      color: "text-blue-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: "ssons.homedecore@gmail.com",
      color: "text-green-600"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Delhi, India",
      color: "text-red-600"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Monday - Saturday: 9:00 AM - 7:00 PM",
      color: "text-purple-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Get In <span className="text-amber-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your project? Contact us today for a free consultation and quote
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-slate-800 mb-6">Let's Build Something Amazing Together</h3>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're planning a home renovation, commercial construction, or interior design project, 
                Mr. Satyendra Bhagat and our expert team at SS HomeDecor are here to help bring your vision to life in Delhi.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg bg-gray-100`}>
                      <info.icon className={`h-6 w-6 ${info.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">{info.title}</h4>
                      <p className="text-gray-600">{info.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-8 rounded-2xl text-white">
              <h4 className="text-2xl font-bold mb-4">Ready to Get Started?</h4>
              <p className="mb-6">Contact us now for immediate assistance and expert consultation</p>
              <div className="space-y-3">
                <button 
                  onClick={() => window.open('tel:+919582857461')}
                  className="bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full"
                >
                  Call Now: +91 9582857461
                </button>
                <button 
                  onClick={() => window.open('https://wa.me/919582857461?text=Hello! I am interested in your construction and interior design services. Please provide more information.', '_blank')}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors w-full"
                >
                  WhatsApp Us
                </button>
                <button 
                  onClick={() => window.open('tel:+918588861491')}
                  className="bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full border-2 border-white"
                >
                  Alternate: +91 8588861491
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Required *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="construction">Construction Work</option>
                  <option value="interior">Interior Design</option>
                  <option value="layout">Building Layouts</option>
                  <option value="development">Development & Build</option>
                  <option value="consultation">Consultation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-none"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>Send Inquiry</span>
                <Send className="h-5 w-5" />
              </button>
              
              <div className="text-center text-sm text-gray-500 mt-4">
                <p>We'll respond within 2 hours during business hours</p>
                <p className="font-semibold text-amber-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;