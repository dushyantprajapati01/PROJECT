import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
  overlay?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText = 'Book a Service',
  ctaLink = '/booking',
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage = 'https://images.pexels.com/photos/6969825/pexels-photo-6969825.jpeg',
  overlay = true,
}) => {
  return (
    <div className="relative bg-gray-900 min-h-[600px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      )}

      {/* Content */}
      <div className="container-custom relative z-20 py-16">
        <div className="max-w-2xl">
          <h1 className="text-white mb-4 animate-fade-in">
            {title}
          </h1>
          <p className="text-gray-200 text-xl mb-8 animate-slide-up">
            {subtitle}
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-4 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Shield className="h-5 w-5 text-success-light mr-2" />
              <span className="text-white text-sm">Satisfaction Guaranteed</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <CheckCircle className="h-5 w-5 text-success-light mr-2" />
              <span className="text-white text-sm">Licensed & Insured</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Link 
              to={ctaLink} 
              className="btn btn-primary"
            >
              {ctaText}
            </Link>
            
            {secondaryCtaText && secondaryCtaLink && (
              <Link 
                to={secondaryCtaLink} 
                className="btn btn-outline border-white text-white hover:bg-white/20 hover:text-white"
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;