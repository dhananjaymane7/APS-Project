'use server';

export type VideoAsset = {
  name: string;
  fileName: string;
  category: 'Events' | 'Sports' | 'Academics' | 'Campus Life';
  mimeType: string;
  url: string;
};

const VIDEO_EXTENSIONS = new Set(['.mp4', '.mov', '.webm', '.m4v']);

function getMimeType(fileName: string): string {
  const ext = fileName.toLowerCase().slice(fileName.lastIndexOf('.'));
  const mimeTypes: Record<string, string> = {
    '.mp4': 'video/mp4',
    '.webm': 'video/webm',
    '.mov': 'video/quicktime',
    '.m4v': 'video/x-m4v',
  };
  return mimeTypes[ext] || 'video/mp4';
}

function getCategory(fileName: string): VideoAsset['category'] {
  const lower = fileName.toLowerCase();

  if (
    lower.includes('teacher_message') ||
    lower.includes('teacher_teaching') ||
    lower.includes('singing_room')
  ) {
    return 'Events';
  }
  if (lower.includes('sport')) {
    return 'Sports';
  }
  if (
    lower.includes('computer_lab') ||
    lower.includes('electronic_lab') ||
    lower.includes('laboratory') ||
    lower.includes('science_lab') ||
    lower.includes('teacher_lab')
  ) {
    return 'Academics';
  }

  return 'Campus Life';
}

export async function getVideoAssetsFromAssetsFolder(): Promise<VideoAsset[]> {
  try {
    const fs = require('node:fs');
    const path = require('node:path');

    const assetsDir = path.resolve(process.cwd(), 'assets');

    if (!fs.existsSync(assetsDir)) {
      console.warn(`Assets directory not found: ${assetsDir}`);
      return [];
    }

    const files = fs
      .readdirSync(assetsDir, { withFileTypes: true })
      .filter((entry: any) => entry.isFile())
      .map((entry: any) => entry.name)
      .filter((fileName: string) => VIDEO_EXTENSIONS.has(path.extname(fileName).toLowerCase()))
      .sort();

    console.log(`Found ${files.length} videos in ${assetsDir}:`, files);

    return files.map((fileName: string) => ({
      name: fileName.replace(/\.[^/.]+$/, '').replace(/_/g, ' '),
      fileName,
      category: getCategory(fileName),
      mimeType: getMimeType(fileName),
      url: `/api/video/${encodeURIComponent(fileName)}`,
    }));
  } catch (error) {
    console.error('Error reading video assets:', error);
    return [];
  }
}

export async function getVideosByCategory(
  category: VideoAsset['category']
): Promise<VideoAsset[]> {
  const videos = await getVideoAssetsFromAssetsFolder();
  console.log(`Videos in ${category}:`, videos.filter((v) => v.category === category));
  return videos.filter((v) => v.category === category);
}
