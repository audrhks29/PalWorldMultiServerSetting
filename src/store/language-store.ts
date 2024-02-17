import create from 'zustand';

const languageStore = create(set => ({
  language: "English",

  setLanguage: () => {
    if (navigator.language === "ko-KR") set({ language: "korean" })
    else set({ language: "english" })
  }
}));

export default languageStore;