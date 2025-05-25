export interface Testimonial {
  id: number;
  name: string;
  location: string;
  service: string;
  rating: number;
  comment: string;
  date: string;
  imageUrl?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Jennifer Adams',
    location: 'Westfield',
    service: 'Termite Control',
    rating: 5,
    comment: 'After discovering termites in our basement, we were devastated. The team responded quickly, explained everything clearly, and treated our home professionally. Six months later and no signs of termites. Their annual inspection plan gives us peace of mind.',
    date: '2024-05-10',
    imageUrl: 'https://images.pexels.com/photos/3767409/pexels-photo-3767409.jpeg'
  },
  {
    id: 2,
    name: 'Robert Wilson',
    location: 'Oakridge',
    service: 'Rodent Control',
    rating: 5,
    comment: 'We had an ongoing mouse problem that we couldn\'t solve on our own. The technician found entry points we never would have noticed and set up a comprehensive prevention system. Haven\'t seen a single rodent since the treatment three months ago.',
    date: '2024-04-22',
    imageUrl: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg'
  },
  {
    id: 3,
    name: 'Maria Sanchez',
    location: 'Riverdale',
    service: 'Cockroach Control',
    rating: 4,
    comment: 'Moved into an apartment with a cockroach issue. The team did a thorough treatment and gave us helpful prevention tips. Took two treatments to completely solve the problem, but their persistence paid off. Very satisfied with the results.',
    date: '2024-03-15',
    imageUrl: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg'
  },
  {
    id: 4,
    name: 'James Thompson',
    location: 'Greenville',
    service: 'Mosquito Control',
    rating: 5,
    comment: 'We couldn\'t enjoy our backyard because of mosquitoes. After the seasonal treatment plan, the difference is night and day. We can finally use our outdoor space again for evening gatherings without being eaten alive!',
    date: '2024-06-02',
    imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
  },
  {
    id: 5,
    name: 'Susan Miller',
    location: 'Lakeside',
    service: 'Bed Bug Treatment',
    rating: 5,
    comment: 'Discovering bed bugs was a nightmare. The heat treatment process was thoroughly explained, and the team was professional and discreet. Complete elimination in one treatment. Worth every penny for the peace of mind.',
    date: '2024-02-18',
    imageUrl: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg'
  },
  {
    id: 6,
    name: 'David Chen',
    location: 'Millfield',
    service: 'Pest Prevention Plan',
    rating: 4,
    comment: 'We signed up for the annual prevention plan after having several pest issues in our new home. The quarterly treatments have kept everything at bay, and it\'s great knowing we can call if anything pops up between scheduled visits.',
    date: '2024-05-30',
    imageUrl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
  }
];