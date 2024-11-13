import { Doctor } from '../types';

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Wilson',
    specialty: 'Cardiologist',
    experience: 12,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400',
    availability: ['Mon', 'Wed', 'Fri'],
    description: 'Specialized in interventional cardiology with over a decade of experience in treating complex cardiac conditions.'
  },
  {
    id: '2',
    name: 'Dr. James Chen',
    specialty: 'Neurologist',
    experience: 15,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400',
    availability: ['Tue', 'Thu', 'Sat'],
    description: 'Expert in neurological disorders and stroke treatment, leading researcher in neurodegenerative diseases.'
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrician',
    experience: 8,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1623854767648-e7bb8009f0db?auto=format&fit=crop&q=80&w=400',
    availability: ['Mon', 'Tue', 'Thu', 'Fri'],
    description: 'Compassionate pediatrician dedicated to providing comprehensive care for children from newborns to adolescents.'
  },
  {
    id: '4',
    name: 'Dr. Michael Thompson',
    specialty: 'Orthopedic Surgeon',
    experience: 20,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400',
    availability: ['Wed', 'Thu', 'Fri'],
    description: 'Renowned orthopedic surgeon specializing in minimally invasive procedures and sports medicine.'
  },
  {
    id: '5',
    name: 'Dr. Lisa Patel',
    specialty: 'Dermatologist',
    experience: 10,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400',
    availability: ['Mon', 'Wed', 'Sat'],
    description: 'Board-certified dermatologist expert in both medical and cosmetic dermatology procedures.'
  }
];