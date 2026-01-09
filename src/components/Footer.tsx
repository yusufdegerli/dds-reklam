import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-brand-gray pt-16 pb-8 border-t border-brand-red/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold text-brand-white mb-4">
              DDS<span className="text-brand-red">REKLAM</span>
            </h3>
            <p className="text-sm leading-relaxed mb-6">
              Markanızın dijital dünyadaki sesi. Yaratıcı stratejiler ve profesyonel çözümlerle yanınızdayız.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-brand-gray hover:text-brand-red transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-brand-gray hover:text-brand-red transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-brand-gray hover:text-brand-red transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-brand-gray hover:text-brand-red transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-brand-white mb-6">Hızlı Erişim</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-brand-red transition-colors">Hakkımızda</Link></li>
              <li><Link to="/services" className="hover:text-brand-red transition-colors">Hizmetlerimiz</Link></li>
              <li><Link to="/projects" className="hover:text-brand-red transition-colors">Projelerimiz</Link></li>
              <li><Link to="/contact" className="hover:text-brand-red transition-colors">Bize Ulaşın</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-brand-white mb-6">Hizmetlerimiz</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="hover:text-brand-white transition-colors">Dijital Pazarlama</Link></li>
              <li><Link to="/services" className="hover:text-brand-white transition-colors">Medya Planlama</Link></li>
              <li><Link to="/services" className="hover:text-brand-white transition-colors">Kreatif Tasarım</Link></li>
              <li><Link to="/services" className="hover:text-brand-white transition-colors">Prodüksiyon</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-brand-white mb-6">İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-red shrink-0" size={20} />
                <span>Florya Cad. 38 / 7 Bakırköy, İstanbul</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-red shrink-0" size={20} />
                <span>+90 (537) 929 05 29</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-red shrink-0" size={20} />
                <span>info@ddsreklam.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} DDS REKLAM YAPI İNŞAAT TURİZM SANAYİ VE TİCARET LİMİTED ŞİRKETİ. Tüm hakları saklıdır.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-white transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-brand-white transition-colors">Kullanım Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;