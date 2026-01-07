import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-brand-dark flex items-center justify-center px-4 text-white">
      <div className="text-center max-w-lg relative">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-red/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="relative z-10">
          <div className="flex justify-center mb-6 text-brand-red animate-bounce">
            <AlertTriangle size={80} />
          </div>
          <h1 className="text-8xl font-bold mb-4 drop-shadow-[0_0_15px_rgba(224,2,14,0.5)]">404</h1>
          <h2 className="text-2xl font-bold text-brand-gray mb-6">Sayfa Bulunamadı</h2>
          <p className="text-brand-gray mb-8 leading-relaxed">
            Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir. 
            Ana sayfaya dönerek yolunuzu bulabilirsiniz.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-pink text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 shadow-[0_0_20px_rgba(224,2,14,0.3)] hover:shadow-[0_0_30px_rgba(224,2,14,0.5)] hover:-translate-y-1"
          >
            <Home size={20} />
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;