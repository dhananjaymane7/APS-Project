'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, Lock, Shield, Sparkles, ArrowRight } from 'lucide-react';

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get('next') || '/admin';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        setError(data.error || 'Login failed');
        return;
      }
      router.push(next);
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#061f38]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(218,37,28,0.35),_transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(154,181,215,0.25),_transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.04\'%3E%3Cpath d=\'M50 50h20v20H50V50zm0-20h20v20H50V30zm0-20h20v20H50V10zM30 50h20v20H30V50zm0-20h20v20H30V30zm0-20h20v20H30V10zM10 50h20v20H10V50zm0-20h20v20H10V30zm0-20h20v20H10V10z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-lg flex-col justify-center px-4 py-12">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f4c430] to-[#f59e0b] shadow-xl ring-4 ring-white/10">
            <Shield className="h-8 w-8 text-[#0a305f]" />
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#f4c430]">
            <Sparkles className="h-3.5 w-3.5" />
            Staff only
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">Admin portal</h1>
          <p className="mt-2 text-sm text-white/75">
            Army Public School Khadakwasla — manage content for the public website.
          </p>
        </div>

        <div className="rounded-2xl border border-white/15 bg-white/95 p-6 shadow-2xl backdrop-blur-lg md:p-8">
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="user" className="text-[#0a305f]">
                Username
              </Label>
              <div className="relative">
                <Input
                  id="user"
                  autoComplete="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="h-11 border-[#0a305f]/20 pl-10"
                  required
                />
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#0a305f]/50">
                  <Lock className="h-4 w-4" />
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="pass" className="text-[#0a305f]">
                Password
              </Label>
              <Input
                id="pass"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-11 border-[#0a305f]/20"
                required
              />
            </div>
            {error && (
              <p className="rounded-lg bg-[#da251c]/10 px-3 py-2 text-sm font-medium text-[#b91c1c]">{error}</p>
            )}
            <Button
              type="submit"
              className="h-12 w-full bg-gradient-to-r from-[#0a305f] to-[#0d4a8c] text-base font-bold text-white shadow-lg hover:from-[#0a305f]/90 hover:to-[#0d4a8c]/90"
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <>
                  Sign in
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>

        <p className="mt-8 text-center text-sm text-white/70">
          <Link href="/" className="inline-flex items-center gap-2 font-semibold text-[#f4c430] hover:underline">
            ← Back to website
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#061f38]">
          <Loader2 className="h-8 w-8 animate-spin text-[#f4c430]" />
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
