
import React, { useEffect, useState } from 'react';
import { generateDailyWisdom } from '../services/geminiService';

const Hero: React.FC = () => {
  const [wisdom, setWisdom] = useState<string>("Membangun masa depan umat dimulai dari mendidik generasi Qurani hari ini.");

  useEffect(() => {
    generateDailyWisdom().then(setWisdom);
  }, []);

  return (
    <section id="beranda" className="relative min-h-screen flex items-center overflow-hidden bg-brochure-blue-dark">
      {/* Background with Brochure Blue Gradient matching Misi section */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brochure-blue-dark to-brochure-blue-medium opacity-100"></div>
        {/* Subtle grid pattern for texture */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-5 py-2 bg-yellow-400 text-brochure-blue-dark rounded-full text-sm font-black mb-8 shadow-xl transform -rotate-1 hover:rotate-0 transition-transform">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brochure-blue-dark opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brochure-blue-dark"></span>
              </span>
              <span>GRATIS BAGI ANAK YATIM</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.05] tracking-tight drop-shadow-lg">
              Cemas Dengan <br/>
              <span className="text-yellow-400">Akhlak Anak</span> <br/>
              Zaman Sekarang?
            </h1>
            
            <p className="text-lg md:text-2xl text-blue-50 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium drop-shadow-sm">
              Bentengi mereka dengan Al-Quran dan Adab di <span className="text-white font-black border-b-4 border-yellow-400">Daarul Hawariyyin</span>. Tempat mencetak generasi Robbani yang tangguh.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-12 justify-center lg:justify-start">
              <a href="#daftar" className="px-10 py-5 bg-white text-brochure-blue-dark rounded-2xl font-black text-lg hover:bg-slate-100 transition-all shadow-2xl shadow-black/10 text-center transform hover:-translate-y-1 active:scale-95">
                Daftarkan Anak Saya
              </a>
              <a href="#donasi" className="px-10 py-5 bg-brochure-blue-dark border-2 border-white/30 text-white rounded-2xl font-black text-lg hover:bg-white/10 transition-all text-center shadow-lg transform hover:-translate-y-1 active:scale-95">
                Titip Wakaf Jariyah
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl inline-block max-w-md shadow-xl">
              <p className="text-white italic font-medium leading-relaxed text-sm md:text-base">
                "{wisdom}"
              </p>
            </div>
          </div>
          
          {/* Right Content - Visuals from brochure inspiration */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 flex gap-6">
              {/* Image 1: Santri */}
              <div className="w-1/2 mt-12">
                <div className="rounded-[4rem] overflow-hidden border-8 border-white/20 shadow-2xl transform -rotate-6 hover:rotate-0 transition-all duration-700 group">
                   <img 
                    src="https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=800" 
                    alt="Santri Ngaji" 
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform"
                   />
                   <div className="bg-brochure-blue-dark py-3 text-white text-center font-black text-xs uppercase tracking-widest">
                     Mencetak Hafidz
                   </div>
                </div>
              </div>
              
              {/* Image 2: Ustadz */}
              <div className="w-1/2">
                <div className="rounded-[4rem] overflow-hidden border-8 border-white/20 shadow-2xl transform rotate-6 hover:rotate-0 transition-all duration-700 group">
                   <img 
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800" 
                    alt="Dewan Ustadz" 
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform"
                   />
                   <div className="bg-yellow-400 py-3 text-brochure-blue-dark text-center font-black text-xs uppercase tracking-widest">
                     Dewan Ustadz
                   </div>
                </div>
              </div>
            </div>

            {/* Float Badge */}
            <div className="absolute -bottom-6 right-6 z-20 bg-white p-8 rounded-[3rem] shadow-2xl border-4 border-brochure-blue-light text-center transform hover:scale-110 transition-transform">
               <span className="block text-brochure-blue-dark font-black text-5xl mb-1 tracking-tighter">PSB</span>
               <span className="block text-slate-400 font-bold text-sm uppercase tracking-widest">2025/2026</span>
               <div className="mt-4 bg-brochure-blue-dark px-6 py-2 rounded-full text-white font-black text-xs shadow-lg">
                 KUOTA TERBATAS
               </div>
            </div>

            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-white/10 rounded-full blur-[120px] -z-10"></div>
          </div>
        </div>
      </div>

      {/* Decorative Wave to match brochure's fluid style */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden leading-none">
        <svg className="relative block w-full h-full fill-slate-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
