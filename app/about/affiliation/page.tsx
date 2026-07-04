import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'Affiliation - Army Public School',
};

export default function AffiliationPage() {
  return (
    <PageLayout
      title="School Affiliation"
      subtitle="Recognized by CBSE"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'Affiliation' },
      ]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-primary">
          <h3 className="text-2xl font-bold text-primary mb-4">CBSE Affiliation Details</h3>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex justify-between">
              <span className="font-semibold">Affiliation No.:</span>
              <span>1180026</span>
            </li>
            <li className="flex justify-between">
              <span className="font-semibold">School Code:</span>
              <span>34114</span>
            </li>
            <li className="flex justify-between">
              <span className="font-semibold">Board:</span>
              <span>Central Board of Secondary Education (CBSE), New Delhi</span>
            </li>
            <li className="flex justify-between">
              <span className="font-semibold">Year of Establishment:</span>
              <span>2012</span>
            </li>
            <li className="flex justify-between">
              <span className="font-semibold">Classes Offered:</span>
              <span>I to XII</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-accent">
          <h3 className="text-2xl font-bold text-primary mb-4">AWES Affiliation</h3>
          <p className="text-muted-foreground leading-relaxed">
            Army Public School Khadakwasla is affiliated with the Army Welfare Education Society (AWES), a premier
            educational organization that manages a network of schools across India. Our affiliation with AWES ensures
            adherence to the highest standards of education and discipline.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 border border-border">
        <h2 className="text-2xl font-bold text-primary mb-4">Mandatory Public Disclosure</h2>
        <p className="text-muted-foreground mb-6">
          As per CBSE regulations, all schools must publicly disclose key information about their institution,
          infrastructure, and academic performance. Click below to view our official disclosure documents.
        </p>
        <a
          href="#"
          className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition font-semibold"
        >
          View Mandatory Public Disclosure
        </a>
      </div>
    </PageLayout>
  );
}
