
import React from 'react';
import { ACTIVITIES } from '../constants';

const Activities: React.FC = () => {
  return (
    <section id="kegiatan" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-black text-brochure-blue-dark uppercase tracking-widest mb-4">Ekstrakurikuler</h2>
          <p className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Kegiatan Unggulan Santri</p>
          <div className="w-24 h-2 bg-brochure-blue-dark mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ACTIVITIES.map((activity) => (
            <div key={activity.id} className="group bg-slate-50 rounded-[3rem] overflow-hidden hover:shadow-2xl transition-all duration-700 border-2 border-slate-100 relative">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={activity.imageUrl} 
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brochure-blue-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                   <p className="text-white font-black text-lg">Aktif & Berprestasi</p>
                </div>
                <div className="absolute top-6 left-6">
                  <span className="px-5 py-2 bg-white text-brochure-blue-dark rounded-full text-xs font-black shadow-xl uppercase tracking-widest">
                    {activity.time}
                  </span>
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-brochure-blue-dark transition-colors">
                  {activity.title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  {activity.description}
                </p>
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <button className="text-brochure-blue-dark font-black flex items-center space-x-3 group/btn uppercase text-xs tracking-widest">
                    <span>Lihat Dokumentasi</span>
                    <svg className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
