import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-brand-white flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="flex justify-center mb-6 text-brand-red animate-bounce">
          <AlertTriangle size={80} />
        </div>
        <h1 className="text-8xl font-bold text-brand-dark mb-4">404</h1>
        <h2 className="text-2xl font-bold text-brand-gray mb-6">Sayfa Bulunamadı</h2>
        <p className="text-brand-gray mb-8 leading-relaxed">
          Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir. 
          Ana sayfaya dönerek yolunuzu bulabilirsiniz.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-dark text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          <Home size={20} />
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
