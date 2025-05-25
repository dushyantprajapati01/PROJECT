import React from 'react';

function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">About Our Pest Control Service</h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg mb-6">
          With over 20 years of experience in pest control, we are dedicated to providing effective, safe, and environmentally responsible pest management solutions for homes and businesses.
        </p>
        <p className="text-lg mb-6">
          Our team of certified technicians undergoes continuous training to stay current with the latest pest control technologies and methods, ensuring you receive the most effective treatment for your specific situation.
        </p>
        <p className="text-lg mb-6">
          We believe in a comprehensive approach to pest control that goes beyond just treating active infestations. Our focus is on prevention, education, and long-term solutions that keep your property pest-free.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;