interface LanguageListTypes {
  id: string;
  language: string;
}[]

interface SettingListCommonTypes {
  "id": string;
  "type": string;
  "eng": string;
  "kor": string;
  "defaultValue": number;
}

interface SettingListTypes extends SettingListCommonTypes {
  "min": number;
  "max": number;
  "step": number;
}