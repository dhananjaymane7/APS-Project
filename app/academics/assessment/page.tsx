import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'Assessment - Army Public School',
};

export default function AssessmentPage() {
  return (
    <PageLayout
      title="Student Assessment"
      subtitle="Comprehensive Evaluation Systems"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Academics', href: '/academics' },
        { label: 'Assessment' },
      ]}
    >
      <section className="mb-12">
        <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-primary mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Assessment Philosophy</h2>
          <p className="text-muted-foreground leading-relaxed">
            We follow a comprehensive assessment approach that evaluates students across multiple dimensions including
            academic performance, conceptual understanding, practical skills, and co-curricular abilities.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-primary mb-6">Assessment Methods</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Formative Assessment',
              description: 'Continuous evaluation through class tests, assignments, and projects',
            },
            {
              title: 'Summative Assessment',
              description: 'Terminal exams - Half yearly and Annual examinations',
            },
            {
              title: 'Practical Evaluation',
              description: 'Laboratory work, field studies, and hands-on projects',
            },
            {
              title: 'Co-Curricular Assessment',
              description: 'Evaluation of participation in sports, clubs, and activities',
            },
          ].map((method, i) => (
            <div key={i} className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-6 border border-border">
              <h3 className="font-bold text-primary mb-2">{method.title}</h3>
              <p className="text-muted-foreground text-sm">{method.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-primary mb-6">Reporting & Feedback</h2>
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-accent">
            <p className="font-bold text-primary mb-2">Progress Reports</p>
            <p className="text-muted-foreground text-sm">
              Issued after each term with detailed subject-wise performance and feedback
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-accent">
            <p className="font-bold text-primary mb-2">Parent-Teacher Meetings</p>
            <p className="text-muted-foreground text-sm">
              Conducted twice a year to discuss student progress and development
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-accent">
            <p className="font-bold text-primary mb-2">Feedback Sessions</p>
            <p className="text-muted-foreground text-sm">
              One-on-one discussions with students about their performance and improvement areas
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
