"use client";

import Image from 'next/image';
import { useState } from 'react';

const CTA = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://workflows.datadrivenwebscraping.com/webhook/rentflowcap-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          date: new Date().toISOString(),
          ip: await fetch('https://api.ipify.org?format=json')
            .then(res => res.json())
            .then(data => data.ip)
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const renderThankYouCard = () => (
    <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-xl text-center">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
      <p className="text-lg text-gray-600 mb-4">
        Your submission has been received. A loan expert will reach out to you shortly to discuss your investment goals and help you find the perfect DSCR loan solution.
      </p>
      <p className="text-sm text-gray-500">
        During business hours (M-F, 9am-5pm EST), you can expect to hear from us within 5-120 minutes.
      </p>
    </div>
  );

  const renderForm = () => (
    <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-xl">
      <h3 className="text-2xl font-bold mb-6">Get Started Today</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            placeholder="John Smith"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            placeholder="john@example.com"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            placeholder="(555) 123-4567"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Tell us about your investment goals
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            placeholder="I'm looking to..."
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
        >
          Talk to a Loan Guide
        </button>
        <p className="text-xs text-gray-500 text-center">
          By submitting this form, you agree to our Terms of Service and Privacy Policy and consent to be contacted via SMS, phone calls, and AI-powered communications regarding your loan inquiry.
        </p>
      </form>
    </div>
  );

  return (
    <section id="get-started" className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Chat with a Loan Guide about the shortest path to your DSCR loan
            </h2>
            <p className="text-xl mb-8 text-indigo-100">
              Get expert guidance within minutes during business hours (M-F, 9am-5pm EST). No obligations, just straight answers.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center">
                  <Image
                    src="/icons/shield.svg"
                    alt="Security"
                    width={20}
                    height={20}
                    className="text-white"
                  />
                </div>
                <p>Purchase through LLC or personally</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center">
                  <Image
                    src="/icons/calculator.svg"
                    alt="Calculator"
                    width={20}
                    height={20}
                    className="text-white"
                  />
                </div>
                <p>Get rate quotes without credit impact</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center">
                  <Image
                    src="/icons/clock.svg"
                    alt="Quick Response"
                    width={20}
                    height={20}
                    className="text-white"
                  />
                </div>
                <p>Typical response time: 5-120 minutes (weekdays)</p>
              </div>
            </div>
          </div>

          {isSubmitted ? renderThankYouCard() : renderForm()}
        </div>
      </div>
    </section>
  );
};

export default CTA; 