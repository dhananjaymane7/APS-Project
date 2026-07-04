import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'Annual Report - Army Public School Khadakwasla',
  description: 'Annual report and highlights.',
};

export default function AnnualReportPage() {
  return (
    <PageLayout
      title="Annual Report"
      subtitle="Year in review"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'Annual Report' },
      ]}
    >
      <p className="text-lg leading-relaxed text-muted-foreground">
        The annual report summarises academic performance, activities, and developments for the year. Published copies may
        be shared here as PDFs — please check the notices section or contact the school office.
      </p>
    </PageLayout>
  );
}
