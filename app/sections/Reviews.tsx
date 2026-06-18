const reviews = [
  {
    name: 'Marcus T.',
    location: 'Miami, FL',
    text: 'Advance America made it incredibly easy. Applied on my phone, got approved same day, and had funds the next morning.',
  },
  {
    name: 'Sarah K.',
    location: 'Atlanta, GA',
    text: 'Consolidated all my credit card debt into one simple payment. My rate dropped and I\'m saving $400/month. Life changing.',
  },
  {
    name: 'James R.',
    location: 'Chicago, IL',
    text: 'Needed emergency funds for car repairs. Advance America came through fast with zero hassle. Outstanding service.',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#fdf3e7] text-[#E8521A] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            REVIEWS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f3d]">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-[#E8521A] text-lg">★</span>
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed italic mb-5">&ldquo;{r.text}&rdquo;</p>
              <div>
                <p className="text-sm font-bold text-[#0f1f3d]">{r.name}</p>
                <p className="text-xs text-gray-400">{r.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
