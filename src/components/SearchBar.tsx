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
import { SoundMapping } from "@/types/korean-malayalam";
import { Dialog } from "./ui/dialog";
import { SoundCard } from "./SoundCard";

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

export function SearchBar() {
  const [open, setOpen] = useState(false);
  const [selectedSound, setSelectedSound] = useState<{
    sound: SoundMapping;
    category: string;
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
        <span className="hidden lg:inline-flex">Search sounds...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type to search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {Object.entries(soundData).map(([section, data]) => {
            if (section === "consonants") {
              return Object.entries(data).map(([type, category]) => (
                <CommandGroup key={type} heading={category.title}>
                  {category.sounds.map((sound) => (
                    <CommandItem
                      key={sound.korean}
                      value={`${sound.korean} ${sound.romanization} ${sound.malayalamEquivalent} ${sound.koreanExample.word} ${sound.malayalamExample.word}`}
                      onSelect={() => {
                        setSelectedSound({ sound, category: type });
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
              ));
            }

            return (
              <CommandGroup key={section} heading={data.title}>
                {data.sounds.map((sound) => (
                  <CommandItem
                    key={sound.korean}
                    value={`${sound.korean} ${sound.romanization} ${sound.malayalamEquivalent} ${sound.koreanExample.word} ${sound.malayalamExample.word}`}
                    onSelect={() => {
                      setSelectedSound({ sound, category: section });
                      setOpen(false);
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold">{sound.korean}</span>
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
          })}
        </CommandList>
      </CommandDialog>

      {selectedSound && (
        <Dialog
          open={selectedSound !== null}
          onOpenChange={() => setSelectedSound(null)}
        >
          <SoundCard
            sound={selectedSound.sound}
            category={selectedSound.category as any}
          />
        </Dialog>
      )}
    </>
  );
}
