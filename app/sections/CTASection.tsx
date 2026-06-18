import Link from 'next/link';
import { Rocket } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="bg-[#0f1f3d] py-16">
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Ready to Move Forward?
        </h2>
        <p className="text-gray-400 text-base mb-8 max-w-xl mx-auto">
          Apply in minutes. No obligation, no credit impact to check your rate.
        </p>
        <Link
          href="/apply-now"
          className="inline-flex items-center gap-2 bg-[#E8521A] hover:bg-[#d44a14] text-white px-8 py-4 rounded-full font-bold text-base transition-colors"
        >
          <Rocket className="w-4 h-4" />
          Apply Now — Free
        </Link>
      </div>
    </section>
  );
}
