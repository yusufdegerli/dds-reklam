import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { urlFor } from '../sanity/client';

interface ProjectModalProps {
  project: any;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isClosing, setIsClosing] = useState(false);

  // Modal açıldığında scroll'u engelle
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300); // Animasyon süresi kadar bekle
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  if (!project) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={handleClose}
      ></div>

      {/* Modal Content */}
      <div className={`relative bg-[#1B1B28] w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row transform transition-all duration-300 ${isClosing ? 'scale-95 translate-y-4' : 'scale-100 translate-y-0'} animate-fade-in-up`}>
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-brand-red rounded-full text-white transition-all duration-300"
        >
          <X size={24} />
        </button>

        {/* Image Gallery Section */}
        <div className="md:w-3/5 bg-black/40 relative h-[300px] md:h-auto flex items-center justify-center group">
           {project.images && project.images.length > 0 ? (
             <>
               <img 
                 src={urlFor(project.images[currentImageIndex]).url()} 
                 alt={project.title} 
                 className="w-full h-full object-cover"
               />
               
               {/* Navigation Arrows (Only if > 1 image) */}
               {project.images.length > 1 && (
                 <>
                   <button 
                     onClick={prevImage}
                     className="absolute left-4 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-brand-red"
                   >
                     <ChevronLeft size={24} />
                   </button>
                   <button 
                     onClick={nextImage}
                     className="absolute right-4 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-brand-red"
                   >
                     <ChevronRight size={24} />
                   </button>
                   
                   {/* Indicators */}
                   <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                     {project.images.map((_: any, idx: number) => (
                       <div 
                         key={idx} 
                         className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-brand-red w-4' : 'bg-white/50'}`}
                       />
                     ))}
                   </div>
                 </>
               )}
             </>
           ) : (
             <div className="text-brand-gray">Görsel Yok</div>
           )}
        </div>

        {/* Content Section */}
        <div className="md:w-2/5 p-8 overflow-y-auto">
          <span className="text-brand-red text-sm font-bold uppercase tracking-wider mb-2 block">
            {project.category === 'campaign' ? 'Kampanya' : 
             project.category === 'digital' ? 'Dijital' : 'Prodüksiyon'}
          </span>
          
          <h2 className="text-3xl font-bold text-white mb-6 leading-tight">{project.title}</h2>
          
          <div className="prose prose-invert prose-sm text-brand-gray leading-relaxed">
            {project.description}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;
