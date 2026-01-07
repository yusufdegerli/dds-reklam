import { MonitorPlay, PenTool, BarChart, Video, Megaphone, Smartphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Dijital Pazarlama',
      desc: 'SEO, Google Ads ve sosyal medya yönetimi ile dijital dünyada iz bırakın.',
      icon: <MonitorPlay size={32} />,
      color: 'bg-brand-red/10',
      iconColor: 'text-brand-red'
    },
    {
      title: 'Kreatif Tasarım',
      desc: 'Logo, kurumsal kimlik ve görsel tasarım hizmetleriyle markanızı özgünleştirin.',
      icon: <PenTool size={32} />,
      color: 'bg-brand-pink/10',
      iconColor: 'text-brand-pink'
    },
    {
      title: 'Medya Planlama',
      desc: 'Doğru hedef kitleye, doğru zamanda ve doğru kanallarla ulaşın.',
      icon: <BarChart size={32} />,
      color: 'bg-brand-nude/10',
      iconColor: 'text-brand-nude'
    },
    {
      title: 'Prodüksiyon',
      desc: 'Profesyonel tanıtım filmi, reklam filmi ve fotoğraf çekimi hizmetleri.',
      icon: <Video size={32} />,
      color: 'bg-white/5',
      iconColor: 'text-white'
    },
    {
      title: 'PR & İletişim',
      desc: 'Marka itibarınızı güçlendirecek stratejik iletişim danışmanlığı.',
      icon: <Megaphone size={32} />,
      color: 'bg-white/5',
      iconColor: 'text-white'
    },
    {
      title: 'Sosyal Medya',
      desc: 'Etkileşim odaklı içerik yönetimi ve topluluk oluşturma stratejileri.',
      icon: <Smartphone size={32} />,
      color: 'bg-white/5',
      iconColor: 'text-white'
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Hizmetlerimiz</h1>
          <p className="text-brand-gray max-w-2xl mx-auto">Markanız için 360 derece yaratıcı ve stratejik reklam çözümleri.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-red/30 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className={`mb-6 inline-block p-4 rounded-xl ${service.color} ${service.iconColor}`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-brand-gray leading-relaxed mb-6">
                {service.desc}
              </p>
              
              <button className="text-sm font-bold uppercase tracking-wider flex items-center gap-2 text-brand-red group-hover:gap-3 transition-all">
                Detaylı İncele <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
