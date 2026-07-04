'use client';

import type { SiteContent, ScoreboardHouse, HouseBoardSegment } from '@/lib/site-content';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Loader2, Plus, Save, Trash2 } from 'lucide-react';

function newId() {
  return typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : String(Date.now());
}

function SegmentEditor({
  title,
  segment,
  onChange,
  uploadFile,
}: {
  title: string;
  segment: HouseBoardSegment;
  onChange: (s: HouseBoardSegment) => void;
  uploadFile: (f: File) => Promise<string | null>;
}) {
  function updateHouse(i: number, patch: Partial<ScoreboardHouse>) {
    const houses = [...segment.houses];
    houses[i] = { ...houses[i], ...patch };
    onChange({ ...segment, houses });
  }

  return (
    <div className="space-y-4 rounded-xl border border-dashed border-[#0a305f]/25 bg-muted/20 p-4">
      <h4 className="font-bold text-[#0a305f]">{title}</h4>
      <div className="grid gap-2">
        <Label className="text-xs">Scoreboard header (yellow box)</Label>
        <Input
          value={segment.scoreboardHeader ?? ''}
          onChange={(e) => onChange({ ...segment, scoreboardHeader: e.target.value })}
          placeholder="SCOREBOARD"
        />
      </div>
      <div className="grid gap-2">
        <Label className="text-xs">Event title (right column)</Label>
        <Input value={segment.eventTitle ?? ''} onChange={(e) => onChange({ ...segment, eventTitle: e.target.value })} />
      </div>
      <div className="grid gap-2">
        <Label className="text-xs">Event image URL</Label>
        <Input value={segment.imageUrl ?? ''} onChange={(e) => onChange({ ...segment, imageUrl: e.target.value })} />
        <Input
          type="file"
          accept="image/*"
          onChange={async (e) => {
            const f = e.target.files?.[0];
            if (!f) return;
            const url = await uploadFile(f);
            if (url) onChange({ ...segment, imageUrl: url });
            e.target.value = '';
          }}
        />
      </div>
      <div className="grid gap-2">
        <Label className="text-xs">Participants / winners text</Label>
        <Textarea
          rows={4}
          value={segment.participantsText ?? ''}
          onChange={(e) => onChange({ ...segment, participantsText: e.target.value })}
        />
      </div>
      <div className="space-y-2">
        <Label className="text-xs">Houses</Label>
        {segment.houses.map((h, i) => (
          <div key={h.id} className="flex flex-col gap-2 rounded border bg-background p-2 sm:flex-row sm:items-end">
            <div className="grid flex-1 gap-2 sm:grid-cols-3">
              <Input
                placeholder="Name"
                value={h.name}
                onChange={(e) => updateHouse(i, { name: e.target.value })}
              />
              <Input
                placeholder="Score / rank"
                value={h.score}
                onChange={(e) => updateHouse(i, { score: e.target.value })}
              />
              <Input
                placeholder="#hex accent"
                value={h.accentColor ?? ''}
                onChange={(e) => updateHouse(i, { accentColor: e.target.value || undefined })}
              />
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => onChange({ ...segment, houses: segment.houses.filter((_, j) => j !== i) })}
            >
              <Trash2 className="h-4 w-4 text-destructive" />
            </Button>
          </div>
        ))}
        <Button
          type="button"
          variant="secondary"
          size="sm"
          onClick={() =>
            onChange({
              ...segment,
              houses: [
                ...segment.houses,
                { id: newId(), name: 'House', score: '0', accentColor: '#0a305f' },
              ],
            })
          }
        >
          <Plus className="h-4 w-4" />
          Add house
        </Button>
      </div>
    </div>
  );
}

export default function ScoreboardEditor({
  content,
  setContent,
  saving,
  onSave,
  uploadFile,
}: {
  content: SiteContent;
  setContent: (c: SiteContent) => void;
  saving: boolean;
  onSave: () => void;
  uploadFile: (f: File) => Promise<string | null>;
}) {
  const sb = content.scoreboard;

  function setSb(patch: Partial<typeof sb>) {
    setContent({ ...content, scoreboard: { ...sb, ...patch } });
  }

  function updateHouse(i: number, patch: Partial<ScoreboardHouse>) {
    const houses = [...sb.houses];
    houses[i] = { ...houses[i], ...patch };
    setSb({ houses });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Score board &amp; house positions</CardTitle>
        <CardDescription>
          <strong>House positions</strong> adds Primary / Secondary tabs with a score box and event column. Other
          layouts are simpler single views.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center gap-3">
          <Switch checked={sb.enabled} onCheckedChange={(v) => setSb({ enabled: v })} id="sb-en" />
          <Label htmlFor="sb-en">Show above footer on site</Label>
        </div>

        <div className="grid gap-2">
          <Label>Layout</Label>
          <select
            className="border-input bg-background h-9 rounded-md border px-3 text-sm"
            value={sb.layout}
            onChange={(e) => setSb({ layout: e.target.value as 'cards' | 'event' | 'house_positions' })}
          >
            <option value="house_positions">House positions (Primary / Secondary tabs)</option>
            <option value="cards">House cards (4 columns)</option>
            <option value="event">Single event (score list + image)</option>
          </select>
        </div>

        <div className="grid gap-2">
          <Label>Section title</Label>
          <Input
            value={sb.mainTitle}
            onChange={(e) => setSb({ mainTitle: e.target.value })}
            placeholder="e.g. HOUSE POSITIONS"
          />
        </div>

        {sb.layout === 'house_positions' && (
          <>
            <SegmentEditor
              title="Primary"
              segment={sb.primary}
              uploadFile={uploadFile}
              onChange={(primary) => setSb({ primary })}
            />
            <SegmentEditor
              title="Secondary"
              segment={sb.secondary}
              uploadFile={uploadFile}
              onChange={(secondary) => setSb({ secondary })}
            />
          </>
        )}

        {sb.layout === 'event' && (
          <>
            <div className="grid gap-2">
              <Label>Event title</Label>
              <Input value={sb.eventTitle ?? ''} onChange={(e) => setSb({ eventTitle: e.target.value })} />
            </div>
            <div className="grid gap-2">
              <Label>Image URL</Label>
              <Input value={sb.imageUrl ?? ''} onChange={(e) => setSb({ imageUrl: e.target.value })} />
              <Input
                type="file"
                accept="image/*"
                onChange={async (e) => {
                  const f = e.target.files?.[0];
                  if (!f) return;
                  const url = await uploadFile(f);
                  if (url) setSb({ imageUrl: url });
                  e.target.value = '';
                }}
              />
            </div>
            <div className="grid gap-2">
              <Label>Participants text</Label>
              <Textarea
                rows={4}
                value={sb.participantsText ?? ''}
                onChange={(e) => setSb({ participantsText: e.target.value })}
              />
            </div>
          </>
        )}

        {(sb.layout === 'cards' || sb.layout === 'event') && (
          <div className="space-y-3">
            <Label>{sb.layout === 'cards' ? 'House cards' : 'House rows'}</Label>
            {sb.houses.map((h, i) => (
              <div key={h.id} className="flex flex-col gap-2 rounded-lg border p-3 sm:flex-row sm:items-end">
                <div className="grid flex-1 gap-2 sm:grid-cols-3">
                  <Input placeholder="Name" value={h.name} onChange={(e) => updateHouse(i, { name: e.target.value })} />
                  <Input
                    placeholder="Score"
                    value={h.score}
                    onChange={(e) => updateHouse(i, { score: e.target.value })}
                  />
                  <Input
                    placeholder="#hex"
                    value={h.accentColor ?? ''}
                    onChange={(e) => updateHouse(i, { accentColor: e.target.value || undefined })}
                  />
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => setSb({ houses: sb.houses.filter((_, j) => j !== i) })}
                >
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                setSb({
                  houses: [
                    ...sb.houses,
                    { id: newId(), name: 'New house', score: '0', accentColor: '#0a305f' },
                  ],
                })
              }
            >
              <Plus className="h-4 w-4" />
              Add row
            </Button>
          </div>
        )}

        <Button disabled={saving} onClick={onSave}>
          {saving ? <Loader2 className="animate-spin" /> : <Save className="h-4 w-4" />}
          Save score board
        </Button>
      </CardContent>
    </Card>
  );
}
