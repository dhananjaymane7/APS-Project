export type SchoolVideo = {
  id: string;
  title: string;
  category: 'Gallery' | 'Events' | 'Sports' | 'Academics' | 'Campus Life';
  section: 'gallery' | 'home' | 'events' | 'sports' | 'academics';
  videoUrl: string;
  posterUrl?: string;
  isPublished?: boolean;
};

function inferCategory(name: string): SchoolVideo['category'] {
  const n = name.toLowerCase();
  if (n.includes('sports')) return 'Sports';
  if (n.includes('event') || n.includes('assembly')) return 'Events';
  if (n.includes('academic') || n.includes('class')) return 'Academics';
  if (n.includes('campus') || n.includes('school')) return 'Campus Life';
  return 'Gallery';
}

export const schoolVideos: SchoolVideo[] = [
  {
    id: '1',
    title: 'Campus Tour',
    category: inferCategory('campus-tour.mp4'),
    section: 'gallery',
    videoUrl: '/videos/campus-tour.mp4',
  },
  {
    id: '2',
    title: 'Annual Sports Day',
    category: inferCategory('sports-day.mp4'),
    section: 'sports',
    videoUrl: '/videos/sports-day.mp4',
  },
  {
    id: '3',
    title: 'School Event',
    category: inferCategory('event.mp4'),
    section: 'events',
    videoUrl: '/videos/event.mp4',
  },
];
