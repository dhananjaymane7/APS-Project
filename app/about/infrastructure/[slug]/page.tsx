import { notFound } from 'next/navigation';
import PageLayout from '@/components/PageLayout';

const TITLES: Record<string, string> = {
  campus: 'Campus',
  classroom: 'Classroom',
  'computer-lab': 'Computer lab',
  library: 'Library',
  sports: 'Sports',
  'music-dance': 'Music & Dance',
  'composite-science-lab': 'Composite Science Lab',
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const title = TITLES[slug];
  return {
    title: title ? `${title} - Infrastructure` : 'Infrastructure',
  };
}

export default async function InfrastructureDetailPage({ params }: Props) {
  const { slug } = await params;
  const title = TITLES[slug];
  if (!title) notFound();

  return (
    <PageLayout
      title={title}
      subtitle="Infrastructure"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Infrastructure', href: '/about/infrastructure' },
        { label: title },
      ]}
    >
      <p className="text-lg leading-relaxed text-muted-foreground">
        This section highlights our <strong>{title}</strong> facilities. Descriptions and photos can be maintained from
        the admin panel alongside gallery and document uploads.
      </p>
    </PageLayout>
  );
}
