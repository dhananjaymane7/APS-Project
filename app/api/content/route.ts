import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { readSiteContent, writeSiteContent } from '@/lib/content-store';
import type { SiteContent } from '@/lib/site-content';
import { COOKIE_NAME, verifySessionToken } from '@/lib/auth-session';

export async function GET() {
  const content = await readSiteContent();
  return NextResponse.json(content);
}

export async function PUT(request: Request) {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!verifySessionToken(token)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const body = (await request.json()) as SiteContent;
    await writeSiteContent(body);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }
}
