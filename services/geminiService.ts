
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateDailyWisdom = async (): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Tuliskan satu kata-kata mutiara Islami pendek yang sangat menyentuh hati tentang pentingnya menjaga akhlak anak dan membantu pendidikan Al-Quran untuk diletakkan di website Pesantren Daarul Hawariyyin. Maksimal 15 kata.",
      config: {
        temperature: 0.7,
      }
    });
    return response.text || "Sedekah yang paling utama adalah sedekah di jalan Allah untuk ilmu yang bermanfaat.";
  } catch (error) {
    console.error("Error generating wisdom:", error);
    return "Membangun masa depan umat dimulai dari mendidik generasi Qurani hari ini.";
  }
};

export const getDonationAppeal = async (programTitle: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Tuliskan kalimat singkat yang sangat mengajak orang untuk berdonasi pada program "${programTitle}" di Pesantren Daarul Hawariyyin, sebuah pondok baru dengan 20 santri perintis. Buatlah kalimat yang personal dan tulus.`,
      config: {
        temperature: 0.8,
      }
    });
    return response.text || "Bantuan Anda sangat berarti bagi langkah kecil para santri kami.";
  } catch (error) {
    return "Mari menjadi bagian dari amal jariyah pembangunan generasi Robbani.";
  }
};
