import PageLayout from '@/components/PageLayout';
import { readSiteContent } from '@/lib/content-store';

export const metadata = {
  title: 'Student Achievements - Army Public School',
};

export default async function StudentAchievementsPage() {
  const content = await readSiteContent();
  const student = content.achievements.student;

  return (
    <PageLayout
      title="Student Achievements"
      subtitle="Celebrating Our Champions"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Achievements', href: '/achievements' },
        { label: 'Student' },
      ]}
    >
      <section className="mb-12">
        <p className="text-muted-foreground mb-8 leading-relaxed">{student.intro}</p>
        <h2 className="text-3xl font-bold text-primary mb-6">Sports Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {student.sports.map((achievement) => (
            <div key={achievement.id} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-accent">
              <p className="text-lg font-bold text-primary mb-2">{achievement.sport}</p>
              <p className="text-muted-foreground mb-2">
                <strong>Medals:</strong> {achievement.medals}
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Level:</strong> {achievement.level}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-primary mb-6">Co-Curricular Excellence</h2>
        <div className="space-y-4 mb-12">
          {student.coCurricular.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-6 border border-border flex items-start gap-4"
            >
              <span className="text-2xl">🏆</span>
              <div>
                <p className="font-bold text-primary">{achievement.category}</p>
                <p className="text-muted-foreground">{achievement.achievement}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-primary mb-6">Notable Alumni</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Our alumni have gone on to pursue excellence in various fields including academics, sports, military service, and professional careers. We take immense pride in their achievements.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {student.alumni.map((alumnus) => (
            <div key={alumnus.id} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <p className="font-bold text-primary text-lg">{alumnus.name}</p>
              <p className="text-muted-foreground mt-2">{alumnus.achievement}</p>
            </div>
          ))}
        </div>
      </section>

      {student.imageUrl && (
        <div className="mt-12">
          <img src={student.imageUrl} alt="Student achievements" className="w-full rounded-lg shadow-md object-cover max-h-[420px]" />
        </div>
      )}
    </PageLayout>
  );
}
