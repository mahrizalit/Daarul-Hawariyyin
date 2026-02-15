
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-brochure-blue-dark rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">D</div>
          <span className={`font-black text-lg md:text-xl tracking-tighter ${isScrolled ? 'text-brochure-blue-dark' : 'text-white'}`}>
            DAARUL HAWARIYYIN
          </span>
        </div>
        
        <div className="hidden md:flex space-x-8 items-center font-bold">
          <a href="#beranda" className={`${isScrolled ? 'text-slate-600 hover:text-brochure-blue-dark' : 'text-white/90 hover:text-white'} transition-colors`}>Beranda</a>
          <a href="#kegiatan" className={`${isScrolled ? 'text-slate-600 hover:text-brochure-blue-dark' : 'text-white/90 hover:text-white'} transition-colors`}>Kegiatan</a>
          <a href="#donasi" className={`${isScrolled ? 'text-slate-600 hover:text-brochure-blue-dark' : 'text-white/90 hover:text-white'} transition-colors`}>Donasi</a>
          <a href="#daftar" className="bg-brochure-blue-dark text-white px-6 py-2 rounded-full hover:bg-brochure-blue-medium transition-all shadow-md active:scale-95">
            Daftar Santri
          </a>
        </div>

        <button className="md:hidden text-brochure-blue-dark">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
