import PageLayout from '@/components/PageLayout';
import { readSiteContent } from '@/lib/content-store';
import type { ManagementSection } from '@/lib/site-content';

export const metadata = {
  title: 'Management - Army Public School',
};

export default async function ManagementPage() {
  const content = await readSiteContent();
  const section: ManagementSection = content.managementSection;

  return (
    <PageLayout
      title={section.title}
      subtitle={section.subtitle}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'Management' },
      ]}
    >
      <section className="mb-12 grid gap-8 lg:grid-cols-[1.4fr_0.6fr] items-start">
        <div className="space-y-6">
          {section.intro.map((paragraph, idx) => (
            <p key={idx} className="text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        {section.imageUrl ? (
          <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
            <img
              src={section.imageUrl}
              alt="School management"
              className="h-full w-full object-cover"
            />
          </div>
        ) : null}
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary mb-6">Management Team</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {section.team.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-md p-8 border-l-4 border-primary hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4 mb-4">
                {member.imageUrl ? (
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0a305f] text-white">
                    {member.name.charAt(0)}
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-bold text-primary">{member.title}</h3>
                  <p className="font-semibold text-muted-foreground">{member.name}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <strong>Qualification:</strong> {member.qualification}
                </p>
                <p>
                  <strong>Experience:</strong> {member.experience}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-primary mb-6">{section.committeeTitle}</h2>
        <div className="bg-white rounded-lg shadow-md p-8 border border-border">
          <div className="grid gap-3 lg:grid-cols-2">
            {section.committeeItems.map((item, idx) => (
              <div key={idx} className="rounded-xl border border-border bg-surface p-4 text-muted-foreground">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
