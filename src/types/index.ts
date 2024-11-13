export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: number;
  rating: number;
  image: string;
  availability: string[];
  description: string;
}

export interface User {
  id?: string;
  email: string;
  password: string;
  name?: string;
}

export interface Appointment {
  id: string;
  doctorId: string;
  userId: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}