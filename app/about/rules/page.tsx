import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'Rules & Regulations - Army Public School Khadakwasla',
  description: 'School rules and code of conduct.',
};

export default function RulesPage() {
  return (
    <PageLayout
      title="Rules & Regulations"
      subtitle="Discipline, conduct, and expectations"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'Rules' },
      ]}
    >
      <div id="conduct" className="prose prose-neutral max-w-none">
        <p className="text-lg leading-relaxed text-muted-foreground">
          School rules promote safety, respect, and a positive learning environment. Detailed policies are communicated to
          parents and students at the start of each academic year.
        </p>
        <h2 className="mt-8 text-2xl font-bold text-[#0a305f]">Code of conduct</h2>
        <p className="text-muted-foreground">
          Students are expected to uphold the values of integrity, punctuality, and courtesy. Uniform and behaviour
          standards apply on campus and during school events.
        </p>
      </div>
    </PageLayout>
  );
}
