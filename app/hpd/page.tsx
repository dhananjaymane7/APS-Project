import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'HPD - Army Public School',
  description: 'Human Resource and Personnel Development information.',
};

export default function HPDPage() {
  return (
    <PageLayout
      title="HPD - Human Resource Development"
      subtitle="Building Excellence Through People"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'HPD' },
      ]}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary mb-6">Our People, Our Strength</h2>
        <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-accent mb-8">
          <p className="text-muted-foreground leading-relaxed mb-6">
            The success of Army Public School Khadakwasla is built on the foundation of our dedicated and
            professional team. Our human resource development programs focus on continuous learning, professional
            growth, and excellence in service delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-8 border border-border">
            <h3 className="text-2xl font-bold text-primary mb-4">Staff Strength</h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-muted-foreground">Teaching Staff</span>
                <span className="font-bold text-primary">60+</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Non-Teaching Staff</span>
                <span className="font-bold text-primary">35+</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Management</span>
                <span className="font-bold text-primary">8</span>
              </li>
              <li className="flex justify-between border-t border-border pt-3">
                <span className="font-semibold text-primary">Total</span>
                <span className="font-bold text-accent">100+</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-lg p-8 border border-border">
            <h3 className="text-2xl font-bold text-primary mb-4">Development Programs</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-accent">✓</span>
                <span>Regular Training & Workshops</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">✓</span>
                <span>Professional Certification Programs</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">✓</span>
                <span>Educational Tours & Exposures</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">✓</span>
                <span>Mentoring & Leadership Development</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Recruitment Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary mb-6">Join Our Team</h2>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-muted-foreground leading-relaxed mb-6">
            We are always looking for talented and dedicated individuals to join our school community. If you are
            passionate about education and would like to contribute to building the future leaders of our nation,
            we'd love to hear from you.
          </p>
          <a
            href="/recruitment"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition font-semibold"
          >
            View Current Openings
          </a>
        </div>
      </section>

      {/* Qualifications Section */}
      <section>
        <h2 className="text-3xl font-bold text-primary mb-6">Staff Qualifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Academic Qualifications',
              items: ['B.Tech / B.Sc', 'M.Tech / M.Sc', 'B.A / B.Com', 'Ph.D', 'Diploma'],
            },
            {
              title: 'Teaching Qualifications',
              items: ['B.Ed', 'M.Ed', 'PGDCA', 'NTT', 'D.Ed'],
            },
            {
              title: 'Additional Certifications',
              items: ['NET / GATE', 'GMAT / GRE', 'International Language Certificates', 'Professional Certifications'],
            },
          ].map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 border-t-4 border-accent"
            >
              <h3 className="text-lg font-bold text-primary mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="flex gap-2 text-muted-foreground text-sm">
                    <span className="text-accent">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
