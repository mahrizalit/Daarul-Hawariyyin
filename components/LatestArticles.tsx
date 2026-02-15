
import React from 'react';
import { ARTICLES } from '../constants';

const LatestArticles: React.FC = () => {
  return (
    <section id="artikel" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-brochure-blue-dark font-black uppercase tracking-widest text-sm mb-4">Wawasan & Inspirasi</h2>
            <p className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Artikel Terbaru & <br/><span className="text-brochure-blue-dark">Kabar Pesantren</span>
            </p>
          </div>
          <div>
            <a href="#" className="inline-flex items-center px-8 py-4 bg-slate-100 text-brochure-blue-dark rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-brochure-blue-dark hover:text-white transition-all group">
              Lihat Semua Artikel
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ARTICLES.map((article) => (
            <div key={article.id} className="group flex flex-col h-full bg-slate-50 rounded-[3rem] overflow-hidden border-2 border-slate-100 hover:shadow-2xl hover:shadow-brochure-blue-dark/10 transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={article.imageUrl} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-yellow-400 text-brochure-blue-dark text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-10 flex flex-col flex-1">
                <div className="flex items-center text-slate-400 text-xs font-bold mb-4 uppercase tracking-widest">
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>Oleh {article.author}</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-brochure-blue-dark transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-8 flex-1">
                  {article.summary}
                </p>
                <a href="#" className="text-brochure-blue-dark font-black text-sm uppercase tracking-widest flex items-center group/link">
                  Baca Selengkapnya
                  <div className="ml-2 w-8 h-1 bg-brochure-blue-dark rounded-full transform group-hover/link:w-12 transition-all"></div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
