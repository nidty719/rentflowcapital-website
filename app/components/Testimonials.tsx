"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDrag } from '@use-gesture/react';

const testimonials = [
  {
    id: 1,
    quote: "Thanks to DSCR financing, I've expanded from 2 to 8 properties in just 18 months. The process was seamless.",
    author: "Michael R.",
    role: "Real Estate Investor",
    location: "Austin, TX"
  },
  {
    id: 2,
    quote: "No more W-2 restrictions! I was able to qualify based on my property's performance alone. Game-changer.",
    author: "Sarah L.",
    role: "Property Portfolio Owner",
    location: "Miami, FL"
  },
  {
    id: 3,
    quote: "The fastest approval I've ever experienced. From application to closing in just 21 days.",
    author: "David K.",
    role: "Investment Property Owner",
    location: "Chicago, IL"
  },
  {
    id: 4,
    quote: "Finally, a lender that understands real estate investors. Their DSCR program helped me scale rapidly.",
    author: "Jennifer M.",
    role: "Real Estate Entrepreneur",
    location: "Phoenix, AZ"
  },
  {
    id: 5,
    quote: "The ability to qualify without tax returns was exactly what I needed. Highly recommend!",
    author: "Robert W.",
    role: "Property Investor",
    location: "Denver, CO"
  },
  {
    id: 6,
    quote: "Being able to purchase through my LLC with great rates was crucial. Now I have proper asset protection for my growing portfolio.",
    author: "Thomas H.",
    role: "Multi-Property Owner",
    location: "Seattle, WA"
  },
  {
    id: 7,
    quote: "Started with a duplex, now managing 6 properties. The projected rent qualification made it possible to start investing while units were vacant.",
    author: "Amanda C.",
    role: "Real Estate Investor",
    location: "Nashville, TN"
  },
  {
    id: 8,
    quote: "As a self-employed investor, traditional loans were a hassle. DSCR loans focus on what matters - the property's income potential.",
    author: "Marcus B.",
    role: "Property Developer",
    location: "Atlanta, GA"
  },
  {
    id: 9,
    quote: "Refinanced my entire portfolio with DSCR loans. Better rates, no tax return reviews, and quick closings. Couldn't be happier.",
    author: "Patricia L.",
    role: "Portfolio Manager",
    location: "San Diego, CA"
  },
  {
    id: 10,
    quote: "The 1.25 DSCR ratio requirement pushed me to find better deals with strong cash flow. My portfolio is much healthier because of it.",
    author: "Richard M.",
    role: "Commercial Investor",
    location: "Dallas, TX"
  },
  {
    id: 11,
    quote: "Switched from traditional mortgages to DSCR loans for my short-term rentals. The higher rental income helps me qualify for better terms.",
    author: "Elena S.",
    role: "Airbnb Property Owner",
    location: "Orlando, FL"
  },
  {
    id: 12,
    quote: "Love that I can close deals faster with DSCR loans. In this competitive market, quick closing times give me an edge over other buyers.",
    author: "James P.",
    role: "Real Estate Investor",
    location: "Las Vegas, NV"
  }
];

const StarRating = () => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className="w-5 h-5 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef<number>(0);
  const animationRef = useRef<number>();

  // Mobile auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused && !isTouching) {
        setMobileIndex((prev) => (prev + 1) % testimonials.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, isTouching]);

  // Desktop smooth scrolling animation
  useEffect(() => {
    const animate = () => {
      if (!isPaused) {
        scrollRef.current = (scrollRef.current + 0.02) % 100;
        setScrollPosition(scrollRef.current);
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, setScrollPosition]);

  const nextMobileTestimonial = () => {
    setMobileIndex((prev) => (prev + 1) % testimonials.length);
    setIsTouching(true);
    // Reset touching state after a delay
    setTimeout(() => setIsTouching(false), 1000);
  };

  const previousMobileTestimonial = () => {
    setMobileIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsTouching(true);
    // Reset touching state after a delay
    setTimeout(() => setIsTouching(false), 1000);
  };

  // Mobile swipe handler
  const bindDrag = useDrag(({ movement: [mx], direction: [dx], down }) => {
    if (down) {
      setIsTouching(true);
    } else {
      if (mx < -50) nextMobileTestimonial();
      if (mx > 50) previousMobileTestimonial();
      setTimeout(() => setIsTouching(false), 1000);
    }
  });

  // Create a duplicated array for seamless scrolling
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Success Stories from Real Investors
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of investors who've grown their portfolios with our DSCR loans
          </p>
        </div>

        {/* Desktop View */}
        <div 
          className="hidden md:block relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div 
              className="flex gap-6"
              style={{ 
                width: `${(100 * duplicatedTestimonials.length) / 3}%`,
                transform: `translateX(-${scrollPosition}%)`,
                transition: isPaused ? 'transform 0.1s' : 'none'
              }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div 
                  key={`${testimonial.id}-${index}`}
                  className="bg-gray-50 rounded-2xl p-8 shadow-sm flex-shrink-0"
                  style={{ width: `calc(33.333% / ${duplicatedTestimonials.length / 3})` }}
                >
                  <StarRating />
                  <div className="mb-6">
                    <h3 className="font-semibold text-lg">{testimonial.author}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                  <blockquote className="text-gray-700 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          <div 
            {...bindDrag()}
            className="bg-gray-50 rounded-2xl p-6 shadow-sm touch-pan-y"
            onTouchStart={() => setIsTouching(true)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={mobileIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <StarRating />
                <div className="mb-6">
                  <h3 className="font-semibold text-lg">{testimonials[mobileIndex].author}</h3>
                  <p className="text-gray-600 text-sm">{testimonials[mobileIndex].role}</p>
                  <p className="text-gray-500 text-sm">{testimonials[mobileIndex].location}</p>
                </div>
                <blockquote className="text-gray-700 leading-relaxed mb-6">
                  "{testimonials[mobileIndex].quote}"
                </blockquote>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-between items-center">
              <button
                onClick={() => {
                  previousMobileTestimonial();
                  setIsTouching(true);
                  setTimeout(() => setIsTouching(false), 1000);
                }}
                className="p-2 text-gray-600 hover:text-gray-900"
                aria-label="Previous testimonial"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setMobileIndex(index);
                      setIsTouching(true);
                      setTimeout(() => setIsTouching(false), 1000);
                    }}
                    className={`w-2 h-2 rounded-full ${
                      index === mobileIndex ? 'bg-indigo-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => {
                  nextMobileTestimonial();
                  setIsTouching(true);
                  setTimeout(() => setIsTouching(false), 1000);
                }}
                className="p-2 text-gray-600 hover:text-gray-900"
                aria-label="Next testimonial"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 