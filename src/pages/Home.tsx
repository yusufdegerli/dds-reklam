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
      <section className="relative min-h-screen h-auto flex items-center pt-28 pb-12 md:pt-32 overflow-hidden">
        
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-dark via-[#101018] to-brand-dark"></div>
          {/* Glowing Orbs */}
          {/* Removed duplicate orange orb */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-brand-red/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse opacity-0 animate-fade-in"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-brand-pink/10 rounded-full blur-[60px] md:blur-[100px] opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}></div>
          
          <Canvas className="!absolute inset-0 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
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
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-5 sm:p-8 md:p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
              <div className="inline-block px-4 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs sm:text-sm font-semibold mb-4 sm:mb-6 tracking-wide opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                DDS REKLAM
              </div>
              
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-nude to-brand-gray mb-4 sm:mb-6 leading-tight opacity-0 animate-fade-in-up" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                Markanızın Sesi <br />
                <span className="text-brand-red drop-shadow-lg">Yüksek Çıksın</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-brand-gray mb-6 sm:mb-8 max-w-2xl leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
                Yaratıcı stratejiler ve yenilikçi medya çözümleriyle markanızı hedef kitlenizle buluşturuyoruz. 
                Geleceğin reklamcılığını bugünden deneyimleyin.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}>
                <Link to="/projects" className="group relative bg-brand-red hover:bg-brand-pink text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(224,2,14,0.4)] hover:shadow-[0_0_30px_rgba(224,2,14,0.6)] hover:-translate-y-1 w-full sm:w-auto">
                  Projelerimizi Keşfet
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="group relative px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 backdrop-blur-md hover:-translate-y-1 w-full sm:w-auto">
                  Bize Ulaşın
                </Link>
              </div>
            </div>

            {/* Stats Glass Strip */}
            <div className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
               {[
                 { label: 'Başarılı Kampanya', val: '200+', icon: <CheckCircle className="text-brand-red w-5 h-5 sm:w-6 sm:h-6" /> },
                 { label: 'Mutlu Marka', val: '50+', icon: <Users className="text-brand-pink w-5 h-5 sm:w-6 sm:h-6" /> },
                 { label: 'Yıllık Deneyim', val: '15+', icon: <Trophy className="text-brand-nude w-5 h-5 sm:w-6 sm:h-6" /> },
                 { label: 'Medya Ödülü', val: '12', icon: <Zap className="text-brand-white w-5 h-5 sm:w-6 sm:h-6" /> },
               ].map((stat, idx) => (
                 <div 
                    key={idx} 
                    className="bg-brand-dark/40 backdrop-blur-md border border-white/5 p-3 sm:p-4 rounded-xl flex flex-col items-center text-center hover:bg-brand-dark/60 transition-colors opacity-0 animate-fade-in-up"
                    style={{ animationDelay: `${1.6 + (idx * 0.1)}s`, animationFillMode: 'forwards' }}
                 >
                    <div className="mb-2 p-1.5 sm:p-2 bg-white/5 rounded-full">{stat.icon}</div>
                    <span className="text-xl sm:text-2xl font-bold text-white">{stat.val}</span>
                    <span className="text-[10px] sm:text-xs text-brand-gray uppercase tracking-wider">{stat.label}</span>
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
