'use client';

import { useCallback, useEffect, useState } from 'react';
import type { SiteContent, HeroSlide, GalleryItem, PdfDocument, HomepageBlock } from '@/lib/site-content';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { Loader2, Plus, Trash2, Save, Upload } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import NavigationEditor from '@/components/admin/NavigationEditor';
import ScoreboardEditor from '@/components/admin/ScoreboardEditor';
import AcademicsSectionEditor from '@/components/admin/AcademicsSectionEditor';
import ManagementSectionEditor from '@/components/admin/ManagementSectionEditor';
import AchievementsSectionEditor from '@/components/admin/AchievementsSectionEditor';
import CampusEditor from '@/components/admin/CampusEditor';

function newId() {
  return typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : String(Date.now());
}

export default function AdminDashboard() {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [role, setRole] = useState<string | null>(null);
  const [superActionLoading, setSuperActionLoading] = useState(false);
  const [removeKey, setRemoveKey] = useState('achievements');

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/content');
      if (!res.ok) throw new Error('Failed to load');
      const data = (await res.json()) as SiteContent;
      setContent(data);
    } catch {
      toast.error('Could not load site content');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
    void (async () => {
      try {
        const r = await fetch('/api/auth/me', { credentials: 'include' });
        if (!r.ok) return;
        const j = await r.json();
        setRole(j.role ?? null);
      } catch {
        // ignore
      }
    })();
  }, [load]);

  async function save(next: SiteContent) {
    setSaving(true);
    try {
      const res = await fetch('/api/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(next),
        credentials: 'include',
      });
      if (!res.ok) {
        if (res.status === 401) {
          toast.error('Session expired. Please log in again.');
          window.location.href = '/login?next=/admin';
          return;
        }
        throw new Error('Save failed');
      }
      setContent(next);
      toast.success('Saved successfully');
    } catch {
      toast.error('Could not save changes');
    } finally {
      setSaving(false);
    }
  }

  async function uploadFile(file: File): Promise<string | null> {
    const fd = new FormData();
    fd.append('file', file);
    const res = await fetch('/api/upload', { method: 'POST', body: fd, credentials: 'include' });
    if (!res.ok) {
      toast.error('Upload failed');
      return null;
    }
    const data = (await res.json()) as { url: string };
    return data.url;
  }

  async function doSuperAction(action: string, data?: Record<string, any>) {
    if (!window.confirm('This is a developer action. Are you sure?')) return;
    setSuperActionLoading(true);
    try {
      const res = await fetch('/api/content/super', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, ...data }),
        credentials: 'include',
      });
      if (!res.ok) {
        if (res.status === 401) {
          toast.error('Not authorized');
          return;
        }
        throw new Error('Super action failed');
      }
      toast.success('Action completed');
      // reload site content to reflect destructive changes
      await load();
    } catch (e) {
      toast.error('Could not complete action');
    } finally {
      setSuperActionLoading(false);
    }
  }

  if (loading || !content) {
    return (
      <div className="flex items-center justify-center py-24 text-[#0a305f]">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-[#0a305f]">Manage website content</h1>
        <p className="text-muted-foreground">
          Changes apply immediately on the public site after you save.
        </p>
      </div>

      <Tabs defaultValue="hero" className="w-full">
        <TabsList className="flex flex-wrap gap-1 bg-white p-1 shadow-sm">
          <TabsTrigger value="hero">Hero</TabsTrigger>
          <TabsTrigger value="welcome">Welcome</TabsTrigger>
          <TabsTrigger value="principal">Principal</TabsTrigger>
          <TabsTrigger value="gallery">Gallery</TabsTrigger>
          <TabsTrigger value="pdfs">PDFs</TabsTrigger>
          <TabsTrigger value="blocks">Blocks</TabsTrigger>
          <TabsTrigger value="banner">Banner</TabsTrigger>
          <TabsTrigger value="nav">Navigation</TabsTrigger>
          <TabsTrigger value="scoreboard">Score board</TabsTrigger>
          <TabsTrigger value="academics">Academics</TabsTrigger>
          <TabsTrigger value="management">Management</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
          {role === 'superadmin' && <TabsTrigger value="super">Super Admin</TabsTrigger>}
        </TabsList>

        <TabsContent value="hero" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Homepage hero slides</CardTitle>
              <CardDescription>Add, edit, or remove carousel images and titles.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {content.heroSlides.map((slide, idx) => (
                <div
                  key={slide.id}
                  className="rounded-lg border border-border bg-muted/30 p-4 space-y-3"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-[#0a305f]">Slide {idx + 1}</span>
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      onClick={() => {
                        const heroSlides = content.heroSlides.filter((s) => s.id !== slide.id);
                        void save({ ...content, heroSlides });
                      }}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="grid gap-2">
                    <Label>Title</Label>
                    <Input
                      value={slide.title}
                      onChange={(e) => {
                        const heroSlides = [...content.heroSlides];
                        heroSlides[idx] = { ...slide, title: e.target.value };
                        setContent({ ...content, heroSlides });
                      }}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>Subtitle</Label>
                    <Input
                      value={slide.subtitle}
                      onChange={(e) => {
                        const heroSlides = [...content.heroSlides];
                        heroSlides[idx] = { ...slide, subtitle: e.target.value };
                        setContent({ ...content, heroSlides });
                      }}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>Image URL</Label>
                    <Input
                      value={slide.imageUrl}
                      onChange={(e) => {
                        const heroSlides = [...content.heroSlides];
                        heroSlides[idx] = { ...slide, imageUrl: e.target.value };
                        setContent({ ...content, heroSlides });
                      }}
                    />
                    <div className="flex items-center gap-2">
                      <Input
                        type="file"
                        accept="image/*"
                        className="cursor-pointer"
                        onChange={async (e) => {
                          const f = e.target.files?.[0];
                          if (!f) return;
                          const url = await uploadFile(f);
                          if (url) {
                            const heroSlides = [...content.heroSlides];
                            heroSlides[idx] = { ...slide, imageUrl: url };
                            setContent({ ...content, heroSlides });
                          }
                          e.target.value = '';
                        }}
                      />
                      <Upload className="h-4 w-4 shrink-0 text-muted-foreground" />
                    </div>
                  </div>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  const heroSlides: HeroSlide[] = [
                    ...content.heroSlides,
                    {
                      id: newId(),
                      title: 'New slide',
                      subtitle: 'Subtitle',
                      imageUrl:
                        'https://images.unsplash.com/photo-1427504494785-cdae8dfddee0?w=1200&h=400&fit=crop',
                    },
                  ];
                  setContent({ ...content, heroSlides });
                }}
              >
                <Plus className="h-4 w-4" />
                Add slide
              </Button>
              <Button disabled={saving} onClick={() => void save(content)}>
                {saving ? <Loader2 className="animate-spin" /> : <Save className="h-4 w-4" />}
                Save hero
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="welcome" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Welcome section</CardTitle>
              <CardDescription>Title and paragraphs on the home page.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label>Title</Label>
                <Input
                  value={content.welcome.title}
                  onChange={(e) =>
                    setContent({
                      ...content,
                      welcome: { ...content.welcome, title: e.target.value },
                    })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label>Paragraphs (separate with a blank line)</Label>
                <Textarea
                  rows={10}
                  value={content.welcome.paragraphs.join('\n\n')}
                  onChange={(e) =>
                    setContent({
                      ...content,
                      welcome: {
                        ...content.welcome,
                        paragraphs: e.target.value.split(/\n\n+/).map((p) => p.trim()).filter(Boolean),
                      },
                    })
                  }
                />
              </div>
              <div className="grid gap-3">
                <Label>Important links (sidebar)</Label>
                {content.importantLinks.map((link, i) => (
                  <div key={i} className="flex flex-col sm:flex-row gap-2">
                    <Input
                      placeholder="Label"
                      value={link.label}
                      onChange={(e) => {
                        const importantLinks = [...content.importantLinks];
                        importantLinks[i] = { ...link, label: e.target.value };
                        setContent({ ...content, importantLinks });
                      }}
                    />
                    <Input
                      placeholder="https://..."
                      value={link.href}
                      onChange={(e) => {
                        const importantLinks = [...content.importantLinks];
                        importantLinks[i] = { ...link, href: e.target.value };
                        setContent({ ...content, importantLinks });
                      }}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => {
                        const importantLinks = content.importantLinks.filter((_, j) => j !== i);
                        setContent({ ...content, importantLinks });
                      }}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() =>
                    setContent({
                      ...content,
                      importantLinks: [...content.importantLinks, { label: 'New link', href: '#' }],
                    })
                  }
                >
                  <Plus className="h-4 w-4" />
                  Add link
                </Button>
              </div>
              <Button disabled={saving} onClick={() => void save(content)}>
                {saving ? <Loader2 className="animate-spin" /> : <Save className="h-4 w-4" />}
                Save welcome
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="principal" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Principal message</CardTitle>
              <CardDescription>Shown in the home page message block.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {(
                [
                  ['title', 'Section title'],
                  ['subtitle', 'Subtitle'],
                  ['name', 'Principal name'],
                  ['imageUrl', 'Photo URL'],
                  ['ctaText', 'Button label'],
                  ['ctaLink', 'Button link'],
                ] as const
              ).map(([key, label]) => (
                <div key={key} className="grid gap-2">
                  <Label>{label}</Label>
                  <Input
                    value={content.principalMessage[key] as string}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        principalMessage: { ...content.principalMessage, [key]: e.target.value },
                      })
                    }
                  />
                  {key === 'imageUrl' && (
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={async (e) => {
                        const f = e.target.files?.[0];
                        if (!f) return;
                        const url = await uploadFile(f);
                        if (url) {
                          setContent({
                            ...content,
                            principalMessage: { ...content.principalMessage, imageUrl: url },
                          });
                        }
                        e.target.value = '';
                      }}
                    />
                  )}
                </div>
              ))}
              <div className="grid gap-2">
                <Label>Message body</Label>
                <Textarea
                  rows={12}
                  value={content.principalMessage.message}
                  onChange={(e) =>
                    setContent({
                      ...content,
                      principalMessage: { ...content.principalMessage, message: e.target.value },
                    })
                  }
                />
              </div>
              <Button disabled={saving} onClick={() => void save(content)}>
                {saving ? <Loader2 className="animate-spin" /> : <Save className="h-4 w-4" />}
                Save principal
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="gallery" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Gallery</CardTitle>
              <CardDescription>Images shown on the public gallery page.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {content.gallery.map((item, idx) => (
                <div key={item.id} className="rounded-lg border p-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-sm">Item {idx + 1}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        const gallery = content.gallery.filter((g) => g.id !== item.id);
                        void save({ ...content, gallery });
                      }}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                  <Input
                    placeholder="Title"
                    value={item.title}
                    onChange={(e) => {
                      const gallery = [...content.gallery];
                      gallery[idx] = { ...item, title: e.target.value };
                      setContent({ ...content, gallery });
                    }}
                  />
                  <Input
                    placeholder="Image URL"
                    value={item.imageUrl}
                    onChange={(e) => {
                      const gallery = [...content.gallery];
                      gallery[idx] = { ...item, imageUrl: e.target.value };
                      setContent({ ...content, gallery });
                    }}
                  />
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={async (e) => {
                      const f = e.target.files?.[0];
                      if (!f) return;
                      const url = await uploadFile(f);
                      if (url) {
                        const gallery = [...content.gallery];
                        gallery[idx] = { ...item, imageUrl: url };
                        setContent({ ...content, gallery });
                      }
                      e.target.value = '';
                    }}
                  />
                  <Input
                    type="number"
                    placeholder="Photo count (optional)"
                    value={item.count ?? ''}
                    onChange={(e) => {
                      const gallery = [...content.gallery];
                      const v = e.target.value ? Number(e.target.value) : undefined;
                      gallery[idx] = { ...item, count: v };
                      setContent({ ...content, gallery });
                    }}
                  />
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  const g: GalleryItem = {
                    id: newId(),
                    title: 'New album',
                    imageUrl:
                      'https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?w=400&h=300&fit=crop',
                    count: 0,
                  };
                  setContent({ ...content, gallery: [...content.gallery, g] });
                }}
              >
                <Plus className="h-4 w-4" />
                Add gallery item
              </Button>
              <Button disabled={saving} onClick={() => void save(content)}>
                {saving ? <Loader2 className="animate-spin" /> : <Save className="h-4 w-4" />}
                Save gallery
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pdfs" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>PDFs & documents</CardTitle>
              <CardDescription>
              Notices and downloadable files (URLs appear for visitors). Only the latest 7 PDFs are kept; adding the 8th removes the oldest entry.
            </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {content.documents.map((doc, idx) => (
                <div key={doc.id} className="rounded-lg border p-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{doc.title || 'Document'}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        const documents = content.documents.filter((d) => d.id !== doc.id);
                        void save({ ...content, documents });
                      }}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                  <Input
                    placeholder="Title"
                    value={doc.title}
                    onChange={(e) => {
                      const documents = [...content.documents];
                      documents[idx] = { ...doc, title: e.target.value };
                      setContent({ ...content, documents });
                    }}
                  />
                  <Input
                    placeholder="File URL"
                    value={doc.fileUrl}
                    onChange={(e) => {
                      const documents = [...content.documents];
                      documents[idx] = { ...doc, fileUrl: e.target.value };
                      setContent({ ...content, documents });
                    }}
                  />
                  <Input
                    type="file"
                    accept="application/pdf"
                    onChange={async (e) => {
                      const f = e.target.files?.[0];
                      if (!f) return;
                      const url = await uploadFile(f);
                      if (url) {
                        const documents = [...content.documents];
                        documents[idx] = { ...doc, fileUrl: url, title: doc.title || f.name };
                        setContent({ ...content, documents });
                      }
                      e.target.value = '';
                    }}
                  />
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  const documents: PdfDocument[] = [
                    ...content.documents,
                    { id: newId(), title: 'New document', fileUrl: '#', category: 'notice' },
                  ];
                  if (documents.length > 7) {
                    documents.shift();
                  }
                  setContent({ ...content, documents });
                }}
              >
                <Plus className="h-4 w-4" />
                Add document
              </Button>
              <Button disabled={saving} onClick={() => void save(content)}>
                {saving ? <Loader2 className="animate-spin" /> : <Save className="h-4 w-4" />}
                Save documents
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="blocks" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Homepage extra blocks</CardTitle>
              <CardDescription>Optional sections (text, call-to-action, or image banner).</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {content.homepageBlocks
                .slice()
                .sort((a, b) => a.order - b.order)
                .map((block, idx) => {
                  const realIdx = content.homepageBlocks.findIndex((b) => b.id === block.id);
                  return (
                    <div key={block.id} className="rounded-lg border p-4 space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <Switch
                            checked={block.visible}
                            onCheckedChange={(v) => {
                              const homepageBlocks = [...content.homepageBlocks];
                              homepageBlocks[realIdx] = { ...block, visible: v };
                              setContent({ ...content, homepageBlocks });
                            }}
                          />
                          <span className="text-sm">Visible</span>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            const homepageBlocks = content.homepageBlocks.filter((b) => b.id !== block.id);
                            void save({ ...content, homepageBlocks });
                          }}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                      <div className="grid gap-2">
                        <Label>Type</Label>
                        <select
                          className="border rounded-md h-9 px-3 text-sm bg-background"
                          value={block.type}
                          onChange={(e) => {
                            const homepageBlocks = [...content.homepageBlocks];
                            homepageBlocks[realIdx] = {
                              ...block,
                              type: e.target.value as HomepageBlock['type'],
                            };
                            setContent({ ...content, homepageBlocks });
                          }}
                        >
                          <option value="text">Text</option>
                          <option value="cta">Call to action</option>
                          <option value="image_banner">Image banner</option>
                        </select>
                      </div>
                      <Input
                        placeholder="Title (optional)"
                        value={block.title ?? ''}
                        onChange={(e) => {
                          const homepageBlocks = [...content.homepageBlocks];
                          homepageBlocks[realIdx] = { ...block, title: e.target.value };
                          setContent({ ...content, homepageBlocks });
                        }}
                      />
                      <Textarea
                        placeholder="Body / description"
                        value={block.body ?? ''}
                        onChange={(e) => {
                          const homepageBlocks = [...content.homepageBlocks];
                          homepageBlocks[realIdx] = { ...block, body: e.target.value };
                          setContent({ ...content, homepageBlocks });
                        }}
                      />
                      <Input
                        placeholder="Image URL (banner)"
                        value={block.imageUrl ?? ''}
                        onChange={(e) => {
                          const homepageBlocks = [...content.homepageBlocks];
                          homepageBlocks[realIdx] = { ...block, imageUrl: e.target.value };
                          setContent({ ...content, homepageBlocks });
                        }}
                      />
                      <div className="flex gap-2">
                        <Input
                          placeholder="Link URL"
                          value={block.href ?? ''}
                          onChange={(e) => {
                            const homepageBlocks = [...content.homepageBlocks];
                            homepageBlocks[realIdx] = { ...block, href: e.target.value };
                            setContent({ ...content, homepageBlocks });
                          }}
                        />
                        <Input
                          placeholder="Button label"
                          value={block.buttonLabel ?? ''}
                          onChange={(e) => {
                            const homepageBlocks = [...content.homepageBlocks];
                            homepageBlocks[realIdx] = { ...block, buttonLabel: e.target.value };
                            setContent({ ...content, homepageBlocks });
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  const homepageBlocks: HomepageBlock[] = [
                    ...content.homepageBlocks,
                    {
                      id: newId(),
                      type: 'text',
                      title: 'New block',
                      body: 'Edit this text after adding.',
                      visible: true,
                      order: content.homepageBlocks.length,
                    },
                  ];
                  setContent({ ...content, homepageBlocks });
                }}
              >
                <Plus className="h-4 w-4" />
                Add block
              </Button>
              <Button disabled={saving} onClick={() => void save(content)}>
                {saving ? <Loader2 className="animate-spin" /> : <Save className="h-4 w-4" />}
                Save blocks
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="banner" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Announcement banner</CardTitle>
              <CardDescription>Optional strip below the header on the home page.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                rows={3}
                placeholder="Leave empty to hide. Example: Admissions open for 2026–27."
                value={content.announcementBanner}
                onChange={(e) =>
                  setContent({ ...content, announcementBanner: e.target.value })
                }
              />
              <Button disabled={saving} onClick={() => void save(content)}>
                {saving ? <Loader2 className="animate-spin" /> : <Save className="h-4 w-4" />}
                Save banner
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="nav" className="mt-4">
          <NavigationEditor
            content={content}
            setContent={setContent}
            saving={saving}
            saveContent={(next) => void save(next)}
          />
        </TabsContent>

        <TabsContent value="scoreboard" className="mt-4">
          <ScoreboardEditor
            content={content}
            setContent={setContent}
            saving={saving}
            onSave={() => void save(content)}
            uploadFile={uploadFile}
          />
        </TabsContent>

        <TabsContent value="academics" className="mt-4">
          <AcademicsSectionEditor
            content={content}
            setContent={setContent}
            saving={saving}
            onSave={() => void save(content)}
            uploadFile={uploadFile}
          />
        </TabsContent>

        <TabsContent value="management" className="mt-4">
          <ManagementSectionEditor
            content={content}
            setContent={setContent}
            saving={saving}
            onSave={() => void save(content)}
            uploadFile={uploadFile}
          />
        </TabsContent>

        <TabsContent value="achievements" className="mt-4">
          <AchievementsSectionEditor
            content={content}
            setContent={setContent}
            saving={saving}
            onSave={() => void save(content)}
            uploadFile={uploadFile}
          />
        </TabsContent>

        <TabsContent value="infrastructure" className="mt-4">
          <CampusEditor
            content={content}
            setContent={setContent}
            saving={saving}
            onSave={() => void save(content)}
          />
        </TabsContent>
        {role === 'superadmin' && (
          <TabsContent value="super" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Super Admin / Developer actions</CardTitle>
                <CardDescription>Developer-only destructive actions. Use with caution.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm">Clear homepage blocks (removes all extra blocks)</p>
                  <div className="flex gap-2">
                    <Button
                      variant="destructive"
                      onClick={() => void doSuperAction('clear_homepage_blocks')}
                      disabled={superActionLoading}
                    >
                      {superActionLoading ? <Loader2 className="animate-spin h-4 w-4" /> : 'Clear blocks'}
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm">Remove a top-level section (allowed keys only)</p>
                  <div className="flex items-center gap-2">
                    <select
                      className="border rounded-md h-9 px-3 text-sm bg-background"
                      value={removeKey}
                      onChange={(e) => setRemoveKey(e.target.value)}
                    >
                      <option value="achievements">achievements</option>
                      <option value="management">management</option>
                      <option value="academicsSection">academicsSection</option>
                      <option value="homepageBlocks">homepageBlocks</option>
                    </select>
                    <Button
                      variant="destructive"
                      onClick={() => void doSuperAction('remove_section', { key: removeKey })}
                      disabled={superActionLoading}
                    >
                      {superActionLoading ? <Loader2 className="animate-spin h-4 w-4" /> : 'Remove section'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
}
