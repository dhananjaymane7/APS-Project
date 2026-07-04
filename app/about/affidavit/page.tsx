import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'Affidavit - Army Public School Khadakwasla',
  description: 'School affidavit and declarations.',
};

export default function AffidavitPage() {
  return (
    <PageLayout
      title="Affidavit"
      subtitle="Official declarations"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'Affidavit' },
      ]}
    >
      <p className="text-lg leading-relaxed text-muted-foreground">
        Content for the affidavit section can be updated through the school administration. Please contact the office for
        certified copies or further information.
      </p>
    </PageLayout>
  );
}
