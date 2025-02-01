"use client";

import { useState } from "react";
import { SoundMapping } from "@/types/korean-malayalam";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Volume2, Share2 } from "lucide-react";
import { toast } from "sonner";
import { FavoriteButton } from "./FavoriteButton";

const categoryColors = {
  vowels:
    "from-blue-500/10 via-blue-500/20 to-blue-500/10 hover:from-blue-500/30 hover:via-blue-500/40 hover:to-blue-500/30",
  doubleVowels:
    "from-violet-500/10 via-violet-500/20 to-violet-500/10 hover:from-violet-500/30 hover:via-violet-500/40 hover:to-violet-500/30",
  plain:
    "from-green-500/10 via-green-500/20 to-green-500/10 hover:from-green-500/30 hover:via-green-500/40 hover:to-green-500/30",
  aspirated:
    "from-orange-500/10 via-orange-500/20 to-orange-500/10 hover:from-orange-500/30 hover:via-orange-500/40 hover:to-orange-500/30",
  tense:
    "from-red-500/10 via-red-500/20 to-red-500/10 hover:from-red-500/30 hover:via-red-500/40 hover:to-red-500/30",
} as const;

interface SoundCardProps {
  sound: SoundMapping;
  category: keyof typeof categoryColors;
  isCompact?: boolean;
}

export function SoundCard({ sound, category, isCompact }: SoundCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  const playSound = async (text: string) => {
    try {
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = "ko-KR";
      window.speechSynthesis.speak(speech);
    } catch (error) {
      console.error("Speech synthesis not supported");
    }
  };

  const shareSound = async () => {
    const shareText = `Learn Korean-Malayalam: "${sound.korean}" (${sound.romanization}) maps to "${sound.malayalamEquivalent}" in Malayalam.`;

    if (navigator.share) {
      try {
        await navigator.share({
          text: shareText,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      await navigator.clipboard.writeText(shareText);
      toast.success("Copied to clipboard!");
    }
  };

  if (isCompact) {
    return (
      <Card
        className="group relative overflow-hidden cursor-pointer hover:border-primary/50 transition-colors"
        onClick={() => setShowDetails(true)}
      >
        <div className="p-3 flex items-center gap-4">
          <div className="text-2xl font-bold">{sound.korean}</div>
          <div className="flex-1 text-sm">
            <div className="text-muted-foreground">{sound.romanization}</div>
            <div>{sound.malayalamEquivalent}</div>
          </div>
        </div>
        <div
          className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${categoryColors[category]}`}
        />
        <FavoriteButton sound={sound} />
      </Card>
    );
  }

  return (
    <>
      <Card
        className="group relative overflow-hidden cursor-pointer hover:border-primary/50 transition-colors"
        onClick={() => setShowDetails(true)}
      >
        <div className="p-4 text-center">
          <div className="text-3xl font-bold mb-1 group-hover:scale-110 transition-transform">
            {sound.korean}
          </div>
          <div className="text-xs text-muted-foreground">
            {sound.romanization}
          </div>
        </div>
        <div
          className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${categoryColors[category]}`}
        />
        <FavoriteButton sound={sound} />
      </Card>

      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="sm:max-w-[500px]">
          <div className="flex justify-end gap-2 absolute right-4 top-4">
            <Button
              variant="outline"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                shareSound();
              }}
            >
              <Share2 className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => playSound(sound.koreanExample.word)}
            >
              <Volume2 className="h-4 w-4" />
            </Button>
          </div>

          <DialogHeader className="pt-6">
            <DialogTitle className="flex gap-6 items-center justify-center text-4xl">
              <div className="flex flex-col items-center">
                <span>{sound.korean}</span>
                <span className="text-sm font-normal text-muted-foreground mt-1">
                  {sound.romanization}
                </span>
              </div>
              <span className="text-muted-foreground">→</span>
              <div className="flex flex-col items-center">
                <span>{sound.malayalamEquivalent}</span>
              </div>
            </DialogTitle>
          </DialogHeader>

          <ScrollArea className="max-h-[60vh]">
            <div className="space-y-6">
              {sound.notes && (
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">{sound.notes}</p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Badge variant="outline">Korean Example</Badge>
                  <div className="space-y-1.5">
                    <p className="text-xl">{sound.koreanExample.word}</p>
                    <p className="text-sm text-muted-foreground">
                      {sound.koreanExample.romanization}
                    </p>
                    <p className="text-sm text-muted-foreground italic">
                      "{sound.koreanExample.meaning}"
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Badge variant="outline">Malayalam Example</Badge>
                  <div className="space-y-1.5">
                    <p className="text-xl">{sound.malayalamExample.word}</p>
                    <p className="text-sm text-muted-foreground">
                      {sound.malayalamExample.romanization}
                    </p>
                    <p className="text-sm text-muted-foreground italic">
                      "{sound.malayalamExample.meaning}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
}
