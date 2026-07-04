import PageLayout from "@/components/PageLayout";
import { MessageSection } from "@/components/ContentCards";
import type { SiteContent } from "@/lib/site-content";

export const metadata = {
  title: "Principal's Message - Army Public School",
  description: "Read the principal's message and vision for the school.",
};

async function getPrincipalContent(): Promise<SiteContent | null> {
  try {
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
    const host = process.env.VERCEL_URL || 'localhost:3000';
    const res = await fetch(`${protocol}://${host}/api/content`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default async function PrincipalPage() {
  const content = await getPrincipalContent();
  const principal = content?.principalMessage;

  return (
    <PageLayout
      title="Principal's Message"
      subtitle="Leadership and Vision"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Principal's Message" },
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Message from the Principal
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              {principal?.message ? (
                principal.message.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))
              ) : (
                <p>Principal's message is currently unavailable.</p>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div>
          <div className="bg-primary text-primary-foreground rounded-lg p-6 shadow-lg sticky top-24">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/about/history"
                  className="hover:text-accent transition"
                >
                  → School History
                </a>
              </li>
              <li>
                <a
                  href="/about/infrastructure"
                  className="hover:text-accent transition"
                >
                  → Infrastructure
                </a>
              </li>
              <li>
                <a
                  href="/about/management"
                  className="hover:text-accent transition"
                >
                  → Management
                </a>
              </li>
              <li>
                <a
                  href="/about/affiliation"
                  className="hover:text-accent transition"
                >
                  → Affiliation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
