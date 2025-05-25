import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const { name, location, service, rating, comment, date, imageUrl } = testimonial;

  return (
    <div className="card card-hover bg-white p-6">
      {/* Header */}
      <div className="flex items-center mb-4">
        {imageUrl && (
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        )}
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
        <span className="ml-2 text-sm text-gray-600">{service}</span>
      </div>

      {/* Comment */}
      <p className="text-gray-600 mb-4">{comment}</p>

      {/* Date */}
      <p className="text-sm text-gray-400">{new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })}</p>
    </div>
  );
};

export default TestimonialCard;