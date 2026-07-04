import PageLayout from '@/components/PageLayout';
import { ContentCardsGrid } from '@/components/ContentCards';

export const metadata = {
  title: 'Infrastructure - Army Public School',
  description: 'Explore our world-class facilities and infrastructure.',
};

export default function InfrastructurePage() {
  const facilities = [
    {
      id: 1,
      title: 'Modern Classrooms',
      description:
        'Well-ventilated, equipped with smart boards, and conducive learning environment for all age groups.',
      icon: '🏫',
    },
    {
      id: 2,
      title: 'Science Laboratories',
      description: 'Physics, Chemistry, and Biology labs with modern equipment for hands-on learning.',
      icon: '🔬',
    },
    {
      id: 3,
      title: 'Computer Labs',
      description: 'Multiple computer labs with latest technology and internet connectivity.',
      icon: '💻',
    },
    {
      id: 4,
      title: 'Library',
      description: 'Comprehensive library with thousands of books, journals, and digital resources.',
      icon: '📚',
    },
    {
      id: 5,
      title: 'Sports Facilities',
      description:
        'Cricket ground, basketball court, badminton court, and athletic track for physical development.',
      icon: '⚽',
    },
    {
      id: 6,
      title: 'Auditorium',
      description: 'State-of-the-art auditorium with modern sound and lighting systems.',
      icon: '🎭',
    },
    {
      id: 7,
      title: 'Cafeteria',
      description: 'Hygienic cafeteria serving nutritious meals and refreshments.',
      icon: '🍽️',
    },
    {
      id: 8,
      title: 'Medical Center',
      description: 'Well-equipped medical center with trained staff for student health and safety.',
      icon: '⚕️',
    },
  ];

  return (
    <PageLayout
      title="Our Infrastructure"
      subtitle="World-Class Facilities for Comprehensive Development"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'Infrastructure' },
      ]}
    >
      <section className="mb-12">
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Army Public School Khadakwasla is equipped with state-of-the-art infrastructure designed to provide a
          conducive learning environment. Our facilities support both academic excellence and overall development of
          students.
        </p>
        <ContentCardsGrid title="Our Facilities" cards={facilities} columns={4} />
      </section>
    </PageLayout>
  );
}
