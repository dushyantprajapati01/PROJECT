import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Hero
        title="Our Pest Control Services"
        subtitle="Comprehensive solutions for all your pest control needs, tailored to your specific situation."
        backgroundImage="https://images.pexels.com/photos/8480859/pexels-photo-8480859.jpeg"
        ctaText="Book a Service"
        ctaLink="/booking"
      />
      
      <section className="section">
        <div className="container-custom">
          <div className="section-title">
            <h2>Natural Pest Control Services</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We offer a complete range of pest control services to protect your home or business.
              Our treatments are effective, safe, and customized to your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="section-title">
            <h2>Our Process</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We follow a thorough and systematic approach to ensure effective pest control.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Inspection</h3>
              <p className="text-gray-600">
                Our technicians perform a thorough inspection to identify the type of pests, 
                extent of infestation, and potential entry points.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Treatment Plan</h3>
              <p className="text-gray-600">
                We develop a customized treatment plan based on the inspection findings, 
                considering the specific pest species and severity of infestation.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Implementation</h3>
              <p className="text-gray-600">
                Our trained technicians implement the treatment plan using industry-leading 
                products and techniques to eliminate the pest problem.
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Follow-Up</h3>
              <p className="text-gray-600">
                We conduct follow-up visits to ensure the effectiveness of the treatment 
                and make any necessary adjustments to maintain a pest-free environment.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free inspection and consultation. Our experts are ready to help you
            take back control of your home or business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/booking" className="btn bg-white text-primary hover:bg-gray-100">
              Book a Service
            </a>
            <a href="/contact" className="btn border-2 border-white text-white hover:bg-white/10">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;