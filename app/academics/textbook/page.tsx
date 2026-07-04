import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'Textbooks - Army Public School',
  description: 'Approved textbook list for all classes.',
};

export default function TextbookPage() {
  return (
    <PageLayout
      title="Textbooks"
      subtitle="CBSE Prescribed Books"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Academics', href: '/academics' },
        { label: 'Textbooks' },
      ]}
    >
      <div className="bg-white rounded-lg shadow-md p-8 mb-8 border-l-4 border-primary">
        <p className="text-muted-foreground leading-relaxed">
          The following are the CBSE-approved textbooks prescribed for different classes. Students must ensure they have
          the correct editions as per the school's book list. You can procure books from authorized CBSE book sellers or
          the school bookshop.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            section: 'Primary Section (Classes I-V)',
            subjects: [
              'English - Marigold Series (NCERT)',
              'Hindi - Rimjhim Series (NCERT)',
              'Mathematics (NCERT)',
              'EVS - Looking Around (NCERT)',
            ],
          },
          {
            section: 'Secondary Section (Classes VI-VIII)',
            subjects: [
              'English - Honeysuckle & It So Happened (NCERT)',
              'Hindi - Vasant & Bharat ki Khoj (NCERT)',
              'Mathematics (NCERT)',
              'Science (NCERT)',
              'Social Studies (NCERT)',
            ],
          },
          {
            section: 'Senior Section (Classes IX-X)',
            subjects: [
              'English - Beehive & Moments (NCERT)',
              'Hindi - Kshitij & Kritika (NCERT)',
              'Mathematics (NCERT)',
              'Science (NCERT)',
              'Social Studies (NCERT)',
            ],
          },
          {
            section: 'Senior Section (Classes XI-XII)',
            subjects: [
              'English (NCERT) - As per stream',
              'Hindi (NCERT) - As per stream',
              'Physics (NCERT)',
              'Chemistry (NCERT)',
              'Biology (NCERT)',
              'Mathematics (NCERT)',
              'Economics (NCERT)',
              'History (NCERT)',
            ],
          },
        ].map((section, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-6 border border-border"
          >
            <h3 className="text-lg font-bold text-primary mb-4">{section.section}</h3>
            <ul className="space-y-2">
              {section.subjects.map((subject, i) => (
                <li key={i} className="flex gap-2 text-muted-foreground text-sm">
                  <span className="text-accent">✓</span>
                  <span>{subject}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
