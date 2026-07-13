import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'Admission Procedure - Army Public School',
  description:
    'Admission procedure, eligibility, admission test, age criteria and required documents.',
};

export default function AdmissionProcedurePage() {
  const admissionSteps = [
    {
  number: 1,
  title: 'Visit ERP Admission Portal',
  description: (
    <>
      Visit the Army Public School ERP Admission Portal using the link provided by the school:{' '}
      <a
        href="https://erp.awesindia.edu.in/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline"
      >
        https://erp.awesindia.edu.in/
      </a>
    </>
  ),
},
    {
      number: 2,
      title: 'Register',
      description:
        'Register using a valid email ID and mobile number.',
    },
    {
      number: 3,
      title: 'Fill Admission Form',
      description:
        'Fill in all required details carefully and accurately.',
    },
    {
      number: 4,
      title: 'Upload Documents',
      description:
        'Upload scanned copies of all required documents.',
    },
    {
      number: 5,
      title: 'Pay Admission Fee',
      description:
        'Pay ₹100 as the admission form fee through the online portal.',
    },
    {
      number: 6,
      title: 'Confirmation',
      description:
        'After successful submission, you will receive an online confirmation.',
    },
  ];

  const ageCriteria = [
    ['I', '5 Years'],
    ['II', '6 Years'],
    ['III', '7 Years'],
    ['IV', '8 Years'],
    ['V', '9 Years'],
    ['VI', '10 Years'],
    ['VII', '11 Years'],
    ['VIII', '12 Years'],
    ['IX', '13 Years'],
    ['X', '14 Years'],
  ];

  return (
    <PageLayout
      title="Admission Procedure"
      subtitle="Guidelines for Admission to Army Public School"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Admissions', href: '/admissions/rules' },
        { label: 'Admission Procedure' },
      ]}
    >
      {/* Overview */}

      <section className="mb-12">
        <div className="rounded-lg border-l-4 border-primary bg-gradient-to-r from-primary/10 to-accent/10 p-8">
          <h2 className="mb-4 text-2xl font-bold text-primary">
            Admission Process
          </h2>

          <p className="text-muted-foreground">
            Admissions are conducted as per Army Welfare Education Society
            (AWES) guidelines. Applicants are required to register through the
            ERP Admission Portal, upload the necessary documents, and complete
            the online admission process. Depending upon eligibility, students
            may either be admitted directly on Transfer Certificate or may be
            required to appear for an Admission Test.
          </p>
        </div>
      </section>

      {/* Steps */}

      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold text-primary">
          Admission Procedure
        </h2>

        <div className="space-y-6">
          {admissionSteps.map((step, index) => (
            <div key={step.number} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
                  {step.number}
                </div>

                {index !== admissionSteps.length - 1 && (
                  <div className="mt-2 h-12 w-1 bg-border"></div>
                )}
              </div>

              <div className="pb-6 pt-2">
                <h3 className="mb-2 text-xl font-bold text-primary">
                  {step.title}
                </h3>

                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Direct Admission */}

      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-primary">
          Direct Admission (Without Admission Test)
        </h2>

        <div className="rounded-lg bg-white p-6 shadow">
          <ul className="space-y-4 text-muted-foreground">
            <li>
              ✓ Students promoted from another Army Public School may be
              admitted throughout the year on Transfer Certificate.
            </li>

            <li>
              ✓ Students who have studied for at least 10 academic months in
              another Army Public School or Kendriya Vidyalaya and seek
              admission after 31st July.
            </li>

            <li>
              ✓ The school may conduct an evaluation test only for academic
              assessment and section allocation.
            </li>
          </ul>
        </div>
      </section>

      {/* Admission Test */}

      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-primary">
          Admission Test
        </h2>

        <div className="rounded-lg bg-white p-6 shadow">
          <ul className="space-y-4 text-muted-foreground">
            <li>
              • Students not covered under the direct admission category are
              required to appear for an Admission Test.
            </li>

            <li>
              • Admission Tests are conducted every Saturday.
            </li>

            <li>
              • Results are declared within 48 hours.
            </li>

            <li>
              • A re-test, if required, may be conducted after seven days.
            </li>

            <li>
              • Final admission is subject to the discretion of the Principal.
            </li>
          </ul>
        </div>
      </section>

      {/* Subjects */}

      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-primary">
          Subjects for Admission Test
        </h2>

        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full">
            <thead className="bg-primary text-white">
              <tr>
                <th className="p-4 text-left">Class</th>
                <th className="p-4 text-left">Subjects</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="p-4">Classes II – V</td>
                <td className="p-4">English, Hindi & Mathematics</td>
              </tr>

              <tr className="border-b">
                <td className="p-4">Classes VI – IX</td>
                <td className="p-4">
                  English, Hindi, Mathematics & General Science
                </td>
              </tr>

              <tr>
                <td className="p-4">Class X</td>
                <td className="p-4">
                  English, Hindi, Mathematics & Science
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Age */}

      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-primary">
          Age Criteria
        </h2>

        <p className="mb-6 text-muted-foreground">
          The student should complete the prescribed age on <b>31st March</b> of
          the year in which admission is sought.
        </p>

        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full">
            <thead className="bg-primary text-white">
              <tr>
                <th className="p-4 text-left">Class</th>
                <th className="p-4 text-left">Minimum Age</th>
              </tr>
            </thead>

            <tbody>
              {ageCriteria.map(([cls, age]) => (
                <tr key={cls} className="border-b">
                  <td className="p-4">{cls}</td>
                  <td className="p-4">{age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Documents */}

      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-primary">
          Documents Required
        </h2>

        <div className="rounded-lg bg-white p-6 shadow">
          <ul className="grid gap-3 text-muted-foreground md:grid-cols-2">
            <li>✓ Original Transfer Certificate</li>

            <li>✓ Attested copy of Report Card</li>

            <li>✓ Birth Certificate (Class I)</li>

            <li>✓ Salary Certificate (Defence Civilians)</li>

            <li>✓ Discharge Book / Ex-Servicemen Identity Card</li>

            <li>✓ Parent Transfer Order / Serving Certificate</li>

            <li>✓ Defence Personnel Serving Certificate (if applicable)</li>

            <li>✓ School Medical History Form</li>
          </ul>
        </div>
      </section>

      {/* Important Information */}

      <section className="rounded-lg border bg-blue-50 p-8">
        <h2 className="mb-6 text-2xl font-bold text-primary">
          Important Information
        </h2>

        <ul className="space-y-4 text-muted-foreground">
          <li>
            • Students from schools other than APS/KV must submit a Transfer
            Certificate duly endorsed by the District Education Officer.
          </li>

          <li>
            • Direct admission without Transfer Certificate is permitted only up
            to Class VI under prescribed AWES rules.
          </li>

          <li>
            • Once the Date of Birth is entered in the School Register, it will
            normally not be changed except on production of valid documentary
            proof.
          </li>

          <li>
            • Students who fail once may repeat the same class. Students who
            fail twice are generally not eligible for admission.
          </li>

          <li>
            • Admission policies are subject to revision by the School
            Management depending on seat availability.
          </li>
        </ul>
      </section>
    </PageLayout>
  );
}