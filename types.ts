
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

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
