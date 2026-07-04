import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'Co-Curricular Activities - Army Public School',
  description: 'Explore our co-curricular schedule and activities.',
};

export default function CCAPage() {
  return (
    <PageLayout
      title="Co-Curricular Activities"
      subtitle="Beyond the Classroom"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'CCA' },
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <section className="mb-8">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold text-primary mb-6">Our CCA Programs</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Co-curricular activities are an integral part of our holistic education system. We believe that
                learning extends beyond textbooks and classrooms. Our diverse range of activities help students
                discover their talents, build confidence, and develop essential life skills.
              </p>

              <div className="space-y-6">
                {[
                  {
                    category: 'Sports',
                    activities: [
                      'Cricket',
                      'Badminton',
                      'Basketball',
                      'Volleyball',
                      'Table Tennis',
                      'Athletics',
                    ],
                  },
                  {
                    category: 'Arts & Music',
                    activities: [
                      'Classical Music',
                      'Western Music',
                      'Dance (Indian & Western)',
                      'Painting',
                      'Sculpture',
                      'Drama',
                    ],
                  },
                  {
                    category: 'Academic Clubs',
                    activities: [
                      'Science Club',
                      'Mathematics Club',
                      'Debating',
                      'Essay Writing',
                      'Quiz Competition',
                      'Coding Club',
                    ],
                  },
                  {
                    category: 'Other Activities',
                    activities: [
                      'NCC',
                      'Scout & Guide',
                      'Community Service',
                      'Environmental Club',
                      'Cultural Fest',
                      'Annual Day',
                    ],
                  },
                ].map((section, index) => (
                  <div key={index} className="border-l-4 border-accent pl-4">
                    <h3 className="text-xl font-bold text-primary mb-3">{section.category}</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {section.activities.map((activity, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="text-accent">→</span>
                          <span className="text-muted-foreground">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div>
          <div className="bg-primary text-primary-foreground rounded-lg p-6 shadow-lg sticky top-24">
            <h3 className="text-xl font-bold mb-4">Schedule</h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold mb-1">Monday-Friday</p>
                <p className="text-primary-foreground/80">3:45 PM - 5:30 PM</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Saturday</p>
                <p className="text-primary-foreground/80">1:30 PM - 4:00 PM</p>
              </div>
              <div className="border-t border-primary-foreground/20 pt-4 mt-4">
                <p className="font-semibold mb-2">Registration</p>
                <p className="text-primary-foreground/80">
                  Students can register for activities at the beginning of each term.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
