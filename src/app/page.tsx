"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SoundCategorySection } from "@/components/SoundCategorySection";
import { ViewToggle } from "@/components/ViewToggle";
import { soundData } from "@/data/sound-mappings";
import { SearchBar } from "@/components/SearchBar";
import { PracticeMode } from "@/components/PracticeMode";
import { Card } from "@/components/ui/card";
import { SoundCard } from "@/components/SoundCard";
import { Star } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { KeyboardShortcuts } from "@/components/KeyboardShortcuts";
import { HelpButton } from "@/components/HelpButton";

export default function Home() {
  const [isGridView, setIsGridView] = useState(true);
  const [favorites, setFavorites] = useState<SoundMapping[]>([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(savedFavorites);
  }, []);

  return (
    <div className="min-h-screen bg-muted/50">
      <KeyboardShortcuts />
      <header className="border-b bg-background">
        <div className="container px-4 py-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Korean-Malayalam Sound Guide
              </h1>
              <p className="text-muted-foreground mt-2">
                Learn how Korean sounds map to Malayalam letters with examples
                and pronunciation guides
              </p>
            </div>
            <div className="flex items-center gap-2">
              <SearchBar />
              <PracticeMode />
              <ThemeToggle />
              <HelpButton />
              <ViewToggle isGridView={isGridView} onToggle={setIsGridView} />
            </div>
          </div>
        </div>
      </header>

      <main className="container px-4 py-8">
        <Tabs defaultValue="vowels" className="space-y-8">
          <div className="sticky top-0 z-10 -mx-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
            <div className="container flex overflow-auto">
              <TabsList className="h-12 items-center justify-start">
                <TabsTrigger value="vowels" className="text-base">
                  Vowels
                </TabsTrigger>
                <TabsTrigger value="doubleVowels" className="text-base">
                  Double Vowels
                </TabsTrigger>
                <TabsTrigger value="consonants" className="text-base">
                  Consonants
                </TabsTrigger>
                {favorites.length > 0 && (
                  <TabsTrigger value="favorites" className="text-base gap-2">
                    <Star className="h-4 w-4" />
                    Favorites
                  </TabsTrigger>
                )}
              </TabsList>
            </div>
          </div>

          <TabsContent value="vowels" className="mt-8">
            <SoundCategorySection
              category={soundData.vowels}
              categoryType="vowels"
              isGridView={isGridView}
            />
          </TabsContent>

          <TabsContent value="doubleVowels" className="mt-8">
            <SoundCategorySection
              category={soundData.doubleVowels}
              categoryType="doubleVowels"
              isGridView={isGridView}
            />
          </TabsContent>

          <TabsContent value="consonants" className="mt-8 space-y-8">
            <SoundCategorySection
              category={soundData.consonants.plain}
              categoryType="plain"
              isGridView={isGridView}
            />
            <SoundCategorySection
              category={soundData.consonants.aspirated}
              categoryType="aspirated"
              isGridView={isGridView}
            />
            <SoundCategorySection
              category={soundData.consonants.tense}
              categoryType="tense"
              isGridView={isGridView}
            />
          </TabsContent>

          <TabsContent value="favorites" className="mt-8">
            <Card className="p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold tracking-tight">Favorites</h2>
                <p className="text-sm text-muted-foreground mt-2">
                  Your saved Korean sounds
                </p>
              </div>

              <div
                className={
                  isGridView
                    ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
                    : "space-y-2"
                }
              >
                {favorites.map((sound) => (
                  <SoundCard
                    key={sound.korean}
                    sound={sound}
                    category="vowels"
                    isCompact={!isGridView}
                  />
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
