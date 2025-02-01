export const categoryColors = {
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

export type CategoryType = keyof typeof categoryColors;
