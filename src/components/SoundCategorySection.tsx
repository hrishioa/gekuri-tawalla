"use client";

import { SoundCategory } from "@/types/korean-malayalam";
import { Card } from "@/components/ui/card";
import { SoundCard } from "@/components/SoundCard";

interface SoundCategorySectionProps {
  category: SoundCategory;
  categoryType: string;
  isGridView?: boolean;
}

export function SoundCategorySection({
  category,
  categoryType,
  isGridView = true,
}: SoundCategorySectionProps) {
  return (
    <Card className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight">{category.title}</h2>
        {category.description && (
          <p className="text-sm text-muted-foreground mt-2">
            {category.description}
          </p>
        )}
      </div>

      <div
        className={
          isGridView
            ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
            : "space-y-2"
        }
      >
        {category.sounds.map((sound) => (
          <SoundCard
            key={sound.korean}
            sound={sound}
            category={categoryType as any}
            isCompact={!isGridView}
          />
        ))}
      </div>
    </Card>
  );
}
