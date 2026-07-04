import PageLayout from '@/components/PageLayout';
import { MessageSection } from '@/components/ContentCards';

export const metadata = {
  title: "Principal's Message - Army Public School",
  description: "Read the principal's message and vision for the school.",
};

export default function PrincipalPage() {
  return (
    <PageLayout
      title="Principal's Message"
      subtitle="Leadership and Vision"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: "Principal's Message" },
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">Message from the Principal</h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                <strong>Greetings, dear students, parents, and educators,</strong>
              </p>

              <p>
                At APS Khadakwasla, we believe in the power of education to transform lives and shape a brighter
                future. As we embark on this academic journey together, I am thrilled to share our commitment to
                providing an inspiring and holistic learning environment for all.
              </p>

              <p>
                With the recent implementation of the National Education Policy (NEP), we are embracing innovative
                pedagogical approaches that cater to individual learning styles, foster critical thinking, and nurture
                a lifelong love for learning. Our dedicated team of educators is steadfast in their pursuit of
                excellence, adapting teaching methodologies to align with the evolving needs of our students and the
                dynamic world around us.
              </p>

              <p>
                As the principal, my vision is to empower our students to become confident, compassionate, and
                responsible global citizens. I firmly believe that education goes beyond the boundaries of academics.
                It encompasses the development of character, resilience, and social responsibility. Our school
                community works collaboratively to create an environment where every student can discover their
                strengths, overcome challenges, and realize their full potential.
              </p>

              <p>
                I am proud of the achievements of our students in various domains—be it academics, sports,
                co-curricular activities, or community service. These accomplishments are a testament to the
                dedication of our teachers, the support of our parents, and the spirit of our young learners.
              </p>

              <p>
                As we move forward, I invite all stakeholders to partner with us in creating a school that is not
                just a center of learning but a beacon of hope and inspiration. Together, let us build a community
                where every child is valued, every voice is heard, and every dream is nurtured.
              </p>

              <p>
                <strong>With warm regards,</strong>
                <br />
                <strong>Mrs. Yasmia Kaur</strong>
                <br />
                Principal, APS Khadakwasla
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div>
          <div className="bg-primary text-primary-foreground rounded-lg p-6 shadow-lg sticky top-24">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/about/history" className="hover:text-accent transition">
                  → School History
                </a>
              </li>
              <li>
                <a href="/about/infrastructure" className="hover:text-accent transition">
                  → Infrastructure
                </a>
              </li>
              <li>
                <a href="/about/management" className="hover:text-accent transition">
                  → Management
                </a>
              </li>
              <li>
                <a href="/about/affiliation" className="hover:text-accent transition">
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
