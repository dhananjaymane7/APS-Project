import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'Academic Calendar - Army Public School',
};

export default function CalendarPage() {
  return (
    <PageLayout
      title="Academic Calendar"
      subtitle="2024-2025 Session"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Academics', href: '/academics' },
        { label: 'Calendar' },
      ]}
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-primary text-primary-foreground">
              <th className="px-6 py-4 text-left font-bold">Event</th>
              <th className="px-6 py-4 text-left font-bold">Dates</th>
              <th className="px-6 py-4 text-left font-bold">Duration</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {[
              { event: 'First Term Begins', dates: 'June 1, 2024', duration: '10 weeks' },
              { event: 'Mid Term Exam (Primary)', dates: 'July 8-12, 2024', duration: '5 days' },
              { event: 'Summer Break', dates: 'May 15 - May 31, 2024', duration: '17 days' },
              { event: 'Second Term Begins', dates: 'September 1, 2024', duration: '11 weeks' },
              { event: 'Diwali Break', dates: 'October 2-8, 2024', duration: '7 days' },
              { event: 'Annual Examination', dates: 'March 10-28, 2025', duration: '3 weeks' },
            ].map((item, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-muted/50'}>
                <td className="px-6 py-4 font-semibold text-primary">{item.event}</td>
                <td className="px-6 py-4">{item.dates}</td>
                <td className="px-6 py-4">{item.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageLayout>
  );
}
