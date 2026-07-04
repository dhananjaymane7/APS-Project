import Link from 'next/link';
import type { AcademicsSection } from '@/lib/site-content';
import {
  BookOpen,
  CalendarDays,
  GraduationCap,
  BookMarked,
  Library,
  Microscope,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  bookOpen: BookOpen,
  calendarDays: CalendarDays,
  graduationCap: GraduationCap,
  bookMarked: BookMarked,
  library: Library,
  microscope: Microscope,
};

export default function AcademicsHomeSection({ section }: { section: AcademicsSection }) {
  if (!section.enabled || section.cards.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-[#0a305f] py-16 text-white">
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#da251c]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-[#9ab5d7]/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">{section.title}</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {section.cards.map((card) => {
            const Icon = (card.iconKey && iconMap[card.iconKey]) || GraduationCap;
            return (
              <Link
                key={card.id}
                href={card.href}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white p-6 text-[#0a305f] shadow-xl transition hover:-translate-y-1 hover:border-[#f4c430]/60 hover:shadow-2xl"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0a305f] to-[#1e4a7a] text-white shadow-lg transition group-hover:from-[#da251c] group-hover:to-[#b91c1c]">
                    {card.imageUrl ? (
                      <img src={card.imageUrl} alt="" className="h-full w-full rounded-2xl object-cover" />
                    ) : (
                      <Icon className="h-7 w-7" />
                    )}
                  </div>
                  <span className="rounded-full bg-[#e9f0f7] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#0a305f]/70">
                    Explore
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-bold">{card.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{card.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
