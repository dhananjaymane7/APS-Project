'use client';

import { useEffect, useState } from 'react';
import type { SiteContent } from '@/lib/site-content';
import { defaultNavigation } from '@/lib/site-content';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, RotateCcw, Save } from 'lucide-react';

function isNavArray(x: unknown): x is SiteContent['navigation'] {
  return Array.isArray(x) && x.every((item) => item && typeof item === 'object' && 'label' in item);
}

export default function NavigationEditor({
  content,
  setContent,
  saving,
  saveContent,
}: {
  content: SiteContent;
  setContent: (c: SiteContent) => void;
  saving: boolean;
  saveContent: (next: SiteContent) => void;
}) {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setText(JSON.stringify(content.navigation, null, 2));
    setError('');
  }, [content.navigation]);

  function applyParsed() {
    try {
      const parsed = JSON.parse(text) as unknown;
      if (!isNavArray(parsed)) {
        setError('JSON must be an array of navigation items with at least a label.');
        return;
      }
      setContent({ ...content, navigation: parsed });
      setError('');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Invalid JSON');
    }
  }

  function commitSave() {
    try {
      const parsed = JSON.parse(text) as unknown;
      if (!isNavArray(parsed)) {
        setError('JSON must be an array of navigation items with at least a label.');
        return;
      }
      const next = { ...content, navigation: parsed };
      setContent(next);
      setError('');
      saveContent(next);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Invalid JSON');
    }
  }

  function restoreDefaults() {
    setText(JSON.stringify(defaultNavigation, null, 2));
    setContent({ ...content, navigation: defaultNavigation });
    setError('');
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Header navigation &amp; dropdowns</CardTitle>
        <CardDescription>
          Edit the menu as JSON. Each item may have <code className="text-xs">href</code> or{' '}
          <code className="text-xs">submenu</code> (array of <code className="text-xs">label</code>,{' '}
          <code className="text-xs">href</code>, and optionally nested <code className="text-xs">submenu</code> for Rules).
          Click <strong>Apply JSON</strong> to validate and load into the editor state, then <strong>Save to site</strong>.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={22}
          className="font-mono text-xs md:text-sm"
          spellCheck={false}
        />
        {error && <p className="text-sm text-destructive">{error}</p>}
        <div className="flex flex-wrap gap-2">
          <Button type="button" variant="secondary" onClick={applyParsed}>
            Apply JSON
          </Button>
          <Button type="button" variant="outline" onClick={restoreDefaults}>
            <RotateCcw className="h-4 w-4" />
            Restore defaults
          </Button>
          <Button disabled={saving} onClick={() => void commitSave()}>
            {saving ? <Loader2 className="animate-spin" /> : <Save className="h-4 w-4" />}
            Save to site
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
