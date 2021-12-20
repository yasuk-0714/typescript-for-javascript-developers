export {};

// Record<K, T>

type Prefectures = 'Tokyo' | 'Chiba' | 'Tottori';

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

// const covid19Japan: {
  // Tokyo: Covid19InfectionInfo;
  // Chiba: Covid19InfectionInfo;
  // Tottori: Covid19InfectionInfo;
  // Shiga: Covid19InfectionInfo;
// } = {
  // Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
  // Chiba: { kanji_name: '千葉', confirmed_cases: 250 },
  // Tottori: { kanji_name: '鳥取', confirmed_cases: 2 },
  // Shiga: { kanji_name: '滋賀', confirmed_cases: true}
// }

const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
  Chiba: { kanji_name: '千葉', confirmed_cases: 250 },
  Tottori: { kanji_name: '鳥取', confirmed_cases: 2 },
  // Shiga: { kanji_name: '滋賀', confirmed_cases: true}
}
