import { notFound } from 'next/navigation';
import PageLayout from '@/components/PageLayout';
import { readSiteContent } from '@/lib/content-store';

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

  const content = await readSiteContent();

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
      {/* <p className="text-lg leading-relaxed text-muted-foreground">
        This section highlights our <strong>{title}</strong> facilities. Descriptions and photos can be maintained from
        the admin panel alongside gallery and document uploads.
      </p> */}


      {slug === 'campus' && (
        <h1 className="text-3xl font-bold text-primary mb-6">Army Public School Khadakwasla Campus</h1>
      )}

      {slug === 'campus' && content.infrastructure?.campus && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.infrastructure?.campus?.map((item) => (
            <div key={item.id} className="rounded-lg border bg-card p-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold">{item.label}</span>
                <span className="text-muted-foreground">{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </PageLayout>
  );
}
