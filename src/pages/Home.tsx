import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { ArrowRight, CheckCircle, Trophy, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const AnimatedSphere = () => {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Sphere visible args={[1, 100, 200]} scale={2.2}>
        <MeshDistortMaterial
          color="#E0020E"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-dark text-white selection:bg-brand-red selection:text-white">
      {/* Hero Section with Glassmorphism */}
      <section className="relative h-screen min-h-[700px] flex items-center pt-32 overflow-hidden">
        
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-dark via-[#101018] to-brand-dark"></div>
          {/* Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-red/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-pink/10 rounded-full blur-[100px]"></div>
          
          <Canvas className="!absolute inset-0">
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#ED6C73" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#1B1B28" />
            <Suspense fallback={null}>
              <group position={[2, 0, 0]}>
                 <AnimatedSphere />
              </group>
            </Suspense>
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </div>
        
        {/* Glass Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-none">
          <div className="max-w-4xl pointer-events-auto">
            {/* Glass Card */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] animate-fade-in-up">
              <div className="inline-block px-4 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-sm font-semibold mb-6 tracking-wide">
                DDS REKLAM
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-nude to-brand-gray mb-6 leading-tight">
                Markanızın Sesi <br />
                <span className="text-brand-red drop-shadow-lg">Yüksek Çıksın</span>
              </h1>
              
              <p className="text-xl text-brand-gray mb-8 max-w-2xl leading-relaxed">
                Yaratıcı stratejiler ve yenilikçi medya çözümleriyle markanızı hedef kitlenizle buluşturuyoruz. 
                Geleceğin reklamcılığını bugünden deneyimleyin.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/projects" className="group relative bg-brand-red hover:bg-brand-pink text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(224,2,14,0.4)] hover:shadow-[0_0_30px_rgba(224,2,14,0.6)] hover:-translate-y-1">
                  Projelerimizi Keşfet
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="group relative px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 backdrop-blur-md hover:-translate-y-1">
                  Bize Ulaşın
                </Link>
              </div>
            </div>

            {/* Stats Glass Strip */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
               {[
                 { label: 'Başarılı Kampanya', val: '200+', icon: <CheckCircle className="text-brand-red" /> },
                 { label: 'Mutlu Marka', val: '50+', icon: <Users className="text-brand-pink" /> },
                 { label: 'Yıllık Deneyim', val: '15+', icon: <Trophy className="text-brand-nude" /> },
                 { label: 'Medya Ödülü', val: '12', icon: <Zap className="text-brand-white" /> },
               ].map((stat, idx) => (
                 <div key={idx} className="bg-brand-dark/40 backdrop-blur-md border border-white/5 p-4 rounded-xl flex flex-col items-center text-center hover:bg-brand-dark/60 transition-colors">
                    <div className="mb-2 p-2 bg-white/5 rounded-full">{stat.icon}</div>
                    <span className="text-2xl font-bold text-white">{stat.val}</span>
                    <span className="text-xs text-brand-gray uppercase tracking-wider">{stat.label}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
