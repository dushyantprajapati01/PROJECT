export interface Technician {
  id: number;
  name: string;
  position: string;
  experience: number;
  certifications: string[];
  specialties: string[];
  bio: string;
  imageUrl: string;
  rating: number;
}

export const technicians: Technician[] = [
  {
    id: 1,
    name: 'Michael Rodriguez',
    position: 'Senior Pest Control Specialist',
    experience: 12,
    certifications: [
      'Certified Pest Control Operator',
      'IPM Certified Technician',
      'Wood Destroying Organisms Inspector'
    ],
    specialties: ['Termite Control', 'Bed Bug Remediation', 'Commercial Pest Management'],
    bio: 'Michael has been in the pest control industry for over 12 years, specializing in complex termite treatments and bed bug remediation. His attention to detail and commitment to customer education makes him one of our most requested technicians.',
    imageUrl: 'https://images.pexels.com/photos/8961291/pexels-photo-8961291.jpeg',
    rating: 4.9
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    position: 'Integrated Pest Management Specialist',
    experience: 8,
    certifications: [
      'Associate Certified Entomologist',
      'Green Pro Certified',
      'Structural Fumigation Specialist'
    ],
    specialties: ['Eco-Friendly Pest Control', 'Rodent Exclusion', 'Mosquito Management'],
    bio: 'Sarah specializes in environmentally-conscious pest management solutions. With a background in biology, she takes a scientific approach to pest control, focusing on prevention and non-chemical solutions whenever possible.',
    imageUrl: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg',
    rating: 4.8
  },
  {
    id: 3,
    name: 'David Chen',
    position: 'Commercial Pest Control Manager',
    experience: 15,
    certifications: [
      'Master Pest Control Technician',
      'AIB Food Safety Certification',
      'HACCP Certified'
    ],
    specialties: ['Restaurant Pest Control', 'Healthcare Facility Management', 'Food Processing Plants'],
    bio: 'David leads our commercial division, working with restaurants, hospitals, and food processing facilities. His extensive knowledge of industry regulations and food safety protocols makes him invaluable for business clients with strict compliance requirements.',
    imageUrl: 'https://images.pexels.com/photos/8961276/pexels-photo-8961276.jpeg',
    rating: 4.9
  },
  {
    id: 4,
    name: 'Amanda Torres',
    position: 'Residential Pest Control Specialist',
    experience: 6,
    certifications: [
      'Urban Pest Management Certified',
      'Termite Control Specialist',
      'Bed Bug Heat Treatment Technician'
    ],
    specialties: ['Residential Treatments', 'Termite Inspections', 'Bed Bug Control'],
    bio: 'Amanda excels at making customers feel comfortable and informed throughout the treatment process. She specializes in residential pest control and is known for her thorough inspections and clear communication with homeowners.',
    imageUrl: 'https://images.pexels.com/photos/6896371/pexels-photo-6896371.jpeg',
    rating: 4.7
  }
];