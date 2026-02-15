
import React, { useEffect, useState } from 'react';
import { generateDailyWisdom } from '../services/geminiService';

const Hero: React.FC = () => {
  const [wisdom, setWisdom] = useState<string>("Membangun masa depan umat dimulai dari mendidik generasi Qurani hari ini.");

  useEffect(() => {
    generateDailyWisdom().then(setWisdom);
  }, []);

  return (
    <section id="beranda" className="relative min-h-screen flex items-center overflow-hidden bg-brochure-blue-dark">
      {/* Background with Brochure Blue Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brochure-blue-dark to-brochure-blue-medium opacity-100"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-5 py-2 bg-yellow-400 text-brochure-blue-dark rounded-full text-sm font-black mb-8 shadow-xl">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brochure-blue-dark opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brochure-blue-dark"></span>
              </span>
              <span>GRATIS BAGI ANAK YATIM</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.05] tracking-tight drop-shadow-lg">
              Mendidik Dengan <br/>
              <span className="text-yellow-400">Adab & Quran</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-blue-50 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              Dibimbing langsung oleh para Ustadz yang kompeten untuk mencetak generasi Robbani yang tangguh di <span className="text-white font-black border-b-4 border-yellow-400">Daarul Hawariyyin</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-12 justify-center lg:justify-start">
              <a href="#daftar" className="px-10 py-5 bg-white text-brochure-blue-dark rounded-2xl font-black text-lg hover:bg-slate-100 transition-all shadow-2xl text-center transform hover:-translate-y-1 active:scale-95">
                Daftar Sekarang
              </a>
              <a href="#donasi" className="px-10 py-5 bg-brochure-blue-dark border-2 border-white/30 text-white rounded-2xl font-black text-lg hover:bg-white/10 transition-all text-center shadow-lg transform hover:-translate-y-1 active:scale-95">
                Infaq & Sedekah
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl inline-block max-w-md shadow-xl">
              <p className="text-white italic font-medium leading-relaxed text-sm md:text-base">
                "{wisdom}"
              </p>
            </div>
          </div>
          
          {/* Right Content - Focus on Ustadz */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10">
                <div className="rounded-[4rem] overflow-hidden border-8 border-white/20 shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-700 group">
                   <img 
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200" 
                    alt="Dewan Ustadz Pesantren" 
                    className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform"
                   />
                   <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brochure-blue-dark p-8">
                     <p className="text-yellow-400 font-black text-xs uppercase tracking-widest mb-1">Pengasuh & Pembimbing</p>
                     <h3 className="text-white font-black text-2xl">Dewan Ustadz Daarul Hawariyyin</h3>
                   </div>
                </div>
            </div>

            {/* Float Badge */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-[2.5rem] shadow-2xl border-4 border-brochure-blue-light text-center transform hover:scale-110 transition-transform">
               <span className="block text-brochure-blue-dark font-black text-4xl mb-1 tracking-tighter">PSB</span>
               <span className="block text-slate-400 font-bold text-xs uppercase">Buka Pendaftaran</span>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-white/10 rounded-full blur-[120px] -z-10"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden leading-none">
        <svg className="relative block w-full h-full fill-slate-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
