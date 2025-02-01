"use client";

import { useEffect, useState } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { soundData } from "@/data/sound-mappings";
import { SoundMapping, SoundCategory } from "@/types/korean-malayalam";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SoundCard } from "./SoundCard";
import { categoryColors, CategoryType } from "@/lib/categoryColors";

// Helper function to get all sounds with their categories
function getAllSounds() {
  const sounds: Array<{
    sound: SoundMapping;
    category: string;
    section: string;
  }> = [];

  // Add vowels
  soundData.vowels.sounds.forEach((sound) => {
    sounds.push({ sound, category: "vowels", section: "Vowels" });
  });

  // Add double vowels
  soundData.doubleVowels.sounds.forEach((sound) => {
    sounds.push({ sound, category: "doubleVowels", section: "Double Vowels" });
  });

  // Add consonants
  Object.entries(soundData.consonants).forEach(([type, category]) => {
    category.sounds.forEach((sound) => {
      sounds.push({
        sound,
        category: type,
        section: category.title,
      });
    });
  });

  return sounds;
}

// Add type guard
function isSoundCategory(data: any): data is SoundCategory {
  return "title" in data && "sounds" in data;
}

export function SearchBar() {
  const [open, setOpen] = useState(false);
  const [selectedSound, setSelectedSound] = useState<{
    sound: SoundMapping;
    category: CategoryType;
  } | null>(null);
  const allSounds = getAllSounds();

  // Handle keyboard shortcut
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-full justify-start text-sm text-muted-foreground sm:w-64 sm:pr-12"
        onClick={() => setOpen(true)}
      >
        <Search className="mr-2 h-4 w-4 shrink-0" />
        <span className="inline-flex">Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <DialogHeader>
          <DialogTitle className="sr-only">Search Korean Sounds</DialogTitle>
        </DialogHeader>
        <CommandInput placeholder="Type to search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {Object.entries(soundData).map(([section, data]) => {
            if (section === "consonants") {
              return Object.entries(data).map(
                ([type, category]: [string, SoundCategory]) => (
                  <CommandGroup key={type} heading={category.title}>
                    {category.sounds.map((sound: SoundMapping) => (
                      <CommandItem
                        key={sound.korean}
                        value={`${sound.korean} ${sound.romanization} ${sound.malayalamEquivalent} ${sound.koreanExample.word} ${sound.malayalamExample.word}`}
                        onSelect={() => {
                          setSelectedSound({
                            sound,
                            category: type as CategoryType,
                          });
                          setOpen(false);
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold">
                            {sound.korean}
                          </span>
                          <span className="text-muted-foreground">
                            {sound.romanization}
                          </span>
                          <span className="text-lg">
                            {sound.malayalamEquivalent}
                          </span>
                        </div>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                )
              );
            }

            // Use type guard for non-consonant sections
            if (isSoundCategory(data)) {
              return (
                <CommandGroup key={section} heading={data.title}>
                  {data.sounds.map((sound: SoundMapping) => (
                    <CommandItem
                      key={sound.korean}
                      value={`${sound.korean} ${sound.romanization} ${sound.malayalamEquivalent} ${sound.koreanExample.word} ${sound.malayalamExample.word}`}
                      onSelect={() => {
                        setSelectedSound({
                          sound,
                          category: section as CategoryType,
                        });
                        setOpen(false);
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold">
                          {sound.korean}
                        </span>
                        <span className="text-muted-foreground">
                          {sound.romanization}
                        </span>
                        <span className="text-lg">
                          {sound.malayalamEquivalent}
                        </span>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              );
            }

            return null;
          })}
        </CommandList>
      </CommandDialog>

      {selectedSound && (
        <Dialog
          open={selectedSound !== null}
          onOpenChange={() => setSelectedSound(null)}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="sr-only">
                Sound Details for {selectedSound.sound.korean}
              </DialogTitle>
            </DialogHeader>
            <SoundCard
              sound={selectedSound.sound}
              category={selectedSound.category}
            />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
