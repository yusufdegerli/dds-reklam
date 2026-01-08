import { useState, type FormEvent } from 'react';
import { Mail, MapPin, Phone, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Construct the mailto link
    const { name, subject, email, message } = formData;
    const body = `Ad Soyad: ${name}%0D%0AE-Posta: ${email}%0D%0A%0D%0AMesaj:%0D%0A${message}`;
    const mailtoLink = `mailto:info@ddsreklam.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    // Open the email client
    window.location.href = mailtoLink;

    // Optional: Reset form or show a simple feedback
    alert("E-posta istemciniz açılıyor...");
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
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-2">Bize Yazın</h2>
            <p className="text-brand-gray mb-8">Size en kısa sürede dönüş yapacağız.</p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-brand-gray ml-1">Adınız</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.subject}
                    onChange={handleChange}
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red/50 focus:bg-black/30 transition-all placeholder:text-white/20 resize-none" 
                  placeholder="Projenizden bahsedin..."
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-brand-red hover:bg-brand-pink text-white font-bold py-4 rounded-xl shadow-[0_4px_14px_0_rgba(224,2,14,0.39)] hover:shadow-[0_6px_20px_rgba(224,2,14,0.23)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                Gönder
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;