import create from 'zustand';

const useLanguageStore = create<LanguageStoreTypes>((set) => ({
  language: "English",

  getLanguage: () => {
    const userLanguage = navigator.language

    if (!('userLanguage' in localStorage)) {
      if (userLanguage === "ko-KR") {
        localStorage.userLanguage = "Korean"
        set({ language: "Korean" })
      }
      else {
        localStorage.userLanguage = "English"
        set({ language: "English" })
      }
    }
    else {
      set({ language: localStorage.userLanguage })
    }
  },

  setLanguage: (selectedLanguage) => {
    localStorage.userLanguage = selectedLanguage
    set({ language: selectedLanguage })
  }
}));

export default useLanguageStore;