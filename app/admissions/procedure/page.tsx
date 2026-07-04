import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'Admission Procedure - Army Public School',
  description: 'Learn about our admission process, requirements, and how to apply.',
};

export default function AdmissionProcedurePage() {
  const steps = [
    {
      number: 1,
      title: 'Application Submission',
      description: 'Complete the admission application form with required details and submit along with documents.',
    },
    {
      number: 2,
      title: 'Document Verification',
      description: 'School office verifies submitted documents and contacts for initial screening.',
    },
    {
      number: 3,
      title: 'Entrance Examination',
      description: 'Eligible candidates appear for entrance examination based on their class and academic level.',
    },
    {
      number: 4,
      title: 'Interview',
      description: 'Shortlisted candidates and parents meet with the school administration for interaction.',
    },
    {
      number: 5,
      title: 'Merit List',
      description: 'Final merit list is prepared based on entrance exam performance and interview.',
    },
    {
      number: 6,
      title: 'Admission Confirmation',
      description: 'Selected candidates complete final registration and fee submission.',
    },
  ];

  return (
    <PageLayout
      title="Admission Procedure"
      subtitle="Step-by-Step Guidance for New Admissions"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Admissions', href: '/admissions/rules' },
        { label: 'Admission Procedure' },
      ]}
    >
      {/* Overview */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 border-l-4 border-primary">
          <h2 className="text-2xl font-bold text-primary mb-4">Admission Process Overview</h2>
          <p className="text-muted-foreground">
            We follow a transparent and merit-based admission process to ensure that deserving candidates get the
            opportunity to study at Army Public School Khadakwasla. Our admission process is designed to identify
            students with academic aptitude and the potential to contribute to our school community.
          </p>
        </div>
      </section>

      {/* Step-by-step Process */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary mb-8">Step-by-Step Process</h2>
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={step.number} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  {step.number}
                </div>
                {index < steps.length - 1 && <div className="w-1 h-12 bg-border mt-2"></div>}
              </div>
              <div className="pt-2 pb-6">
                <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Documents Required */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary mb-8">Documents Required</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-accent">
            <h3 className="text-lg font-bold text-primary mb-4">For Fresh Admission</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-accent">✓</span>
                <span>Birth Certificate (attested photocopy)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">✓</span>
                <span>Previous school transfer certificate</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">✓</span>
                <span>Previous academic records/mark sheets</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">✓</span>
                <span>Passport size photographs (4 nos.)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">✓</span>
                <span>Proof of residence</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">✓</span>
                <span>Medical certificate</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
            <h3 className="text-lg font-bold text-primary mb-4">For Internal Transfer</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-accent">✓</span>
                <span>School transfer certificate</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">✓</span>
                <span>Previous academic records</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">✓</span>
                <span>Character certificate</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">✓</span>
                <span>Conduct report</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">✓</span>
                <span>Attendance record</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="bg-blue-50 rounded-lg p-8 border border-border">
        <h2 className="text-2xl font-bold text-primary mb-4">Important Information</h2>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex gap-3">
            <span className="text-accent font-bold">•</span>
            <span>
              Admissions are done based on merit and performance in entrance examination and personal interview.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-accent font-bold">•</span>
            <span>
              Preference is given to children of serving and retired defence personnel, as per AWES norms.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-accent font-bold">•</span>
            <span>
              Once selected, students must complete registration within the stipulated time frame to secure admission.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-accent font-bold">•</span>
            <span>
              All documents submitted during admission become the property of the school and are not returned.
            </span>
          </li>
        </ul>
      </section>
    </PageLayout>
  );
}
