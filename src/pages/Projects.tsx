import { useState, useEffect } from 'react';
import { ArrowUpRight, Loader2 } from 'lucide-react';
import { client, urlFor } from '../sanity/client';
import ProjectModal from '../components/ProjectModal';

interface Project {
  _id: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  images: any[];
}

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', name: 'Tümü' },
    { id: 'campaign', name: 'Kampanya' },
    { id: 'digital', name: 'Dijital' },
    { id: 'production', name: 'Prodüksiyon' },
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const query = `*[_type == "project"]{
          _id,
          title,
          category,
          shortDescription,
          description,
          images
        }`;
        const data = await client.fetch(query);
        setProjects(data);
      } catch (error) {
        console.error("Projeler yüklenirken hata oluştu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const getCategoryName = (catId: string) => {
    return categories.find(c => c.id === catId)?.name || catId;
  };

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-brand-dark text-white relative">
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

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="animate-spin text-brand-red" size={48} />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project._id} 
                onClick={() => setSelectedProject(project)}
                className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-brand-red/30 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                <div className="h-64 bg-brand-dark/50 flex items-center justify-center relative overflow-hidden">
                  {project.images && project.images.length > 0 ? (
                    <img 
                      src={urlFor(project.images[0]).width(600).url()} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <span className="text-white/20 text-3xl font-bold">{getCategoryName(project.category)}</span>
                  )}
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-dark/60 backdrop-blur-sm">
                      <button className="bg-brand-red text-white p-4 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          <ArrowUpRight size={24} />
                      </button>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-brand-red uppercase mb-2 block">{getCategoryName(project.category)}</span>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-brand-red transition-colors">{project.title}</h3>
                  <p className="text-brand-gray text-sm line-clamp-2">{project.shortDescription}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export default Projects;
