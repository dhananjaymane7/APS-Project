// app/about/rules/RulesContent.tsx
"use client";

import React, { useState } from "react";
import { RuleSection, rulesData } from './rules-data';

export default function RulesContent() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {rulesData.map((section: RuleSection) => (
        <div
          key={section.id}
          className="border rounded-lg overflow-hidden bg-card"
        >
          <button
            onClick={() => toggleSection(section.id)}
            className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
            aria-expanded={openSection === section.id}
          >
            <span className="font-semibold text-lg">{section.title}</span>
            <span
              className={`transform transition-transform duration-200 ${openSection === section.id ? "rotate-180" : ""}`}
            >
              ▼
            </span>
          </button>

          {openSection === section.id && (
            <div className="p-4 pt-0 border-t bg-muted/20">
              <ul className="list-none space-y-3 mt-4">
                {section.items.map((item, index) => (
                  <li
                    key={index}
                    className="text-muted-foreground leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
