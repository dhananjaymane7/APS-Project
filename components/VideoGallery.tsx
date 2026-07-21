import { getVideoAssetsFromAssetsFolder } from '@/lib/video-assets';

export default async function VideoGallery() {
  const videos = await getVideoAssetsFromAssetsFolder();

  if (!videos.length) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-10">
        <h2 className="mb-4 text-2xl font-semibold text-[#0a305f]">School Videos</h2>
        <p className="text-slate-600">No videos found in the assets folder yet.</p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <h2 className="mb-6 text-2xl font-semibold text-[#0a305f]">School Videos</h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {videos.map((video) => (
          <article
            key={video.fileName}
            className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
          >
            <video
              controls
              playsInline
              preload="metadata"
              className="aspect-video w-full object-cover"
            >
              <source src={video.url} type={video.mimeType} />
            </video>

            <div className="p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#da251c]">
                {video.category}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">{video.name}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
