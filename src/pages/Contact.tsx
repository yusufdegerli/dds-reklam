import { useState, useRef, type FormEvent } from 'react';
import { Mail, MapPin, Phone, Send, Facebook, Twitter, Instagram, Linkedin, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    // EmailJS Configuration
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (formRef.current) {
      try {
        await emailjs.sendForm(
          SERVICE_ID,
          TEMPLATE_ID,
          formRef.current,
          PUBLIC_KEY
        );
        setStatus('success');
        if (formRef.current) formRef.current.reset();
      } catch (error) {
        console.error('Email error:', error);
        setStatus('error');
      } finally {
        setLoading(false);
        // 5 saniye sonra başarı/hata mesajını temizle
        setTimeout(() => setStatus('idle'), 5000);
      }
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark relative overflow-hidden pt-24 pb-12 flex flex-col justify-center">
       {/* Background Elements */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[150px] pointer-events-none"></div>
       <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-pink/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            İletişime <span className="text-brand-red">Geçin</span>
          </h1>
          <p className="text-brand-gray text-lg max-w-2xl mx-auto">
            Projeleriniz için bir kahve içmeye ne dersiniz? Ofisimize bekleriz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info Card (Glass) */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl h-full flex flex-col justify-between group hover:border-brand-red/30 transition-colors duration-500">
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">İletişim Bilgileri</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4 group/item">
                  <div className="p-3 bg-brand-red/20 rounded-xl text-brand-red group-hover/item:bg-brand-red group-hover/item:text-white transition-all duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Adres</h3>
                    <p className="text-brand-gray leading-relaxed">
                      Florya Cad. 38 / 7 Bakırköy <br />
                      Şenlikköy, İstanbul 34153 <br />
                      Türkiye
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group/item">
                  <div className="p-3 bg-brand-red/20 rounded-xl text-brand-red group-hover/item:bg-brand-red group-hover/item:text-white transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Telefon</h3>
                    <p className="text-brand-gray">+90 (212) 555 00 00</p>
                    <p className="text-brand-gray">+90 (532) 000 00 00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group/item">
                  <div className="p-3 bg-brand-red/20 rounded-xl text-brand-red group-hover/item:bg-brand-red group-hover/item:text-white transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">E-Posta</h3>
                    <p className="text-brand-gray">info@ddsreklam.com</p>
                    <p className="text-brand-gray">proje@ddsreklam.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-white font-semibold mb-4">Bizi Takip Edin</h3>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                  <a key={idx} href="#" className="p-3 bg-white/5 rounded-full text-brand-gray hover:bg-brand-red hover:text-white hover:-translate-y-1 transition-all duration-300 border border-white/5">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form (Glass) */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
            {status === 'success' && (
              <div className="absolute inset-0 z-50 bg-brand-dark/90 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8 animate-fade-in">
                <CheckCircle size={64} className="text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Mesajınız Gönderildi!</h3>
                <p className="text-brand-gray">En kısa sürede sizinle iletişime geçeceğiz.</p>
              </div>
            )}
            
            <h2 className="text-2xl font-bold text-white mb-2">Bize Yazın</h2>
            <p className="text-brand-gray mb-8">Size en kısa sürede dönüş yapacağız.</p>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-brand-gray ml-1">Adınız</label>
                  <input 
                    type="text" 
                    name="user_name"
                    required
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red/50 focus:bg-black/30 transition-all placeholder:text-white/20" 
                    placeholder="John Doe" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-brand-gray ml-1">Konu</label>
                  <input 
                    type="text" 
                    name="subject"
                    required
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red/50 focus:bg-black/30 transition-all placeholder:text-white/20" 
                    placeholder="Proje Teklifi" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-brand-gray ml-1">E-Posta</label>
                <input 
                  type="email" 
                  name="user_email"
                  required
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red/50 focus:bg-black/30 transition-all placeholder:text-white/20" 
                  placeholder="ornek@sirket.com" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-brand-gray ml-1">Mesajınız</label>
                <textarea 
                  rows={4} 
                  name="message"
                  required
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red/50 focus:bg-black/30 transition-all placeholder:text-white/20 resize-none" 
                  placeholder="Projenizden bahsedin..."
                ></textarea>
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-4 rounded-xl text-sm">
                  <AlertCircle size={18} />
                  <span>Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyiniz.</span>
                </div>
              )}

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-brand-red hover:bg-brand-pink text-white font-bold py-4 rounded-xl shadow-[0_4px_14px_0_rgba(224,2,14,0.39)] hover:shadow-[0_6px_20px_rgba(224,2,14,0.23)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Gönderiliyor...
                  </>
                ) : (
                  <>
                    Gönder
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;