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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

type Difficulty = "easy" | "medium" | "hard";
type Category = "all" | "vowels" | "doubleVowels" | "consonants";

interface PracticeStats {
  totalAttempts: number;
  correctAnswers: number;
  streak: number;
  bestStreak: number;
  lastPracticed: Date;
}

function getRandomSounds(category: Category, difficulty: Difficulty) {
  const sounds = [];

  if (category === "all" || category === "vowels") {
    sounds.push(...soundData.vowels.sounds);
  }
  if (category === "all" || category === "doubleVowels") {
    sounds.push(...soundData.doubleVowels.sounds);
  }
  if (category === "all" || category === "consonants") {
    sounds.push(
      ...soundData.consonants.plain.sounds,
      ...soundData.consonants.aspirated.sounds,
      ...soundData.consonants.tense.sounds
    );
  }

  const questionCount = {
    easy: 5,
    medium: 10,
    hard: 15,
  }[difficulty];

  return [...sounds].sort(() => Math.random() - 0.5).slice(0, questionCount);
}

export function PracticeMode() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentRound, setCurrentRound] = useState<{
    sounds: SoundMapping[];
    currentIndex: number;
    score: number;
    showAnswer: boolean;
  } | null>(null);
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  const [category, setCategory] = useState<Category>("all");
  const [stats, setStats] = useState<PracticeStats>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("practiceStats");
      return saved
        ? JSON.parse(saved)
        : {
            totalAttempts: 0,
            correctAnswers: 0,
            streak: 0,
            bestStreak: 0,
            lastPracticed: new Date(),
          };
    }
    return {
      totalAttempts: 0,
      correctAnswers: 0,
      streak: 0,
      bestStreak: 0,
      lastPracticed: new Date(),
    };
  });

  const startNewRound = () => {
    setCurrentRound({
      sounds: getRandomSounds(category, difficulty),
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
          <Tabs defaultValue="practice">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="practice">Practice</TabsTrigger>
              <TabsTrigger value="stats">Statistics</TabsTrigger>
            </TabsList>

            <TabsContent value="practice" className="space-y-4">
              {!currentRound ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Difficulty</label>
                      <Select
                        value={difficulty}
                        onValueChange={(v) => setDifficulty(v as Difficulty)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="easy">
                            Easy (5 questions)
                          </SelectItem>
                          <SelectItem value="medium">
                            Medium (10 questions)
                          </SelectItem>
                          <SelectItem value="hard">
                            Hard (15 questions)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Category</label>
                      <Select
                        value={category}
                        onValueChange={(v) => setCategory(v as Category)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Sounds</SelectItem>
                          <SelectItem value="vowels">Vowels Only</SelectItem>
                          <SelectItem value="doubleVowels">
                            Double Vowels Only
                          </SelectItem>
                          <SelectItem value="consonants">
                            Consonants Only
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button className="w-full" onClick={startNewRound}>
                    Start Practice
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <Progress value={progress} className="h-2" />

                  <div className="text-sm text-muted-foreground text-center">
                    Sound {currentRound.currentIndex + 1} of{" "}
                    {currentRound.sounds.length}
                  </div>

                  <Card className="p-4 sm:p-6 text-center space-y-4 sm:space-y-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-violet-500/5 to-orange-500/5" />
                    <div className="relative">
                      <div className="text-5xl sm:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-violet-500 to-orange-500 bg-clip-text text-transparent">
                        {currentSound?.korean}
                      </div>

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
                              {currentSound?.malayalam}
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
                    </div>
                  </Card>
                </div>
              )}
            </TabsContent>

            <TabsContent value="stats" className="space-y-4">
              <Card>
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Accuracy</p>
                      <p className="text-2xl font-bold">
                        {stats.totalAttempts > 0
                          ? Math.round(
                              (stats.correctAnswers / stats.totalAttempts) * 100
                            )
                          : 0}
                        %
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">
                        Current Streak
                      </p>
                      <p className="text-2xl font-bold">{stats.streak}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">
                        Best Streak
                      </p>
                      <p className="text-2xl font-bold">{stats.bestStreak}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">
                        Total Practice
                      </p>
                      <p className="text-2xl font-bold">
                        {stats.totalAttempts}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
