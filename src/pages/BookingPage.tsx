import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Calendar, ArrowLeft, ArrowRight, Home } from 'lucide-react';
import Hero from '../components/Hero';
import BookingCalendar from '../components/BookingCalendar';
import { services } from '../data/services';

const BookingPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [bookingData, setBookingData] = useState<{
    service: string;
    date: string;
    time: string;
  } | null>(null);
  const [contactInfo, setContactInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    notes: ''
  });
  
  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setStep(2);
    window.scrollTo(0, 0);
  };
  
  const handleCalendarComplete = (data: {
    service: string;
    date: string;
    time: string;
  }) => {
    setBookingData(data);
    setStep(3);
    window.scrollTo(0, 0);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4);
    window.scrollTo(0, 0);
  };
  
  const serviceName = selectedService 
    ? services.find(s => s.id === selectedService)?.name 
    : '';

  return (
    <>
      <Hero
        title="Book a Pest Control Service"
        subtitle="Schedule your service in just a few simple steps. We'll take care of the rest."
        backgroundImage="https://images.pexels.com/photos/6969831/pexels-photo-6969831.jpeg"
      />
      
      <section className="section">
        <div className="container-custom">
          {/* Progress Steps */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-between">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {step > 1 ? <Check className="h-6 w-6" /> : 1}
                </div>
                <span className={`mt-2 text-sm ${
                  step >= 1 ? 'text-primary font-medium' : 'text-gray-500'
                }`}>
                  Select Service
                </span>
              </div>
              
              {/* Line 1 */}
              <div className={`flex-1 h-1 mx-2 ${
                step > 1 ? 'bg-primary' : 'bg-gray-200'
              }`}></div>
              
              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= 2 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {step > 2 ? <Check className="h-6 w-6" /> : 2}
                </div>
                <span className={`mt-2 text-sm ${
                  step >= 2 ? 'text-primary font-medium' : 'text-gray-500'
                }`}>
                  Choose Date & Time
                </span>
              </div>
              
              {/* Line 2 */}
              <div className={`flex-1 h-1 mx-2 ${
                step > 2 ? 'bg-primary' : 'bg-gray-200'
              }`}></div>
              
              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= 3 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {step > 3 ? <Check className="h-6 w-6" /> : 3}
                </div>
                <span className={`mt-2 text-sm ${
                  step >= 3 ? 'text-primary font-medium' : 'text-gray-500'
                }`}>
                  Your Information
                </span>
              </div>
              
              {/* Line 3 */}
              <div className={`flex-1 h-1 mx-2 ${
                step > 3 ? 'bg-primary' : 'bg-gray-200'
              }`}></div>
              
              {/* Step 4 */}
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= 4 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  4
                </div>
                <span className={`mt-2 text-sm ${
                  step >= 4 ? 'text-primary font-medium' : 'text-gray-500'
                }`}>
                  Confirmation
                </span>
              </div>
            </div>
          </div>
          
          {/* Step Content */}
          <div className="max-w-4xl mx-auto">
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-8 text-center">Select a Service</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service) => (
                    <div 
                      key={service.id}
                      className={`
                        card p-6 cursor-pointer transition-all
                        ${selectedService === service.id 
                          ? 'border-2 border-primary ring-2 ring-primary-light/20' 
                          : 'hover:shadow-md'
                        }
                      `}
                      onClick={() => handleServiceSelect(service.id)}
                    >
                      <div className="flex items-center mb-4">
                        <div className="bg-primary/10 p-2 rounded-lg mr-3">
                          <service.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold">{service.name}</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">{service.shortDescription}</p>
                      <div className="flex items-baseline">
                        <span className="text-lg font-bold text-gray-900">${service.basePrice}</span>
                        <span className="text-gray-500 ml-1">/{service.priceUnit}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <button
                    onClick={() => selectedService && setStep(2)}
                    disabled={!selectedService}
                    className={`
                      btn flex items-center justify-center mx-auto
                      ${selectedService ? 'btn-primary' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}
                    `}
                  >
                    Continue
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            )}
            
            {/* Step 2: Calendar */}
            {step === 2 && (
              <div className="animate-fade-in">
                <div className="mb-8">
                  <button
                    onClick={() => setStep(1)}
                    className="flex items-center text-gray-600 hover:text-primary transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Services
                  </button>
                </div>
                
                <h2 className="text-2xl font-bold mb-4">
                  Schedule Your {serviceName} Service
                </h2>
                <p className="text-gray-600 mb-8">
                  Please select your preferred date and time for the service.
                </p>
                
                <BookingCalendar 
                  selectedService={selectedService}
                  onComplete={handleCalendarComplete}
                />
              </div>
            )}
            
            {/* Step 3: Contact Information */}
            {step === 3 && (
              <div className="animate-fade-in">
                <div className="mb-8">
                  <button
                    onClick={() => setStep(2)}
                    className="flex items-center text-gray-600 hover:text-primary transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Calendar
                  </button>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-bold mb-4">Your Information</h2>
                  <p className="text-gray-600 mb-8">
                    Please provide your contact details and service address.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Booking Summary */}
                    <div className="bg-gray-50 p-4 rounded-md mb-6">
                      <h3 className="font-semibold mb-2">Booking Summary</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="block text-gray-500">Service</span>
                          <span className="font-medium">{serviceName}</span>
                        </div>
                        <div>
                          <span className="block text-gray-500">Date</span>
                          <span className="font-medium">{bookingData?.date}</span>
                        </div>
                        <div>
                          <span className="block text-gray-500">Time</span>
                          <span className="font-medium">{bookingData?.time}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Contact Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={contactInfo.firstName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={contactInfo.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={contactInfo.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={contactInfo.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        />
                      </div>
                    </div>
                    
                    {/* Service Address */}
                    <div>
                      <h3 className="font-semibold mb-4 flex items-center">
                        <Home className="h-5 w-5 mr-2 text-primary" />
                        Service Address
                      </h3>
                      
                      <div className="grid grid-cols-1 gap-6">
                        <div>
                          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                            Street Address *
                          </label>
                          <input
                            type="text"
                            id="address"
                            name="address"
                            required
                            value={contactInfo.address}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-primary/20 focus:border-primary outline-none transition-all"
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                              City *
                            </label>
                            <input
                              type="text"
                              id="city"
                              name="city"
                              required
                              value={contactInfo.city}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-primary/20 focus:border-primary outline-none transition-all"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                              State *
                            </label>
                            <input
                              type="text"
                              id="state"
                              name="state"
                              required
                              value={contactInfo.state}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-primary/20 focus:border-primary outline-none transition-all"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
                              ZIP Code *
                            </label>
                            <input
                              type="text"
                              id="zip"
                              name="zip"
                              required
                              value={contactInfo.zip}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-primary/20 focus:border-primary outline-none transition-all"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Additional Notes */}
                    <div>
                      <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Notes (optional)
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        rows={4}
                        value={contactInfo.notes}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        placeholder="Tell us about any specific concerns, access instructions, or other important details"
                      />
                    </div>
                    
                    {/* Submit Button */}
                    <div className="text-center pt-4">
                      <button
                        type="submit"
                        className="btn btn-primary flex items-center justify-center mx-auto"
                      >
                        Complete Booking
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
            
            {/* Step 4: Confirmation */}
            {step === 4 && (
              <div className="animate-fade-in bg-white rounded-lg shadow-md p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-success-light/20 text-success mb-6">
                  <Check className="h-10 w-10" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Booking Confirmed!</h2>
                <p className="text-lg mb-6">
                  Thank you for booking with PestAway. Your appointment has been scheduled.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-8 text-left max-w-md mx-auto">
                  <h3 className="font-semibold mb-4 border-b pb-2">Booking Details</h3>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3">
                      <span className="text-gray-500">Service:</span>
                      <span className="col-span-2 font-medium">{serviceName}</span>
                    </div>
                    <div className="grid grid-cols-3">
                      <span className="text-gray-500">Date:</span>
                      <span className="col-span-2 font-medium">{bookingData?.date}</span>
                    </div>
                    <div className="grid grid-cols-3">
                      <span className="text-gray-500">Time:</span>
                      <span className="col-span-2 font-medium">{bookingData?.time}</span>
                    </div>
                    <div className="grid grid-cols-3">
                      <span className="text-gray-500">Name:</span>
                      <span className="col-span-2 font-medium">
                        {contactInfo.firstName} {contactInfo.lastName}
                      </span>
                    </div>
                    <div className="grid grid-cols-3">
                      <span className="text-gray-500">Address:</span>
                      <span className="col-span-2 font-medium">
                        {contactInfo.address}, {contactInfo.city}, {contactInfo.state} {contactInfo.zip}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">
                  A confirmation email has been sent to <span className="font-medium">{contactInfo.email}</span>. 
                  One of our representatives will contact you 24 hours before your appointment to confirm.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/" className="btn btn-primary">
                    Return to Home
                  </Link>
                  <Link to="/services" className="btn btn-outline">
                    Browse More Services
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingPage;