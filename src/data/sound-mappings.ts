import { SoundData } from "@/types/korean-malayalam";

export const soundData: SoundData = {
  vowels: {
    title: "Vowels",
    description: "Basic Korean vowels and their closest Malayalam equivalents",
    sounds: [
      {
        korean: "ㅏ",
        romanization: "a",
        malayalamEquivalent: "അ",
        koreanExample: {
          word: "아빠",
          romanization: "appa",
          meaning: "dad",
        },
        malayalamExample: {
          word: "അച്ഛൻ",
          romanization: "achchan",
          meaning: "father",
        },
      },
      {
        korean: "ㅑ",
        romanization: "ya",
        malayalamEquivalent: "യാ",
        notes:
          "Malayalam does not use an independent 'ya' vowel; here we show the consonant യ with the long vowel sign, to give a [ya] sound.",
        koreanExample: {
          word: "야",
          romanization: "ya",
          meaning: "hey!",
        },
        malayalamExample: {
          word: "യാത്ര",
          romanization: "yaathra",
          meaning: "journey",
        },
      },
      {
        korean: "ㅓ",
        romanization: "eo",
        malayalamEquivalent: "ഒ",
        notes:
          "Korean ㅓ is pronounced like the open-mid vowel [ʌ] (as in 'cup'), Malayalam does not have an exact match. Often the short 'o' (ഒ) is used as a rough stand‑in.",
        koreanExample: {
          word: "어른",
          romanization: "eoreun",
          meaning: "adult",
        },
        malayalamExample: {
          word: "ഒരാൾ",
          romanization: "oraal",
          meaning: "a person",
        },
      },
      {
        korean: "ㅕ",
        romanization: "yeo",
        malayalamEquivalent: "യൊ",
        notes:
          "There is no true equivalent. One might indicate the glide with a combination such as യൊ (a not‐standard combo) to signal 'yeo.'",
        koreanExample: {
          word: "여자",
          romanization: "yeoja",
          meaning: "woman",
        },
        malayalamExample: {
          word: "യേശു",
          romanization: "Yeshu",
          meaning: "Jesus",
        },
      },
      {
        korean: "ㅗ",
        romanization: "o",
        malayalamEquivalent: "ഒ/ഓ",
        notes: "Generally ഒ (for a short 'o') or ഓ (for a long 'o')",
        koreanExample: {
          word: "오리",
          romanization: "ori",
          meaning: "duck",
        },
        malayalamExample: {
          word: "ഒന്ന്",
          romanization: "onnu",
          meaning: "one",
        },
      },
      {
        korean: "ㅛ",
        romanization: "yo",
        malayalamEquivalent: "യോ",
        koreanExample: {
          word: "요리",
          romanization: "yori",
          meaning: "cooking/food",
        },
        malayalamExample: {
          word: "യോഗ",
          romanization: "yoga",
          meaning: "yoga",
        },
      },
      {
        korean: "ㅜ",
        romanization: "u",
        malayalamEquivalent: "ഉ",
        koreanExample: {
          word: "우유",
          romanization: "uyu",
          meaning: "milk",
        },
        malayalamExample: {
          word: "ഉപ്പ്",
          romanization: "uppu",
          meaning: "salt",
        },
      },
      {
        korean: "ㅠ",
        romanization: "yu",
        malayalamEquivalent: "യൂ",
        notes:
          "Typically approximated by using the letter for 'ya' with the vowel ഉ, i.e. യൂ",
        koreanExample: {
          word: "유리",
          romanization: "yuri",
          meaning: "glass",
        },
        malayalamExample: {
          word: "യുവാവ്",
          romanization: "yuvāv",
          meaning: "young man",
        },
      },
      {
        korean: "ㅡ",
        romanization: "eu",
        malayalamEquivalent: "്",
        notes:
          "This sound is a close central unrounded vowel ([ɯ]) with no true counterpart in Malayalam. It is sometimes approximated by a 'neutral' vowel sound.",
        koreanExample: {
          word: "음악",
          romanization: "eumak",
          meaning: "music",
        },
        malayalamExample: {
          word: "-",
          romanization: "-",
          meaning: "No exact equivalent",
        },
      },
      {
        korean: "ㅣ",
        romanization: "i",
        malayalamEquivalent: "ഇ",
        koreanExample: {
          word: "이름",
          romanization: "ireum",
          meaning: "name",
        },
        malayalamExample: {
          word: "ഇടം",
          romanization: "idam",
          meaning: "place/gap",
        },
      },
      {
        korean: "ㅐ",
        romanization: "ae",
        malayalamEquivalent: "എ",
        notes:
          "The sound (as in 'cat') has no perfect equivalent. Often the vowel എ (or occasionally a diphthongal rendition) is used as an approximation.",
        koreanExample: {
          word: "애인",
          romanization: "aein",
          meaning: "lover",
        },
        malayalamExample: {
          word: "എനിക്ക്",
          romanization: "enikku",
          meaning: "to me",
        },
      },
      {
        korean: "ㅒ",
        romanization: "yae",
        malayalamEquivalent: "യെ",
        notes:
          "One may notate this as a combination such as യെ (a 'ya' plus the vowel sound of എ) even though this is not standard in Malayalam.",
        koreanExample: {
          word: "얘",
          romanization: "yae",
          meaning: "kid/this one",
        },
        malayalamExample: {
          word: "-",
          romanization: "-",
          meaning: "No common native word uses this exact glide",
        },
      },
      {
        korean: "ㅔ",
        romanization: "e",
        malayalamEquivalent: "എ",
        koreanExample: {
          word: "세상",
          romanization: "sesang",
          meaning: "world",
        },
        malayalamExample: {
          word: "എല്ലാം",
          romanization: "ellaam",
          meaning: "all",
        },
      },
      {
        korean: "ㅖ",
        romanization: "ye",
        malayalamEquivalent: "യേ",
        koreanExample: {
          word: "예술",
          romanization: "yesul",
          meaning: "art",
        },
        malayalamExample: {
          word: "യേശു",
          romanization: "Yeshu",
          meaning: "Jesus",
        },
      },
    ],
  },
  doubleVowels: {
    title: "Double Vowels",
    description:
      "Complex Korean vowel combinations and their Malayalam approximations",
    sounds: [
      {
        korean: "ㅘ",
        romanization: "wa",
        malayalamEquivalent: "വ",
        notes:
          "Korean 'wa' is a combination of ㅗ + ㅏ. Malayalam does not have a distinct 'w' sound; often the letter വ is used (which in Malayalam can represent both /v/ and, in loan contexts, /w/).",
        koreanExample: {
          word: "과일",
          romanization: "gwail",
          meaning: "fruit",
        },
        malayalamExample: {
          word: "വാതില്‍",
          romanization: "vaathil",
          meaning: "door",
        },
      },
      {
        korean: "ㅝ",
        romanization: "wo",
        malayalamEquivalent: "വോ",
        notes:
          "Similarly, ㅝ (pronounced roughly 'wuh') is approximated by using വ plus an appropriate vowel sign (for instance, one might write വോ even though the quality is not exact).",
        koreanExample: {
          word: "원",
          romanization: "won",
          meaning: "Korean currency/circle",
        },
        malayalamExample: {
          word: "-",
          romanization: "-",
          meaning: "No common native word begins with a true 'wo-' sound",
        },
      },
      {
        korean: "ㅙ",
        romanization: "wae",
        malayalamEquivalent: "വൈ",
        notes:
          "One might approximate this by a compound such as വ + an 'e' vowel sign (for example, writing it as വൈ in transliteration even though the exact quality differs).",
        koreanExample: {
          word: "왜",
          romanization: "wae",
          meaning: "why",
        },
        malayalamExample: {
          word: "യാത്ര",
          romanization: "yaathra",
          meaning: "journey (sometimes with diphthongal quality)",
        },
      },
      {
        korean: "ㅞ",
        romanization: "we",
        malayalamEquivalent: "വെ",
        notes:
          "Often rendered with the consonant വ plus the vowel sign for 'e'",
        koreanExample: {
          word: "웨이터",
          romanization: "weiteo",
          meaning: "waiter",
        },
        malayalamExample: {
          word: "വെള്ളം",
          romanization: "vellam",
          meaning: "water",
        },
      },
      {
        korean: "ㅚ",
        romanization: "oe",
        malayalamEquivalent: "ഒയ",
        notes:
          "Modern Korean ㅚ is typically pronounced very similarly to ㅙ or even ㅟ; there is no true equivalent in Malayalam. An approximation might be attempted by combining vowels (for example, ഒയ) but it is not standard.",
        koreanExample: {
          word: "외국",
          romanization: "oeguk",
          meaning: "foreign country",
        },
        malayalamExample: {
          word: "-",
          romanization: "-",
          meaning: "No common example",
        },
      },
      {
        korean: "ㅟ",
        romanization: "wi",
        malayalamEquivalent: "വി",
        notes:
          "Often approximated by the consonant വ with the vowel sign for 'i' (വി), even though the Korean 'wi' begins with a 'w' quality.",
        koreanExample: {
          word: "위",
          romanization: "wi",
          meaning: "above/top",
        },
        malayalamExample: {
          word: "വിഷു",
          romanization: "Viṣu",
          meaning: "Vishu (proper name)",
        },
      },
      {
        korean: "ㅢ",
        romanization: "ui",
        malayalamEquivalent: "ഉയ്",
        notes:
          "This vowel—often pronounced like a diphthong 'eui' or 'ui'—has no true equivalent in Malayalam. It is usually rendered by a combination (for example, writing it as ഉയ്) but this is only a notational aid.",
        koreanExample: {
          word: "의자",
          romanization: "uija",
          meaning: "chair",
        },
        malayalamExample: {
          word: "-",
          romanization: "-",
          meaning: "No exact native equivalent",
        },
      },
    ],
  },
  consonants: {
    plain: {
      title: "Plain Consonants",
      description: "Basic Korean consonants with their Malayalam counterparts",
      sounds: [
        {
          korean: "ㄱ",
          romanization: "g/k",
          malayalamEquivalent: "ക",
          notes:
            "Though the Korean sound lies between [g] and [k], in Malayalam the unaspirated velar stop is usually written with ക.",
          koreanExample: {
            word: "가",
            romanization: "ga",
            meaning: "syllable/song",
          },
          malayalamExample: {
            word: "കമലം",
            romanization: "kamalam",
            meaning: "lotus",
          },
        },
        {
          korean: "ㄷ",
          romanization: "d/t",
          malayalamEquivalent: "ദ",
          notes:
            "Korean ㄷ is an unaspirated dental/alveolar stop; Malayalam ദ comes closest to the voiced equivalent.",
          koreanExample: {
            word: "다리",
            romanization: "dari",
            meaning: "bridge/leg",
          },
          malayalamExample: {
            word: "ദർശനം",
            romanization: "darshanam",
            meaning: "sight/vision",
          },
        },
        {
          korean: "ㅈ",
          romanization: "j",
          malayalamEquivalent: "ജ",
          koreanExample: {
            word: "자",
            romanization: "ja",
            meaning: "sleep (in verb 자다)",
          },
          malayalamExample: {
            word: "ജലം",
            romanization: "jalam",
            meaning: "water",
          },
        },
        {
          korean: "ㅂ",
          romanization: "b/p",
          malayalamEquivalent: "ബ",
          koreanExample: {
            word: "바다",
            romanization: "bada",
            meaning: "sea",
          },
          malayalamExample: {
            word: "ബാലന്",
            romanization: "baalan",
            meaning: "child",
          },
        },
        {
          korean: "ㅇ",
          romanization: "ng",
          malayalamEquivalent: "ങ",
          notes:
            "For the final nasal, the letter ങ (nga) is used. Silent when initial.",
          koreanExample: {
            word: "방",
            romanization: "bang",
            meaning: "room",
          },
          malayalamExample: {
            word: "അങ്ങ്",
            romanization: "aṅṅ",
            meaning: "there",
          },
        },
        {
          korean: "ㄴ",
          romanization: "n",
          malayalamEquivalent: "ന",
          koreanExample: {
            word: "나",
            romanization: "na",
            meaning: "I/me",
          },
          malayalamExample: {
            word: "നട",
            romanization: "nata",
            meaning: "actor/performer",
          },
        },
        {
          korean: "ㅅ",
          romanization: "s",
          malayalamEquivalent: "സ",
          koreanExample: {
            word: "사과",
            romanization: "sagwa",
            meaning: "apple",
          },
          malayalamExample: {
            word: "സരിത",
            romanization: "sarita",
            meaning: "river",
          },
        },
        {
          korean: "ㅁ",
          romanization: "m",
          malayalamEquivalent: "മ",
          koreanExample: {
            word: "마음",
            romanization: "maeum",
            meaning: "heart/mind",
          },
          malayalamExample: {
            word: "മരം",
            romanization: "maram",
            meaning: "tree",
          },
        },
        {
          korean: "ㅎ",
          romanization: "h",
          malayalamEquivalent: "ഹ",
          koreanExample: {
            word: "하늘",
            romanization: "haneul",
            meaning: "sky",
          },
          malayalamExample: {
            word: "ഹരി",
            romanization: "Hari",
            meaning: "Hari (name)",
          },
        },
        {
          korean: "ㄹ",
          romanization: "r/l",
          malayalamEquivalent: "ല/റ",
          notes:
            "Korean ㄹ is a flap that can sound like [r] or [l] depending on position. In Malayalam the lateral approximant is usually ല (la) or sometimes റ (ra) in a trilled quality.",
          koreanExample: {
            word: "라면",
            romanization: "ramyeon",
            meaning: "ramen",
          },
          malayalamExample: {
            word: "ലക്ഷ്യം",
            romanization: "lakshyam",
            meaning: "aim/goal",
          },
        },
      ],
    },
    aspirated: {
      title: "Aspirated Consonants",
      description:
        "Korean aspirated consonants and their closest Malayalam equivalents",
      sounds: [
        {
          korean: "ㅋ",
          romanization: "k",
          malayalamEquivalent: "ഖ",
          notes:
            "While Malayalam does not systematically distinguish aspiration, the aspirated sound is sometimes notated by using ഖ (the aspirated counterpart of ക).",
          koreanExample: {
            word: "카드",
            romanization: "kadeu",
            meaning: "card",
          },
          malayalamExample: {
            word: "ഖടകം",
            romanization: "khaṭakam",
            meaning: "thunder",
          },
        },
        {
          korean: "ㅌ",
          romanization: "t",
          malayalamEquivalent: "ത",
          notes:
            "Aspirated [tʰ] is not a native phoneme in Malayalam; one typically uses ത for a plain [t].",
          koreanExample: {
            word: "타다",
            romanization: "tada",
            meaning: "to ride/to burn",
          },
          malayalamExample: {
            word: "തപിക്കുക",
            romanization: "tapikkuka",
            meaning: "to burn",
          },
        },
        {
          korean: "ㅊ",
          romanization: "ch",
          malayalamEquivalent: "ച",
          koreanExample: {
            word: "차",
            romanization: "cha",
            meaning: "tea/car",
          },
          malayalamExample: {
            word: "ചാടി",
            romanization: "chaadi",
            meaning: "jumped",
          },
        },
        {
          korean: "ㅍ",
          romanization: "p",
          malayalamEquivalent: "പ",
          koreanExample: {
            word: "파도",
            romanization: "pado",
            meaning: "wave",
          },
          malayalamExample: {
            word: "പാല്",
            romanization: "paal",
            meaning: "milk",
          },
        },
      ],
    },
    tense: {
      title: "Tense Consonants",
      description:
        "Korean tense consonants (doubled consonants) and their approximations",
      sounds: [
        {
          korean: "ㄲ",
          romanization: "kk",
          malayalamEquivalent: "ക്ക",
          notes: "Represented by a doubled ക (i.e. ക്ക)",
          koreanExample: {
            word: "까만",
            romanization: "kkaman",
            meaning: "black",
          },
          malayalamExample: {
            word: "-",
            romanization: "-",
            meaning: "In transliterations one might write a geminated 'ക്ക'",
          },
        },
        {
          korean: "ㄸ",
          romanization: "tt",
          malayalamEquivalent: "ട്ട",
          notes: "Represented by a doubled dental consonant (ട്ട)",
          koreanExample: {
            word: "따뜻하다",
            romanization: "ttatteuthada",
            meaning: "warm",
          },
          malayalamExample: {
            word: "പട്ട",
            romanization: "patta",
            meaning: "leather",
          },
        },
        {
          korean: "ㅉ",
          romanization: "jj",
          malayalamEquivalent: "ജ്ജ",
          notes: "Represented by a doubled ജ (ജ്ജ)",
          koreanExample: {
            word: "짜다",
            romanization: "jjada",
            meaning: "salty",
          },
          malayalamExample: {
            word: "-",
            romanization: "-",
            meaning: "In transliteration one may show this as 'ജ്ജ'",
          },
        },
        {
          korean: "ㅃ",
          romanization: "pp",
          malayalamEquivalent: "ബ്ബ",
          notes: "Represented by a doubled ബ (ബ്ബ)",
          koreanExample: {
            word: "빨리",
            romanization: "ppalli",
            meaning: "quickly",
          },
          malayalamExample: {
            word: "-",
            romanization: "-",
            meaning: "Gemination is used only in transliteration",
          },
        },
        {
          korean: "ㅆ",
          romanization: "ss",
          malayalamEquivalent: "സ്സ",
          notes: "Represented by a doubled സ (സ്സ)",
          koreanExample: {
            word: "싸다",
            romanization: "ssada",
            meaning: "cheap",
          },
          malayalamExample: {
            word: "-",
            romanization: "-",
            meaning:
              "In transliterated text a tense 's' might be shown as 'സ്സ'",
          },
        },
      ],
    },
  },
};
