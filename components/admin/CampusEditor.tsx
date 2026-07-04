"use client";

import React from 'react';
import type { SiteContent, CampusItem } from '@/lib/site-content';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Trash2, Plus, Save } from 'lucide-react';

function newId() {
  return typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : String(Date.now());
}

type Props = {
  content: SiteContent;
  setContent: (c: SiteContent) => void;
  saving: boolean;
  onSave: () => void;
};

export default function CampusEditor({ content, setContent, saving, onSave }: Props) {
  const campus = content.infrastructure?.campus ?? [];

  return (
    <div>
      <div className="space-y-4">
        {campus.map((item, idx) => (
          <div key={item.id} className="rounded-lg border p-3 flex gap-2 items-start">
            <div className="flex-1 grid gap-2">
              <Label>Label</Label>
              <Input
                value={item.label}
                onChange={(e) => {
                  const next = [...campus];
                  next[idx] = { ...item, label: e.target.value };
                  setContent({ ...content, infrastructure: { ...content.infrastructure, campus: next } });
                }}
              />
              <Label>Value</Label>
              <Input
                value={item.value}
                onChange={(e) => {
                  const next = [...campus];
                  next[idx] = { ...item, value: e.target.value };
                  setContent({ ...content, infrastructure: { ...content.infrastructure, campus: next } });
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Button
                variant="destructive"
                size="icon"
                onClick={() => {
                  const next = campus.filter((c) => c.id !== item.id);
                  setContent({ ...content, infrastructure: { ...content.infrastructure, campus: next } });
                }}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}

        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => {
              const next: CampusItem = { id: newId(), label: 'New item', value: '' };
              setContent({ ...content, infrastructure: { ...content.infrastructure, campus: [...campus, next] } });
            }}
          >
            <Plus className="h-4 w-4" />
            Add campus item
          </Button>

          <Button disabled={saving} onClick={onSave}>
            <Save className="h-4 w-4" />
            Save infrastructure
          </Button>
        </div>
      </div>
    </div>
  );
}
