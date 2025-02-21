import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const InvestmentGuidePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a1060] mb-6">
              The Ultimate DSCR Investment Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your comprehensive roadmap to building a successful real estate portfolio using DSCR loans
            </p>
          </div>

          {/* Quick Start Guide */}
          <div className="bg-[#fff9e7] rounded-3xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-[#1a1060] mb-6">Quick Start Guide</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">What You Need:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-indigo-600 font-semibold">✓</span>
                    </div>
                    <span>Credit score of 640 or higher</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-indigo-600 font-semibold">✓</span>
                    </div>
                    <span>Down payment of 20-25%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-indigo-600 font-semibold">✓</span>
                    </div>
                    <span>Investment property with strong rental potential</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-indigo-600 font-semibold">✓</span>
                    </div>
                    <span>LLC (recommended but not required)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">What You Don't Need:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-pink-600 font-semibold">✗</span>
                    </div>
                    <span>W-2s or tax returns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-pink-600 font-semibold">✗</span>
                    </div>
                    <span>Employment verification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-pink-600 font-semibold">✗</span>
                    </div>
                    <span>Personal income requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-pink-600 font-semibold">✗</span>
                    </div>
                    <span>Debt-to-income ratio calculations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step-by-Step Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#1a1060] mb-8">Your Path to Success</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-indigo-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Property Selection</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Research high-rental demand areas</li>
                  <li>• Analyze potential rental income</li>
                  <li>• Calculate expected DSCR ratio</li>
                  <li>• Consider property condition and repairs</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-indigo-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Preparation</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Form LLC (if desired)</li>
                  <li>• Gather property documentation</li>
                  <li>• Prepare down payment funds</li>
                  <li>• Review market rent analysis</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-indigo-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Execution</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Submit loan application</li>
                  <li>• Complete property appraisal</li>
                  <li>• Review loan terms</li>
                  <li>• Close and take possession</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pro Tips */}
          <div className="bg-[#1a1060] text-white rounded-3xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold mb-8">Pro Tips for Maximum Success</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">Property Selection Strategy</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white">1</span>
                    </div>
                    <div>
                      <p className="font-semibold">Target DSCR Sweet Spot</p>
                      <p className="text-indigo-200">Aim for properties with potential DSCR ratios of 1.25 or higher for best loan terms.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white">2</span>
                    </div>
                    <div>
                      <p className="font-semibold">Location Analysis</p>
                      <p className="text-indigo-200">Focus on areas with strong rental demand, employment growth, and appreciation potential.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white">3</span>
                    </div>
                    <div>
                      <p className="font-semibold">Property Condition</p>
                      <p className="text-indigo-200">Choose properties requiring minimal repairs to start generating rental income quickly.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6">Portfolio Growth Strategy</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white">1</span>
                    </div>
                    <div>
                      <p className="font-semibold">Start with Single-Family</p>
                      <p className="text-indigo-200">Begin with single-family homes for simpler management and reliable rental demand.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white">2</span>
                    </div>
                    <div>
                      <p className="font-semibold">Scale Systematically</p>
                      <p className="text-indigo-200">Develop a repeatable process for property analysis and acquisition.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white">3</span>
                    </div>
                    <div>
                      <p className="font-semibold">Reinvest Cash Flow</p>
                      <p className="text-indigo-200">Use rental income to build reserves and fund future down payments.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Common Pitfalls */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#1a1060] mb-8">Avoid Common Pitfalls</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-pink-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-[#1a1060] mb-4">What to Watch Out For</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-pink-600">!</span>
                    </div>
                    <div>
                      <p className="font-semibold">Overestimating Rental Income</p>
                      <p className="text-gray-600">Use conservative rent estimates and factor in vacancy periods.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-pink-600">!</span>
                    </div>
                    <div>
                      <p className="font-semibold">Underestimating Expenses</p>
                      <p className="text-gray-600">Include all costs: taxes, insurance, maintenance, and property management.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-pink-600">!</span>
                    </div>
                    <div>
                      <p className="font-semibold">Neglecting Due Diligence</p>
                      <p className="text-gray-600">Thoroughly inspect properties and research local market conditions.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-indigo-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-[#1a1060] mb-4">Best Practices</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-indigo-600">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold">Build Cash Reserves</p>
                      <p className="text-gray-600">Maintain 6 months of expenses per property for unexpected costs.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-indigo-600">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold">Professional Property Management</p>
                      <p className="text-gray-600">Consider professional management for efficient scaling.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-indigo-600">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold">Regular Market Analysis</p>
                      <p className="text-gray-600">Stay informed about market trends and adjust strategy accordingly.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* DSCR Calculator Promo */}
          <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-3xl p-8 md:p-12 mb-16 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Calculate Your DSCR?</h2>
              <p className="text-xl mb-8">
                Use our DSCR calculator to evaluate potential properties and determine your loan eligibility.
              </p>
              <Link
                href="/calculator"
                className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
              >
                Try Our DSCR Calculator
              </Link>
            </div>
          </div>

          {/* Get Started CTA */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1a1060] mb-6">
              Ready to Start Your Investment Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Our team is here to help you navigate the DSCR loan process and build your real estate portfolio.
            </p>
            <Link
              href="/#get-started"
              className="inline-block bg-[#1a1060] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2a2070] transition-colors"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InvestmentGuidePage; 