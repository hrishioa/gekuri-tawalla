"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SoundCategorySection } from "../components/SoundCategorySection";
import { SearchBar } from "@/components/SearchBar";
import { PracticeMode } from "@/components/PracticeMode";
import { Card } from "@/components/ui/card";
import { SoundCard } from "@/components/SoundCard";
import { Star } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { KeyboardShortcuts } from "@/components/KeyboardShortcuts";
import { HelpButton } from "@/components/HelpButton";
import { soundData } from "@/data/sound-mappings";
import { SoundMapping } from "@/types/korean-malayalam";

export default function Home() {
  const [favorites, setFavorites] = useState<SoundMapping[]>([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(savedFavorites);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted/50 via-background to-muted/50">
      <KeyboardShortcuts />

      <Tabs defaultValue="vowels">
        {/* Fixed header */}
        <div className="sticky top-0 z-20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
          <div className="container px-4 py-4">
            {/* Logo and controls */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
              <div>
                <div className="space-y-1">
                  <h1 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-500 via-violet-500 to-orange-500 bg-clip-text text-transparent">
                    ഗേകുറി 타왈라
                  </h1>
                  <p className="text-lg font-medium text-muted-foreground">
                    A Froggy Guide to Korean-Malayalam Sounds
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Made by Hrishi and Claude 3.5 Sonnet
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <SearchBar />
                <PracticeMode />
                <ThemeToggle />
                <HelpButton />
              </div>
            </div>

            {/* Navigation tabs */}
            <div className="flex overflow-auto">
              <TabsList className="h-12 items-center justify-start">
                <TabsTrigger value="all" className="text-base">
                  All
                </TabsTrigger>
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
        </div>

        {/* Main content */}
        <main className="container px-4 py-8">
          <TabsContent value="all" className="space-y-8">
            <SoundCategorySection
              category={soundData.vowels}
              categoryType="vowels"
            />
            <SoundCategorySection
              category={soundData.doubleVowels}
              categoryType="doubleVowels"
            />
            <SoundCategorySection
              category={soundData.consonants.plain}
              categoryType="plain"
            />
            <SoundCategorySection
              category={soundData.consonants.aspirated}
              categoryType="aspirated"
            />
            <SoundCategorySection
              category={soundData.consonants.tense}
              categoryType="tense"
            />
          </TabsContent>

          <TabsContent value="vowels" className="mt-8">
            <SoundCategorySection
              category={soundData.vowels}
              categoryType="vowels"
            />
          </TabsContent>

          <TabsContent value="doubleVowels" className="mt-8">
            <SoundCategorySection
              category={soundData.doubleVowels}
              categoryType="doubleVowels"
            />
          </TabsContent>

          <TabsContent value="consonants" className="mt-8 space-y-8">
            <SoundCategorySection
              category={soundData.consonants.plain}
              categoryType="plain"
            />
            <SoundCategorySection
              category={soundData.consonants.aspirated}
              categoryType="aspirated"
            />
            <SoundCategorySection
              category={soundData.consonants.tense}
              categoryType="tense"
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

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {favorites.map((sound) => (
                  <SoundCard
                    key={sound.korean}
                    sound={sound}
                    category="vowels"
                  />
                ))}
              </div>
            </Card>
          </TabsContent>
        </main>
      </Tabs>
    </div>
  );
}
