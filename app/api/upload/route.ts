import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { COOKIE_NAME, verifySessionToken } from '@/lib/auth-session';

const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads');

function safeName(name: string) {
  return name.replace(/[^a-zA-Z0-9._-]/g, '_');
}

export async function POST(request: Request) {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!verifySessionToken(token)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const form = await request.formData();
  const file = form.get('file');
  if (!(file instanceof File)) {
    return NextResponse.json({ error: 'No file' }, { status: 400 });
  }

  const buf = Buffer.from(await file.arrayBuffer());
  const original = safeName(file.name || 'upload');
  const stamp = Date.now();
  const filename = `${stamp}-${original}`;
  await mkdir(UPLOAD_DIR, { recursive: true });
  const diskPath = path.join(UPLOAD_DIR, filename);
  await writeFile(diskPath, buf);

  const url = `/uploads/${filename}`;
  return NextResponse.json({ url, name: filename });
}
