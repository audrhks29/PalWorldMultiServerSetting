interface LanguageStoreTypes {
  language: string;
  getLanguage: () => void;
  setLanguage: (selectedLanguage: string) => void;
}