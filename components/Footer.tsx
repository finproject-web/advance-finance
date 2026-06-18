import Link from 'next/link';
import { DollarSign, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0c1f35] text-gray-300">
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#0ea5e9] rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                Advance<span className="text-[#38bdf8]">Finance</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Fast, transparent lending for modern Americans. Apply online, get funded fast.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Products</h4>
            <ul className="space-y-2">
              {['Personal Loans', 'Payday Loans', 'Home Loans', 'Debt Consolidation', 'Auto Loans', 'Business Loans'].map(
                (item) => (
                  <li key={item}>
                    <Link href="/apply-now" className="text-sm text-gray-400 hover:text-[#38bdf8] transition-colors">
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              {[
                { href: '#how-it-works', label: 'How It Works' },
                { href: '#reviews', label: 'Reviews' },
                { href: '#faq', label: 'FAQ' },
                { href: '#contact', label: 'Contact' },
                { href: '/privacy-policy', label: 'Privacy Policy' },
                { href: '/terms', label: 'Terms of Service' },
                { href: '/cookies', label: 'Cookie Policy' },
                { href: '/sms-policy', label: 'SMS Policy' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-[#38bdf8] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-[#0ea5e9] shrink-0" />
                <a href="tel:+17863181677" className="text-sm text-gray-400 hover:text-[#38bdf8] transition-colors">
                  786-318-1677
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-[#0ea5e9] shrink-0" />
                <a
                  href="mailto:advanceamericaloan1774@gmail.com"
                  className="text-sm text-gray-400 hover:text-[#38bdf8] transition-colors break-all"
                >
                  advanceamericaloan1774@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-[#0ea5e9] shrink-0" />
                <span className="text-sm text-gray-400">
                  3244 Cleveland Ave<br />Fort Myers, FL 33901
                </span>
              </li>
              <li className="text-sm text-gray-500">Mon–Fri 8AM–8PM ET</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">© 2024 Advance Finance. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Terms
            </Link>
            <Link href="/sms-policy" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              SMS Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
