export type SoundExample = {
  word: string;
  romanization: string;
  meaning: string;
};

export type SoundMapping = {
  korean: string;
  romanization: string;
  malayalamEquivalent: string;
  koreanExample: SoundExample;
  malayalamExample: SoundExample;
  notes?: string;
};

export type SoundCategory = {
  title: string;
  description?: string;
  sounds: SoundMapping[];
};

export type SoundData = {
  vowels: SoundCategory;
  doubleVowels: SoundCategory;
  consonants: {
    plain: SoundCategory;
    aspirated: SoundCategory;
    tense: SoundCategory;
  };
};
