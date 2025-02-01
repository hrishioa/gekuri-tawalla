import { koreanData } from "../../data/transliterations";
import { AllSoundData } from "@/types/korean-malayalam";

const soundData: AllSoundData = {
  vowels: {
    title: "Vowels",
    description: "The basic vowel sounds in Korean.",
    sounds: koreanData
      .filter((char) => char.type === "vowel")
      .map((char) => ({
        korean: char.korean,
        romanization: char.romanization,
        malayalam: char.malayalam,
        malayalamNote: char.malayalamNote,
        koreanExample: char.koreanExample,
        malayalamExample: char.malayalamExample,
        type: char.type,
      })),
  },
  doubleVowels: {
    title: "Double Vowels",
    description: "Combinations of vowel sounds.",
    sounds: koreanData
      .filter((char) => char.type === "double-vowel")
      .map((char) => ({
        korean: char.korean,
        romanization: char.romanization,
        malayalam: char.malayalam,
        malayalamNote: char.malayalamNote,
        koreanExample: char.koreanExample,
        malayalamExample: char.malayalamExample,
        type: char.type,
      })),
  },
  consonants: {
    plain: {
      title: "Plain Consonants",
      description: "Basic consonant sounds.",
      sounds: koreanData
        .filter((char) => char.type === "consonant")
        .map((char) => ({
          korean: char.korean,
          romanization: char.romanization,
          malayalam: char.malayalam,
          malayalamNote: char.malayalamNote,
          koreanExample: char.koreanExample,
          malayalamExample: char.malayalamExample,
          type: char.type,
        })),
    },
    aspirated: {
      title: "Aspirated Consonants",
      description: "Consonants with an added puff of air.",
      sounds: koreanData
        .filter((char) => char.type === "aspirated")
        .map((char) => ({
          korean: char.korean,
          romanization: char.romanization,
          malayalam: char.malayalam,
          malayalamNote: char.malayalamNote,
          koreanExample: char.koreanExample,
          malayalamExample: char.malayalamExample,
          type: char.type,
        })),
    },
    tense: {
      title: "Tense Consonants",
      description: "Consonants pronounced with a stronger, tenser sound.",
      sounds: koreanData
        .filter((char) => char.type === "tense")
        .map((char) => ({
          korean: char.korean,
          romanization: char.romanization,
          malayalam: char.malayalam,
          malayalamNote: char.malayalamNote,
          koreanExample: char.koreanExample,
          malayalamExample: char.malayalamExample,
          type: char.type,
        })),
    },
  },
};

export { soundData };
