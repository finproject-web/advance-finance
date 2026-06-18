'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'How fast can I get funded?',
    a: 'Most applicants receive funds within 1 business day after approval. Same-day funding may be available depending on your bank.',
  },
  {
    q: 'What credit score do I need?',
    a: 'We work with all credit types. Higher scores get better rates, but we consider the full picture — not just your score.',
  },
  {
    q: 'Are there hidden fees?',
    a: 'Never. All costs are disclosed upfront before you accept. No prepayment penalties, no surprises.',
  },
  {
    q: 'How much can I borrow?',
    a: 'Loan amounts range from $500 to $50,000 depending on the product, your income, and credit profile.',
  },
  {
    q: 'Is my data secure?',
    a: 'Absolutely. We use 256-bit SSL encryption and never share your information without your consent.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#f5f5f0]">
      <div className="container mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#fdf3e7] text-[#E8521A] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f3d]">Common Questions</h2>
        </div>

        <div className="divide-y divide-gray-200">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full flex items-center justify-between gap-4 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-sm font-semibold text-[#0f1f3d]">{faq.q}</span>
                <span className="shrink-0 w-7 h-7 rounded-full border border-[#E8521A] flex items-center justify-center">
                  {open === i ? (
                    <Minus className="w-3.5 h-3.5 text-[#E8521A]" />
                  ) : (
                    <Plus className="w-3.5 h-3.5 text-[#E8521A]" />
                  )}
                </span>
              </button>
              {open === i && (
                <div className="pb-5">
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
