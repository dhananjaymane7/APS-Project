import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'Academic Achievements - Army Public School',
};

export default function AcademicAchievementsPage() {
  return (
    <PageLayout
      title="Academic Achievements"
      subtitle="Excellence in Academics"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Achievements', href: '/achievements' },
        { label: 'Academic' },
      ]}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary mb-6">Board Examination Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { exam: 'Class X (2024)', passPercentage: '98%', toppers: '3' },
            { exam: 'Class XII (2024)', passPercentage: '97%', toppers: '2' },
            { exam: 'Class X (2023)', passPercentage: '96%', toppers: '4' },
          ].map((result, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-accent">
              <p className="text-lg font-bold text-primary mb-4">{result.exam}</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex justify-between">
                  <span>Pass Percentage:</span>
                  <span className="font-bold text-accent">{result.passPercentage}</span>
                </li>
                <li className="flex justify-between">
                  <span>Toppers:</span>
                  <span className="font-bold text-accent">{result.toppers}</span>
                </li>
              </ul>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-primary mb-6">Subject-wise Excellence</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'Mathematics',
            'Science',
            'English',
            'Social Studies',
            'Hindi',
            'Physics',
            'Chemistry',
            'Biology',
          ].map((subject, i) => (
            <div key={i} className="bg-primary/10 rounded-lg p-4 text-center">
              <p className="font-semibold text-primary">{subject}</p>
              <p className="text-sm text-muted-foreground">Avg: 85%</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-primary mb-6">Scholarship & Merit Awards</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Our students have earned numerous scholarships and merit-based awards from various national and state-level
          organizations. This is a testament to their dedication and academic excellence.
        </p>
        <div className="bg-white rounded-lg shadow-md p-8">
          <ul className="space-y-4">
            {[
              'National Scholarship Scheme - 5 students',
              'State Merit Scholarship - 12 students',
              'Excellence in Science - 8 awardees',
              'Mathematics Excellence - 6 awardees',
              'Language Skills Recognition - 10 awardees',
            ].map((award, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="text-accent font-bold mt-1">★</span>
                <span className="text-muted-foreground">{award}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageLayout>
  );
}
