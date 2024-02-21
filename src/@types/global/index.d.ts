interface LanguageListTypes {
  id: string;
  language: string;
}[]

interface SettingListCommonTypes {
  "id": number;
  "type": string;
  "eng": string;
  "kor": string;
  "defaultValue": number | string | null;
}

interface SettingListSliderTypes extends SettingListCommonTypes {
  "min": number | undefined;
  "max": number | undefined;
  "step": number | undefined;
}

interface SettingListRadioTypes extends SettingListCommonTypes {
  "range1": Language | undefined;
  "range2": Language | undefined;
  "range3": Language | undefined;
  "range4": Language | undefined;
}

interface Language {
  eng: string;
  kor: string;
}