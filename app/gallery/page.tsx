import PageLayout from '@/components/PageLayout';
import { readSiteContent } from '@/lib/content-store';
import GalleryCategory from '@/components/GalleryCategory';
import Link from 'next/link';
import { getVideoAssetsFromAssetsFolder } from '@/lib/video-assets';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Gallery - Army Public School',
  description: 'View photos and videos from school events, activities, and achievements.',
};

export default async function GalleryPage() {
  const content = await readSiteContent();
  const galleryImages = content.gallery;

  const allVideos = await getVideoAssetsFromAssetsFolder();

  const videoCounts = {
    Events: allVideos.filter((v) => v.category === 'Events').length,
    Sports: allVideos.filter((v) => v.category === 'Sports').length,
    Academics: allVideos.filter((v) => v.category === 'Academics').length,
    'Campus Life': allVideos.filter((v) => v.category === 'Campus Life').length,
  };

  const categories = [
    {
      title: 'School Events',
      slug: 'events',
      category: 'Events' as const,
      backgroundImage:
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop',
    },
    {
      title: 'Sports & Games',
      slug: 'sports',
      category: 'Sports' as const,
      backgroundImage:
        'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop',
    },
    {
      title: 'Academic Activities',
      slug: 'academics',
      category: 'Academics' as const,
      backgroundImage:
        'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=600&fit=crop',
    },
    {
      title: 'School Infrastructure',
      slug: 'campus-life',
      category: 'Campus Life' as const,
      backgroundImage:
        'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop',
    },
  ];

  return (
    <PageLayout
      title="Gallery"
      subtitle="Moments from Army Public School"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Gallery' },
      ]}
    >
      <section className="mb-12">
        <p className="text-muted-foreground text-lg leading-relaxed">
          Explore memorable moments from our school&apos;s journey. Our gallery showcases the diverse activities,
          achievements, and celebrations that make Army Public School Khadakwasla a vibrant learning community.
        </p>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />

              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                {item.count != null && item.count > 0 && (
                  <p className="text-[#da251c] text-sm font-semibold">{item.count} Photos</p>
                )}
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-[#da251c] text-white px-6 py-2 rounded-lg font-semibold">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold text-[#0a305f] mb-8">Categories</h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/gallery/${cat.slug}`}>
              <div
                className="relative h-64 rounded-xl overflow-hidden shadow-lg group cursor-pointer transition transform hover:scale-105"
                style={{
                  backgroundImage: `url(${cat.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70 group-hover:from-black/50 group-hover:via-black/60 group-hover:to-black/80 transition" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                  <h3 className="text-3xl font-bold text-white mb-2">{cat.title}</h3>
                  <p className="text-lg text-red-400 font-semibold">
                    {videoCounts[cat.category]} {videoCounts[cat.category] === 1 ? 'Video' : 'Videos'}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
