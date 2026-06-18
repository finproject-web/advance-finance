import { Lock, Zap, Globe, Star, DollarSign } from 'lucide-react';

export default function TrustBar() {
  const badges = [
    { icon: Lock, label: '256-Bit SSL' },
    { icon: Zap, label: 'Same-Day Decisions' },
    { icon: Globe, label: 'All 50 States' },
    { icon: Star, label: '4.9★ Rated' },
    { icon: DollarSign, label: '$60M+ Funded' },
  ];

  return (
    <div className="bg-[#0f1f3d]">
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {badges.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon className="w-4 h-4 text-[#E8521A]" />
              <span className="text-sm font-medium text-white">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
