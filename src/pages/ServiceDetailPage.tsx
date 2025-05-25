import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { CheckCircle, ArrowLeft, DollarSign, Clock, ShieldCheck } from 'lucide-react';
import { services } from '../data/services';

const ServiceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = services.find(s => s.id === id);
  
  if (!service) {
    return <Navigate to="/services" />;
  }
  
  const { 
    name, 
    description, 
    basePrice, 
    priceUnit, 
    duration, 
    process, 
    materials, 
    benefits, 
    imageUrl,
    icon: IconComponent
  } = service;

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gray-900 pt-32 pb-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 z-0"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        
        <div className="container-custom relative z-10">
          <Link 
            to="/services" 
            className="inline-flex items-center text-white hover:text-primary-light transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Services
          </Link>
          
          <div className="flex items-center mb-4">
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg mr-4">
              <IconComponent className="h-8 w-8 text-primary-light" />
            </div>
            <h1 className="text-white">{name}</h1>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <DollarSign className="h-5 w-5 text-primary-light mr-2" />
              <span className="text-white">
                Starting at ₹{basePrice}/{priceUnit}
              </span>
            </div>
            
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Clock className="h-5 w-5 text-primary-light mr-2" />
              <span className="text-white">
                {duration}
              </span>
            </div>
            
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <ShieldCheck className="h-5 w-5 text-primary-light mr-2" />
              <span className="text-white">
                Satisfaction Guaranteed
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Service Overview</h2>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              {description}
            </p>
            
            <h2 className="text-2xl font-bold mb-6">Our Process</h2>
            <div className="space-y-4 mb-12">
              {process.map((step, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-700">{step}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <h2 className="text-2xl font-bold mb-6">Materials & Equipment</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {materials.map((material, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>{material}</span>
                </li>
              ))}
            </ul>
            
            <h2 className="text-2xl font-bold mb-6">Benefits</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4">Ready to Schedule?</h3>
              <p className="text-gray-600 mb-6">
                Book your {name.toLowerCase()} service today and take the first step towards a pest-free environment.
              </p>
              
              <Link 
                to="/booking" 
                className="btn btn-primary w-full text-center mb-4"
              >
                Book This Service
              </Link>
              
              <Link 
                to="/contact" 
                className="btn btn-outline w-full text-center"
              >
                Request a Quote
              </Link>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold mb-4">Why Choose Our {name}?</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Experienced & licensed technicians</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Eco-friendly options available</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">100% satisfaction guarantee</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Flexible scheduling options</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Services */}
      <div className="bg-gray-50 py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Related Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services
              .filter(s => s.id !== id)
              .slice(0, 3)
              .map(service => (
                <div key={service.id} className="card card-hover">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary/10 p-3 rounded-lg mr-3">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold">{service.name}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                    <Link 
                      to={`/services/${service.id}`}
                      className="text-primary font-medium hover:underline"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;