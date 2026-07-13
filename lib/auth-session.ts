import { createHmac, timingSafeEqual } from 'crypto';

const SECRET =
  process.env.ADMIN_SESSION_SECRET || 'aps-khadakwasla-dev-secret-change-in-production';

const COOKIE_NAME = 'aps_admin_session';

export { COOKIE_NAME };

export function createSessionToken(role = 'admin'): string {
  const exp = Date.now() + 7 * 24 * 60 * 60 * 1000;
  const payload = Buffer.from(JSON.stringify({ role, exp })).toString('base64url');
  const sig = createHmac('sha256', SECRET).update(payload).digest('base64url');
  return `${payload}.${sig}`;
}

function parseToken(token: string | undefined) {
  if (!token || !token.includes('.')) return null;
  const [payload, sig] = token.split('.');
  if (!payload || !sig) return null;
  const expected = createHmac('sha256', SECRET).update(payload).digest('base64url');
  try {
    const a = Buffer.from(sig);
    const b = Buffer.from(expected);
    if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
  } catch {
    return null;
  }
  try {
    const data = JSON.parse(Buffer.from(payload, 'base64url').toString()) as {
      exp: number;
      role: string;
    };
    return data;
  } catch {
    return null;
  }
}

export function verifySessionToken(token: string | undefined): boolean {
  const data = parseToken(token);
  if (!data) return false;
  return (data.role === 'admin' || data.role === 'superadmin') && data.exp > Date.now();
}

export function getSessionRole(token: string | undefined): string | null {
  const data = parseToken(token);
  if (!data) return null;
  if (data.exp <= Date.now()) return null;
  return data.role || null;
}

export const ADMIN_USER = process.env.ADMIN_USERNAME || 'admin';
export const ADMIN_PASS = process.env.ADMIN_PASSWORD || 'admin123';

export const SUPER_USER = process.env.SUPERADMIN_USERNAME || 'superAdmin';
export const SUPER_PASS = process.env.SUPERADMIN_PASSWORD || 'super111';
