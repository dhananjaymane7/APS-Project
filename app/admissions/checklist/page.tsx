import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'Admission Checklist - Army Public School',
};

export default function ChecklistPage() {
  return (
    <PageLayout
      title="Admission Checklist"
      subtitle="Everything You Need for Smooth Admission"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Admissions', href: '/admissions/rules' },
        { label: 'Checklist' },
      ]}
    >
      <div className="max-w-3xl mx-auto">
        <div className="space-y-6">
          {[
            {
              section: 'Before Admission',
              items: [
                'Check age eligibility criteria',
                'Download admission form from website',
                'Prepare required documents',
                'Register for entrance examination',
                'Appear for entrance exam and interview',
              ],
            },
            {
              section: 'During Admission',
              items: [
                'Bring all original documents',
                'Obtain Transfer Certificate from previous school',
                'Medical fitness certificate',
                'Character certificate from previous school',
                'Photograph (passport size) - 4 copies',
                'Proof of residence',
                'Birth certificate',
              ],
            },
            {
              section: 'After Admission',
              items: [
                'Complete fee payment',
                'Collect school uniform',
                'Purchase prescribed books and stationery',
                'Get student ID card made',
                'Submit completed forms to office',
                'Collect school calendar and rules booklet',
                'Register for co-curricular activities',
              ],
            },
          ].map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">{section.section}</h3>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-accent rounded" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-accent/10 rounded-lg p-8 border border-accent">
          <h3 className="text-2xl font-bold text-primary mb-4">Important Reminders</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-accent font-bold">⚠️</span>
              <span>Do not submit original documents; always bring certified copies</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">⚠️</span>
              <span>Ensure all documents are properly filled and signed by authorized persons</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">⚠️</span>
              <span>Complete admission process within the specified deadline</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">⚠️</span>
              <span>Keep a copy of all submitted documents for your records</span>
            </li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
