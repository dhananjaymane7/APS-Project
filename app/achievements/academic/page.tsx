import PageLayout from '@/components/PageLayout';
import { readSiteContent } from '@/lib/content-store';

export const metadata = {
  title: 'Academic Achievements - Army Public School',
};

export default async function AcademicAchievementsPage() {
  const content = await readSiteContent();
  const academic = content.achievements.academic;

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
          {academic.results.map((result) => (
            <div key={result.id} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-accent">
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {academic.subjects.map((subject) => (
            <div key={subject} className="bg-primary/10 rounded-lg p-4 text-center">
              <p className="font-semibold text-primary">{subject}</p>
              <p className="text-sm text-muted-foreground">Top subject performance</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-primary mb-6">Scholarship & Merit Awards</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">{academic.intro}</p>
        <div className="bg-white rounded-lg shadow-md p-8">
          <ul className="space-y-4">
            {academic.scholarshipAwards.map((award, index) => (
              <li key={`${award}-${index}`} className="flex gap-3 items-start">
                <span className="text-accent font-bold mt-1">★</span>
                <span className="text-muted-foreground">{award}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {academic.imageUrl && (
        <div className="mt-12">
          <img src={academic.imageUrl} alt="Academic achievement" className="w-full rounded-lg shadow-md object-cover max-h-[420px]" />
        </div>
      )}
    </PageLayout>
  );
}
