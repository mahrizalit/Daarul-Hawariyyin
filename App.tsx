
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Activities from './components/Activities';
import Donation from './components/Donation';
import Registration from './components/Registration';
import Footer from './components/Footer';
import { SUBJECTS, KITABS, SCHEDULE } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-brochure-blue-light selection:text-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* Visi & Misi Section */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute -inset-10 bg-brochure-blue-dark/5 rounded-full blur-[100px]"></div>
                <div className="relative grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <img src="https://images.unsplash.com/photo-1590076202481-26cf4fc216b1?q=80&w=600" className="rounded-[3rem] shadow-2xl border-8 border-white transform hover:scale-105 transition-transform" alt="Ngaji" />
                    <div className="bg-brochure-blue-dark text-white p-6 rounded-[2rem] shadow-xl text-center font-bold">
                      <p className="text-3xl mb-1">20</p>
                      <p className="text-xs uppercase tracking-widest">Santri Perintis</p>
                    </div>
                  </div>
                  <div className="space-y-6 pt-12">
                    <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600" className="rounded-[3rem] shadow-2xl border-8 border-white transform hover:scale-105 transition-transform" alt="Sekolah" />
                    <div className="bg-yellow-400 text-brochure-blue-dark p-6 rounded-[2rem] shadow-xl text-center font-bold">
                      <p className="text-3xl mb-1">100%</p>
                      <p className="text-xs uppercase tracking-widest">Fokus Akhlak</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-brochure-blue-dark font-black uppercase tracking-widest text-sm mb-4">Misi Perjuangan</h2>
                <p className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-8">
                  Membina Generasi <span className="text-brochure-blue-dark">Unggul</span> Beradab
                </p>
                <div className="space-y-6">
                   <div className="bg-white p-10 rounded-[3rem] border-2 border-brochure-blue-light/20 shadow-xl shadow-brochure-blue-dark/5">
                      <h4 className="font-black text-brochure-blue-dark text-2xl mb-4 flex items-center">
                        <span className="mr-3 text-3xl">⭐</span> Visi Kami
                      </h4>
                      <p className="text-slate-600 leading-relaxed font-medium text-lg italic">
                        "Bernuansa Islami, unggul dalam prestasi, menjunjung tinggi tradisi, santun dalam bersikap, dan meraih kemuliaan hidup di masa depan."
                      </p>
                   </div>
                   <div className="bg-gradient-to-br from-brochure-blue-dark to-brochure-blue-medium p-10 rounded-[3rem] text-white shadow-2xl shadow-brochure-blue-dark/20">
                      <h4 className="font-black text-2xl mb-6">Misi Utama Pesantren</h4>
                      <ul className="space-y-4 text-blue-50 font-medium">
                        <li className="flex items-start"><span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-1 text-xs">✓</span> Membina santri berdasarkan keimanan dan ketaqwaan.</li>
                        <li className="flex items-start"><span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-1 text-xs">✓</span> Mewujudkan peningkatan mutu pendidikan berkelanjutan.</li>
                        <li className="flex items-start"><span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-1 text-xs">✓</span> Mengembangkan kemandirian sejalan dengan IPTEK.</li>
                        <li className="flex items-start"><span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-1 text-xs">✓</span> Menghasilkan santri yang santun dan berjiwa pejuang.</li>
                      </ul>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum Section - Uses specific Blues */}
        <section className="py-24 bg-brochure-blue-dark text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-yellow-400 font-black uppercase tracking-widest text-sm mb-4">Sistem Pembelajaran</h2>
              <p className="text-4xl md:text-6xl font-black mb-6 drop-shadow-lg">Kurikulum Salafiyah</p>
              <div className="w-32 h-2 bg-yellow-400 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white/5 backdrop-blur-xl p-12 rounded-[4rem] border border-white/10 hover:bg-white/10 transition-all group shadow-2xl">
                <h3 className="text-3xl font-black mb-10 flex items-center">
                  <span className="w-16 h-16 bg-brochure-blue-medium rounded-[1.5rem] flex items-center justify-center mr-5 text-3xl shadow-xl shadow-black/20 group-hover:scale-110 transition-transform">📖</span>
                  Bidang Study
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                  {SUBJECTS.map(s => (
                    <div key={s} className="bg-white/5 p-5 rounded-2xl text-center font-black text-brochure-blue-light border-2 border-white/5 hover:border-yellow-400 hover:text-yellow-400 transition-all cursor-default">
                      {s}
                    </div>
                  ))}
                </div>
                <div className="mt-12 p-6 bg-brochure-blue-medium/30 rounded-3xl border-2 border-white/10 flex items-center gap-5">
                  <div className="text-4xl">🌍</div>
                  <p className="text-sm font-bold text-blue-100">Dilengkapi dengan praktikum intensif Berbahasa Arab & Inggris sebagai bahasa komunikasi harian santri.</p>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-xl p-12 rounded-[4rem] border border-white/10 hover:bg-white/10 transition-all group shadow-2xl">
                <h3 className="text-3xl font-black mb-10 flex items-center">
                  <span className="w-16 h-16 bg-yellow-400 rounded-[1.5rem] flex items-center justify-center mr-5 text-3xl shadow-xl shadow-black/20 group-hover:scale-110 transition-transform">📜</span>
                  Kajian Kitab
                </h3>
                <div className="space-y-6">
                  {KITABS.map(k => (
                    <div key={k.cat} className="group/item">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-yellow-400 text-brochure-blue-dark text-[10px] font-black uppercase tracking-widest rounded-full">{k.cat}</span>
                        <div className="h-px flex-1 bg-white/10"></div>
                      </div>
                      <p className="text-blue-50 font-medium leading-relaxed bg-white/5 p-5 rounded-2xl border border-white/5 group-hover/item:border-yellow-400/50 transition-all">
                        {k.items}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Decorative shapes to mimic brochure's energy */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brochure-blue-medium/10 -skew-x-12 translate-x-1/2"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brochure-blue-light/20 rounded-full blur-[100px]"></div>
        </section>

        {/* Daily Schedule - Modern Timeline Style */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-brochure-blue-dark font-black uppercase tracking-widest text-sm mb-4">Disiplin Harian</h2>
              <p className="text-4xl md:text-5xl font-black text-slate-900">Agenda Hidup Mulia</p>
            </div>
            <div className="space-y-4">
              {SCHEDULE.map((s, idx) => (
                <div key={idx} className="flex flex-col md:flex-row md:items-center p-8 bg-slate-50 rounded-[2rem] hover:bg-brochure-blue-dark hover:text-white transition-all duration-300 group shadow-sm hover:shadow-2xl hover:shadow-brochure-blue-dark/30 cursor-default">
                  <div className="w-48 font-black text-brochure-blue-dark text-2xl mb-3 md:mb-0 group-hover:text-yellow-400 transition-colors">{s.time}</div>
                  <div className="flex-1 font-bold text-xl md:text-2xl text-slate-700 group-hover:text-white transition-colors">{s.activity}</div>
                  <div className="mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl">✨</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Activities />
        <Donation />
        
        {/* Registration Section */}
        <section id="daftar" className="py-24 bg-slate-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-gradient-to-br from-brochure-blue-dark to-brochure-blue-medium rounded-[4rem] p-8 md:p-16 lg:p-24 text-white flex flex-col lg:flex-row gap-20 shadow-2xl relative overflow-hidden">
              {/* Abstract fluid background for the card */}
              <div className="absolute top-0 right-0 w-full h-full bg-white/5 -skew-x-12 translate-x-1/2"></div>
              
              <div className="lg:w-1/2 relative z-10">
                <div className="inline-block px-5 py-2 bg-yellow-400 text-brochure-blue-dark rounded-full text-xs font-black mb-10 shadow-xl">
                  PSB 2025/2026 : GELOMBANG I
                </div>
                <h3 className="text-4xl md:text-6xl font-black mb-10 leading-[1.1]">Daftarkan Generasi <br/><span className="text-yellow-400">Penerus</span> Kebanggaan Anda</h3>
                
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
                    <li className="flex justify-between border-b border-white/10 pb-3"><span>Fasilitas</span> <span>700rb</span></li>
                    <li className="flex justify-between"><span>Infaq Bulanan</span> <span>500rb</span></li>
                  </ul>
                </div>

                <div className="bg-yellow-400 text-brochure-blue-dark p-6 rounded-[2rem] font-black text-center shadow-xl">
                   GRATIS BIAYA BAGI ANAK YATIM
                </div>
              </div>
              
              <div className="lg:w-1/2 bg-white rounded-[3.5rem] p-10 md:p-16 text-slate-900 shadow-2xl relative z-10">
                <div className="mb-12">
                  <h4 className="text-3xl font-black text-brochure-blue-dark mb-4">Jalur Pendaftaran</h4>
                  <p className="text-slate-500 font-medium leading-relaxed">Silakan klik nomor WhatsApp Ustadz pembimbing kami di bawah ini untuk konsultasi dan pendaftaran:</p>
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
                      className="flex items-center p-8 bg-slate-50 rounded-[2rem] hover:bg-brochure-blue-dark hover:text-white transition-all border-2 border-slate-100 group shadow-sm hover:shadow-2xl hover:shadow-brochure-blue-dark/20 active:scale-95"
                     >
                        <div className="w-16 h-16 bg-brochure-blue-dark rounded-2xl flex items-center justify-center text-white mr-6 shadow-xl group-hover:bg-yellow-400 group-hover:text-brochure-blue-dark transition-colors">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.767 0 1.267.405 2.436 1.096 3.39l-.715 2.614 2.68-.703c.815.48 1.761.758 2.706.758 3.181 0 5.767-2.586 5.767-5.767s-2.586-5.767-5.767-5.767zm3.387 8.192c-.137.387-.714.717-1.114.764-.316.035-.724.062-1.742-.36-1.306-.54-2.148-1.87-2.213-1.957-.065-.087-.525-.705-.525-1.35s.336-.963.456-1.096c.12-.132.261-.165.348-.165s.174.004.25.008c.08.004.185-.03.29-.286.11-.266.376-.921.411-1.002.035-.08.06-.174.01-.275s-.24-.31-.36-.464c-.115-.148-.242-.31-.104-.544.138-.234.615-.398.815-.398s.326.045.467.2c.142.155.534 1.32.61 1.474.075.155.125.336.02.544-.105.208-.16.336-.316.516-.156.181-.33.38-.474.51s-.3.266-.135.55c.165.284.733 1.206 1.572 1.954.542.483 1.003.774 1.368.95.367.177.587.165.808-.09.222-.254.965-1.121 1.221-1.503.256-.382.512-.318.86-.19s2.21 1.042 2.592 1.233c.382.19.638.286.733.447.095.161.095.932-.042 1.319z"/></svg>
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 font-black uppercase group-hover:text-blue-100">WhatsApp Admin</p>
                          <p className="font-black text-2xl tracking-tighter">{admin.name}</p>
                          <p className="text-sm font-bold opacity-70 group-hover:opacity-100">{admin.phone}</p>
                        </div>
                        <div className="ml-auto opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </div>
                     </a>
                   ))}
                </div>
                <div className="mt-12 text-center text-slate-400 font-black uppercase text-xs tracking-widest">
                  Ahlan Wa Sahlan Di Daarul Hawariyyin
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
