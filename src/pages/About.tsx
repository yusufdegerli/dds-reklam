import { Award, Users, Target, Rocket } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-red font-semibold tracking-wider uppercase text-sm mb-2 block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>Hikayemiz</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Tutkuyla Tasarlıyor, <br/> Stratejiyle Büyütüyoruz.
          </h1>
          <p className="text-base sm:text-lg text-brand-gray leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Yılların getirdiği deneyimle, markaların hikayelerini en etkili şekilde anlatmak ve dijital dünyada kalıcı izler bırakmak için çalışıyoruz.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative group opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <div className="absolute -inset-4 bg-brand-red/10 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-2 rounded-xl shadow-xl overflow-hidden aspect-video flex items-center justify-center">
                <span className="text-brand-gray/50 font-bold text-xl">Ofis / Ekip Fotoğrafı</span>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="flex gap-4 items-start p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              <div className="bg-brand-red/20 p-3 rounded-lg text-brand-red shrink-0">
                <Target size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Vizyonumuz</h3>
                <p className="text-brand-gray">Yaratıcı reklamcılık ve dijital medya alanında trendleri belirleyen, global standartlarda işler üreten lider bir ajans olmak.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <div className="bg-brand-pink/20 p-3 rounded-lg text-brand-pink shrink-0">
                <Rocket size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Misyonumuz</h3>
                <p className="text-brand-gray">Markaların potansiyelini ortaya çıkaracak stratejik ve estetik çözümler sunarak iş ortaklarımızın büyümesine katkı sağlamak.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { title: 'Yaratıcı Ekip', desc: 'Ödüllü tasarımcılar ve stratejistler.', icon: <Users size={32} /> },
                { title: 'Başarılı Kampanyalar', desc: 'Sektörde ses getiren 500+ proje.', icon: <Award size={32} /> },
                { title: 'Müşteri Odaklılık', desc: 'Markanızın hedeflerini kendi hedefimiz sayıyoruz.', icon: <Target size={32} /> },
            ].map((item, idx) => (
                <div key={idx} className="bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-brand-red/30 transition-all duration-300 group opacity-0 animate-fade-in-up" style={{ animationDelay: `${0.7 + (idx * 0.1)}s`, animationFillMode: 'forwards' }}>
                    <div className="mb-6 inline-block p-4 rounded-2xl bg-white/5 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                        {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-brand-gray">{item.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default About;
