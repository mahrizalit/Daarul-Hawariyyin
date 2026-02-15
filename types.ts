
export interface Activity {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  time: string;
}

export interface DonationProgram {
  id: string;
  title: string;
  target: number;
  current: number;
  description: string;
  icon: string;
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: string;
  imageUrl: string;
  author: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
