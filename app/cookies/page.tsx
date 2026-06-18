import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CookiePolicy() {
  return (
    <>
      <Navbar />
      <div className="bg-[#f8fafc] min-h-screen py-12">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12">
            <h1 className="text-3xl font-extrabold text-[#1e3a5f] mb-2">Cookie Policy</h1>
            <p className="text-sm text-gray-400 mb-8">Last updated: January 1, 2024</p>

            <div className="space-y-6 text-gray-600 text-sm leading-relaxed">
              <section>
                <h2 className="text-lg font-bold text-[#1e3a5f] mb-2">1. What Are Cookies?</h2>
                <p>Cookies are small text files placed on your device when you visit our website. They help us provide a better user experience by remembering your preferences and analyzing how you use our site.</p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#1e3a5f] mb-2">2. Types of Cookies We Use</h2>
                <div className="space-y-4 mt-2">
                  <div className="p-4 bg-[#f8fafc] rounded-lg border border-gray-100">
                    <h3 className="font-semibold text-[#1e3a5f] mb-1">Essential Cookies</h3>
                    <p>Required for the website to function. These cannot be disabled. They include session management and security cookies.</p>
                  </div>
                  <div className="p-4 bg-[#f8fafc] rounded-lg border border-gray-100">
                    <h3 className="font-semibold text-[#1e3a5f] mb-1">Analytics Cookies</h3>
                    <p>Help us understand how visitors interact with our website. We use Google Analytics to collect anonymous usage data.</p>
                  </div>
                  <div className="p-4 bg-[#f8fafc] rounded-lg border border-gray-100">
                    <h3 className="font-semibold text-[#1e3a5f] mb-1">Functional Cookies</h3>
                    <p>Remember your preferences such as language settings and form data to improve your experience.</p>
                  </div>
                  <div className="p-4 bg-[#f8fafc] rounded-lg border border-gray-100">
                    <h3 className="font-semibold text-[#1e3a5f] mb-1">Marketing Cookies</h3>
                    <p>Used to track visitors across websites for advertising purposes. We only use these with your explicit consent.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#1e3a5f] mb-2">3. How to Manage Cookies</h2>
                <p>You can control and manage cookies in several ways:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li><strong>Browser Settings:</strong> Most browsers allow you to block or delete cookies through their settings menu.</li>
                  <li><strong>Opt-out Tools:</strong> Use Google Analytics Opt-out browser add-on to prevent data collection.</li>
                  <li><strong>Cookie Banner:</strong> Use our cookie consent banner to manage your preferences when you first visit.</li>
                </ul>
                <p className="mt-3">Note: Disabling essential cookies may affect website functionality.</p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#1e3a5f] mb-2">4. Third-Party Cookies</h2>
                <p>We may allow third-party services to place cookies on your device. These include:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Google Analytics (analytics.google.com)</li>
                  <li>Google reCAPTCHA (spam prevention)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#1e3a5f] mb-2">5. Cookie Retention</h2>
                <p>Session cookies expire when you close your browser. Persistent cookies remain for up to 2 years unless deleted earlier.</p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#1e3a5f] mb-2">6. Contact Us</h2>
                <p>For questions about our cookie use, contact us at <a href="mailto:advanceamericaloan1774@gmail.com" className="text-[#0ea5e9] hover:underline">advanceamericaloan1774@gmail.com</a>.</p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
