import { Quote } from 'lucide-react';

const References = () => {
  // List of files moved to public/references
  const referenceLogos = [
    'big.png',
    'blue.png',
    'delta.png',
    'ferah.png',
    'goztepe.png',
    'IWC.png',
    'king.png',
    'longines.png',
    'montblanc.png',
    'panerai.png',
    'POMELLATO.png',
    'rotap.png',
    'scarma.png'
  ];

  const testimonials = [
    {
      text: "DDS Reklam ile çalışmak markamızın görünürlüğünü inanılmaz artırdı. Yaratıcı vizyonları sektörde fark yaratıyor.",
      author: "Pazarlama Direktörü",
      role: "Global Saat Markası"
    },
    {
      text: "Kurumsal kimlik çalışmalarımızdaki titiz yaklaşımları ve profesyonel süreç yönetimleri için teşekkürler.",
      author: "Genel Müdür",
      role: "Yapı & İnşaat" 
    },
    {
      text: "Reklam kampanyalarımızda nokta atışı stratejilerle hedef kitlemize tam olarak ulaştık.",
      author: "Marka Yöneticisi",
      role: "Lüks Tüketim"
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-brand-dark mb-4">Referanslarımız</h1>
          <p className="text-brand-gray">Başarı hikayelerini birlikte yazdığımız değerli iş ortaklarımız.</p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-24 items-center">
          {referenceLogos.map((logo, idx) => (
            <div key={idx} className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-brand-nude/20 flex items-center justify-center transition-all duration-300 hover:-translate-y-2 h-48">
              <img 
                src={`/references/${logo}`} 
                alt={logo.split('.')[0]} 
                className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100 scale-110 group-hover:scale-125"
              />
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-brand-dark rounded-3xl p-12 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/3 -translate-y-1/3">
                <Quote size={400} />
            </div>

            <div className="relative z-10 text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-2">Müşterilerimiz Ne Diyor?</h2>
                <div className="w-20 h-1 bg-brand-red mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {testimonials.map((t, idx) => (
                    <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                        <div className="text-brand-red mb-6">
                            <Quote size={32} />
                        </div>
                        <p className="text-gray-300 mb-6 italic leading-relaxed">"{t.text}"</p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-brand-nude flex items-center justify-center text-brand-dark font-bold">
                                {t.author.charAt(0)}
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm">{t.author}</h4>
                                <span className="text-brand-gray text-xs">{t.role}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default References;