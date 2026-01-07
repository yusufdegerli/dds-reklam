import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'Tümü' },
    { id: 'campaign', name: 'Kampanya' },
    { id: 'digital', name: 'Dijital' },
    { id: 'production', name: 'Prodüksiyon' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Summer Fest 2025',
      category: 'campaign',
      catName: 'Kampanya',
      desc: '360 derece festival tanıtım kampanyası.',
      color: 'bg-brand-red'
    },
    {
      id: 2,
      title: 'Tech Summit Branding',
      category: 'digital',
      catName: 'Dijital',
      desc: 'Uluslararası teknoloji zirvesi marka kimliği.',
      color: 'bg-brand-dark'
    },
    {
      id: 3,
      title: 'Moda Haftası Tanıtım Filmi',
      category: 'production',
      catName: 'Prodüksiyon',
      desc: 'Sezonun en çok konuşulan reklam filmi.',
      color: 'bg-brand-pink'
    },
    {
      id: 4,
      title: 'Eco-Life Lansmanı',
      category: 'campaign',
      catName: 'Kampanya',
      desc: 'Sürdürülebilirlik odaklı ürün lansmanı.',
      color: 'bg-brand-nude'
    },
    {
      id: 5,
      title: 'Mobil Uygulama UI/UX',
      category: 'digital',
      catName: 'Dijital',
      desc: 'Kullanıcı dostu arayüz tasarımı.',
      color: 'bg-brand-gray'
    },
    {
      id: 6,
      title: 'Kurumsal Fotoğraf Çekimi',
      category: 'production',
      catName: 'Prodüksiyon',
      desc: 'Holding merkezi için profesyonel çekimler.',
      color: 'bg-brand-dark'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
             <h1 className="text-4xl font-bold text-brand-dark mb-2">Projelerimiz</h1>
             <p className="text-brand-gray">Yaratıcılığımızı konuşturduğumuz işler.</p>
          </div>
          
          <div className="flex gap-2 mt-6 md:mt-0 overflow-x-auto pb-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                  filter === cat.id 
                    ? 'bg-brand-red text-white shadow-lg shadow-brand-red/30 scale-105' 
                    : 'bg-white text-brand-gray hover:bg-gray-100'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              {/* Image Placeholder */}
              <div className={`h-64 ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
                <span className="text-white/50 text-4xl font-bold relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                    {project.catName}
                </span>
                
                {/* Overlay Action */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <button className="bg-white text-brand-dark p-4 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <ArrowUpRight size={24} />
                    </button>
                </div>
              </div>

              <div className="p-6">
                <span className="text-xs font-bold text-brand-red uppercase tracking-wider mb-2 block">{project.catName}</span>
                <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-red transition-colors">{project.title}</h3>
                <p className="text-brand-gray text-sm">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;