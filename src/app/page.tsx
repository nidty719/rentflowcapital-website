import { Hero } from "@/components/ui/animated-hero";
import { FeatureSteps } from "@/components/blocks/feature-section";
import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";
import { Testimonials } from "@/components/ui/testimonials";
import { Navbar1 } from "@/components/blocks/shadcnblocks-com-navbar1";
import { DSCRCalculator } from "@/components/blocks/dscr-calculator";
import Link from "next/link";

const features = [
  { 
    step: 'Step 1', 
    title: 'Quick Application',
    content: 'Complete our streamlined application process in minutes. Tell us about your investment goals and property details.', 
    image: '/images/application.jpeg'
  },
  { 
    step: 'Step 2',
    title: 'Fast Approval',
    content: 'Get a decision quickly with our efficient underwriting process. We understand time is crucial in real estate.',
    image: '/images/approval.jpeg'
  },
  { 
    step: 'Step 3',
    title: 'Secure Funding',
    content: 'Close your deal with confidence. Access your funds quickly and start growing your real estate portfolio.',
    image: '/images/funding.jpeg'
  },
]

const testimonials = [
  {
    image: '/images/testimonials/michael-rodriguez.png',
    text: "Thanks to Rent Flow Capital's DSCR loan program, I was able to scale my rental portfolio from 3 to 12 properties in just 18 months. Their streamlined process and competitive rates made it possible.",
    name: 'Michael Rodriguez',
    username: 'Portfolio Investor'
  },
  {
    image: '/images/testimonials/sara-chen.png',
    text: "The short-term rental financing program helped me acquire my first vacation rental property. Within a year, I've expanded to three properties, all performing above expectations.",
    name: 'Sarah Chen',
    username: 'STR Investor'
  },
  {
    image: '/images/testimonials/david-thompson.png',
    text: "As a fix and flip investor, speed is everything. Rent Flow Capital's bridge loans have helped me close on multiple deals quickly, maximizing my ROI with their efficient process.",
    name: 'David Thompson',
    username: 'Fix & Flip Expert'
  },
  {
    image: '/images/testimonials/jennifer-martinez.png',
    text: "Their commercial property financing solutions helped me acquire my first multi-family complex. The team's expertise in structuring the deal was invaluable.",
    name: 'Jennifer Martinez',
    username: 'Commercial Investor'
  },
  {
    image: '/images/testimonials/robert-wilson.png',
    text: "The portfolio loan program is a game-changer. I've been able to consolidate my properties and leverage equity for further expansion. Truly innovative financing solutions.",
    name: 'Robert Wilson',
    username: 'Multi-Property Owner'
  },
  {
    image: '/images/testimonials/amanda-lee.png',
    text: "Hard money loans from Rent Flow Capital have been crucial for my business. Their quick closings and flexible terms have helped me win multiple competitive deals.",
    name: 'Amanda Lee',
    username: 'Real Estate Developer'
  },
];

export default function Home() {
  return (
  <main className="flex min-h-screen flex-col">
      <Navbar1 
        logo={{
          url: "/",
          src: "/images/logo_no_background.png",
          alt: "Rent Flow Capital",title:""
        }}
        menu={[
          {
            title: "Loan Programs",
            url: "#",
            items: [
              {
                title: "Short-Term Rental Loans",
                url: "#",
                description: "Financing for Airbnb and vacation rental properties"
              },
              {
                title: "DSCR Loans",
                url: "#", 
                description: "Qualify based on property cash flow"
              },
              {
                title: "Fix & Flip Loans",
                url: "#",
                description: "Finance purchase and renovation costs"
              }
            ]
          },
          {
            title: "About",
            url: "#"
          },
          {
            title: "Contact",
            url: "#contact"
          }
        ]}
      />
      <Hero />

      {/* DSCR Calculator Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Calculate Your DSCR Loan</h2>
          <DSCRCalculator />
        </div>
      </section>

      <FeatureSteps 
        features={features}
        title="Get Funded in Three Simple Steps"
        autoPlayInterval={4000}
        className="bg-gray-50"
      />

      {/* Loan Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Flexible Financing Solutions</h2>
          <FeaturesSectionWithHoverEffects />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <Testimonials 
            testimonials={testimonials}
            title="Success Stories from Our Investors"
            description="Real experiences from investors who've grown their portfolios with our financing solutions."
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Investors Choose Rent Flow Capital</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Flexible Terms</h3>
              <p className="text-gray-600 mb-8">
                We understand that every investment is unique. Our loan terms are customized to match your specific situation and goals.
              </p>
              <h3 className="text-2xl font-semibold mb-4">Fast Approvals</h3>
              <p className="text-gray-600">
                Time is money in real estate. Get quick decisions and fast funding to close deals efficiently.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Expert Guidance</h3>
              <p className="text-gray-600 mb-8">
                Our team of real estate financing experts will help structure the perfect loan for your investment strategy.
              </p>
              <h3 className="text-2xl font-semibold mb-4">Competitive Rates</h3>
              <p className="text-gray-600">
                Access industry-leading rates that help maximize your investment returns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white" id="contact">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Scale Your Portfolio?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Connect with our team today to discuss your investment goals and discover the perfect financing solution for your needs.
          </p>
          <Link 
            href="#"
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-block"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Rent Flow Capital. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
