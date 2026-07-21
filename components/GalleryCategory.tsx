import { getVideosByCategory } from '@/lib/video-assets';
import type { VideoAsset } from '@/lib/video-assets';

interface GalleryCategoryProps {
  title: string;
  category: VideoAsset['category'];
  photoCount: number;
  backgroundImage: string;
}

export default async function GalleryCategory({
  title,
  category,
  photoCount,
  backgroundImage,
}: GalleryCategoryProps) {
  const videos = await getVideosByCategory(category);
  const totalCount = photoCount + videos.length;

  return (
    <div
      className="relative h-64 rounded-xl overflow-hidden shadow-lg group cursor-pointer transition transform hover:scale-105"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70 group-hover:from-black/50 group-hover:via-black/60 group-hover:to-black/80 transition" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
        <p className="text-lg text-red-400 font-semibold">
          {totalCount} {totalCount === 1 ? 'Item' : 'Items'}
        </p>
      </div>
    </div>
  );
}
