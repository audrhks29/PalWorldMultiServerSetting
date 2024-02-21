interface LanguageStoreTypes {
  language: string;
  getLanguage: () => void;
  setLanguage: (selectedLanguage: string) => void;
}

interface SettingDataStoreTypes {
  settingData: {
    id: number;
    value: number | string | null;
    titleName: string;
  }[]
  initializeData: () => void;
  handleSliderChange: (id: number, value: string | number) => void;
}

interface PopupStoreTypes {
  popupState: boolean;
  togglePopup: () => void;
}