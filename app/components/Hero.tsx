"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const headlines = [
  {
    title: "Scale Your Real Estate Empire",
    subtitle: "Without Using Your Personal Income"
  },
  {
    title: "Property Income is All You Need",
    subtitle: "No W-2s or Tax Returns Required"
  },
  {
    title: "Get Approved in Days, Not Weeks",
    subtitle: "Based on Property Performance Only"
  }
];

const Hero = () => {
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentHeadline((current) => (current + 1) % headlines.length);
        setIsTransitioning(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-indigo-600 text-white py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="relative h-[200px] md:h-[220px] lg:h-[260px] mb-8">
              <div 
                className={`absolute w-full transition-opacity duration-500 ease-in-out
                  ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {headlines[currentHeadline].title}<br />
                  <span className="text-indigo-200 block mt-1">
                    {headlines[currentHeadline].subtitle}
                  </span>
                </h1>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-indigo-100">
              Use rental income, not personal income — no limit on how many properties you can acquire
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#get-started"
                className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors"
              >
                Get Started
              </Link>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/check.svg"
                  alt="Check"
                  width={24}
                  height={24}
                  className="text-indigo-300"
                />
                <span>No income verification</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/check.svg"
                  alt="Check"
                  width={24}
                  height={24}
                  className="text-indigo-300"
                />
                <span>Fast approvals</span>
              </div>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/mortgage-6851265_1920-Photoroom.png"
              alt="Real Estate Investment Portfolio Growth"
              width={1200}
              height={800}
              className="w-full h-full object-cover"
              style={{ minHeight: '500px' }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 