interface LanguageListTypes {
  id: string;
  language: string;
}[]

interface SettingListCommonTypes {
  "id": number;
  "type": string;
  "eng": string;
  "kor": string;
  "defaultValue": number | string;
}

interface SettingListSliderTypes extends SettingListCommonTypes {
  "min": number | undefined;
  "max": number | undefined;
  "step": number | undefined;
}

interface SettingListRadioTypes extends SettingListCommonTypes {
  "range1": string | undefined;
  "range2": string | undefined;
  "range3": string | undefined;
  "range4": string | undefined;
}