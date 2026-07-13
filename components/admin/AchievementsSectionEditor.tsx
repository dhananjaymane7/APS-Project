'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Trash2, Plus, Upload, Save, Loader2 } from 'lucide-react';
import type {
  SiteContent,
  AchievementItem,
  AchievementStat,
  AcademicResult,
  AchievementSport,
  AchievementCoCurricular,
  AchievementAlumnus,
} from '@/lib/site-content';

interface AchievementsSectionEditorProps {
  content: SiteContent;
  setContent: (next: SiteContent) => void;
  saving: boolean;
  onSave: () => void;
  uploadFile: (file: File) => Promise<string | null>;
}

function newId() {
  return typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : String(Date.now());
}

export default function AchievementsSectionEditor({
  content,
  setContent,
  saving,
  onSave,
  uploadFile,
}: AchievementsSectionEditorProps) {
  const section = content.achievements;

  const updateAwards = (next: AchievementItem[]) =>
    setContent({ ...content, achievements: { ...section, awards: next } });

  const updateStats = (next: AchievementStat[]) =>
    setContent({ ...content, achievements: { ...section, stats: next } });

  const updateAcademic = (patch: Partial<typeof section.academic>) =>
    setContent({ ...content, achievements: { ...section, academic: { ...section.academic, ...patch } } });

  const updateStudent = (patch: Partial<typeof section.student>) =>
    setContent({ ...content, achievements: { ...section, student: { ...section.student, ...patch } } });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Achievements section</CardTitle>
        <CardDescription>Manage awards, academic achievements, student achievements, and upload section images.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <section className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <CardTitle className="text-lg">Awards list</CardTitle>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => updateAwards([...section.awards, { id: newId(), year: '2024', title: 'New award', description: '', category: 'Academic' }])}
            >
              <Plus className="h-4 w-4" />
              Add award
            </Button>
          </div>
          {section.awards.map((award, index) => (
            <div key={award.id} className="rounded-lg border border-border p-4 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="font-semibold">Award {index + 1}</span>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => updateAwards(section.awards.filter((item) => item.id !== award.id))}
                >
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>
              <div className="grid gap-2 md:grid-cols-4">
                <div className="grid gap-2">
                  <Label>Year</Label>
                  <Input
                    value={award.year}
                    onChange={(e) => {
                      const next = [...section.awards];
                      next[index] = { ...award, year: e.target.value };
                      updateAwards(next);
                    }}
                  />
                </div>
                <div className="grid gap-2 md:col-span-3">
                  <Label>Title</Label>
                  <Input
                    value={award.title}
                    onChange={(e) => {
                      const next = [...section.awards];
                      next[index] = { ...award, title: e.target.value };
                      updateAwards(next);
                    }}
                  />
                </div>
              </div>
              <div className="grid gap-2 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label>Category</Label>
                  <Input
                    value={award.category}
                    onChange={(e) => {
                      const next = [...section.awards];
                      next[index] = { ...award, category: e.target.value };
                      updateAwards(next);
                    }}
                  />
                </div>
                <div className="grid gap-2 md:col-span-1">
                  <Label>Description</Label>
                  <Textarea
                    rows={3}
                    value={award.description}
                    onChange={(e) => {
                      const next = [...section.awards];
                      next[index] = { ...award, description: e.target.value };
                      updateAwards(next);
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="space-y-4">
          <CardTitle className="text-lg">Awards statistics</CardTitle>
          {section.stats.map((stat, index) => (
            <div key={stat.id} className="rounded-lg border border-border p-4 grid gap-2 md:grid-cols-3 items-end">
              <div className="grid gap-2">
                <Label>Number</Label>
                <Input
                  value={stat.number}
                  onChange={(e) => {
                    const next = [...section.stats];
                    next[index] = { ...stat, number: e.target.value };
                    updateStats(next);
                  }}
                />
              </div>
              <div className="grid gap-2 md:col-span-2">
                <Label>Label</Label>
                <Input
                  value={stat.label}
                  onChange={(e) => {
                    const next = [...section.stats];
                    next[index] = { ...stat, label: e.target.value };
                    updateStats(next);
                  }}
                />
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => updateStats(section.stats.filter((item) => item.id !== stat.id))}
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={() => updateStats([...section.stats, { id: newId(), number: '0', label: 'New stat' }])}
          >
            <Plus className="h-4 w-4" />
            Add stat
          </Button>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <CardTitle className="text-lg">Academic achievements</CardTitle>
            <div className="grid gap-2">
              <Label>Section image URL</Label>
              <Input
                value={section.academic.imageUrl}
                onChange={(e) => updateAcademic({ imageUrl: e.target.value })}
              />
              <Input
                type="file"
                accept="image/*"
                onChange={async (e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  const url = await uploadFile(file);
                  if (url) updateAcademic({ imageUrl: url });
                  e.target.value = '';
                }}
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label>Intro text</Label>
            <Textarea
              rows={4}
              value={section.academic.intro}
              onChange={(e) => updateAcademic({ intro: e.target.value })}
            />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <CardTitle className="text-base font-semibold">Board results</CardTitle>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() =>
                  updateAcademic({
                    results: [
                      ...section.academic.results,
                      { id: newId(), exam: 'New exam', passPercentage: '0%', toppers: '0' },
                    ],
                  })
                }
              >
                <Plus className="h-4 w-4" />
                Add result
              </Button>
            </div>
            {section.academic.results.map((result, index) => (
              <div key={result.id} className="rounded-lg border border-border p-4 grid gap-3 md:grid-cols-4 items-end">
                <div className="grid gap-2">
                  <Label>Exam</Label>
                  <Input
                    value={result.exam}
                    onChange={(e) => {
                      const next = [...section.academic.results];
                      next[index] = { ...result, exam: e.target.value };
                      updateAcademic({ results: next });
                    }}
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Pass Percentage</Label>
                  <Input
                    value={result.passPercentage}
                    onChange={(e) => {
                      const next = [...section.academic.results];
                      next[index] = { ...result, passPercentage: e.target.value };
                      updateAcademic({ results: next });
                    }}
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Toppers</Label>
                  <Input
                    value={result.toppers}
                    onChange={(e) => {
                      const next = [...section.academic.results];
                      next[index] = { ...result, toppers: e.target.value };
                      updateAcademic({ results: next });
                    }}
                  />
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => updateAcademic({ results: section.academic.results.filter((item) => item.id !== result.id) })}
                >
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <CardTitle className="text-base font-semibold">Subject cards</CardTitle>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => updateAcademic({ subjects: [...section.academic.subjects, 'New subject'] })}
              >
                <Plus className="h-4 w-4" />
                Add subject
              </Button>
            </div>
            <div className="grid gap-3">
              {section.academic.subjects.map((subject, index) => (
                <div key={`${subject}-${index}`} className="flex gap-2">
                  <Input
                    className="flex-1"
                    value={subject}
                    onChange={(e) => {
                      const next = [...section.academic.subjects];
                      next[index] = e.target.value;
                      updateAcademic({ subjects: next });
                    }}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      const next = section.academic.subjects.filter((_, i) => i !== index);
                      updateAcademic({ subjects: next });
                    }}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <CardTitle className="text-base font-semibold">Scholarship & Merit awards</CardTitle>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => updateAcademic({ scholarshipAwards: [...section.academic.scholarshipAwards, 'New award'] })}
              >
                <Plus className="h-4 w-4" />
                Add item
              </Button>
            </div>
            <div className="grid gap-3">
              {section.academic.scholarshipAwards.map((item, index) => (
                <div key={`${item}-${index}`} className="flex gap-2">
                  <Input
                    className="flex-1"
                    value={item}
                    onChange={(e) => {
                      const next = [...section.academic.scholarshipAwards];
                      next[index] = e.target.value;
                      updateAcademic({ scholarshipAwards: next });
                    }}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      const next = section.academic.scholarshipAwards.filter((_, i) => i !== index);
                      updateAcademic({ scholarshipAwards: next });
                    }}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <CardTitle className="text-lg">Student achievements</CardTitle>
            <div className="grid gap-2">
              <Label>Section image URL</Label>
              <Input
                value={section.student.imageUrl}
                onChange={(e) => updateStudent({ imageUrl: e.target.value })}
              />
              <Input
                type="file"
                accept="image/*"
                onChange={async (e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  const url = await uploadFile(file);
                  if (url) updateStudent({ imageUrl: url });
                  e.target.value = '';
                }}
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label>Intro text</Label>
            <Textarea
              rows={4}
              value={section.student.intro}
              onChange={(e) => updateStudent({ intro: e.target.value })}
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <CardTitle className="text-base font-semibold">Sports achievements</CardTitle>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() =>
                  updateStudent({
                    sports: [
                      ...section.student.sports,
                      { id: newId(), sport: 'New sport', medals: '', level: '' },
                    ],
                  })
                }
              >
                <Plus className="h-4 w-4" />
                Add sport
              </Button>
            </div>
            {section.student.sports.map((row, index) => (
              <div key={row.id} className="rounded-lg border border-border p-4 grid gap-3 md:grid-cols-4 items-end">
                <div className="grid gap-2">
                  <Label>Sport</Label>
                  <Input
                    value={row.sport}
                    onChange={(e) => {
                      const next = [...section.student.sports];
                      next[index] = { ...row, sport: e.target.value };
                      updateStudent({ sports: next });
                    }}
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Medals</Label>
                  <Input
                    value={row.medals}
                    onChange={(e) => {
                      const next = [...section.student.sports];
                      next[index] = { ...row, medals: e.target.value };
                      updateStudent({ sports: next });
                    }}
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Level</Label>
                  <Input
                    value={row.level}
                    onChange={(e) => {
                      const next = [...section.student.sports];
                      next[index] = { ...row, level: e.target.value };
                      updateStudent({ sports: next });
                    }}
                  />
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => updateStudent({ sports: section.student.sports.filter((item) => item.id !== row.id) })}
                >
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <CardTitle className="text-base font-semibold">Co-curricular achievements</CardTitle>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() =>
                  updateStudent({
                    coCurricular: [
                      ...section.student.coCurricular,
                      { id: newId(), category: 'New category', achievement: 'New achievement' },
                    ],
                  })
                }
              >
                <Plus className="h-4 w-4" />
                Add item
              </Button>
            </div>
            {section.student.coCurricular.map((item, index) => (
              <div key={item.id} className="rounded-lg border border-border p-4 grid gap-3 md:grid-cols-[1fr_1fr_auto] items-end">
                <div className="grid gap-2">
                  <Label>Category</Label>
                  <Input
                    value={item.category}
                    onChange={(e) => {
                      const next = [...section.student.coCurricular];
                      next[index] = { ...item, category: e.target.value };
                      updateStudent({ coCurricular: next });
                    }}
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Achievement</Label>
                  <Input
                    value={item.achievement}
                    onChange={(e) => {
                      const next = [...section.student.coCurricular];
                      next[index] = { ...item, achievement: e.target.value };
                      updateStudent({ coCurricular: next });
                    }}
                  />
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => updateStudent({ coCurricular: section.student.coCurricular.filter((row) => row.id !== item.id) })}
                >
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <CardTitle className="text-base font-semibold">Notable alumni</CardTitle>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() =>
                  updateStudent({
                    alumni: [
                      ...section.student.alumni,
                      { id: newId(), name: 'New name', achievement: 'New achievement' },
                    ],
                  })
                }
              >
                <Plus className="h-4 w-4" />
                Add alum
              </Button>
            </div>
            {section.student.alumni.map((item, index) => (
              <div key={item.id} className="rounded-lg border border-border p-4 grid gap-3 md:grid-cols-[1fr_1fr_auto] items-end">
                <div className="grid gap-2">
                  <Label>Name</Label>
                  <Input
                    value={item.name}
                    onChange={(e) => {
                      const next = [...section.student.alumni];
                      next[index] = { ...item, name: e.target.value };
                      updateStudent({ alumni: next });
                    }}
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Achievement</Label>
                  <Input
                    value={item.achievement}
                    onChange={(e) => {
                      const next = [...section.student.alumni];
                      next[index] = { ...item, achievement: e.target.value };
                      updateStudent({ alumni: next });
                    }}
                  />
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => updateStudent({ alumni: section.student.alumni.filter((row) => row.id !== item.id) })}
                >
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            ))}
          </div>
        </section>

        <Button disabled={saving} onClick={onSave}>
          {saving ? <Loader2 className="animate-spin" /> : <Save className="h-4 w-4" />}
          Save achievements section
        </Button>
      </CardContent>
    </Card>
  );
}
