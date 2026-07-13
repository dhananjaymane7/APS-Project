import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { COOKIE_NAME, getSessionRole } from '@/lib/auth-session';

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  const role = getSessionRole(token);
  if (!role) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  return NextResponse.json({ role });
}
