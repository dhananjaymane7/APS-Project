'use server';

export type HeroVideo = {
  id: string;
  title: string;
  subtitle: string;
  videoUrl: string;
  imageUrl: string;
  isVideo: boolean;
};

export async function getHeroVideos(): Promise<HeroVideo[]> {
  try {
    const fs = require('node:fs');
    const path = require('node:path');

    const assetsDir = path.resolve(process.cwd(), 'assets');

    if (!fs.existsSync(assetsDir)) {
      return [];
    }

    const files = fs
      .readdirSync(assetsDir, { withFileTypes: true })
      .filter((entry: any) => entry.isFile())
      .map((entry: any) => entry.name)
      .filter((fileName: string) => /\.(mp4|webm|mov)$/i.test(fileName))
      .sort()
      .slice(0, 5); // Limit to 5 videos for hero

    // Custom titles and subtitles for each video
    const videoTitles: Record<string, { title: string; subtitle: string }> = {
      'APS_School_Khadakwasla.mp4': { title: 'UNLOCK', subtitle: 'POTENTIAL' },
      'School_entrance.mp4': { title: 'WELCOME', subtitle: 'TO APS' },
      'School_ground.mp4': { title: 'EXPLORE', subtitle: 'EXCELLENCE' },
      'Sports.mp4': { title: 'VICTORY', subtitle: 'THROUGH SPORTS' },
      'Sports1.mp4': { title: 'CHAMPION', subtitle: 'SPIRIT' },
      'Computer_lab.mp4': { title: 'INNOVATE', subtitle: 'LEARN TECH' },
      'laboratory.mp4': { title: 'DISCOVER', subtitle: 'SCIENCE' },
      'principals_cabin.mp4': { title: 'LEADERSHIP', subtitle: 'EXCELLENCE' },
      'School_main_gate.mp4': { title: 'JOIN US', subtitle: 'REDEFINE' },
      'dance_room.mp4': { title: 'CELEBRATE', subtitle: 'CULTURE' },
      'teacher_teaching.mp4': { title: 'INSPIRE', subtitle: 'MINDS' },
      'teacher_message.mp4': { title: 'EMPOWER', subtitle: 'GROWTH' },
    };

    return files.map((fileName: string, index: number) => {
      const customTitle = videoTitles[fileName];
      const defaultTitle = fileName.replace(/\.[^/.]+$/, '').replace(/_/g, ' ').toUpperCase();

      return {
        id: `hero-${index}`,
        title: customTitle?.title || defaultTitle,
        subtitle: customTitle?.subtitle || 'SCHOOL APS',
        videoUrl: `/api/video/${encodeURIComponent(fileName)}`,
        imageUrl: 'https://images.unsplash.com/photo-1427504494785-cdae8dfddee0?w=1200&h=400&fit=crop',
        isVideo: true,
      };
    });
  } catch (error) {
    console.error('Error reading hero videos:', error);
    return [];
  }
}
