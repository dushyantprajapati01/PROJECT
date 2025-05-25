import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Service } from '../data/services';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { id, name, shortDescription, basePrice, priceUnit, icon: IconComponent } = service;

  return (
    <div className="card card-hover group h-full">
      <div className="p-6 flex flex-col h-full">
        <div className="mb-4">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-lg mb-4">
            <IconComponent className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <p className="text-gray-600 mb-4">{shortDescription}</p>
        </div>
        
        <div className="mt-auto">
          <div className="flex items-baseline mb-4">
            <span className="text-2xl font-bold text-gray-900">₹{basePrice}</span>
            <span className="text-gray-500 ml-1">/{priceUnit}</span>
          </div>
          
          <Link 
            to={`/services/${id}`} 
            className="inline-flex items-center text-primary font-medium group-hover:underline"
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;