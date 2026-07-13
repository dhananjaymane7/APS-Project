import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { readSiteContent, writeSiteContent } from '@/lib/content-store';
import { COOKIE_NAME, getSessionRole } from '@/lib/auth-session';

export async function POST(request: Request) {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  const role = getSessionRole(token);
  if (role !== 'superadmin') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  try {
    const body = await request.json();
    const { action } = body as { action?: string };
    const content = await readSiteContent();

    if (action === 'clear_homepage_blocks') {
      content.homepageBlocks = [];
      await writeSiteContent(content);
      return NextResponse.json({ ok: true });
    }

    if (action === 'remove_section' && typeof body.section === 'string') {
      // destructive: delete a top-level section
      // only specific allowed keys
      const allowed = ['achievements', 'management', 'academicsSection', 'homepageBlocks'];
      const key = body.section as string;
      if (!allowed.includes(key)) return NextResponse.json({ error: 'Invalid section' }, { status: 400 });
      // @ts-ignore
      delete content[key];
      await writeSiteContent(content);
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ error: 'Unknown action' }, { status: 400 });
  } catch (err) {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }
}
