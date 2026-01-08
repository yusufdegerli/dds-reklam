import { Quote } from 'lucide-react';

const References = () => {
  const referenceLogos = ['big.png', 'blue.png', 'delta.png', 'ferah.png', 'goztepe.png', 'IWC.png', 'king.png', 'longines.png', 'montblanc.png', 'panerai.png', 'POMELLATO.png', 'rotap.png', 'scarma.png'];

  const testimonials = [
    { text: "DDS Reklam ile çalışmak markamızın görünürlüğünü inanılmaz artırdı. Yaratıcı vizyonları sektörde fark yaratıyor.", author: "Pazarlama Direktörü", role: "Global Saat Markası" },
    { text: "Kurumsal kimlik çalışmalarımızdaki titiz yaklaşımları ve profesyonel süreç yönetimleri için teşekkürler.", author: "Genel Müdür", role: "Yapı & İnşaat" },
    { text: "Reklam kampanyalarımızda nokta atışı stratejilerle hedef kitlemize tam olarak ulaştık.", author: "Marka Yöneticisi", role: "Lüks Tüketim" }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold mb-4">Referanslarımız</h1>
          <p className="text-brand-gray">Başarı hikayelerini birlikte yazdığımız değerli iş ortaklarımız.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 mb-24 items-center">
          {referenceLogos.map((logo, idx) => (
            <div key={idx} className="group bg-[#242435] p-4 sm:p-8 rounded-2xl border border-white/5 flex items-center justify-center transition-all duration-500 hover:bg-[#2a2a3f] hover:border-brand-red/30 hover:-translate-y-2 h-32 sm:h-48 shadow-xl">
              <img 
                src={`/references/${logo}`} 
                alt={logo.split('.')[0]} 
                className="max-h-full max-w-full object-contain filter grayscale brightness-125 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500 opacity-60 group-hover:opacity-100 scale-100 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-12 relative overflow-hidden border border-white/10">
            <div className="absolute top-0 right-0 opacity-5 transform translate-x-1/3 -translate-y-1/3 text-white">
                <Quote size={400} />
            </div>
            <div className="relative z-10 text-center mb-12">
                <h2 className="text-3xl font-bold mb-2">Müşterilerimiz Ne Diyor?</h2>
                <div className="w-20 h-1 bg-brand-red mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {testimonials.map((t, idx) => (
                    <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-brand-red/10 transition-colors">
                        <div className="text-brand-red mb-6">
                            <Quote size={32} />
                        </div>
                        <p className="text-gray-300 mb-6 italic leading-relaxed">"{t.text}"</p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-brand-red/20 flex items-center justify-center text-brand-red font-bold">
                                {t.author.charAt(0)}
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">{t.author}</h4>
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
