'use client';

import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';

export function LogoutButton() {
  const router = useRouter();

  async function logout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/login');
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={() => void logout()}
      className="inline-flex items-center gap-2 rounded-md border border-[#da251c]/30 bg-white px-3 py-2 text-sm font-medium text-[#da251c] hover:bg-[#da251c]/5"
    >
      <LogOut className="h-4 w-4" />
      Log out
    </button>
  );
}
