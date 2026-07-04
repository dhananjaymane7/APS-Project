import { notFound } from 'next/navigation';
import PageLayout from '@/components/PageLayout';

const TITLES: Record<string, string> = {
  'value-education-annual-plan': 'Value Education Annual Plan',
  'life-skill-annual-plan': 'Life Skill Annual Plan',
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const title = TITLES[slug];
  return { title: title ? `${title} - HPD` : 'HPD' };
}

export default async function HpdPlanPage({ params }: Props) {
  const { slug } = await params;
  const title = TITLES[slug];
  if (!title) notFound();

  return (
    <PageLayout
      title={title}
      subtitle="Human Potential Development"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'HPD', href: '/hpd' },
        { label: title },
      ]}
    >
      <p className="text-lg leading-relaxed text-muted-foreground">
        Annual plan documents and updates for <strong>{title}</strong> can be linked here as PDFs from the admin
        dashboard.
      </p>
    </PageLayout>
  );
}
