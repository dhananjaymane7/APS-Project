import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'Student Achievements - Army Public School',
};

export default function StudentAchievementsPage() {
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
        <h2 className="text-3xl font-bold text-primary mb-6">Sports Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[
            { sport: 'Cricket', medals: 'Gold', level: 'State Level' },
            { sport: 'Badminton', medals: '2 Gold, 1 Silver', level: 'National' },
            { sport: 'Basketball', medals: 'Silver', level: 'State Level' },
            { sport: 'Athletics', medals: '5 Gold Medals', level: 'District' },
          ].map((achievement, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-accent">
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
        <div className="space-y-4">
          {[
            { category: 'Debate', achievement: '1st Prize, National Inter-School Debate' },
            { category: 'Drama', achievement: 'Best Performance Award, State Cultural Fest' },
            { category: 'Music', achievement: 'Gold Medal, National Music Competition' },
            { category: 'Art & Design', achievement: '2nd Prize, All India Art Exhibition' },
            { category: 'Science Project', achievement: '1st Prize, Regional Science Fair' },
            { category: 'Essay Writing', achievement: '3rd Prize, National Essay Competition' },
          ].map((achievement, i) => (
            <div
              key={i}
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
          Our alumni have gone on to pursue excellence in various fields including academics, sports, military
          service, and professional careers. We take immense pride in their achievements.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: 'Raj Kumar Singh', achievement: 'NDA Qualified, Commissioned Officer' },
            { name: 'Priya Sharma', achievement: 'NEET Qualified, Medical Student' },
            { name: 'Arun Patel', achievement: 'IIT-JEE Qualified, Engineer' },
            { name: 'Neha Verma', achievement: 'UPSC Exam Qualifier, IAS Officer' },
          ].map((alumnus, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <p className="font-bold text-primary text-lg">{alumnus.name}</p>
              <p className="text-muted-foreground mt-2">{alumnus.achievement}</p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
