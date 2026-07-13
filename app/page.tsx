import Footer from '@/components/Footer';
import HeroCarousel from '@/components/HeroCarousel';
import HomepageBlocks from '@/components/HomepageBlocks';
import AcademicsHomeSection from '@/components/AcademicsHomeSection';
import {
  ContentCardsGrid,
  ImportantLinksCard,
  MessageSection,
} from '@/components/ContentCards';
import Link from 'next/link';
import { readSiteContent } from '@/lib/content-store';
import { FileText } from 'lucide-react';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Army Public School Khadakwasla - Excellence in Education',
  description:
    'Army Public School Khadakwasla provides quality education, character development, and holistic growth for students.',
};

export default async function Home() {
  const content = await readSiteContent();

  const aboutCards = [
    {
      id: 1,
      title: 'Our Culture',
      description:
        'In the portals of Army Public School, students discover their talents and develop to the fullest.',
      link: '/about/history',
    },
    {
      id: 2,
      title: 'Our Mission',
      description:
        'To provide an enabling learning environment with empowered faculty and infrastructure.',
      link: '/about/principal',
    },
    {
      id: 3,
      title: 'Our Vision',
      description:
        'To be an organization committed to excellence for holistic development of children.',
      link: '/about/infrastructure',
    },
  ];

  const achievementCards = [
    {
      id: 1,
      title: 'Academic Awards',
      description: 'Recognition for excellence in academic achievements and scholarship.',
    },
    {
      id: 2,
      title: 'Sports Awards',
      description: 'Outstanding performance in sports and athletic competitions.',
    },
    {
      id: 3,
      title: 'Co-Curricular Awards',
      description: 'Excellence in arts, music, dance, and cultural activities.',
    },
    {
      id: 4,
      title: 'Leadership Awards',
      description: 'Recognition for student leadership and community service.',
    },
  ];

  const admissionCards = [
    {
      id: 1,
      title: 'Admission Process',
      description:
        'Transparent and merit-based admission procedure with entrance examination.',
      link: '/admissions/procedure',
    },
    {
      id: 2,
      title: 'Fee Structure',
      description: 'Affordable fee plans with various payment options available.',
      link: '/admissions/fees',
    },
    {
      id: 3,
      title: 'Entrance Syllabus',
      description: 'Comprehensive syllabus for entrance examination preparation.',
      link: '/admissions/syllabus',
    },
  ];

  const publicDocs = content.documents
    .filter((d) => d.fileUrl && d.fileUrl !== '#' && d.title)
    .slice(-7);

  return (
    <div className="min-h-screen bg-background">
      {content.announcementBanner?.trim() && (
        <div className="bg-[#da251c] text-center text-sm font-semibold text-white py-2.5 px-4 shadow-md">
          {content.announcementBanner}
        </div>
      )}
      <HeroCarousel slides={content.heroSlides} />

      <section className="py-12 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-[#da251c]">
                <h2 className="text-4xl font-bold text-[#0a305f] mb-6">{content.welcome.title}</h2>
                {content.welcome.paragraphs.map((p, i) => (
                  <p key={i} className="text-foreground leading-relaxed mb-4 last:mb-0">
                    {p}
                  </p>
                ))}
              </div>
            </div>
            <div className="lg:col-span-1 space-y-6">
              {publicDocs.length > 0 && (
                <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Notices & downloads</h3>
                  <ul className="space-y-2">
                    {publicDocs.map((doc) => (
                      <li key={doc.id}>
                        <a
                          href={doc.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-[#0a305f] hover:text-[#da251c] transition"
                        >
                          {doc.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <ImportantLinksCard links={content.importantLinks} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#e9f0f7] text-[#0a305f]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#0a305f]">About Our School</h2>
          <ContentCardsGrid cards={aboutCards} variant="light" />
        </div>
      </section>

      <HomepageBlocks blocks={content.homepageBlocks} />

      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <MessageSection
            name={content.principalMessage.name}
            title={content.principalMessage.title}
            subtitle={content.principalMessage.subtitle}
            message={content.principalMessage.message}
            imageUrl={content.principalMessage.imageUrl}
            ctaText={content.principalMessage.ctaText}
            ctaLink={content.principalMessage.ctaLink}
          />
        </div>
      </section>

      <AcademicsHomeSection section={content.academicsSection} />

      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-[#0a305f]">Admissions</h2>
          <p className="text-center text-foreground mb-12 max-w-2xl mx-auto">
            We welcome applications from meritorious students. Our transparent admission process ensures equal
            opportunities for all candidates.
          </p>
          <ContentCardsGrid cards={admissionCards} />
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-[#e9f0f7] to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#0a305f]">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievementCards.map((card) => (
              <div
                key={card.id}
                className="bg-white text-foreground p-6 rounded-lg shadow-md text-center border border-[#0a305f]/10"
              >
                <h3 className="text-xl font-bold mb-3 text-[#da251c]">{card.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#e9f0f7] text-[#0a305f]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Modern Infrastructure</h2>
          <p className="text-center mb-12 max-w-2xl mx-auto text-[#0a305f]/80">
            Our state-of-the-art facilities provide an ideal learning environment for students to excel.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Smart Classrooms', desc: 'Interactive learning with modern technology' },
              { title: 'Science Labs', desc: 'Well-equipped laboratories for practical learning' },
              { title: 'Sports Complex', desc: 'Professional sports facilities and grounds' },
              { title: 'Library', desc: 'Extensive collection of books and digital resources' },
              { title: 'Auditorium', desc: 'State-of-the-art venue for events and performances' },
              { title: 'Cafeteria', desc: 'Nutritious meals with diverse menu options' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white text-foreground p-6 rounded-lg shadow-md border border-[#0a305f]/10"
              >
                <h3 className="text-lg font-bold mb-2 text-[#0a305f]">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-[#0a305f] to-[#0a305f]/90 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-lg mb-8 text-white/90">
            Be part of an institution committed to excellence, character building, and holistic development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admissions/procedure"
              className="bg-[#da251c] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#da251c]/90 transition shadow-lg"
            >
              Admission Form
            </Link>
            <Link
              href="/contact"
              className="bg-white text-[#0a305f] px-8 py-3 rounded-lg font-bold hover:bg-[#e9f0f7] transition shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
