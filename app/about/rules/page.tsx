// app/about/rules/page.tsx
import PageLayout from '@/components/PageLayout';
import RulesContent from './RulesContent'; // Import the client component

export const metadata = {
  title: 'Rules & Regulations - Army Public School Khadakwasla',
  description: 'School rules and code of conduct.',
};

export default function RulesPage() {
  return (
    <PageLayout
      title="Rules & Regulations"
      subtitle="The following abridged but salient rules are for strict compliance"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'Rules' },
      ]}
    >
      <div id="conduct" className="prose prose-neutral max-w-none">
        
        {/* Render the interactive client component here */}
        <RulesContent />
      </div>
    </PageLayout>
  );
}   