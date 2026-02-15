
import React from 'react';
import { ACTIVITIES } from '../constants';

const Activities: React.FC = () => {
  return (
    <section id="kegiatan" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-black text-brochure-blue-dark uppercase tracking-widest mb-4">Suasana Pesantren</h2>
          <p className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Aktivitas Harian Santri</p>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">
            Setiap detik di Daarul Hawariyyin adalah proses pembentukan akhlak dan ilmu. Mari intip kegiatan para santri perintis kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ACTIVITIES.map((activity) => (
            <div key={activity.id} className="group bg-slate-50 rounded-[3rem] overflow-hidden hover:shadow-2xl transition-all duration-700 border-2 border-slate-100 relative">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={activity.imageUrl} 
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brochure-blue-dark/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                   <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full inline-block mb-3">
                      <p className="text-brochure-blue-dark font-black text-[10px] uppercase tracking-widest">{activity.time}</p>
                   </div>
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-brochure-blue-dark transition-colors">
                  {activity.title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-8 bg-brochure-blue-dark/5 rounded-[3rem] border-2 border-dashed border-brochure-blue-dark/20 text-center">
            <p className="text-brochure-blue-dark font-black text-xl mb-2">Lihat Lebih Banyak Kegiatan?</p>
            <p className="text-slate-500 font-medium mb-6 text-sm">Update dokumentasi harian tersedia di media sosial kami.</p>
            <div className="flex justify-center gap-4">
                <a href="#" className="px-6 py-3 bg-white text-brochure-blue-dark rounded-2xl font-black text-xs uppercase tracking-widest shadow-md hover:bg-brochure-blue-dark hover:text-white transition-all">Instagram</a>
                <a href="#" className="px-6 py-3 bg-white text-brochure-blue-dark rounded-2xl font-black text-xs uppercase tracking-widest shadow-md hover:bg-brochure-blue-dark hover:text-white transition-all">YouTube</a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
