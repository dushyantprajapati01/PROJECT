import React from 'react';
import { Link } from 'react-router-dom';
import { Bug, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Bug className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">PestAway</span>
            </div>
            <p className="mb-4 text-gray-300">
              Professional pest control services with a commitment to safety, effectiveness, 
              and customer satisfaction.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-primary transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-300 hover:text-primary transition-colors">Book Service</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/termite-control" className="text-gray-300 hover:text-primary transition-colors">Termite Control</Link>
              </li>
              <li>
                <Link to="/services/rodent-control" className="text-gray-300 hover:text-primary transition-colors">Rodent Control</Link>
              </li>
              <li>
                <Link to="/services/mosquito-control" className="text-gray-300 hover:text-primary transition-colors">Mosquito Control</Link>
              </li>
              <li>
                <Link to="/services/cockroach-control" className="text-gray-300 hover:text-primary transition-colors">Cockroach Control</Link>
              </li>
              <li>
                <Link to="/services/bed-bug-treatment" className="text-gray-300 hover:text-primary transition-colors">Bed Bug Treatment</Link>
              </li>
              <li>
                <Link to="/services/snake-control" className="text-gray-300 hover:text-primary transition-colors"> Snake Control </Link>
              </li>
              <li>
                <Link to="/services/fogging-services" className="text-gray-300 hover:text-primary transition-colors"> Fogging Services </Link>
              </li>
              <li>
                 <Link to="/services/general-pest-control" className="text-gray-300 hover:text-primary transition-colors"> General Pest Control </Link>
              </li>
              <li>
                <Link to="/services/sanitization-services" className="text-gray-300 hover:text-primary transition-colors"> Sanitization Services </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">9718470268,7048900738</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">subodhbablukr@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Noida Sector 44 Uttar Pardesh (201301)</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-gray-300">
                  <p>Monday-Friday: 8am-6pm</p>
                  <p>Saturday / Sunday: 9am-5pm</p>
                  <p>(Emergency service available 24*7)</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-4">
        <div className="container-custom text-center text-gray-400 text-sm">
          <p>© {currentYear} NATURAL PEST CONTROL Services. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;