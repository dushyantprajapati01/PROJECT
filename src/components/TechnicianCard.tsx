import React from 'react';
import { Award, Star } from 'lucide-react';
import { Technician } from '../data/technicians';

interface TechnicianCardProps {
  technician: Technician;
}

const TechnicianCard: React.FC<TechnicianCardProps> = ({ technician }) => {
  const { name, position, experience, certifications, specialties, bio, imageUrl, rating } = technician;

  return (
    <div className="card card-hover overflow-hidden">
      {/* Image */}
      <div className="relative h-64">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <div className="flex items-center">
            <div className="flex items-center bg-white/90 rounded-full px-2 py-1">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span className="ml-1 text-sm font-medium">{rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-gray-600 mb-2">{position}</p>
        
        <div className="flex items-center text-gray-500 mb-4">
          <Award className="h-4 w-4 mr-1" />
          <span className="text-sm">{experience} years experience</span>
        </div>

        <h4 className="font-semibold text-sm text-gray-700 mb-2">Specialties:</h4>
        <div className="flex flex-wrap gap-2 mb-4">
          {specialties.map((specialty, index) => (
            <span 
              key={index} 
              className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
            >
              {specialty}
            </span>
          ))}
        </div>

        <p className="text-gray-600 text-sm">{bio}</p>
        
        <div className="mt-4">
          <h4 className="font-semibold text-sm text-gray-700 mb-2">Certifications:</h4>
          <ul className="text-sm text-gray-600">
            {certifications.map((cert, index) => (
              <li key={index} className="flex items-start mb-1">
                <span className="text-success mr-2">•</span>
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechnicianCard;