import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'Recruitment - Army Public School',
  description: 'Join our team. Explore current job openings and apply today.',
};

export default function RecruitmentPage() {
  const openings = [
    {
      position: 'PGT Mathematics',
      department: 'Academic',
      experience: '3+ years',
      status: 'Open',
    },
    {
      position: 'PGT English',
      department: 'Academic',
      experience: '2+ years',
      status: 'Open',
    },
    {
      position: 'TGT Science',
      department: 'Academic',
      experience: '2+ years',
      status: 'Open',
    },
    {
      position: 'Primary Teacher',
      department: 'Primary',
      experience: '1+ years',
      status: 'Open',
    },
    {
      position: 'Computer Teacher',
      department: 'Academic',
      experience: '2+ years',
      status: 'Closed',
    },
    {
      position: 'Sports Coach',
      department: 'Sports',
      experience: '3+ years',
      status: 'Open',
    },
  ];

  return (
    <PageLayout
      title="Recruitment"
      subtitle="Join Our Team of Dedicated Educators"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Recruitment' },
      ]}
    >
      <section className="mb-12">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 border-l-4 border-primary mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Why Join Army Public School?</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span>Competitive salary and benefits</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span>Professional development opportunities</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span>State-of-the-art infrastructure</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span>Supportive and collaborative work environment</span>
            </li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold text-primary mb-6">Current Openings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {openings.map((opening, index) => (
            <div
              key={index}
              className={`rounded-lg p-6 border-l-4 transition ${
                opening.status === 'Open'
                  ? 'bg-white border-accent shadow-md hover:shadow-lg'
                  : 'bg-gray-50 border-muted-foreground/30'
              }`}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-bold text-primary">{opening.position}</h3>
                  <p className="text-sm text-muted-foreground">{opening.department}</p>
                </div>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    opening.status === 'Open'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {opening.status}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                <strong>Experience:</strong> {opening.experience}
              </p>
              {opening.status === 'Open' && (
                <button className="text-accent font-semibold hover:text-primary transition text-sm">
                  Apply Now →
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Application Process */}
      <section className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-primary mb-8">Application Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              step: 1,
              title: 'Submit Application',
              description: 'Fill and submit the online application form with required documents.',
            },
            {
              step: 2,
              title: 'Document Verification',
              description: 'Our HR team will verify your credentials and qualifications.',
            },
            {
              step: 3,
              title: 'Interview',
              description: 'If shortlisted, you will be called for a personal interview.',
            },
            {
              step: 4,
              title: 'Offer Letter',
              description: 'Successful candidates will receive an official offer letter.',
            },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mx-auto mb-4 text-lg">
                {item.step}
              </div>
              <h3 className="font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
