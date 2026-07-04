import { promises as fs } from 'fs';
import path from 'path';
import type { SiteContent } from './site-content';
import { defaultSiteContent } from './site-content';

const DATA_PATH = path.join(process.cwd(), 'data', 'site-content.json');

async function ensureDataFile() {
  try {
    const raw = await fs.readFile(DATA_PATH, 'utf8');
    if (!raw.trim()) throw new Error('empty');
    JSON.parse(raw);
  } catch {
    await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
    await fs.writeFile(DATA_PATH, JSON.stringify(defaultSiteContent, null, 2), 'utf8');
  }
}

function mergeSiteContent(def: SiteContent, patch: Partial<SiteContent>): SiteContent {
  return {
    ...def,
    ...patch,
    heroSlides: patch.heroSlides ?? def.heroSlides,
    welcome: { ...def.welcome, ...patch.welcome },
    principalMessage: { ...def.principalMessage, ...patch.principalMessage },
    importantLinks: patch.importantLinks ?? def.importantLinks,
    gallery: patch.gallery ?? def.gallery,
    documents: patch.documents ?? def.documents,
    homepageBlocks: patch.homepageBlocks ?? def.homepageBlocks,
    announcementBanner: patch.announcementBanner ?? def.announcementBanner,
    navigation: patch.navigation?.length ? patch.navigation : def.navigation,
    academicsSection: patch.academicsSection
      ? {
          ...def.academicsSection,
          ...patch.academicsSection,
          cards: patch.academicsSection.cards?.length
            ? patch.academicsSection.cards
            : def.academicsSection.cards,
        }
      : def.academicsSection,
    managementSection: patch.managementSection
      ? {
          ...def.managementSection,
          ...patch.managementSection,
          team: patch.managementSection.team?.length
            ? patch.managementSection.team
            : def.managementSection.team,
          committeeItems: patch.managementSection.committeeItems?.length
            ? patch.managementSection.committeeItems
            : def.managementSection.committeeItems,
        }
      : def.managementSection,
    infrastructure: patch.infrastructure
      ? {
          ...def.infrastructure,
          ...patch.infrastructure,
          campus: patch.infrastructure.campus?.length ? patch.infrastructure.campus : def.infrastructure.campus,
        }
      : def.infrastructure,
    scoreboard: mergeScoreboard(def.scoreboard, patch.scoreboard),
  };
}

function mergeScoreboard(
  def: import('./site-content').ScoreboardData,
  patch: Partial<import('./site-content').ScoreboardData> | undefined,
): import('./site-content').ScoreboardData {
  if (!patch) return def;
  const base = { ...def, ...patch };
  return {
    ...base,
    houses:
      patch.houses && patch.houses.length > 0 ? patch.houses : def.houses,
    primary: mergeSegment(def.primary, patch.primary),
    secondary: mergeSegment(def.secondary, patch.secondary),
  };
}

function mergeSegment(
  def: import('./site-content').HouseBoardSegment,
  patch: Partial<import('./site-content').HouseBoardSegment> | undefined,
): import('./site-content').HouseBoardSegment {
  if (!patch) return def;
  return {
    ...def,
    ...patch,
    houses: patch.houses && patch.houses.length > 0 ? patch.houses : def.houses,
  };
}

export async function readSiteContent(): Promise<SiteContent> {
  await ensureDataFile();
  const raw = await fs.readFile(DATA_PATH, 'utf8');
  const parsed = JSON.parse(raw) as Partial<SiteContent>;
  return mergeSiteContent(defaultSiteContent, parsed);
}

export async function writeSiteContent(content: SiteContent): Promise<void> {
  await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
  await fs.writeFile(DATA_PATH, JSON.stringify(content, null, 2), 'utf8');
}
