
import React from 'react';

const Registration: React.FC = () => {
  return (
    <section id="daftar" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-950 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
            <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-6">Penerimaan Santri Baru</h2>
            <h3 className="text-4xl font-bold text-white mb-8 leading-tight">Jadilah Bagian dari 20 Santri Angkatan Pertama</h3>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed">
              Kami membuka pendaftaran untuk santri putra tingkat SMP/MTs. Fokus kami adalah menciptakan penghafal Quran yang beradab dan mandiri di Daarul Hawariyyin.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                'Lingkungan belajar yang asri (Biru & Putih)',
                'Metode Tahfidz intensif dan terukur',
                'Pembinaan karakter di atas ilmu',
                'Kuota sisa hanya untuk beberapa santri'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-slate-300">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/2 bg-white p-12 lg:p-20">
            <h4 className="text-2xl font-bold text-slate-900 mb-8">Formulir Pendaftaran</h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Nama Wali</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none" placeholder="Contoh: Ahmad" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Nomor WhatsApp</label>
                  <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none" placeholder="0812..." />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Nama Calon Santri</label>
                <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none" placeholder="Nama Lengkap" />
              </div>
              <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/20 active:scale-95">
                Kirim Pendaftaran
              </button>
              <p className="text-xs text-center text-slate-400">
                Kami akan menghubungi Anda melalui WhatsApp untuk proses selanjutnya.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
