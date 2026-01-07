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
    { id: 1, title: 'Summer Fest 2025', category: 'campaign', catName: 'Kampanya', desc: '360 derece festival tanıtım.', color: 'bg-brand-red/20' },
    { id: 2, title: 'Tech Summit Branding', category: 'digital', catName: 'Dijital', desc: 'Teknoloji zirvesi marka kimliği.', color: 'bg-brand-dark' },
    { id: 3, title: 'Moda Haftası Filmi', category: 'production', catName: 'Prodüksiyon', desc: 'Sezonun en iyi reklam filmi.', color: 'bg-brand-pink/20' },
    { id: 4, title: 'Eco-Life Lansmanı', category: 'campaign', catName: 'Kampanya', desc: 'Sürdürülebilirlik odaklı lansman.', color: 'bg-brand-nude/20' },
    { id: 5, title: 'Mobil Uygulama Tasarımı', category: 'digital', catName: 'Dijital', desc: 'Kullanıcı dostu arayüz.', color: 'bg-white/5' },
    { id: 6, title: 'Kurumsal Çekimler', category: 'production', catName: 'Prodüksiyon', desc: 'Holding merkezi çekimleri.', color: 'bg-brand-dark' }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
             <h1 className="text-4xl font-bold mb-2">Projelerimiz</h1>
             <p className="text-brand-gray">Yaratıcılığımızı konuşturduğumuz işler.</p>
          </div>
          
          <div className="flex gap-2 mt-6 md:mt-0 overflow-x-auto pb-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                  filter === cat.id ? 'bg-brand-red text-white shadow-lg' : 'bg-white/5 text-brand-gray hover:bg-white/10'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-brand-red/30 transition-all duration-500 hover:-translate-y-2">
              <div className={`h-64 ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <span className="text-white/20 text-3xl font-bold">{project.catName}</span>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-dark/60 backdrop-blur-sm">
                    <button className="bg-brand-red text-white p-4 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <ArrowUpRight size={24} />
                    </button>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-brand-red uppercase mb-2 block">{project.catName}</span>
                <h3 className="text-xl font-bold mb-2 group-hover:text-brand-red transition-colors">{project.title}</h3>
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
