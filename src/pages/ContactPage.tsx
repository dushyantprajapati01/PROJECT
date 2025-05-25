import React from 'react';
import ContactForm from '../components/ContactForm';

function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <div className="max-w-2xl mx-auto">
        <p className="text-gray-600 text-center mb-8">
          Have questions or need assistance? We're here to help! Fill out the form below and we'll get back to you as soon as possible.
        </p>
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactPage;