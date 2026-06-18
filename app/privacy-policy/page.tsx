import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <div className="bg-[#f8fafc] min-h-screen py-12">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12">
            <h1 className="text-3xl font-extrabold text-[#1e3a5f] mb-2">Privacy Policy</h1>
            <p className="text-sm text-gray-400 mb-8">Last updated: January 1, 2024</p>

            <div className="prose prose-sm max-w-none text-gray-600 space-y-6">
              <section>
                <h2 className="text-lg font-bold text-[#1e3a5f] mb-2">1. Information We Collect</h2>
                <p>We collect information you provide directly to us when you apply for a loan or contact us for support. This includes:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Personal identification information (name, date of birth, Social Security Number)</li>
                  <li>Contact information (email address, phone number, mailing address)</li>
                  <li>Financial information (income, bank account details, employment information)</li>
                  <li>Government-issued identification documents</li>
                  <li>Device and usage information when you use our website</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#1e3a5f] mb-2">2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Process your loan application and make lending decisions</li>
                  <li>Communicate with you about your application and account</li>
                  <li>Verify your identity and prevent fraud</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Improve our products and services</li>
                  <li>Send you promotional communications (with your consent)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#1e3a5f] mb-2">3. Information Sharing</h2>
                <p>We do not sell your personal information. We may share your information with:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Credit bureaus and consumer reporting agencies</li>
                  <li>Service providers who assist in operating our business</li>
                  <li>Law enforcement or government agencies when required by law</li>
                  <li>Other financial institutions with your consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#1e3a5f] mb-2">4. Data Security</h2>
                <p>We implement industry-standard security measures including 256-bit SSL encryption to protect your personal and financial information. Sensitive data such as Social Security Numbers and bank account numbers are encrypted and stored securely.</p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#1e3a5f] mb-2">5. Cookie Usage</h2>
                <p>We use cookies and similar tracking technologies to improve your browsing experience, analyze site traffic, and personalize content. You can control cookies through your browser settings. See our <a href="/cookies" className="text-[#0ea5e9] hover:underline">Cookie Policy</a> for more details.</p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#1e3a5f] mb-2">6. Your Rights (CCPA/GDPR)</h2>
                <p>Depending on your location, you may have the right to:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt out of the sale of personal information</li>
                  <li>Data portability</li>
                </ul>
                <p className="mt-2">To exercise these rights, contact us at <a href="mailto:advanceamericaloan1774@gmail.com" className="text-[#0ea5e9] hover:underline">advanceamericaloan1774@gmail.com</a>.</p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#1e3a5f] mb-2">7. Data Retention</h2>
                <p>We retain your personal information for as long as necessary to provide our services and comply with legal obligations, typically 7 years after account closure.</p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#1e3a5f] mb-2">8. Contact Us</h2>
                <p>For privacy-related questions or to exercise your rights, contact us at:</p>
                <div className="mt-2 p-4 bg-[#f8fafc] rounded-lg">
                  <p className="font-semibold text-[#1e3a5f]">Advance Finance</p>
                  <p>3244 Cleveland Ave, Fort Myers, FL 33901</p>
                  <p>Email: <a href="mailto:advanceamericaloan1774@gmail.com" className="text-[#0ea5e9] hover:underline">advanceamericaloan1774@gmail.com</a></p>
                  <p>Phone: <a href="tel:+17863181677" className="text-[#0ea5e9] hover:underline">786-318-1677</a></p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
