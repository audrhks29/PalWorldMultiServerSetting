import create from 'zustand';

const languageStore = create<LanguageStoreTypes>((set) => ({
  language: "English",

  setLanguage: (selectedLanguage) => {
    set({ language: selectedLanguage })
  }
}));

export default languageStore;