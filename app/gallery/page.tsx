import PageLayout from '@/components/PageLayout';
import { readSiteContent } from '@/lib/content-store';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Gallery - Army Public School',
  description: 'View photos and videos from school events, activities, and achievements.',
};

export default async function GalleryPage() {
  const content = await readSiteContent();
  const galleryImages = content.gallery;

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
        <h2 className="text-3xl font-bold text-[#0a305f] mb-8">Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: 'School Tour', duration: '5:20' },
            { title: 'Annual Day Celebration', duration: '12:45' },
            { title: 'Sports Day Highlights', duration: '8:30' },
            { title: 'Academic Excellence', duration: '6:15' },
          ].map((video, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer bg-muted"
            >
              <div className="relative aspect-video flex items-center justify-center bg-[#0a305f]/10">
                <button
                  type="button"
                  className="bg-[#da251c] text-white p-4 rounded-full hover:bg-[#da251c]/90 transition"
                  aria-label={`Play ${video.title}`}
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <span className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-[#0a305f]">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
