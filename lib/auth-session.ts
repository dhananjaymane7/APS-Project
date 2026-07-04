import { createHmac, timingSafeEqual } from 'crypto';

const SECRET =
  process.env.ADMIN_SESSION_SECRET || 'aps-khadakwasla-dev-secret-change-in-production';

const COOKIE_NAME = 'aps_admin_session';

export { COOKIE_NAME };

export function createSessionToken(): string {
  const exp = Date.now() + 7 * 24 * 60 * 60 * 1000;
  const payload = Buffer.from(JSON.stringify({ role: 'admin', exp })).toString(
    'base64url',
  );
  const sig = createHmac('sha256', SECRET).update(payload).digest('base64url');
  return `${payload}.${sig}`;
}

export function verifySessionToken(token: string | undefined): boolean {
  if (!token || !token.includes('.')) return false;
  const [payload, sig] = token.split('.');
  if (!payload || !sig) return false;
  const expected = createHmac('sha256', SECRET).update(payload).digest('base64url');
  try {
    const a = Buffer.from(sig);
    const b = Buffer.from(expected);
    if (a.length !== b.length || !timingSafeEqual(a, b)) return false;
  } catch {
    return false;
  }
  try {
    const data = JSON.parse(Buffer.from(payload, 'base64url').toString()) as {
      exp: number;
      role: string;
    };
    return data.role === 'admin' && data.exp > Date.now();
  } catch {
    return false;
  }
}

export const ADMIN_USER = process.env.ADMIN_USERNAME || 'admin';
export const ADMIN_PASS = process.env.ADMIN_PASSWORD || 'admin123';
