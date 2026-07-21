import { NextRequest, NextResponse } from 'next/server';
import fs from 'node:fs';
import path from 'node:path';

const ASSETS_DIR = path.resolve(process.cwd(), 'assets');

function getMimeType(fileName: string): string {
  const ext = path.extname(fileName).toLowerCase();
  const types: Record<string, string> = {
    '.mp4': 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
    '.webm': 'video/webm; codecs="vp8, vorbis"',
    '.mov': 'video/quicktime',
    '.m4v': 'video/x-m4v',
  };
  return types[ext] || 'video/mp4';
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ file: string[] }> }
) {
  try {
    const { file } = await params;
    const fileName = file?.[0];

    if (!fileName) {
      return NextResponse.json({ error: 'No file specified' }, { status: 400 });
    }

    const decodedName = decodeURIComponent(fileName);
    const fullPath = path.join(ASSETS_DIR, decodedName);

    if (!fullPath.startsWith(ASSETS_DIR)) {
      return NextResponse.json({ error: 'Invalid path' }, { status: 403 });
    }

    if (!fs.existsSync(fullPath)) {
      console.error(`File not found: ${fullPath}`);
      return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }

    const fileBuffer = fs.readFileSync(fullPath);
    const stat = fs.statSync(fullPath);

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': getMimeType(fullPath),
        'Content-Length': stat.size.toString(),
        'Cache-Control': 'public, max-age=3600',
        'Accept-Ranges': 'bytes',
      },
    });
  } catch (error) {
    console.error('Video API error:', error);
    return NextResponse.json(
      { error: 'Failed to load video' },
      { status: 500 }
    );
  }
}
