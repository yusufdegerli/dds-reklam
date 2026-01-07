import { MonitorPlay, PenTool, BarChart, Video, Megaphone, Smartphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Dijital Pazarlama',
      desc: 'SEO, Google Ads ve sosyal medya yönetimi ile dijital dünyada iz bırakın.',
      icon: <MonitorPlay size={32} />,
      color: 'bg-brand-dark',
      text: 'text-white'
    },
    {
      title: 'Kreatif Tasarım',
      desc: 'Logo, kurumsal kimlik ve görsel tasarım hizmetleriyle markanızı özgünleştirin.',
      icon: <PenTool size={32} />,
      color: 'bg-brand-red',
      text: 'text-white'
    },
    {
      title: 'Medya Planlama',
      desc: 'Doğru hedef kitleye, doğru zamanda ve doğru kanallarla ulaşın.',
      icon: <BarChart size={32} />,
      color: 'bg-brand-pink',
      text: 'text-white'
    },
    {
      title: 'Prodüksiyon',
      desc: 'Profesyonel tanıtım filmi, reklam filmi ve fotoğraf çekimi hizmetleri.',
      icon: <Video size={32} />,
      color: 'bg-white',
      text: 'text-brand-dark',
      border: 'border-brand-nude'
    },
    {
      title: 'PR & İletişim',
      desc: 'Marka itibarınızı güçlendirecek stratejik iletişim danışmanlığı.',
      icon: <Megaphone size={32} />,
      color: 'bg-white',
      text: 'text-brand-dark',
      border: 'border-brand-nude'
    },
    {
      title: 'Sosyal Medya',
      desc: 'Etkileşim odaklı içerik yönetimi ve topluluk oluşturma stratejileri.',
      icon: <Smartphone size={32} />,
      color: 'bg-white',
      text: 'text-brand-dark',
      border: 'border-brand-nude'
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-brand-dark mb-4">Hizmetlerimiz</h1>
          <p className="text-brand-gray max-w-2xl mx-auto">Markanız için 360 derece yaratıcı ve stratejik reklam çözümleri.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className={`group p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden ${service.color === 'bg-white' ? 'bg-white border border-brand-nude/30' : service.color}`}
            >
              {/* Hover Overlay for colored cards */}
              {service.color !== 'bg-white' && (
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none"></div>
              )}
              
              <div className={`mb-6 inline-block p-3 rounded-xl ${service.color === 'bg-white' ? 'bg-brand-nude/20 text-brand-red' : 'bg-white/20 text-white'}`}>
                {service.icon}
              </div>
              
              <h3 className={`text-2xl font-bold mb-3 ${service.text}`}>{service.title}</h3>
              <p className={`leading-relaxed ${service.text === 'text-white' ? 'text-white/80' : 'text-brand-gray'}`}>
                {service.desc}
              </p>
              
              <div className="mt-6">
                <button className={`text-sm font-bold uppercase tracking-wider flex items-center gap-2 ${service.text === 'text-white' ? 'text-white' : 'text-brand-red'} group-hover:gap-3 transition-all`}>
                  Detaylı İncele <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;