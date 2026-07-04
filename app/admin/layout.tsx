import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { COOKIE_NAME, verifySessionToken } from '@/lib/auth-session';
import { Home, LayoutDashboard } from 'lucide-react';
import { LogoutButton } from '@/components/admin/LogoutButton';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!verifySessionToken(token)) {
    redirect('/login?next=/admin');
  }

  return (
    <div className="min-h-screen bg-[#e9f0f7]">
      <header className="sticky top-0 z-50 border-b border-[#0a305f]/10 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#0a305f] to-[#da251c] text-white shadow">
              <LayoutDashboard className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-[#0a305f]">APS Khadakwasla</p>
              <p className="text-xs text-muted-foreground">Admin dashboard</p>
            </div>
          </div>
          <nav className="flex items-center gap-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-[#0a305f] hover:bg-[#e9f0f7]"
            >
              <Home className="h-4 w-4" />
              View site
            </Link>
            <LogoutButton />
          </nav>
        </div>
      </header>
      <div className="mx-auto max-w-7xl px-4 py-8">{children}</div>
    </div>
  );
}
