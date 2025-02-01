"use client";

import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";
import { toast } from "sonner";

export function HelpButton() {
  const showHelp = () => {
    toast.info(
      <div className="space-y-2">
        <p className="font-medium">Keyboard Shortcuts</p>
        <ul className="text-sm space-y-1">
          <li>
            <kbd className="px-1 rounded bg-muted">V</kbd> - Vowels
          </li>
          <li>
            <kbd className="px-1 rounded bg-muted">D</kbd> - Double Vowels
          </li>
          <li>
            <kbd className="px-1 rounded bg-muted">C</kbd> - Consonants
          </li>
          <li>
            <kbd className="px-1 rounded bg-muted">F</kbd> - Favorites
          </li>
          <li>
            <kbd className="px-1 rounded bg-muted">P</kbd> - Practice Mode
          </li>
          <li>
            <kbd className="px-1 rounded bg-muted">⌘K</kbd> - Search
          </li>
          <li>
            <kbd className="px-1 rounded bg-muted">?</kbd> - Show this help
          </li>
        </ul>
      </div>
    );
  };

  return (
    <Button variant="outline" size="icon" onClick={showHelp}>
      <HelpCircle className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">Show keyboard shortcuts</span>
    </Button>
  );
}
