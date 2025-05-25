import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Shield, Award, PhoneCall } from 'lucide-react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import FAQSection from '../components/FAQSection';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';

const HomePage: React.FC = () => {
  // Get featured services (first 3)
  const featuredServices = services.slice(0, 3);
  
  // Get featured testimonials (first 3)
  const featuredTestimonials = testimonials.slice(0, 3);
  
  // Benefits list
  const benefits = [
    {
      icon: PhoneCall,
      title: '24/7 Emergency Service',
      description: 'Available round the clock for all your pest control emergencies with rapid response times.'
    },
    {
      icon: Shield,
      title: 'Licensed Professionals',
      description: 'Our team consists of fully licensed and certified pest control experts for your peace of mind.'
    },
    {
      icon: Award,
      title: '10+ Years Experience',
      description: 'A decade of expertise in delivering effective pest control solutions to homes and businesses.'
    },
    {
      icon: CheckCircle,
      title: 'Satisfaction Guarantee',
      description: 'We stand behind our work with a 100% satisfaction guarantee on all our services.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Professional Pest Control Services"
        subtitle="Protect your home and family from unwanted pests with our safe, effective, and affordable pest control solutions."
        ctaText="Book a Service"
        ctaLink="/booking"
        secondaryCtaText="Our Services"
        secondaryCtaLink="/services"
      />

      {/* Services Section */}
      <section className="section">
        <div className="container-custom">
          <div className="section-title">
            <h2>Our Services</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive pest control solutions for residential and commercial properties.
              Our treatments are effective, safe, and tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn btn-primary inline-flex items-center">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="section-title">
            <h2>Why Choose Us</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              With over a decade of experience and a commitment to excellence, we provide the highest quality
              pest control services with your safety and satisfaction as our top priorities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-light/20 text-primary mb-4">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get rid of pests?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free inspection and consultation. Our experts are ready to help you
            take back control of your home or business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/booking" className="btn bg-white text-primary hover:bg-gray-100">
              Book a Service
            </Link>
            <Link to="/contact" className="btn border-2 border-white text-white hover:bg-white/10">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="section">
        <div className="container-custom">
          <div className="section-title">
            <h2>Our Results</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              See the difference our professional pest control services can make with these before and after examples.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {/* Example 1 */}
            <div className="card overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="bg-gray-200 h-48 relative">
                    <img 
                      src="https://images.pexels.com/photos/6692155/pexels-photo-6692155.jpeg" 
                      alt="Before treatment" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-error text-white text-xs font-bold px-2 py-1 rounded">
                      BEFORE
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-gray-200 h-48 relative">
                    <img 
                      src="https://images.pexels.com/photos/6896353/pexels-photo-6896353.jpeg" 
                      alt="After treatment" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-success text-white text-xs font-bold px-2 py-1 rounded">
                      AFTER
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Rodent Infestation Control</h3>
                <p className="text-sm text-gray-600">
                  Complete elimination of a severe rodent infestation in an attic space, including cleaning, 
                  sanitizing, and installing preventative measures to avoid future problems.
                </p>
              </div>
            </div>

            {/* Example 2 */}
            <div className="card overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="bg-gray-200 h-48 relative">
                    <img 
                      src="https://images.pexels.com/photos/1643161/pexels-photo-1643161.jpeg" 
                      alt="Before treatment" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-error text-white text-xs font-bold px-2 py-1 rounded">
                      BEFORE
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-gray-200 h-48 relative">
                    <img 
                      src="https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg" 
                      alt="After treatment" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-success text-white text-xs font-bold px-2 py-1 rounded">
                      AFTER
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Termite Damage Repair</h3>
                <p className="text-sm text-gray-600">
                  Treatment of active termite infestation followed by repair of damaged structures. 
                  Our comprehensive approach includes eliminating the colonies and preventing future infestations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="section-title">
            <h2>What Our Customers Say</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from our satisfied customers about their
              experiences with our pest control services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {featuredTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/testimonials" className="btn btn-outline inline-flex items-center">
              View All Testimonials
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </>
  );
};

export default HomePage;