import { FileText, CheckCircle, Wallet } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    step: '01',
    title: 'Apply Online',
    description: '5-minute secure application from any device. No paperwork required.',
  },
  {
    icon: CheckCircle,
    step: '02',
    title: 'Get Approved',
    description: 'Same-day decision with personalized offers tailored to your needs.',
  },
  {
    icon: Wallet,
    step: '03',
    title: 'Get Funded',
    description: 'Accept your offer and receive funds directly — often next business day.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#0f1f3d] py-16 md:py-24">
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#1a3a2a] text-[#E8521A] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Three Simple Steps
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            From application to funded in as little as one business day.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {steps.map((s) => (
            <div
              key={s.step}
              className="bg-[#162840] rounded-2xl p-8 relative"
            >
              {/* Faded step number */}
              <p className="text-6xl font-extrabold text-[#1e3a5f] leading-none mb-3 select-none">
                {s.step}
              </p>
              {/* Orange icon circle */}
              <div className="w-12 h-12 bg-[#E8521A] rounded-full flex items-center justify-center mb-5">
                <s.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
