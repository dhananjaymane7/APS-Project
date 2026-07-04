import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'Teachers Training - Army Public School',
};

export default function TeachersTrainingPage() {
  return (
    <PageLayout
      title="Teachers Training & Professional Development"
      subtitle="Continuous Learning for Excellence"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Academics', href: '/academics' },
        { label: 'Teachers Training' },
      ]}
    >
      <section className="mb-12">
        <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-primary mb-8">
          <p className="text-muted-foreground leading-relaxed">
            We believe that continuous professional development of teachers is essential for maintaining educational
            excellence. Our teachers participate in regular training programs, workshops, and seminars to enhance their
            pedagogical skills and subject expertise.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-primary mb-6">Professional Development Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { program: 'Pedagogical Training', frequency: 'Quarterly' },
            { program: 'Subject Enhancement Workshops', frequency: 'Half-yearly' },
            { program: 'Digital Literacy Programs', frequency: 'Monthly' },
            { program: 'Leadership Development', frequency: 'Annual' },
            { program: 'Assessment & Evaluation', frequency: 'Quarterly' },
            { program: 'Child Psychology & Counseling', frequency: 'Half-yearly' },
            { program: 'NEP Implementation Training', frequency: 'As needed' },
            { program: 'International Exchange Programs', frequency: 'Annual' },
          ].map((item, i) => (
            <div key={i} className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-6 border border-border">
              <p className="font-bold text-primary">{item.program}</p>
              <p className="text-sm text-muted-foreground mt-2">Frequency: {item.frequency}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-primary mb-6">Training Outcomes</h2>
        <ul className="space-y-3 text-muted-foreground">
          {[
            'Improved teaching methodologies and classroom management',
            'Better understanding of student needs and learning styles',
            'Enhanced use of technology in education',
            'Professional certifications and credentials',
            'Increased engagement and collaboration among staff',
            'Better alignment with national education policies',
          ].map((outcome, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-accent font-bold">✓</span>
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
      </section>
    </PageLayout>
  );
}
