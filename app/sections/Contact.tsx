import { Phone, Mail, MapPin } from 'lucide-react';

const contacts = [
  {
    icon: Phone,
    title: 'Call Us',
    line1: '+1(415) 472-9661',
    line2: 'Mon–Fri 8AM–8PM PT',
    href: 'tel:+14154729661',
  },
  {
    icon: Mail,
    title: 'Email',
    line1: 'advanceamericaloan1774@gmail.com',
    line2: 'Response within 24hrs',
    href: 'mailto:advanceamericaloan1774@gmail.com',
  },
  {
    icon: MapPin,
    title: 'Office',
    line1: '1008 N Vermont Ave',
    line2: 'Los Angeles, CA 90029',
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#fdf3e7] text-[#E8521A] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            CONTACT
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f3d]">Get In Touch</h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contacts.map(({ icon: Icon, title, line1, line2, href }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center p-8 border border-gray-100 rounded-2xl shadow-sm"
            >
              <div className="w-14 h-14 bg-[#0f1f3d] rounded-full flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-base font-bold text-[#0f1f3d] mb-2">{title}</p>
              {href ? (
                <a href={href} className="text-sm text-gray-500 hover:text-[#E8521A] transition-colors">
                  {line1}
                </a>
              ) : (
                <p className="text-sm text-gray-500">{line1}</p>
              )}
              <p className="text-sm text-gray-500">{line2}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
