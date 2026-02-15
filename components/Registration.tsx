
import React from 'react';

const Registration: React.FC = () => {
  return (
    <section id="daftar" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-brochure-blue-dark to-brochure-blue-medium rounded-[4rem] p-8 md:p-16 lg:p-24 text-white flex flex-col lg:flex-row gap-20 shadow-2xl relative overflow-hidden">
          {/* Abstract fluid background for the card */}
          <div className="absolute top-0 right-0 w-full h-full bg-white/5 -skew-x-12 translate-x-1/2"></div>
          
          <div className="lg:w-1/2 relative z-10">
            <div className="inline-block px-5 py-2 bg-yellow-400 text-brochure-blue-dark rounded-full text-xs font-black mb-10 shadow-xl">
              PSB 2025/2026 : GELOMBANG I
            </div>
            <h3 className="text-4xl md:text-6xl font-black mb-10 leading-[1.1]">
                Daftarkan Generasi <br/>
                <span className="text-yellow-400">Penerus</span> Kebanggaan Anda
            </h3>
            
            <div className="bg-white/10 backdrop-blur-xl rounded-[3rem] p-10 mb-10 border border-white/20 shadow-2xl">
              <div className="flex items-center justify-between mb-10">
                <h4 className="font-black text-3xl">Estimasi Biaya</h4>
                <div className="text-right">
                  <p className="text-yellow-400 font-black text-4xl">Rp 2.500.000</p>
                </div>
              </div>
              <ul className="space-y-5 text-blue-50 font-bold text-lg">
                <li className="flex justify-between border-b border-white/10 pb-3"><span>Formulir</span> <span>100rb</span></li>
                <li className="flex justify-between border-b border-white/10 pb-3"><span>Wakaf</span> <span>1jt</span></li>
                <li className="flex justify-between border-b border-white/10 pb-3"><span>Kitab</span> <span>200rb</span></li>
                <li className="flex justify-between"><span>Fasilitas & Infaq</span> <span>1.2jt</span></li>
              </ul>
            </div>

            <div className="bg-yellow-400 text-brochure-blue-dark p-6 rounded-[2rem] font-black text-center shadow-xl">
               GRATIS BIAYA BAGI ANAK YATIM
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-white rounded-[3.5rem] p-10 md:p-16 text-slate-900 shadow-2xl relative z-10">
            <div className="mb-12">
              <h4 className="text-3xl font-black text-brochure-blue-dark mb-4">Hubungi Kami</h4>
              <p className="text-slate-500 font-medium leading-relaxed">Klik tombol di bawah untuk pendaftaran via WhatsApp:</p>
            </div>
            <div className="space-y-6">
               {[
                 { name: "Ustadz Furqon", phone: "0878-7759-5047", link: "6287877595047" },
                 { name: "Ustadz Baihaqi", phone: "0895-3060-9802", link: "6289530609802" },
                 { name: "Ustadz M Taufiq", phone: "0895-3290-49589", link: "62895329049589" }
               ].map(admin => (
                 <a 
                  key={admin.link} 
                  href={`https://wa.me/${admin.link}`} 
                  className="flex items-center p-8 bg-slate-50 rounded-[2rem] hover:bg-brochure-blue-dark hover:text-white transition-all border-2 border-slate-100 group shadow-sm active:scale-95"
                 >
                    <div className="w-16 h-16 bg-brochure-blue-dark rounded-2xl flex items-center justify-center text-white mr-6 shadow-xl group-hover:bg-yellow-400 group-hover:text-brochure-blue-dark transition-colors">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.767 0 1.267.405 2.436 1.096 3.39l-.715 2.614 2.68-.703c.815.48 1.761.758 2.706.758 3.181 0 5.767-2.586 5.767-5.767s-2.586-5.767-5.767-5.767zm3.387 8.192c-.137.387-.714.717-1.114.764-.316.035-.724.062-1.742-.36-1.306-.54-2.148-1.87-2.213-1.957-.065-.087-.525-.705-.525-1.35s.336-.963.456-1.096c.12-.132.261-.165.348-.165s.174.004.25.008c.08.004.185-.03.29-.286.11-.266.376-.921.411-1.002.035-.08.06-.174.01-.275s-.24-.31-.36-.464c-.115-.148-.242-.31-.104-.544.138-.234.615-.398.815-.398s.326.045.467.2c.142.155.534 1.32.61 1.474.075.155.125.336.02.544-.105.208-.16.336-.316.516-.156.181-.33.38-.474.51s-.3.266-.135.55c.165.284.733 1.206 1.572 1.954.542.483 1.003.774 1.368.95.367.177.587.165.808-.09.222-.254.965-1.121 1.221-1.503.256-.382.512-.318.86-.19s2.21 1.042 2.592 1.233c.382.19.638.286.733.447.095.161.095.932-.042 1.319z"/></svg>
                    </div>
                    <div>
                      <p className="font-black text-2xl tracking-tighter">{admin.name}</p>
                      <p className="text-sm font-bold opacity-70">{admin.phone}</p>
                    </div>
                 </a>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
