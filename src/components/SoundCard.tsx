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
    "from-blue-500/20 via-blue-600/30 to-blue-500/20 hover:from-blue-500/40 hover:via-blue-600/50 hover:to-blue-500/40",
  doubleVowels:
    "from-violet-500/20 via-violet-600/30 to-violet-500/20 hover:from-violet-500/40 hover:via-violet-600/50 hover:to-violet-500/40",
  plain:
    "from-emerald-500/20 via-emerald-600/30 to-emerald-500/20 hover:from-emerald-500/40 hover:via-emerald-600/50 hover:to-emerald-500/40",
  aspirated:
    "from-orange-500/20 via-orange-600/30 to-orange-500/20 hover:from-orange-500/40 hover:via-orange-600/50 hover:to-orange-500/40",
  tense:
    "from-rose-500/20 via-rose-600/30 to-rose-500/20 hover:from-rose-500/40 hover:via-rose-600/50 hover:to-rose-500/40",
} as const;

interface SoundCardProps {
  sound: SoundMapping;
  category: keyof typeof categoryColors;
}

export function SoundCard({ sound, category }: SoundCardProps) {
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
    const shareText = `Learn Korean-Malayalam: "${sound.korean}" (${sound.romanization}) maps to "${sound.malayalam}" in Malayalam.`;

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

  return (
    <>
      <Card
        className="group relative overflow-hidden cursor-pointer hover:border-primary/50 active:scale-95 transition-all"
        onClick={() => setShowDetails(true)}
      >
        <div className="p-3 sm:p-4 text-center space-y-2 sm:space-y-3">
          <div className="text-3xl sm:text-4xl font-bold mb-1 group-hover:scale-110 transition-transform">
            {sound.korean}
          </div>
          <div className="space-y-1">
            <div className="text-xs sm:text-sm text-muted-foreground">
              {sound.romanization}
            </div>
            <div className="text-lg sm:text-xl">{sound.malayalam}</div>
          </div>
        </div>
        <div
          className={`absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r ${categoryColors[category]}`}
        />
        <FavoriteButton sound={sound} />
      </Card>

      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="sm:max-w-[500px] p-4 sm:p-6">
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
                <span>{sound.malayalam}</span>
              </div>
            </DialogTitle>
          </DialogHeader>

          <ScrollArea className="max-h-[70vh] sm:max-h-[60vh]">
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
                      {sound.koreanExample.malayalamLipi}
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
                      {sound.malayalamExample.hangulTransliteration}
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
