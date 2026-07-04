import { notFound } from 'next/navigation';
import PageLayout from '@/components/PageLayout';

const TITLES: Record<string, string> = {
  'students-strength': 'Students Strength',
  holiday: 'Holiday',
  'cbse-circulars': 'CBSE Circulars',
  'open-house': 'Open House',
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const title = TITLES[slug];
  return { title: title ? `${title} - Academics` : 'Academics' };
}

export default async function AcademicsDynamicPage({ params }: Props) {
  const { slug } = await params;
  const title = TITLES[slug];
  if (!title) notFound();

  return (
    <PageLayout
      title={title}
      subtitle="Academics"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Academics', href: '/academics' },
        { label: title },
      ]}
    >
      <p className="text-lg leading-relaxed text-muted-foreground">
        Information for <strong>{title}</strong> will appear here. Circulars and PDFs can be published from the admin
        area under documents.
      </p>
    </PageLayout>
  );
}
