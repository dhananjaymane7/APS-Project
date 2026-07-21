import Link from 'next/link';
import { getVideosByCategory } from '@/lib/video-assets';
import type { VideoAsset } from '@/lib/video-assets';

type CategoryParam = 'events' | 'sports' | 'academics' | 'campus-life';

const categoryMap: Record<CategoryParam, VideoAsset['category']> = {
  events: 'Events',
  sports: 'Sports',
  academics: 'Academics',
  'campus-life': 'Campus Life',
};

const categoryTitles: Record<CategoryParam, string> = {
  events: 'School Events',
  sports: 'Sports & Games',
  academics: 'Academic Activities',
  'campus-life': 'School Infrastructure',
};

interface PageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const categoryKey = category as CategoryParam;
  const videoCategory = categoryMap[categoryKey];
  const title = categoryTitles[categoryKey];

  if (!videoCategory) {
    return (
      <main className="min-h-screen bg-slate-50 py-10">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-2xl font-bold text-[#0a305f]">Category not found</h1>
          <Link href="/gallery" className="text-blue-600 hover:underline mt-4 inline-block">
            Back to Gallery
          </Link>
        </div>
      </main>
    );
  }

  const videos = await getVideosByCategory(videoCategory);

  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-7xl px-4">
        <Link href="/gallery" className="text-blue-600 hover:underline mb-6 inline-block">
          ← Back to Gallery
        </Link>

        <h1 className="mb-2 text-4xl font-bold text-[#0a305f]">{title}</h1>
        <p className="mb-10 text-lg text-slate-600">
          {videos.length} {videos.length === 1 ? 'video' : 'videos'}
        </p>

        {videos.length === 0 ? (
          <div className="bg-white rounded-lg p-8 text-center">
            <p className="text-slate-600 text-lg">No videos found in this category.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {videos.map((video) => (
              <div
                key={video.fileName}
                className="overflow-hidden rounded-xl border border-slate-200 bg-black shadow-sm hover:shadow-md transition"
              >
                <video
                  controls
                  controlsList="nodownload"
                  playsInline
                  preload="metadata"
                  volume="1"
                  className="w-full h-full aspect-video"
                >
                  <source src={video.url} type={video.mimeType} />
                  Your browser does not support video playback.
                </video>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
