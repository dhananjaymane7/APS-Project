'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Trash2, Plus, Upload, Save, Loader2 } from 'lucide-react';
import type { SiteContent, ManagementSection, ManagementTeamMember } from '@/lib/site-content';

interface ManagementSectionEditorProps {
  content: SiteContent;
  setContent: (next: SiteContent) => void;
  saving: boolean;
  onSave: () => void;
  uploadFile: (file: File) => Promise<string | null>;
}

export default function ManagementSectionEditor({
  content,
  setContent,
  saving,
  onSave,
  uploadFile,
}: ManagementSectionEditorProps) {
  const section = content.managementSection;

  function updateTeamMember(index: number, patch: Partial<ManagementTeamMember>) {
    const team = [...section.team];
    team[index] = { ...team[index], ...patch };
    setContent({ ...content, managementSection: { ...section, team } });
  }

  function updateCommitteeItem(index: number, value: string) {
    const committeeItems = [...section.committeeItems];
    committeeItems[index] = value;
    setContent({ ...content, managementSection: { ...section, committeeItems } });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Management section</CardTitle>
        <CardDescription>Manage the management page content and committee structure.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2">
          <Label>Section title</Label>
          <Input
            value={section.title}
            onChange={(e) => setContent({ ...content, managementSection: { ...section, title: e.target.value } })}
          />
        </div>

        <div className="grid gap-2">
          <Label>Subtitle</Label>
          <Input
            value={section.subtitle}
            onChange={(e) => setContent({ ...content, managementSection: { ...section, subtitle: e.target.value } })}
          />
        </div>

        <div className="grid gap-2">
          <Label>Intro paragraphs</Label>
          <Textarea
            rows={8}
            value={section.intro.join('\n\n')}
            onChange={(e) =>
              setContent({
                ...content,
                managementSection: {
                  ...section,
                  intro: e.target.value.split(/\n\n+/).map((p) => p.trim()).filter(Boolean),
                },
              })
            }
          />
        </div>

        <div className="grid gap-2">
          <Label>Header image URL</Label>
          <Input
            value={section.imageUrl}
            onChange={(e) => setContent({ ...content, managementSection: { ...section, imageUrl: e.target.value } })}
          />
          <Input
            type="file"
            accept="image/*"
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              const url = await uploadFile(file);
              if (url) {
                setContent({ ...content, managementSection: { ...section, imageUrl: url } });
              }
              e.target.value = '';
            }}
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <CardTitle className="text-lg">Management team</CardTitle>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => {
                const team = [
                  ...section.team,
                  { id: crypto.randomUUID?.() ?? `${Date.now()}`, title: 'New role', name: 'Name', qualification: '', experience: '', imageUrl: '' },
                ];
                setContent({ ...content, managementSection: { ...section, team } });
              }}
            >
              <Plus className="h-4 w-4" />
              Add member
            </Button>
          </div>

          {section.team.map((member, index) => (
            <div key={member.id} className="rounded-lg border border-border p-4 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex-1 min-w-0">
                  <Label>Role / title</Label>
                  <Input
                    value={member.title}
                    onChange={(e) => updateTeamMember(index, { title: e.target.value })}
                  />
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    const team = section.team.filter((_, i) => i !== index);
                    setContent({ ...content, managementSection: { ...section, team } });
                  }}
                >
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>
              <div className="grid gap-2 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label>Name</Label>
                  <Input
                    value={member.name}
                    onChange={(e) => updateTeamMember(index, { name: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Qualification</Label>
                  <Input
                    value={member.qualification}
                    onChange={(e) => updateTeamMember(index, { qualification: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid gap-2 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label>Experience</Label>
                  <Input
                    value={member.experience}
                    onChange={(e) => updateTeamMember(index, { experience: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Photo URL</Label>
                  <Input
                    value={member.imageUrl ?? ''}
                    onChange={(e) => updateTeamMember(index, { imageUrl: e.target.value })}
                  />
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;
                      const url = await uploadFile(file);
                      if (url) updateTeamMember(index, { imageUrl: url });
                      e.target.value = '';
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <CardTitle className="text-lg">Committee composition</CardTitle>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => {
                const committeeItems = [...section.committeeItems, 'New committee item'];
                setContent({ ...content, managementSection: { ...section, committeeItems } });
              }}
            >
              <Plus className="h-4 w-4" />
              Add item
            </Button>
          </div>
          <div className="grid gap-3">
            <Input
              value={section.committeeTitle}
              onChange={(e) => setContent({ ...content, managementSection: { ...section, committeeTitle: e.target.value } })}
              placeholder="Committee title"
            />
            {section.committeeItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <Input
                  className="flex-1"
                  value={item}
                  onChange={(e) => updateCommitteeItem(index, e.target.value)}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    const committeeItems = section.committeeItems.filter((_, i) => i !== index);
                    setContent({ ...content, managementSection: { ...section, committeeItems } });
                  }}
                >
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        <Button disabled={saving} onClick={onSave}>
          {saving ? <Loader2 className="animate-spin" /> : <Save className="h-4 w-4" />}
          Save management section
        </Button>
      </CardContent>
    </Card>
  );
}
