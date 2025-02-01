"use client";

import { SoundCategory } from "@/types/korean-malayalam";
import { Card } from "@/components/ui/card";
import { SoundCard } from "./SoundCard";
import { categoryColors } from "@/lib/categoryColors";

interface SoundCategorySectionProps {
  category: SoundCategory;
  categoryType: keyof typeof categoryColors;
}

export function SoundCategorySection({
  category,
  categoryType,
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

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3">
        {category.sounds.map((sound) => (
          <SoundCard key={sound.korean} sound={sound} category={categoryType} />
        ))}
      </div>
    </Card>
  );
}
