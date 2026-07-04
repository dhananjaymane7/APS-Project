import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'Admission Rules - Army Public School',
  description: 'Admission policies and rules.',
};

export default function AdmissionRulesPage() {
  return (
    <PageLayout
      title="Admission Rules & Policies"
      subtitle="Fair and Transparent Admission Process"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Admissions' },
      ]}
    >
      <div className="max-w-4xl mx-auto">
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-primary">
            <h2 className="text-3xl font-bold text-primary mb-6">General Rules for Admission</h2>
            <ol className="space-y-6 text-muted-foreground">
              {[
                {
                  title: 'Merit-Based Selection',
                  description:
                    'Admissions are based on merit as determined by entrance examination and interview performance.',
                },
                {
                  title: 'Age Criteria',
                  description:
                    'Candidates must fulfill the age requirements as per CBSE guidelines for their respective classes.',
                },
                {
                  title: 'Preference to Defence Wards',
                  description:
                    'As per AWES norms, preference is given to wards of serving and retired defence personnel.',
                },
                {
                  title: 'Document Verification',
                  description:
                    'All submitted documents must be original or attested by authorized personnel. Verification is mandatory.',
                },
                {
                  title: 'Health & Conduct',
                  description:
                    'Candidates must be in good physical and mental health, as verified by the school medical officer.',
                },
                {
                  title: 'Anti-Ragging Policy',
                  description:
                    'The school has a strict anti-ragging policy. Any violation will result in dismissal from the school.',
                },
                {
                  title: 'Fee Payment',
                  description:
                    'Selected candidates must complete fee payment within the stipulated time to confirm admission.',
                },
                {
                  title: 'Discipline & Conduct',
                  description:
                    'Students are expected to maintain discipline and conduct themselves in accordance with school rules.',
                },
              ].map((rule, index) => (
                <li key={index} className="flex gap-4">
                  <span className="text-primary font-bold flex-shrink-0 w-8">{index + 1}.</span>
                  <div>
                    <h3 className="font-bold text-primary mb-1">{rule.title}</h3>
                    <p>{rule.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Important Information</h2>
          <div className="space-y-4">
            {[
              {
                title: 'Non-Refundable Registration Fee',
                content: 'The registration fee paid during admission is non-refundable.',
              },
              {
                title: 'No Refund of Annual Deposits',
                content:
                  'Annual deposits for labs and library are refundable only at the end of the final year of the student.',
              },
              {
                title: 'School Reserves Right',
                content:
                  'The school reserves the right to cancel admission if any information provided is found to be false or misleading.',
              },
              {
                title: 'Grievance Redressal',
                content:
                  'Any grievances regarding admission can be submitted to the school administration for redressal.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 border-l-4 border-accent">
                <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.content}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
