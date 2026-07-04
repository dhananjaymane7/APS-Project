import PageLayout from '@/components/PageLayout';
import { FileText } from 'lucide-react';

export const metadata = {
  title: 'Circulars - Army Public School',
};

export default function CircularsPage() {
  const circulars = [
    {
      date: 'March 15, 2024',
      title: 'Academic Year 2024-25 Schedule Released',
      type: 'Academic',
    },
    {
      date: 'March 10, 2024',
      title: 'Annual Examination Guidelines',
      type: 'Examination',
    },
    {
      date: 'March 5, 2024',
      title: 'Updated COVID-19 Safety Protocols',
      type: 'Health',
    },
    {
      date: 'February 28, 2024',
      title: 'Summer Camp Registration Open',
      type: 'Activity',
    },
    {
      date: 'February 20, 2024',
      title: 'Revised School Uniform Policy',
      type: 'Administrative',
    },
    {
      date: 'February 15, 2024',
      title: 'CBSE Syllabus Update for Classes X & XII',
      type: 'Academic',
    },
  ];

  return (
    <PageLayout
      title="School Circulars"
      subtitle="Important Announcements and Updates"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Academics', href: '/academics' },
        { label: 'Circulars' },
      ]}
    >
      <section className="mb-12">
        <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-primary mb-8">
          <p className="text-muted-foreground leading-relaxed">
            This section contains all important circulars and announcements issued by the school administration.
            Students and parents are requested to read these carefully and follow the instructions accordingly.
          </p>
        </div>

        <div className="space-y-4">
          {circulars.map((circular, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 border border-border hover:shadow-md transition flex items-start gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <h3 className="font-bold text-primary text-lg">{circular.title}</h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent/20 text-accent w-fit">
                    {circular.type}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{circular.date}</p>
              </div>
              <button className="text-accent hover:text-primary transition font-semibold text-sm flex-shrink-0">
                Download
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Archive */}
      <section>
        <h2 className="text-2xl font-bold text-primary mb-6">Circular Archives</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['2024', '2023', '2022', '2021'].map((year, i) => (
            <a
              key={i}
              href="#"
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition border border-border"
            >
              <p className="text-2xl font-bold text-primary">{year}</p>
              <p className="text-sm text-muted-foreground">View Circulars</p>
            </a>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
