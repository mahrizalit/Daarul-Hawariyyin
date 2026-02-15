
import React, { useEffect, useState } from 'react';
import { DONATION_PROGRAMS } from '../constants';
import { getDonationAppeal } from '../services/geminiService';

const Donation: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [appeal, setAppeal] = useState("");
  const program = DONATION_PROGRAMS[activeTab];
  const percentage = Math.min(Math.round((program.current / program.target) * 100), 100);

  useEffect(() => {
    getDonationAppeal(program.title).then(setAppeal);
  }, [activeTab]);

  return (
    <section id="donasi" className="py-24 bg-brochure-blue-dark text-white overflow-hidden relative">
      {/* Dynamic background element from brochure style */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brochure-blue-medium/20 skew-x-12 transform translate-x-1/4"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-yellow-400 font-black uppercase tracking-widest text-sm mb-4">Investasi Akhirat</h2>
          <p className="text-4xl md:text-6xl font-black mb-6 drop-shadow-xl">Bantu Perjuangan Kami</p>
          <p className="text-blue-100 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
            Membangun peradaban butuh kebersamaan. Setiap rupiah yang Anda wakafkan adalah benih kebaikan yang akan tumbuh menjadi hutan pahala.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-2xl rounded-[4rem] border border-white/10 p-6 md:p-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Navigation tabs */}
            <div className="lg:w-1/3 space-y-5">
              {DONATION_PROGRAMS.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full p-8 rounded-[2.5rem] text-left transition-all border-2 flex items-center gap-6 ${activeTab === idx ? 'bg-white border-white shadow-2xl shadow-black/20 transform scale-105' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
                >
                  <span className="text-4xl">{p.icon}</span>
                  <div>
                    <h4 className={`font-black text-xl ${activeTab === idx ? 'text-brochure-blue-dark' : 'text-white'}`}>{p.title}</h4>
                    <p className={`text-xs uppercase tracking-widest font-bold ${activeTab === idx ? 'text-slate-400' : 'text-blue-300'}`}>Klik Untuk Detail</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Display Detail */}
            <div className="lg:w-2/3 bg-white rounded-[3.5rem] p-10 md:p-16 text-slate-900 shadow-2xl border-b-8 border-brochure-blue-light">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 mb-12">
                <div>
                  <h3 className="text-3xl font-black mb-4 text-brochure-blue-dark">{program.title}</h3>
                  <p className="text-slate-500 font-medium text-lg leading-relaxed">{program.description}</p>
                </div>
                <div className="bg-brochure-blue-dark text-white px-8 py-6 rounded-[2rem] shadow-xl text-center min-w-[220px]">
                  <p className="text-xs text-blue-200 font-bold uppercase tracking-widest mb-2">Target Dana</p>
                  <p className="text-3xl font-black">Rp {(program.target / 1000000).toFixed(0)} Jt</p>
                </div>
              </div>

              <div className="mb-12">
                <div className="flex justify-between text-sm font-black mb-4 uppercase tracking-widest">
                  <span className="text-slate-400">Progres Terkumpul</span>
                  <span className="text-brochure-blue-dark">{percentage}%</span>
                </div>
                <div className="w-full h-6 bg-slate-100 rounded-full overflow-hidden shadow-inner border-2 border-slate-50">
                  <div 
                    className="h-full bg-gradient-to-r from-brochure-blue-dark to-brochure-blue-light rounded-full transition-all duration-1000 relative"
                    style={{ width: `${percentage}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
                <div className="flex justify-between mt-5">
                    <span className="text-lg font-black text-slate-900">Dana Terkumpul: Rp {program.current.toLocaleString('id-ID')}</span>
                </div>
              </div>

              {appeal && (
                <div className="bg-slate-50 border-l-8 border-brochure-blue-dark p-8 rounded-2xl mb-12 italic text-slate-700 leading-relaxed font-medium text-lg shadow-sm">
                  "{appeal}"
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-6">
                <button className="flex-1 py-6 bg-brochure-blue-dark text-white rounded-[2rem] font-black text-xl hover:bg-brochure-blue-medium transition-all shadow-2xl active:scale-95 shadow-brochure-blue-dark/30">
                  Wakaf Sekarang
                </button>
                <a href="https://wa.me/6281234567890" target="_blank" className="flex-1 py-6 bg-slate-100 text-brochure-blue-dark rounded-[2rem] font-black text-xl hover:bg-slate-200 transition-all text-center flex items-center justify-center gap-3">
                  <span>Proposal & Rekening</span>
                </a>
              </div>
              
              <p className="text-center mt-10 text-xs text-slate-400 uppercase tracking-widest font-black">
                Jazaakumullah Khairan Katsiran - Daarul Hawariyyin
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
