import { Award, Users, Target, Rocket } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-red font-semibold tracking-wider uppercase text-sm mb-2 block animate-fade-in">Hikayemiz</span>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
            Tutkuyla Tasarlıyor, <br/> Stratejiyle Büyütüyoruz.
          </h1>
          <p className="text-lg text-brand-gray leading-relaxed">
            Yılların getirdiği deneyimle, markaların hikayelerini en etkili şekilde anlatmak ve dijital dünyada kalıcı izler bırakmak için çalışıyoruz.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative group">
             {/* Abstract shape decoration */}
            <div className="absolute -inset-4 bg-brand-nude/30 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
            <div className="relative bg-white p-2 rounded-xl shadow-xl overflow-hidden aspect-video flex items-center justify-center bg-gray-100">
                <span className="text-brand-gray/50 font-bold text-xl">Ofis / Ekip Fotoğrafı</span>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="flex gap-4 items-start p-4 rounded-xl hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="bg-brand-red/10 p-3 rounded-lg text-brand-red shrink-0">
                <Target size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">Vizyonumuz</h3>
                <p className="text-brand-gray">Yaratıcı reklamcılık ve dijital medya alanında trendleri belirleyen, global standartlarda işler üreten lider bir ajans olmak.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-4 rounded-xl hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="bg-brand-pink/10 p-3 rounded-lg text-brand-pink shrink-0">
                <Rocket size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">Misyonumuz</h3>
                <p className="text-brand-gray">Markaların potansiyelini ortaya çıkaracak stratejik ve estetik çözümler sunarak iş ortaklarımızın büyümesine katkı sağlamak.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats / Features (Flat Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { title: 'Yaratıcı Ekip', desc: 'Ödüllü tasarımcılar ve stratejistler.', icon: <Users size={32} /> },
                { title: 'Başarılı Kampanyalar', desc: 'Sektörde ses getiren 500+ proje.', icon: <Award size={32} /> },
                { title: 'Müşteri Odaklılık', desc: 'Markanızın hedeflerini kendi hedefimiz sayıyoruz.', icon: <Target size={32} /> },
            ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_-10px_rgba(224,2,14,0.1)] transition-all duration-300 border border-brand-nude/20 group">
                    <div className="mb-6 inline-block p-4 rounded-2xl bg-brand-nude/10 text-brand-dark group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                        {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-brand-dark mb-3">{item.title}</h3>
                    <p className="text-brand-gray">{item.desc}</p>
                </div>
            ))}
        </div>

      </div>
    </div>
  );
};

export default About;