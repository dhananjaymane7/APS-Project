import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'Awards & Achievements - Army Public School',
  description: 'Celebrate the achievements and awards of our students and school.',
};

export default function AwardsPage() {
  const achievements = [
    {
      year: 2024,
      title: 'National Science Olympiad',
      description: 'Students achieved 1st position in National Science Olympiad competition.',
      category: 'Academic',
    },
    {
      year: 2024,
      title: 'Inter-School Sports Championship',
      description: 'Won overall championship in district-level inter-school sports competition.',
      category: 'Sports',
    },
    {
      year: 2023,
      title: 'Math Genius Award',
      description: 'Three students selected for state-level mathematics competition.',
      category: 'Academic',
    },
    {
      year: 2023,
      title: 'Cultural Excellence',
      description: 'Won first prize in annual inter-school cultural festival.',
      category: 'Co-Curricular',
    },
    {
      year: 2022,
      title: 'Green School Certificate',
      description: 'Awarded Green School Certificate for environmental initiatives.',
      category: 'Environmental',
    },
    {
      year: 2022,
      title: 'Debate Championship',
      description: 'Students emerged winners in national debate competition.',
      category: 'Academic',
    },
  ];

  const categories = ['All', 'Academic', 'Sports', 'Co-Curricular', 'Environmental'];

  return (
    <PageLayout
      title="Awards & Achievements"
      subtitle="Celebrating Excellence"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Achievements', href: '/achievements' },
        { label: 'Awards' },
      ]}
    >
      <section className="mb-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8 border-l-4 border-accent">
          <h2 className="text-2xl font-bold text-primary mb-4">Our Achievements</h2>
          <p className="text-muted-foreground">
            Army Public School Khadakwasla takes immense pride in the achievements of its students across academics,
            sports, and co-curricular activities. Our holistic approach to education ensures that every student gets
            opportunities to excel in their areas of interest and talent.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                category === 'All'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold flex-shrink-0">
                  🏆
                </div>
                {index < achievements.length - 1 && <div className="w-1 h-16 bg-border mt-2"></div>}
              </div>
              <div className="pb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-primary">{achievement.title}</h3>
                  <span className="text-sm bg-accent/20 text-accent px-3 py-1 rounded-full font-semibold">
                    {achievement.category}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-2 font-semibold">{achievement.year}</p>
                <p className="text-muted-foreground">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-primary mb-8">By The Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '98%', label: 'Pass Rate' },
            { number: '45+', label: 'Scholarships' },
            { number: '120+', label: 'Awards Won' },
            { number: '85%', label: 'Merit Students' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 text-center border border-border"
            >
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</p>
              <p className="text-muted-foreground font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
