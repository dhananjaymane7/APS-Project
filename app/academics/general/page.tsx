import PageLayout from '@/components/PageLayout';
import { ContentCardsGrid } from '@/components/ContentCards';

export const metadata = {
  title: 'Academics - Army Public School',
  description: 'Learn about our academic programs and educational approach.',
};

export default function AcademicsPage() {
  const academicPrograms = [
    {
      id: 1,
      title: 'Primary Section',
      description:
        'Classes I-V focus on foundational skills, conceptual understanding, and holistic development through play-based learning.',
      icon: '📚',
    },
    {
      id: 2,
      title: 'Secondary Section',
      description:
        'Classes VI-VIII emphasize subject expertise, critical thinking, and character development with diverse learning experiences.',
      icon: '🎓',
    },
    {
      id: 3,
      title: 'Senior Section',
      description:
        'Classes IX-XII prepare students for competitive exams and higher education with specialized streams and mentoring.',
      icon: '🏆',
    },
    {
      id: 4,
      title: 'STEM Focus',
      description:
        'Dedicated programs in Science, Technology, Engineering, and Mathematics with hands-on learning experiences.',
      icon: '🔬',
    },
  ];

  return (
    <PageLayout
      title="Academics"
      subtitle="Quality Education with Modern Teaching Methodologies"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Academics' },
      ]}
    >
      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary mb-6">Academic Overview</h2>
        <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-accent">
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our academic program is designed to develop critical thinking, creativity, and problem-solving skills
            while ensuring strong conceptual foundations in all subjects. We follow the CBSE curriculum and
            incorporate the principles of the National Education Policy (NEP) 2020.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We believe in a balanced approach combining traditional teaching methods with modern educational
            technology, project-based learning, and real-world applications to make learning meaningful and engaging.
          </p>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="mb-12">
        <ContentCardsGrid title="Our Academic Programs" cards={academicPrograms} columns={2} />
      </section>

      {/* Key Features */}
      <section>
        <h2 className="text-3xl font-bold text-primary mb-8">Key Features of Our Academics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Qualified Faculty',
              description:
                'Experienced and dedicated teachers with subject expertise and professional development training.',
            },
            {
              title: 'Modern Infrastructure',
              description:
                'Well-equipped labs, computer facilities, and digital learning resources for enhanced education.',
            },
            {
              title: 'Continuous Assessment',
              description:
                'Multiple evaluation methods including tests, projects, and practical activities for comprehensive assessment.',
            },
            {
              title: 'Personalized Attention',
              description:
                'Small class sizes and mentoring programs to ensure each student receives individual attention.',
            },
            {
              title: 'Holistic Development',
              description:
                'Integration of values education, life skills, and co-curricular activities in the curriculum.',
            },
            {
              title: 'Technology Integration',
              description:
                'Smart classrooms, digital learning platforms, and coding programs for 21st-century skills.',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-6 border border-border"
            >
              <h3 className="text-lg font-bold text-primary mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
