import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'Admission Checklist - Army Public School',
  description:
    'Documents required for registration and admission along with the admission process.',
};

export default function ChecklistPage() {
  return (
    <PageLayout
      title="Admission Checklist"
      subtitle="Documents Required for Registration & Admission"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Admissions', href: '/admissions/rules' },
        { label: 'Admission Checklist' },
      ]}
    >
      <div className="space-y-10">

        {/* Registration Documents */}

        <section className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold text-primary mb-6">
            1. Documents Required for Registration
          </h2>

          <ul className="space-y-4 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>
                Photocopy of Movement Order of the guardian and proof of joining
                the assignment.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>
                Photocopy of the report card of the last class attended. If the
                child has completed the Half Yearly Examination, the report card
                of the current academic session should also be attached.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>
                Three passport-size photographs and one stamp-size photograph.
              </span>
            </li>
          </ul>
        </section>

        {/* Admission Documents */}

        <section className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold text-primary mb-6">
            2. Documents Required for Admission
          </h2>

          <ul className="space-y-4 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>
                <strong>Class I:</strong> Birth Certificate (Original /
                Photocopy / DO Part II Order).
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>
                <strong>Classes II to X:</strong> Transfer Certificate duly
                countersigned by the District Education Officer (except for
                students from Kendriya Vidyalaya, Army Schools and Army Public
                Schools).
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Salary Certificate (For Defence Civilians).</span>
            </li>

            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>
                Retired Personnel's Xerox copy of Discharge Book /
                Ex-Servicemen Identity Card.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Transfer Order / Serving Certificate of the Parent.</span>
            </li>

            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>
                Defence Personnel Serving Certificate (if applicable).
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>
                Attendance details duly attested by the Principal of the
                previous school (for students of Classes IX & X joining during
                the mid-session).
              </span>
            </li>
          </ul>
        </section>

        {/* Sequence of Admission */}

        <section className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold text-primary mb-6">
            3. Sequence of Action for Admission
          </h2>

          <div className="space-y-6">

            <div className="flex gap-5">
              <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                1
              </div>

              <div>
                <h3 className="font-semibold text-lg text-primary">
                  Collect Admission Form
                </h3>

                <p className="text-muted-foreground">
                  Collect the Admission Form from the School Office.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                2
              </div>

              <div>
                <h3 className="font-semibold text-lg text-primary">
                  Submit Documents
                </h3>

                <p className="text-muted-foreground">
                  Submit the completed Admission Form along with the Birth
                  Certificate, required documents and the Original Transfer
                  Certificate at the Admission Counter. The Original Transfer
                  Certificate will remain attached with the admission papers.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                3
              </div>

              <div>
                <h3 className="font-semibold text-lg text-primary">
                  Fee Payment
                </h3>

                <p className="text-muted-foreground">
                  After confirmation of admission, collect the Fee Deposit Book
                  from the office and deposit the fee at the State Bank of
                  India, NDA.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                4
              </div>

              <div>
                <h3 className="font-semibold text-lg text-primary">
                  Submit Bank Receipt
                </h3>

                <p className="text-muted-foreground">
                  Submit the Bank Fee Receipt to the Admission Clerk to obtain
                  the student's section allotment.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                5
              </div>

              <div>
                <h3 className="font-semibold text-lg text-primary">
                  Collect Admit Card
                </h3>

                <p className="text-muted-foreground">
                  Collect the Admit Card from the School Office. The student
                  must hand over the Admit Card to the Class Teacher on the
                  first day of school. Without the Admit Card, the child will
                  not be allowed to attend class.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Important Note */}

        <section className="rounded-xl border border-yellow-300 bg-yellow-50 p-8">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Important Note
          </h2>

          <p className="text-muted-foreground">
            Parents are advised to keep all original documents ready during the
            admission process. Admission will be processed only after successful
            verification of all required documents and completion of the
            prescribed admission formalities.
          </p>
        </section>

      </div>
    </PageLayout>
  );
}