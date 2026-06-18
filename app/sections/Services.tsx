import { Zap, User, Home, BarChart2 } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Payday Loans',
    amount: '$3K – $10K',
    description: 'Emergency cash with fast approval. Funded within 24 hours.',
  },
  {
    icon: User,
    title: 'Personal Loans',
    amount: '$500 – $25K',
    description: 'Flexible loans for any purpose. No collateral needed.',
  },
  {
    icon: Home,
    title: 'Home Loans',
    amount: '$5K – $35K',
    description: 'Renovate, repair, or remodel without tapping equity.',
  },
  {
    icon: BarChart2,
    title: 'Debt Consolidation',
    amount: '$10K – $50K',
    description: 'One payment, lower rate. Simplify your finances.',
  },
];

export default function Services() {
  return (
    <section id="loans" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#fdf3e7] text-[#E8521A] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            LOAN PRODUCTS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f3d] mb-4">
            Financing That Fits Your Life
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm">
            From quick cash to major investments — we&apos;ve got the right solution for you.
          </p>
        </div>

        {/* 4-card grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-[#0f1f3d] rounded-full flex items-center justify-center mb-4">
                <s.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-bold text-[#0f1f3d] mb-1">{s.title}</h3>
              <p className="text-base font-bold text-[#E8521A] mb-2">{s.amount}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
