"use client";

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Footer from '../components/Footer';

const FAQPage = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is a DSCR loan?",
      answer: "A DSCR (Debt Service Coverage Ratio) loan is a type of financing that qualifies based on the property's rental income rather than the borrower's personal income. It's specifically designed for real estate investors, allowing them to qualify for loans based on the property's ability to generate rental income sufficient to cover the mortgage payments and associated costs."
    },
    {
      question: "How is DSCR calculated?",
      answer: "DSCR is calculated by dividing the property's monthly rental income by its monthly debt obligations (PITIA - Principal, Interest, Taxes, Insurance, and Association dues). A DSCR of 1.0 means the property generates just enough income to cover its debt obligations. We typically look for DSCR ratios of 1.25 or higher for the best terms, though ratios as low as 0.80 may qualify in some cases."
    },
    {
      question: "What are the minimum requirements for a DSCR loan?",
      answer: "Key requirements include: \n• Minimum credit score of 640 \n• Down payment of 20-25% \n• Property must be investment/non-owner occupied \n• DSCR ratio of at least 0.80 (1.25+ for best terms) \n• No bankruptcy in the last 3 years \n• No foreclosure in the last 3 years"
    },
    {
      question: "Can I use projected rental income instead of actual rental income?",
      answer: "Yes, we can use projected rental income for both purchase and refinance transactions. The projected rent will be determined by a professional appraiser or market rent analysis to ensure accuracy."
    },
    {
      question: "Do you require tax returns or W-2s?",
      answer: "No, DSCR loans do not require tax returns, W-2s, or any other personal income documentation. The approval is based solely on the property's actual or projected rental income."
    },
    {
      question: "What property types are eligible?",
      answer: "Eligible properties include: \n• Single-family homes \n• 2-4 unit properties \n• Condos and townhouses \n• Multi-family properties \n• Commercial properties \nAll properties must be non-owner occupied investment properties."
    },
    {
      question: "What are typical interest rates for DSCR loans?",
      answer: "Interest rates vary based on several factors: \n• DSCR ratio (higher ratios get better rates) \n• Credit score \n• Down payment amount \n• Property type \n• Loan term \nRates are typically 1-2% higher than conventional mortgage rates due to the reduced documentation requirements."
    },
    {
      question: "Can I purchase through an LLC?",
      answer: "Yes, we encourage purchasing through an LLC for asset protection. We offer the same great rates whether you purchase personally or through an LLC, making it an excellent option for investors looking to protect their assets."
    },
    {
      question: "How long does the approval process take?",
      answer: "Our streamlined process typically takes 21-30 days from application to closing. The exact timeline depends on how quickly you can provide required documentation and the property appraisal completion."
    },
    {
      question: "Is there a limit to how many properties I can finance?",
      answer: "No, there is no limit to the number of properties you can finance with DSCR loans. As long as each property meets the DSCR requirements, you can continue to grow your portfolio."
    },
    {
      question: "What documentation is required?",
      answer: "Required documents include: \n• Purchase contract (for purchases) \n• Property details \n• Rent roll or market rent analysis \n• Bank statements for down payment \n• Entity documentation (if using LLC) \n• Insurance information \n• Property tax information"
    },
    {
      question: "Can I refinance my existing investment property with a DSCR loan?",
      answer: "Yes, you can use DSCR loans for refinancing existing investment properties. This can be particularly useful if you want to: \n• Lower your rate \n• Cash out equity \n• Remove personal income requirements \n• Move the property into an LLC"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a1060] mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Everything you need to know about DSCR loans
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex items-center justify-between font-semibold text-[#1a1060]"
                  onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <span className="ml-6">
                    {openQuestion === index ? '−' : '+'}
                  </span>
                </button>
                {openQuestion === index && (
                  <div className="px-6 py-4 bg-gray-50">
                    <p className="text-gray-600 whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-[#fff9e7] rounded-2xl">
            <h2 className="text-2xl font-bold text-[#1a1060] mb-4">
              Still have questions?
            </h2>
            <p className="text-gray-600 mb-6">
              Our team typically responds within minutes during business hours (M-F, 9am-5pm EST). We're here to help you understand DSCR loans and find the right financing solution for your investment goals.
            </p>
            <Link 
              href="/#get-started"
              className="inline-block bg-[#1a1060] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2a2070] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage; 