'use client';

import { useState } from 'react';
import type { HouseBoardSegment } from '@/lib/site-content';
import { cn } from '@/lib/utils';
import { Trophy } from 'lucide-react';

type Tab = 'primary' | 'secondary';

export default function HousePositionsClient({
  sectionTitle,
  primary,
  secondary,
}: {
  sectionTitle: string;
  primary: HouseBoardSegment;
  secondary: HouseBoardSegment;
}) {
  const [tab, setTab] = useState<Tab>('primary');
  const data = tab === 'primary' ? primary : secondary;
  const houses = data.houses ?? [];
  const header = data.scoreboardHeader || 'SCOREBOARD';

  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="mb-8 flex flex-col items-center gap-2 text-center sm:mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#0a305f]/10 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#da251c] shadow-sm">
          <Trophy className="h-3.5 w-3.5" />
          Inter-house
        </div>
        <h2 className="text-2xl font-black uppercase tracking-tight text-[#0f172a] sm:text-3xl md:text-4xl">
          {sectionTitle}
        </h2>
      </div>

      <div className="mb-8 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => setTab('primary')}
          className={cn(
            'min-w-[140px] rounded-xl border-2 px-8 py-2.5 text-sm font-bold shadow-sm transition-all',
            tab === 'primary'
              ? 'border-[#0a305f] bg-[#f4c430] text-[#0a305f] shadow-md ring-2 ring-[#f4c430]/40'
              : 'border-slate-300 bg-white text-[#0a305f] hover:border-[#f4c430]/80',
          )}
        >
          Primary
        </button>
        <button
          type="button"
          onClick={() => setTab('secondary')}
          className={cn(
            'min-w-[140px] rounded-xl border-2 px-8 py-2.5 text-sm font-bold shadow-sm transition-all',
            tab === 'secondary'
              ? 'border-[#0a305f] bg-[#0a305f] text-white shadow-lg'
              : 'border-[#0a305f] bg-white text-[#0a305f] hover:bg-[#e9f0f7]',
          )}
        >
          Secondary
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-[0_20px_60px_-24px_rgba(10,48,95,0.25)]">
        <div className="grid gap-0 lg:grid-cols-2">
          <div className="border-b border-[#e2e8f0] bg-gradient-to-br from-[#fff9e6] via-[#fff4cc] to-[#fde68a] p-4 sm:p-6 lg:border-b-0 lg:border-r">
            <div className="mb-4 rounded-lg border border-[#0a305f]/10 bg-white px-3 py-2 text-center shadow-inner">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#0a305f]">{header}</span>
            </div>
            <ul className="space-y-0 divide-y divide-[#0a305f]/15">
              {houses.map((house) => (
                <li key={house.id} className="flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0">
                  <span className="min-w-0 flex-1 font-semibold text-[#0a305f]">{house.name}</span>
                  <span
                    className="shrink-0 rounded-full bg-white px-3 py-1 text-sm font-black tabular-nums text-[#0a305f] shadow-md ring-1 ring-[#0a305f]/10"
                    style={
                      house.accentColor
                        ? { boxShadow: `0 0 0 2px ${house.accentColor}33` }
                        : undefined
                    }
                  >
                    {house.score}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 p-4 sm:p-6">
            {data.eventTitle && (
              <h3 className="text-center text-lg font-black uppercase leading-snug tracking-tight text-[#0a305f] sm:text-xl">
                {data.eventTitle}
              </h3>
            )}
            {data.imageUrl && (
              <div className="overflow-hidden rounded-xl border border-[#0a305f]/10 shadow-md">
                <img src={data.imageUrl} alt="" className="h-48 w-full object-cover sm:h-56" />
              </div>
            )}
            {data.participantsText && (
              <p className="text-pretty text-sm leading-relaxed text-[#334155] whitespace-pre-line">
                {data.participantsText}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
