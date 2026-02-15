
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Activities from './components/Activities';
import Donation from './components/Donation';
import Registration from './components/Registration';
import LatestArticles from './components/LatestArticles';
import Footer from './components/Footer';
import { SUBJECTS, KITABS, SCHEDULE } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-brochure-blue-light selection:text-white">
      <Navbar />
      <main>
        {/* 1. Banner + Headline */}
        <Hero />
        
        {/* 2. Misi Section */}
        <section className="py-24 bg-white">
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

        {/* 3. Aktivitas Santri */}
        <Activities />

        {/* 4. Pendaftaran (Daftarkan Generasi) */}
        <Registration />

        {/* 5. Kurikulum Section */}
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
                    <div key={s} className="bg-white/5 p-5 rounded-2xl text-center font-black text-brochure-blue-light border-2 border-white/5 hover:border-yellow-400 hover:text-yellow-400 transition-all cursor-default text-sm md:text-base">
                      {s}
                    </div>
                  ))}
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
                      <p className="text-blue-50 font-medium leading-relaxed bg-white/5 p-5 rounded-2xl border border-white/5 group-hover/item:border-yellow-400/50 transition-all text-sm md:text-base">
                        {k.items}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brochure-blue-medium/10 -skew-x-12 translate-x-1/2"></div>
        </section>

        {/* 6. Jadwal Harian */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-brochure-blue-dark font-black uppercase tracking-widest text-sm mb-4">Disiplin Harian</h2>
              <p className="text-4xl md:text-5xl font-black text-slate-900">Agenda Hidup Mulia</p>
            </div>
            <div className="space-y-4">
              {SCHEDULE.map((s, idx) => (
                <div key={idx} className="flex flex-col md:flex-row md:items-center p-6 md:p-8 bg-slate-50 rounded-[2.5rem] hover:bg-brochure-blue-dark hover:text-white transition-all duration-300 group shadow-sm hover:shadow-2xl hover:shadow-brochure-blue-dark/30 cursor-default">
                  <div className="w-full md:w-48 font-black text-brochure-blue-dark text-xl md:text-2xl mb-2 md:mb-0 group-hover:text-yellow-400 transition-colors">{s.time}</div>
                  <div className="flex-1 font-bold text-lg md:text-2xl text-slate-700 group-hover:text-white transition-colors">{s.activity}</div>
                  <div className="mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0 hidden md:flex">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl">✨</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Artikel Terbaru */}
        <LatestArticles />

        {/* 8. Pembangunan Mushola (Urgent Banner) */}
        <section id="donasi" className="py-24 bg-slate-50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-brochure-blue-dark to-brochure-blue-medium rounded-[4rem] p-8 md:p-16 lg:p-20 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2">
                  <div className="inline-block px-4 py-1.5 bg-yellow-400 text-brochure-blue-dark rounded-full text-xs font-black mb-6 animate-bounce">
                    WAKAF JARIYAH : MUSHOLA SANTRI
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                    Wujudkan Mushola Pertama <br/>Untuk 20 Santri Perintis
                  </h2>
                  <p className="text-blue-50 text-xl mb-10 leading-relaxed font-medium">
                    Jadilah bagian dari pembangunan sarana ibadah pertama kami. Setiap batu bata yang Anda sumbangkan akan menjadi saksi lantunan Al-Quran para santri setiap hari.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <button className="px-10 py-5 bg-yellow-400 text-brochure-blue-dark rounded-2xl font-black text-xl hover:bg-yellow-300 transition-all shadow-xl active:scale-95">
                      Bantu Sekarang 🕌
                    </button>
                    <div className="bg-white/10 p-4 px-6 rounded-2xl border border-white/20 flex flex-col justify-center">
                        <p className="text-blue-200 text-xs font-bold uppercase">Target Dana</p>
                        <p className="text-xl font-black">Rp 150.000.000</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1591604021695-0c69b7c05981?q=80&w=1000" 
                      className="rounded-[3rem] shadow-2xl border-8 border-white/20 transform rotate-2" 
                      alt="Pembangunan Mushola" 
                    />
                    <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-blue-50 text-center">
                       <p className="text-brochure-blue-dark font-black text-4xl">30%</p>
                       <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mt-1">Terkumpul</p>
                    </div>
                  </div>
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
