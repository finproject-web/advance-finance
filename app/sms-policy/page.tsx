import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SMSPolicy() {
  return (
    <>
      <Navbar />
      <div className="bg-[#f8fafc] min-h-screen py-12">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12">
            <h1 className="text-3xl font-extrabold text-[#1e3a5f] mb-2">SMS Policy</h1>
            <p className="text-sm text-gray-400 mb-8">Last updated: January 1, 2024</p>

            <div className="space-y-6 text-gray-600 text-sm leading-relaxed">
              <section>
                <h2 className="text-lg font-bold text-[#1e3a5f] mb-2">1. SMS Communication</h2>
                <p>By providing your phone number and agreeing to our Terms of Service, you consent to receive text messages (SMS/MMS) from Advance Finance regarding:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Application status updates</li>
                  <li>Account notifications and alerts</li>
                  <li>Payment reminders</li>
                  <li>Promotional offers and loan product information (with separate consent)</li>
                  <li>Customer service responses</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#1e3a5f] mb-2">2. Message Frequency</h2>
                <p>Message frequency varies based on your account activity. You may receive up to 5 messages per week for transactional notifications, and up to 4 messages per month for promotional content.</p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#1e3a5f] mb-2">3. Message and Data Rates</h2>
                <p>Message and data rates may apply. These charges are billed by your mobile carrier and are not controlled by Advance Finance. Contact your carrier for details on your messaging plan.</p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#1e3a5f] mb-2">4. How to Opt Out</h2>
                <p>You can stop receiving SMS messages at any time by:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Texting <strong>STOP</strong> to any of our SMS messages</li>
                  <li>Contacting us at <a href="mailto:advanceamericaloan1774@gmail.com" className="text-[#0ea5e9] hover:underline">advanceamericaloan1774@gmail.com</a></li>
                  <li>Calling us at <a href="tel:+17863181677" className="text-[#0ea5e9] hover:underline">786-318-1677</a></li>
                  <li>Updating your communication preferences in your account settings</li>
                </ul>
                <p className="mt-2">After opting out, you will receive a final confirmation message. Note that opting out of marketing messages does not affect transactional messages required for your loan account.</p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#1e3a5f] mb-2">5. Help</h2>
                <p>Text <strong>HELP</strong> to any of our messages to receive help information, or contact us directly at <a href="tel:+17863181677" className="text-[#0ea5e9] hover:underline">786-318-1677</a> during business hours.</p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#1e3a5f] mb-2">6. Privacy</h2>
                <p>Your mobile number and any information shared via SMS will be handled according to our <a href="/privacy-policy" className="text-[#0ea5e9] hover:underline">Privacy Policy</a>. We do not share your mobile number with third parties for their marketing purposes.</p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#1e3a5f] mb-2">7. Supported Carriers</h2>
                <p>SMS messaging is available through all major US carriers including AT&amp;T, Verizon, T-Mobile, Sprint, Boost Mobile, and others. Carrier support is not guaranteed for all devices.</p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#1e3a5f] mb-2">8. Contact</h2>
                <div className="p-4 bg-[#f8fafc] rounded-lg mt-2">
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
