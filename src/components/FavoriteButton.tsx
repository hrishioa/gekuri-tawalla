"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { SoundMapping } from "@/types/korean-malayalam";

interface FavoriteButtonProps {
  sound: SoundMapping;
}

export function FavoriteButton({ sound }: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(
      favorites.some((fav: SoundMapping) => fav.korean === sound.korean)
    );
  }, [sound.korean]);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (isFavorite) {
      const newFavorites = favorites.filter(
        (fav: SoundMapping) => fav.korean !== sound.korean
      );
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    } else {
      favorites.push(sound);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    setIsFavorite(!isFavorite);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      className={`absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity ${
        isFavorite ? "text-yellow-500" : "text-muted-foreground"
      }`}
      onClick={toggleFavorite}
    >
      <Star className="h-4 w-4 fill-current" />
    </Button>
  );
}
