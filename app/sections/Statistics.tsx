const stats = [
  { value: '$60M+', label: 'TOTAL FUNDED' },
  { value: '25K+', label: 'CUSTOMERS' },
  { value: '50', label: 'STATES' },
  { value: '4.9★', label: 'RATING' },
];

export default function Statistics() {
  return (
    <section className="bg-[#E8521A] py-12">
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl md:text-5xl font-extrabold text-[#0f1f3d] mb-1">
                {s.value}
              </p>
              <p className="text-xs font-bold text-[#0f1f3d]/70 tracking-widest uppercase mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
