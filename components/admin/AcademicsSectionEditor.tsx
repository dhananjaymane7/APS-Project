'use client';

import type { SiteContent, AcademicsCard } from '@/lib/site-content';
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

const ICON_OPTIONS = [
  'graduationCap',
  'bookOpen',
  'calendarDays',
  'bookMarked',
  'library',
  'microscope',
];

export default function AcademicsSectionEditor({
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
  const sec = content.academicsSection;

  function setSec(patch: Partial<typeof sec>) {
    setContent({ ...content, academicsSection: { ...sec, ...patch } });
  }

  function updateCard(i: number, patch: Partial<AcademicsCard>) {
    const cards = [...sec.cards];
    cards[i] = { ...cards[i], ...patch };
    setSec({ cards });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Academics section (home page)</CardTitle>
        <CardDescription>
          Navy band with three cards — icons or optional images. Links should match your site routes.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center gap-3">
          <Switch checked={sec.enabled} onCheckedChange={(v) => setSec({ enabled: v })} id="ac-en" />
          <Label htmlFor="ac-en">Show section on home page</Label>
        </div>
        <div className="grid gap-2">
          <Label>Section title</Label>
          <Input value={sec.title} onChange={(e) => setSec({ title: e.target.value })} />
        </div>
        {sec.cards.map((card, i) => (
          <div key={card.id} className="space-y-3 rounded-lg border p-4">
            <div className="flex justify-between">
              <span className="text-sm font-semibold text-[#0a305f]">Card {i + 1}</span>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setSec({ cards: sec.cards.filter((_, j) => j !== i) })}
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </div>
            <Input placeholder="Title" value={card.title} onChange={(e) => updateCard(i, { title: e.target.value })} />
            <Textarea
              placeholder="Description"
              rows={2}
              value={card.description}
              onChange={(e) => updateCard(i, { description: e.target.value })}
            />
            <Input placeholder="Link path e.g. /academics/general" value={card.href} onChange={(e) => updateCard(i, { href: e.target.value })} />
            <div className="grid gap-2">
              <Label className="text-xs">Icon (if no image)</Label>
              <select
                className="border-input bg-background h-9 rounded-md border px-3 text-sm"
                value={card.iconKey || 'graduationCap'}
                onChange={(e) => updateCard(i, { iconKey: e.target.value })}
              >
                {ICON_OPTIONS.map((k) => (
                  <option key={k} value={k}>
                    {k}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid gap-2">
              <Label className="text-xs">Optional image URL (overrides icon)</Label>
              <Input
                value={card.imageUrl ?? ''}
                onChange={(e) => updateCard(i, { imageUrl: e.target.value || undefined })}
              />
              <Input
                type="file"
                accept="image/*"
                onChange={async (e) => {
                  const f = e.target.files?.[0];
                  if (!f) return;
                  const url = await uploadFile(f);
                  if (url) updateCard(i, { imageUrl: url });
                  e.target.value = '';
                }}
              />
            </div>
          </div>
        ))}
        <Button
          type="button"
          variant="outline"
          onClick={() =>
            setSec({
              cards: [
                ...sec.cards,
                {
                  id: newId(),
                  title: 'New card',
                  description: 'Description',
                  href: '/academics',
                  iconKey: 'bookOpen',
                },
              ],
            })
          }
        >
          <Plus className="h-4 w-4" />
          Add card
        </Button>
        <Button disabled={saving} onClick={onSave}>
          {saving ? <Loader2 className="animate-spin" /> : <Save className="h-4 w-4" />}
          Save academics section
        </Button>
      </CardContent>
    </Card>
  );
}
