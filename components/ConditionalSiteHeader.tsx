'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import type { NavItem } from '@/lib/site-content';
import { defaultNavigation } from '@/lib/site-content';

export default function ConditionalSiteHeader() {
  const pathname = usePathname();
  const [nav, setNav] = useState<NavItem[]>(defaultNavigation);

  useEffect(() => {
    fetch('/api/content')
      .then((r) => r.json())
      .then((d: { navigation?: NavItem[] }) => {
        if (d.navigation?.length) setNav(d.navigation);
      })
      .catch(() => {});
  }, []);

  if (pathname === '/login' || pathname?.startsWith('/admin')) return null;

  return <Header navItems={nav} />;
}
