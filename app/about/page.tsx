import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="px-4 md:px-8 lg:px-16 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1060] mb-6">
                Your Trusted Partner in DSCR Lending
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're dedicated to helping real estate investors build and scale their portfolios through innovative DSCR financing solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-[#fff9e7] py-20 px-4 md:px-8 lg:px-16 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1060] mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-12">
                We believe in empowering real estate investors to achieve their growth goals without being limited by traditional lending constraints. Our mission is to provide transparent, efficient, and innovative DSCR lending solutions that focus on what truly matters - the property's performance.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/icons/shield.svg"
                      alt="Trust"
                      width={24}
                      height={24}
                      className="text-indigo-600"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1a1060] mb-2">Trust & Transparency</h3>
                    <p className="text-gray-600">Clear communication and straightforward processes you can rely on.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/icons/chart.svg"
                      alt="Growth"
                      width={24}
                      height={24}
                      className="text-indigo-600"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1a1060] mb-2">Investor Success</h3>
                    <p className="text-gray-600">Your growth is our success. We're here to help you scale efficiently.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="px-4 md:px-8 lg:px-16 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1060] mb-6">Our Expertise</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                With decades of combined experience in real estate lending, we understand what investors need to succeed.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-indigo-600 mb-4">15+</div>
                <h3 className="text-xl font-semibold text-[#1a1060] mb-2">Years Experience</h3>
                <p className="text-gray-600">Deep expertise in real estate financing and investment strategies.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-indigo-600 mb-4">$1B+</div>
                <h3 className="text-xl font-semibold text-[#1a1060] mb-2">Loans Funded</h3>
                <p className="text-gray-600">Helping investors build substantial real estate portfolios.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-indigo-600 mb-4">98%</div>
                <h3 className="text-xl font-semibold text-[#1a1060] mb-2">Client Satisfaction</h3>
                <p className="text-gray-600">Committed to providing exceptional service and support.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose RentFlow Section - Replacing Team Section */}
        <section className="bg-[#fff9e7] py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1060] mb-6">Why Choose RentFlow</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're revolutionizing real estate investment financing with a focus on what truly matters - your property's performance.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <Image
                    src="/icons/shield.svg"
                    alt="Security Icon"
                    width={24}
                    height={24}
                    className="text-indigo-600"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#1a1060] mb-4">Streamlined Process</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• 21-day average closing time</li>
                  <li>• Simplified documentation</li>
                  <li>• Digital-first experience</li>
                  <li>• Dedicated loan specialists</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <Image
                    src="/icons/calculator.svg"
                    alt="Calculator Icon"
                    width={24}
                    height={24}
                    className="text-indigo-600"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#1a1060] mb-4">Flexible Terms</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Competitive interest rates</li>
                  <li>• Multiple loan options</li>
                  <li>• LLC-friendly lending</li>
                  <li>• No personal income requirements</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <Image
                    src="/icons/chart.svg"
                    alt="Growth Icon"
                    width={24}
                    height={24}
                    className="text-indigo-600"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#1a1060] mb-4">Portfolio Growth</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• No limit on properties</li>
                  <li>• Scale based on performance</li>
                  <li>• Portfolio-wide solutions</li>
                  <li>• Growth-focused strategies</li>
                </ul>
              </div>
            </div>

            <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-2xl font-bold text-[#1a1060] mb-4">Ready to Get Started?</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of successful investors who are growing their real estate portfolios with RentFlow's DSCR loans.
              </p>
              <Link
                href="/#get-started"
                className="inline-block bg-[#1a1060] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2a2070] transition-colors"
              >
                Start Your Journey Today
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage; 