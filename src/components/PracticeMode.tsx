"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { soundData } from "@/data/sound-mappings";
import { SoundMapping } from "@/types/korean-malayalam";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { Brain, Volume2 } from "lucide-react";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

function getRandomSounds(count: number = 10) {
  const allSounds = [
    ...soundData.vowels.sounds,
    ...soundData.doubleVowels.sounds,
    ...soundData.consonants.plain.sounds,
    ...soundData.consonants.aspirated.sounds,
    ...soundData.consonants.tense.sounds,
  ];

  return [...allSounds].sort(() => Math.random() - 0.5).slice(0, count);
}

export function PracticeMode() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentRound, setCurrentRound] = useState<{
    sounds: SoundMapping[];
    currentIndex: number;
    score: number;
    showAnswer: boolean;
  } | null>(null);

  const startNewRound = () => {
    setCurrentRound({
      sounds: getRandomSounds(),
      currentIndex: 0,
      score: 0,
      showAnswer: false,
    });
  };

  const currentSound = currentRound?.sounds[currentRound.currentIndex];
  const progress = currentRound
    ? (currentRound.currentIndex / currentRound.sounds.length) * 100
    : 0;

  const handleNext = () => {
    if (!currentRound) return;

    if (currentRound.currentIndex === currentRound.sounds.length - 1) {
      // Round complete
      setCurrentRound(null);
    } else {
      setCurrentRound({
        ...currentRound,
        currentIndex: currentRound.currentIndex + 1,
        showAnswer: false,
      });
    }
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Brain className="h-4 w-4" />
          <span className="hidden sm:inline">Practice</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Practice Mode</h2>

          {!currentRound ? (
            <div className="text-center space-y-4">
              <p className="text-muted-foreground">
                Test your knowledge of Korean-Malayalam sound mappings!
              </p>
              <Button onClick={startNewRound}>Start Practice</Button>
            </div>
          ) : (
            <div className="space-y-4">
              <Progress value={progress} className="h-2" />

              <div className="text-sm text-muted-foreground text-center">
                Sound {currentRound.currentIndex + 1} of{" "}
                {currentRound.sounds.length}
              </div>

              <Card className="p-6 text-center space-y-6">
                <div className="text-6xl font-bold">{currentSound?.korean}</div>

                {!currentRound.showAnswer ? (
                  <Button
                    variant="outline"
                    onClick={() =>
                      setCurrentRound({
                        ...currentRound,
                        showAnswer: true,
                      })
                    }
                  >
                    Show Answer
                  </Button>
                ) : (
                  <div className="space-y-4">
                    <div className="flex justify-center items-center gap-4">
                      <Badge variant="outline">Romanization</Badge>
                      <span className="text-lg">
                        {currentSound?.romanization}
                      </span>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                      <Badge variant="outline">Malayalam</Badge>
                      <span className="text-2xl">
                        {currentSound?.malayalamEquivalent}
                      </span>
                    </div>
                    <div className="pt-4">
                      <Button onClick={handleNext}>
                        {currentRound.currentIndex ===
                        currentRound.sounds.length - 1
                          ? "Complete"
                          : "Next"}
                      </Button>
                    </div>
                  </div>
                )}
              </Card>
            </div>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
