import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'Management - Army Public School',
};

export default function ManagementPage() {
  return (
    <PageLayout
      title="School Management"
      subtitle="Leadership and Administration"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'Management' },
      ]}
    >
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Principal',
              name: 'Mrs. Yasmia Kaur',
              qualification: 'B.Ed, M.Ed',
              experience: '15+ years',
            },
            {
              title: 'Vice Principal (Academics)',
              name: 'Dr. R.K. Sharma',
              qualification: 'M.Sc, Ph.D, B.Ed',
              experience: '12+ years',
            },
            {
              title: 'Vice Principal (Administration)',
              name: 'Col. Arun Kumar (Retd.)',
              qualification: 'B.A, M.A, B.Ed',
              experience: '20+ years',
            },
            {
              title: 'Head - Primary Section',
              name: 'Ms. Priya Singh',
              qualification: 'B.Ed, D.Ed',
              experience: '10+ years',
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-8 border-l-4 border-primary hover:shadow-lg transition"
            >
              <h3 className="text-lg font-bold text-primary mb-2">{member.title}</h3>
              <p className="text-xl font-semibold text-primary mb-4">{member.name}</p>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  <strong>Qualification:</strong> {member.qualification}
                </p>
                <p>
                  <strong>Experience:</strong> {member.experience}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-primary mb-6">Administrative Structure</h2>
        <div className="bg-white rounded-lg shadow-md p-8 border border-border">
          <div className="space-y-6">
            {[
              'Academic Division - Curriculum, Teaching Methods, Assessment',
              'Administrative Division - Finance, Human Resources, Operations',
              'Student Welfare Division - Discipline, Health, Counseling',
              'Infrastructure Division - Maintenance, Security, Development',
              'Community Engagement Division - Parent Relations, Events',
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <span className="text-muted-foreground pt-1">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
