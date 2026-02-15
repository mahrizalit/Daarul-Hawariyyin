
import { Activity, DonationProgram } from './types';

export const SUBJECTS = [
  "Tafsir", "Hadits", "Tauhid", "Fiqih", "Tasawwuf", "Nahwu", "Shorof", "Tarikh", "Tajwid"
];

export const KITABS = [
  { cat: "AKHLAQ", items: "Akhlaq Banin/Banat, Ta'limul Ta'lim, Taisirul Kholaq" },
  { cat: "TAUHID", items: "Tijan Darory, Daarul Farid, Kifayatul Awam" },
  { cat: "FIQIH", items: "Safinatun Najah, Safinatunnaja, Fathul Qorib" },
  { cat: "NAHWU", items: "Awamil, Jurumiyyah, Mutammimah, Imrithi" }
];

export const SCHEDULE = [
  { time: "03.30 - 04.30", activity: "Bangun Pagi, Sholat Tahajud dan Dzikir" },
  { time: "04.30 - 06.00", activity: "Sholat Subuh Berjamaah, Pengajian Kitab Salafiyah" },
  { time: "06.00 - 07.00", activity: "Piket, Mandi, Sarapan" },
  { time: "08.00 - 12.00", activity: "Sekolah Formal Daarul Hawariyyin" },
  { time: "12.00 - 13.00", activity: "Sholat Dzuhur, Dzikir, Qiro'atil Qur'an & Makan" },
  { time: "15.00 - 17.00", activity: "Sholat Ashar, Baca Hadits & Pengajian Kitab" },
  { time: "18.00 - 20.00", activity: "Sholat Maghrib, Isya Berjamaah & Baca Hadits" },
  { time: "20.00 - 21.30", activity: "Mudzakarah/Belajar Malam, Ngaji Sorogan" }
];

export const ACTIVITIES: Activity[] = [
  {
    id: '1',
    title: 'Hadroh',
    description: 'Melestarikan tradisi shalawat dengan seni rebana yang indah.',
    imageUrl: 'https://images.unsplash.com/photo-1590076202481-26cf4fc216b1?q=80&w=800',
    time: 'Sabtu Malam'
  },
  {
    id: '2',
    title: 'Pidato 3 Bahasa',
    description: 'Melatih mental dan kemampuan komunikasi dalam Bahasa Indonesia, Arab, dan Inggris.',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800',
    time: 'Setiap Minggu'
  },
  {
    id: '3',
    title: 'Pencak Silat',
    description: 'Olahraga fisik dan pembela diri untuk ketangkasan santri.',
    imageUrl: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=800',
    time: 'Sabtu Sore'
  }
];

export const DONATION_PROGRAMS: DonationProgram[] = [
  {
    id: 'd1',
    title: 'Wakaf Pembangunan',
    target: 100000000,
    current: 25000000,
    description: 'Bantuan pembangunan gedung asrama dan ruang kelas untuk santri perintis.',
    icon: '🏗️'
  },
  {
    id: 'd2',
    title: 'Infaq Makan Santri',
    target: 15000000,
    current: 4500000,
    description: 'Subsidi konsumsi harian bagi 20 santri, termasuk santri yatim yang digratiskan.',
    icon: '🍲'
  },
  {
    id: 'd3',
    title: 'Sarana Kitab & Kasur',
    target: 20000000,
    current: 12000000,
    description: 'Pengadaan kitab kuning dan fasilitas asrama yang layak.',
    icon: '📚'
  }
];
