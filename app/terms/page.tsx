import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Terms() {
  return (
    <>
      <Navbar />
      <div className="bg-[#f8fafc] min-h-screen py-12">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12">
            <h1 className="text-3xl font-extrabold text-[#1e3a5f] mb-2">Terms of Service</h1>
            <p className="text-sm text-gray-400 mb-8">Last updated: January 1, 2024</p>

            <div className="space-y-6 text-gray-600 text-sm leading-relaxed">
              <section>
                <h2 className="text-lg font-bold text-[#1e3a5f] mb-2">1. Acceptance of Terms</h2>
                <p>By accessing or using the Advance Finance website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#1e3a5f] mb-2">2. Eligibility</h2>
                <p>To use our services, you must:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Be at least 18 years of age</li>
                  <li>Be a resident of the United States</li>
                  <li>Have a valid Social Security Number</li>
                  <li>Have an active checking or savings account</li>
                  <li>Have a verifiable source of income</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#1e3a5f] mb-2">3. Loan Terms and Conditions</h2>
                <p>All loans are subject to credit approval. Loan amounts, interest rates, and repayment terms vary based on your creditworthiness and other factors. By submitting an application, you authorize us to:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Obtain credit reports from one or more credit bureaus</li>
                  <li>Verify the information you provide</li>
                  <li>Contact you regarding your application</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#1e3a5f] mb-2">4. Interest Rates and Fees</h2>
                <p>Annual Percentage Rates (APR) vary based on the loan type and your credit profile. All applicable fees will be disclosed to you before you accept any loan offer. There are no prepayment penalties on any of our loan products.</p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#1e3a5f] mb-2">5. Repayment Obligations</h2>
                <p>You are responsible for repaying your loan according to the agreed schedule. Late or missed payments may result in additional fees, negative credit reporting, and collection activity. Contact us immediately if you are having difficulty making payments.</p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#1e3a5f] mb-2">6. User Obligations</h2>
                <p>You agree to:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Provide accurate and truthful information in your application</li>
                  <li>Notify us promptly of any changes to your contact or financial information</li>
                  <li>Not use our services for any unlawful purpose</li>
                  <li>Not attempt to circumvent our security measures</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#1e3a5f] mb-2">7. Limitation of Liability</h2>
                <p>To the maximum extent permitted by law, Advance Finance shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.</p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#1e3a5f] mb-2">8. Dispute Resolution</h2>
                <p>Any disputes arising from these Terms shall be resolved through binding arbitration in accordance with the American Arbitration Association rules, unless prohibited by applicable law. You waive your right to participate in class action lawsuits.</p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#1e3a5f] mb-2">9. Governing Law</h2>
                <p>These Terms are governed by the laws of the State of Florida, without regard to conflict of law principles.</p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#1e3a5f] mb-2">10. Contact Us</h2>
                <div className="p-4 bg-[#f8fafc] rounded-lg mt-2">
                  <p className="font-semibold text-[#1e3a5f]">Advance Finance Legal Team</p>
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
