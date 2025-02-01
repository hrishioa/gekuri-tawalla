"use client";

import { Button } from "@/components/ui/button";
import { Grid2X2, List } from "lucide-react";

interface ViewToggleProps {
  isGridView: boolean;
  onToggle: (isGrid: boolean) => void;
}

export function ViewToggle({ isGridView, onToggle }: ViewToggleProps) {
  return (
    <div className="flex gap-2">
      <Button
        variant={isGridView ? "default" : "ghost"}
        size="sm"
        onClick={() => onToggle(true)}
      >
        <Grid2X2 className="h-4 w-4" />
        <span className="ml-2 hidden sm:inline">Grid</span>
      </Button>
      <Button
        variant={!isGridView ? "default" : "ghost"}
        size="sm"
        onClick={() => onToggle(false)}
      >
        <List className="h-4 w-4" />
        <span className="ml-2 hidden sm:inline">List</span>
      </Button>
    </div>
  );
}
