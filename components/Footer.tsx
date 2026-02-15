
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brochure-blue-dark pt-24 pb-12 text-white overflow-hidden relative">
      {/* Decorative brochure circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -ml-32 -mt-32"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brochure-blue-dark font-black text-2xl shadow-2xl">D</div>
              <span className="font-black text-3xl tracking-tighter">DAARUL HAWARIYYIN</span>
            </div>
            <p className="text-blue-100 leading-relaxed font-medium italic text-lg opacity-80">
              "Mendidik dengan Adab, Membangun dengan Al-Quran. Mencetak Generasi Robbani Penyejuk Hati."
            </p>
          </div>

          <div>
            <h4 className="font-black mb-8 text-yellow-400 uppercase tracking-widest text-sm">Lokasi & Alamat</h4>
            <address className="not-italic text-blue-50 leading-loose text-lg font-bold">
              Kp Bulak Rt 003/001 Desa Nangserang<br/>
              Kec. Tajurhalang, Kab. Bogor<br/>
              Jawa Barat, 16320<br/>
              Indonesia
            </address>
          </div>

          <div className="flex flex-col md:items-end">
            <h4 className="font-black mb-8 text-yellow-400 uppercase tracking-widest text-sm">Media Informasi</h4>
            <div className="flex gap-4">
              {['FB', 'IG', 'YT', 'WA'].map(social => (
                <a key={social} href="#" className="w-14 h-14 bg-white/10 border-2 border-white/20 rounded-[1.2rem] flex items-center justify-center hover:bg-yellow-400 hover:text-brochure-blue-dark hover:border-yellow-400 transition-all group shadow-xl">
                  <span className="font-black text-sm tracking-widest">{social}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 text-center">
          <p className="text-blue-200/50 text-xs font-black uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Daarul Hawariyyin - Perintis Generasi Qurani
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
