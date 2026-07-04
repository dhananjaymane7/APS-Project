'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  Mail,
  Phone,
  LogIn,
  ChevronDown,
  ChevronRight,
  CreditCard,
  Sparkles,
} from 'lucide-react';
import type { NavItem, NavSubItem } from '@/lib/site-content';
import { defaultNavigation } from '@/lib/site-content';

const navBase =
  'flex items-center gap-1 px-3 py-3.5 text-sm font-semibold text-white transition-colors whitespace-nowrap lg:px-4';

function SubmenuRow({
  sub,
  mobile,
  onNavigate,
}: {
  sub: NavSubItem;
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  const hasNested = Boolean(sub.submenu?.length);

  if (hasNested && sub.submenu) {
    return (
      <div className={mobile ? 'border-b border-white/10' : 'group/nested relative'}>
        <div
          className={`flex items-center justify-between gap-2 border-b border-white/10 px-4 py-2.5 text-sm text-white last:border-b-0 ${
            mobile ? 'bg-[#0a305f]/50' : ''
          }`}
        >
          {sub.href ? (
            <Link
              href={sub.href}
              className="flex-1 text-center hover:underline"
              onClick={onNavigate}
            >
              {sub.label}
            </Link>
          ) : (
            <span className="flex-1 text-center font-medium">{sub.label}</span>
          )}

        </div>
        {mobile ? (
          <div className="bg-[#082544] pl-4">
            {sub.submenu!.map((n) => (
              <Link
                key={n.label}
                href={n.href || '#'}
                className="block border-b border-white/5 py-2 pr-4 text-center text-sm text-white/95 hover:bg-[#da251c]/50"
                onClick={onNavigate}
              >
                {n.label}
              </Link>
            ))}
          </div>
        ) : (
          <div className="absolute left-full top-0 z-[60] min-w-[220px] pl-1">
            <div className="border border-white/10 border-t-2 border-t-[#f4c430] bg-[#0a305f] shadow-xl">
              {sub.submenu!.map((nested) => (
                <Link
                  key={nested.label}
                  href={nested.href || '#'}
                  className="block border-b border-white/10 px-4 py-2.5 text-center text-sm text-white last:border-b-0 hover:bg-[#da251c]/85"
                >
                  {nested.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={sub.href || '#'}
      className="block border-b border-white/10 px-4 py-2.5 text-center text-sm text-white last:border-b-0 hover:bg-[#da251c]/85"
      onClick={onNavigate}
    >
      {sub.label}
    </Link>
  );
}

export default function Header({ navItems = defaultNavigation }: { navItems?: NavItem[] }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openNestedMobile, setOpenNestedMobile] = useState<string | null>(null);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const desktopNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(e: MouseEvent) {
      if (desktopNavRef.current && !desktopNavRef.current.contains(e.target as Node)) {
        setOpenDesktopMenu(null);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpenDesktopMenu(null);
    }
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  useEffect(() => {
    setOpenDesktopMenu(null);
  }, [pathname]);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="relative overflow-hidden bg-gradient-to-r from-[#061f38] via-[#0a305f] to-[#061f38] px-4 py-2.5 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-80" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 text-sm md:flex-row md:items-center md:gap-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
            <a
              href="mailto:apskhadakwasla1@gmail.com"
              className="flex items-center gap-2 transition hover:text-[#f4c430]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                <Mail size={16} />
              </span>
              <span className="font-medium">apskhadakwasla1@gmail.com</span>
            </a>
            <a href="tel:02025290084" className="flex items-center gap-2 transition hover:text-[#f4c430]">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                <Phone size={16} />
              </span>
              <span className="font-medium">020-25290084</span>
            </a>
          </div>
          <div className="flex w-full flex-wrap items-center justify-end gap-2 md:w-auto">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f4c430] via-[#fcd34d] to-[#f4c430] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#0a305f] shadow-lg ring-2 ring-white/20 transition hover:brightness-105"
            >
              <CreditCard className="h-4 w-4" />
              Pay Online Fee
            </a>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#f4c430]/80 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white backdrop-blur-sm transition hover:bg-[#f4c430] hover:text-[#0a305f]"
              aria-label="Admin login"
            >
              <LogIn className="h-4 w-4" />
              Login
            </Link>
          </div>
        </div>
      </div>

      <div className="border-b border-border bg-white px-4 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-4">
            <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#0a305f] to-[#da251c] shadow-lg ring-2 ring-[#f4c430]/30">
              <Sparkles className="absolute -right-1 -top-1 h-4 w-4 text-[#f4c430]/90" />
              <span className="text-xl font-black tracking-tight text-white">APS</span>
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#da251c]">
                Army Welfare Education Society
              </p>
              <h1 className="truncate text-xl font-bold text-[#0a305f] md:text-3xl">Army Public School</h1>
              <p className="text-sm font-semibold text-muted-foreground">Khadakwasla, Pune</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 transition hover:bg-muted md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <nav className="border-t border-white/10 bg-[#0a305f] text-white shadow-inner">
        <div className="mx-auto max-w-7xl" ref={desktopNavRef}>
          <div className="hidden items-center overflow-x-auto md:flex md:overflow-visible">
            {navItems.map((item) => {
              const active =
                item.href && item.href !== '/'
                  ? pathname === item.href || pathname.startsWith(item.href + '/')
                  : item.href === '/' && pathname === '/';

              if (item.submenu?.length) {
                const open = openDesktopMenu === item.label;
                return (
                  <div key={item.label} className="relative shrink-0">
                    <button
                      type="button"
                      className={`${navBase} cursor-pointer rounded-t-lg ${
                        open ? 'bg-[#f4c430] text-[#0a305f]' : 'hover:bg-[#f4c430] hover:text-[#0a305f]'
                      }`}
                      aria-expanded={open}
                      aria-haspopup="true"
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenDesktopMenu(open ? null : item.label);
                      }}
                    >
                      {item.label}
                    </button>
                    {open && (
                      <div className="absolute left-0 top-full z-[70] min-w-[min(100vw-2rem,300px)] pt-0">
                        <div className="border border-white/10 border-t-2 border-t-[#f4c430] bg-[#0a305f] shadow-2xl">
                          {item.submenu.map((sub) => (
                            <SubmenuRow key={sub.label} sub={sub} />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href || '#'}
                  className={`${navBase} shrink-0 rounded-t-lg hover:bg-[#f4c430] hover:text-[#0a305f] ${
                    active ? 'bg-[#f4c430] text-[#0a305f]' : ''
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {isMenuOpen && (
            <div className="max-h-[70vh] overflow-y-auto border-t border-white/15 md:hidden">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.submenu?.length ? (
                    <>
                      <button
                        type="button"
                        onClick={() => toggleDropdown(item.label)}
                        className="w-full px-4 py-3 text-left text-sm font-medium transition hover:bg-[#da251c]/80"
                      >
                        {item.label}
                      </button>
                      {openDropdown === item.label && (
                        <div className="bg-[#082544]">
                          {item.submenu.map((sub) => {
                            const nestedKey = `${item.label}-${sub.label}`;
                            if (sub.submenu?.length) {
                              return (
                                <div key={sub.label} className="border-b border-white/10">
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setOpenNestedMobile(openNestedMobile === nestedKey ? null : nestedKey)
                                    }
                                    className="w-full px-6 py-2 text-sm text-white/95"
                                  >
                                    {sub.label}
                                  </button>
                                  {openNestedMobile === nestedKey && (
                                    <div className="bg-[#061c36] pb-2">
                                      {sub.submenu!.map((n) => (
                                        <Link
                                          key={n.label}
                                          href={n.href || '#'}
                                          className="block px-10 py-2 text-sm text-white/90 hover:bg-[#da251c]/40"
                                          onClick={() => setIsMenuOpen(false)}
                                        >
                                          {n.label}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              );
                            }
                            return (
                              <Link
                                key={sub.label}
                                href={sub.href || '#'}
                                className="block border-b border-white/10 px-6 py-2 text-sm hover:bg-[#da251c]/50"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {sub.label}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href || '#'}
                      className="block border-b border-white/10 px-4 py-3 text-sm font-medium hover:bg-[#da251c]/80"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
