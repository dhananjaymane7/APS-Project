import type { ScoreboardData } from '@/lib/site-content';
import HousePositionsClient from '@/components/HousePositionsClient';

export default function ScoreboardSection({ data }: { data: ScoreboardData }) {
  if (!data.enabled) return null;

  if (data.layout === 'house_positions') {
    const primary = data.primary?.houses?.length ? data.primary : { houses: data.houses, eventTitle: data.eventTitle, imageUrl: data.imageUrl, participantsText: data.participantsText };
    const secondary = data.secondary?.houses?.length ? data.secondary : primary;
    return (
      <section className="relative mt-16 overflow-hidden border-y border-[#0a305f]/10 bg-gradient-to-b from-[#f8fafc] via-white to-[#f6f9ff] py-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(10,48,95,0.05),_transparent_50%)]" />
        <HousePositionsClient
          sectionTitle={data.mainTitle || 'HOUSE POSITIONS'}
          primary={primary}
          secondary={secondary}
        />
      </section>
    );
  }

  if (data.layout === 'event' && data.houses.length > 0) {
    return (
      <section className="relative mt-16 overflow-hidden border-y border-[#0a305f]/10 bg-gradient-to-b from-[#f6f9ff] to-white py-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(10,48,95,0.06),_transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4">
          {data.eventTitle && (
            <h2 className="mb-10 text-center text-2xl font-extrabold tracking-tight text-[#0a305f] md:text-3xl">
              {data.eventTitle}
            </h2>
          )}
          <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
            <div className="flex flex-col overflow-hidden rounded-2xl border border-[#f4c430]/40 bg-gradient-to-br from-[#fff9e6] via-[#fff4cc] to-[#fde68a] shadow-xl">
              <div className="border-b border-[#0a305f]/10 bg-white/80 px-4 py-3 text-center">
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#0a305f]">{data.mainTitle}</span>
              </div>
              <ul className="flex flex-col gap-0 divide-y divide-[#0a305f]/10 p-4 md:p-6">
                {data.houses.map((house) => (
                  <li key={house.id} className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0">
                    <span className="font-semibold text-[#0a305f]">{house.name}</span>
                    <span className="rounded-full bg-white px-4 py-1.5 text-sm font-bold tabular-nums text-[#0a305f] shadow-inner ring-1 ring-[#0a305f]/10">
                      {house.score}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              {data.imageUrl && (
                <div className="overflow-hidden rounded-2xl border border-[#0a305f]/10 shadow-lg">
                  <img src={data.imageUrl} alt="" className="h-56 w-full object-cover md:h-72" />
                </div>
              )}
              {data.participantsText && (
                <p className="text-pretty leading-relaxed text-muted-foreground">{data.participantsText}</p>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (data.houses.length === 0) return null;

  return (
    <section className="mt-16 border-y border-[#0a305f]/10 bg-gradient-to-b from-[#f0f6ff] via-white to-[#f6f9ff] py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 text-center">
          <div className="mx-auto inline-flex rounded-full border border-[#0a305f]/15 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#da251c] shadow-sm">
            Houses
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0a305f] md:text-4xl">{data.mainTitle}</h2>
          {data.eventTitle && (
            <p className="mt-2 text-sm font-medium text-muted-foreground md:text-base">{data.eventTitle}</p>
          )}
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {data.houses.map((house) => (
            <div
              key={house.id}
              className="group relative overflow-hidden rounded-2xl border border-white/80 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className="absolute inset-x-0 top-0 h-1.5 rounded-t-2xl"
                style={{ backgroundColor: house.accentColor || '#0a305f' }}
              />
              <div className="mb-4 flex justify-center">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full text-lg font-bold text-white shadow-md ring-4 ring-white"
                  style={{ backgroundColor: house.accentColor || '#0a305f' }}
                >
                  {house.name.charAt(0)}
                </div>
              </div>
              <h3 className="text-center text-lg font-bold text-[#0a305f]">{house.name}</h3>
              <p className="mt-3 text-center text-sm font-medium text-muted-foreground">Score</p>
              <p
                className="text-center text-3xl font-black tabular-nums tracking-tight"
                style={{ color: house.accentColor || '#da251c' }}
              >
                {house.score}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
