import Navbar from '../components/Navbar';
import Link from 'next/link';
import Footer from '../components/Footer';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
          <h1 className="text-4xl font-bold text-[#1a1060] mb-8">Privacy Policy</h1>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-8">Last updated: March 15, 2024</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1a1060] mb-4">1. Introduction</h2>
              <p>RentFlow ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our DSCR loan services.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1a1060] mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold mb-2">Personal Information:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Name, email address, and phone number</li>
                <li>Property address and details</li>
                <li>Financial information related to loan applications</li>
                <li>Credit score and history</li>
                <li>Business entity information (if applicable)</li>
                <li>Government-issued identification</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">Automatically Collected Information:</h3>
              <ul className="list-disc pl-6">
                <li>IP address and browser information</li>
                <li>Device information</li>
                <li>Usage data and cookies</li>
                <li>Location data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1a1060] mb-4">3. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6">
                <li>Process loan applications and verify information</li>
                <li>Communicate about your application and services</li>
                <li>Improve our website and services</li>
                <li>Send relevant marketing communications (with consent)</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraud and enhance security</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1a1060] mb-4">4. Information Sharing</h2>
              <p>We may share your information with:</p>
              <ul className="list-disc pl-6">
                <li>Lending partners and financial institutions</li>
                <li>Service providers and contractors</li>
                <li>Legal and regulatory authorities</li>
                <li>Business partners (with consent)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1a1060] mb-4">5. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information, including:</p>
              <ul className="list-disc pl-6">
                <li>Encryption of sensitive data</li>
                <li>Secure servers and networks</li>
                <li>Regular security assessments</li>
                <li>Employee training on data protection</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1a1060] mb-4">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1a1060] mb-4">7. Cookies</h2>
              <p>We use cookies and similar technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1a1060] mb-4">8. Children's Privacy</h2>
              <p>Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1a1060] mb-4">9. Changes to Privacy Policy</h2>
              <p>We may update this Privacy Policy periodically. We will notify you of any material changes by posting the updated policy on our website.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1a1060] mb-4">10. Contact Us</h2>
              <p>If you have questions about this Privacy Policy or our privacy practices, please contact us at:</p>
              <div className="mt-4">
                <p>Email: privacy@rentflow.com</p>
                <p>Phone: (555) 123-4567</p>
                <p>Address: 123 Financial District, Suite 100</p>
                <p>City, State 12345</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage; 