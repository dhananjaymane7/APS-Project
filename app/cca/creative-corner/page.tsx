import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'Student Creative Corner - Army Public School',
};

export default function CreativeCornerPage() {
  return (
    <PageLayout
      title="Student Creative Corner"
      subtitle="Celebrating Student Talents"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'CCA', href: '/cca/schedule' },
        { label: 'Creative Corner' },
      ]}
    >
      <section className="mb-12">
        <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-accent mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Showcase Your Talent</h2>
          <p className="text-muted-foreground leading-relaxed">
            The Student Creative Corner is a dedicated space for students to display their artistic talents, literary
            works, scientific projects, and creative endeavors. This platform celebrates the diverse talents of our
            student community and encourages creative expression.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { category: 'Visual Arts', count: '42 submissions', icon: '🎨' },
            { category: 'Writing & Poetry', count: '38 submissions', icon: '✍️' },
            { category: 'Photography', count: '25 submissions', icon: '📸' },
            { category: 'Science Projects', count: '19 submissions', icon: '🔬' },
            { category: 'Music & Performance', count: '31 submissions', icon: '🎵' },
            { category: 'Digital Art', count: '28 submissions', icon: '🖥️' },
          ].map((item, i) => (
            <div key={i} className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 border border-border hover:shadow-lg transition">
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <h3 className="font-bold text-primary mb-2">{item.category}</h3>
              <p className="text-sm text-muted-foreground">{item.count}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-primary mb-6">How to Submit Your Work</h2>
        <ol className="space-y-4">
          {[
            'Submit your work in digital or physical format to your class teacher',
            'Include your name, class, and category of submission',
            'Ensure your work is original and does not violate any intellectual property rights',
            'Submission deadline is on the last Friday of each month',
            'Selected works will be displayed in the Creative Corner gallery',
            'Best submissions will be recognized with certificates',
          ].map((step, i) => (
            <li key={i} className="flex gap-4">
              <span className="font-bold text-primary bg-accent/20 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                {i + 1}
              </span>
              <span className="text-muted-foreground pt-1">{step}</span>
            </li>
          ))}
        </ol>
      </section>
    </PageLayout>
  );
}
