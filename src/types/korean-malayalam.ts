export type SoundExample = {
  word: string;
  meaning: string;
  transliteration: string;
};

export type SoundMapping = {
  korean: string;
  romanization: string;
  malayalam: string;
  malayalamNote?: string;
  koreanExample: {
    word: string;
    meaning: string;
    transliteration: string;
    malayalamLipi: string;
  };
  malayalamExample: {
    word: string;
    transliteration: string;
    hangulTransliteration: string;
    meaning: string;
  };
  type: "vowel" | "double-vowel" | "consonant" | "aspirated" | "tense";
};

export type SoundCategory = {
  title: string;
  description?: string;
  sounds: SoundMapping[];
};

export type ConsonantCategories = {
  plain: SoundCategory;
  aspirated: SoundCategory;
  tense: SoundCategory;
};

export type AllSoundData = {
  vowels: SoundCategory;
  doubleVowels: SoundCategory;
  consonants: ConsonantCategories;
};
