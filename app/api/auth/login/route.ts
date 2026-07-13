import { NextResponse } from 'next/server';
import {
  ADMIN_PASS,
  ADMIN_USER,
  COOKIE_NAME,
  createSessionToken,
  SUPER_PASS,
  SUPER_USER,
} from '@/lib/auth-session';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const username = String(body.username ?? '');
    const password = String(body.password ?? '');
    let role = 'admin';
    if (username === SUPER_USER && password === SUPER_PASS) {
      role = 'superadmin';
    } else if (username === ADMIN_USER && password === ADMIN_PASS) {
      role = 'admin';
    } else {
      return NextResponse.json({ error: 'Invalid username or password' }, { status: 401 });
    }
    const token = createSessionToken(role);
    const res = NextResponse.json({ ok: true });
    res.cookies.set(COOKIE_NAME, token, {
      httpOnly: true,
      path: '/',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      secure: process.env.NODE_ENV === 'production',
    });
    return res;
  } catch {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }
}
