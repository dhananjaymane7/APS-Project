import Link from 'next/link';
import type { HomepageBlock } from '@/lib/site-content';

export default function HomepageBlocks({ blocks }: { blocks: HomepageBlock[] }) {
  const visible = blocks.filter((b) => b.visible).sort((a, b) => a.order - b.order);
  if (visible.length === 0) return null;

  return (
    <section className="py-10 px-4 bg-muted/40">
      <div className="max-w-7xl mx-auto space-y-8">
        {visible.map((block) => {
          if (block.type === 'text') {
            return (
              <div
                key={block.id}
                className="rounded-xl border border-border bg-card p-8 shadow-sm"
              >
                {block.title && (
                  <h2 className="text-2xl font-bold text-primary mb-3">{block.title}</h2>
                )}
                {block.body && (
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {block.body}
                  </p>
                )}
              </div>
            );
          }
          if (block.type === 'cta') {
            return (
              <div
                key={block.id}
                className="rounded-xl bg-gradient-to-r from-[#0a305f] to-[#da251c] p-8 text-center text-white shadow-lg"
              >
                {block.title && <h2 className="text-2xl font-bold mb-2">{block.title}</h2>}
                {block.body && <p className="text-white/90 mb-6 max-w-2xl mx-auto">{block.body}</p>}
                {block.href && block.buttonLabel && (
                  <Link
                    href={block.href}
                    className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-[#0a305f] hover:bg-[#e9f0f7] transition"
                  >
                    {block.buttonLabel}
                  </Link>
                )}
              </div>
            );
          }
          if (block.type === 'image_banner' && block.imageUrl) {
            return (
              <div key={block.id} className="overflow-hidden rounded-xl border border-border shadow-md">
                <img
                  src={block.imageUrl}
                  alt={block.title || 'Banner'}
                  className="h-auto w-full max-h-[320px] object-cover"
                />
                {(block.title || block.body) && (
                  <div className="bg-card p-4">
                    {block.title && <h3 className="font-bold text-primary">{block.title}</h3>}
                    {block.body && <p className="text-sm text-muted-foreground mt-1">{block.body}</p>}
                  </div>
                )}
              </div>
            );
          }
          return null;
        })}
      </div>
    </section>
  );
}
