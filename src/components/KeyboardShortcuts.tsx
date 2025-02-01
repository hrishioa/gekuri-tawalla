"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { toast } from "sonner";

export function KeyboardShortcuts() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      // Shortcuts
      switch (e.key.toLowerCase()) {
        case "v":
          if (e.ctrlKey || e.metaKey) return; // Don't interfere with browser shortcuts
          router.push("/?tab=vowels");
          toast("Switched to Vowels");
          break;
        case "d":
          if (e.ctrlKey || e.metaKey) return;
          router.push("/?tab=doubleVowels");
          toast("Switched to Double Vowels");
          break;
        case "c":
          if (e.ctrlKey || e.metaKey) return;
          router.push("/?tab=consonants");
          toast("Switched to Consonants");
          break;
        case "f":
          if (e.ctrlKey || e.metaKey) return;
          router.push("/?tab=favorites");
          toast("Switched to Favorites");
          break;
        case "p":
          if (e.ctrlKey || e.metaKey) return;
          document
            .querySelector<HTMLButtonElement>('[aria-label="Start Practice"]')
            ?.click();
          break;
        case "?":
          toast.info(
            "Keyboard Shortcuts:\n" +
              "V - Vowels\n" +
              "D - Double Vowels\n" +
              "C - Consonants\n" +
              "F - Favorites\n" +
              "P - Practice Mode\n" +
              "⌘K - Search\n" +
              "? - Show this help"
          );
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router, pathname]);

  return null;
}
