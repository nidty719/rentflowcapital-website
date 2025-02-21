import Navbar from '../components/Navbar';
import Link from 'next/link';
import Footer from '../components/Footer';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
          <h1 className="text-4xl font-bold text-[#1a1060] mb-8">Terms of Service</h1>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-8">Last updated: March 15, 2024</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1a1060] mb-4">1. Agreement to Terms</h2>
              <p>By accessing or using RentFlow's website and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1a1060] mb-4">2. Description of Services</h2>
              <p>RentFlow provides DSCR (Debt Service Coverage Ratio) loan services and related financial products for real estate investors. Our services include:</p>
              <ul className="list-disc pl-6">
                <li>DSCR loan origination and processing</li>
                <li>Property evaluation services</li>
                <li>Online loan application platform</li>
                <li>Educational resources and calculators</li>
                <li>Customer support services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1a1060] mb-4">3. User Responsibilities</h2>
              <p>You agree to:</p>
              <ul className="list-disc pl-6">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account</li>
                <li>Notify us of any unauthorized access</li>
                <li>Use our services in compliance with applicable laws</li>
                <li>Not engage in fraudulent activities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1a1060] mb-4">4. Loan Application Process</h2>
              <p>By submitting a loan application, you:</p>
              <ul className="list-disc pl-6">
                <li>Authorize us to verify provided information</li>
                <li>Consent to credit checks and financial verification</li>
                <li>Acknowledge that approval is not guaranteed</li>
                <li>Agree to provide additional documentation if requested</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1a1060] mb-4">5. Intellectual Property</h2>
              <p>All content, features, and functionality on our website are owned by RentFlow and protected by copyright, trademark, and other intellectual property laws.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1a1060] mb-4">6. Disclaimer of Warranties</h2>
              <p>Our services are provided "as is" without any warranty of any kind. We do not guarantee the accuracy, completeness, or reliability of any content or information provided.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1a1060] mb-4">7. Limitation of Liability</h2>
              <p>RentFlow shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1a1060] mb-4">8. Indemnification</h2>
              <p>You agree to indemnify and hold RentFlow harmless from any claims, damages, or expenses arising from your use of our services or violation of these terms.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1a1060] mb-4">9. Governing Law</h2>
              <p>These terms shall be governed by and construed in accordance with the laws of [State], without regard to its conflict of law provisions.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1a1060] mb-4">10. Changes to Terms</h2>
              <p>We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the updated terms on our website.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1a1060] mb-4">11. Termination</h2>
              <p>We may terminate or suspend your access to our services immediately, without prior notice, for any breach of these Terms of Service.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1a1060] mb-4">12. Contact Information</h2>
              <p>For questions about these Terms of Service, please contact us at:</p>
              <div className="mt-4">
                <p>Email: legal@rentflow.com</p>
                <p>Phone: (555) 123-4567</p>
                <p>Address: 123 Financial District, Suite 100</p>
                <p>City, State 12345</p>
              </div>
            </section>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                By using RentFlow's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our{' '}
                <Link href="/privacy" className="text-indigo-600 hover:text-indigo-800">
                  Privacy Policy
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsPage; 