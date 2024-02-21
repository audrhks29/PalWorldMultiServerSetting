import create from 'zustand';

import settingList from '../assets/settingList.json'

const useSettingDataStore = create<SettingDataStoreTypes>((set, getState) => ({
  settingData: [],

  initializeData: () => {
    const data = settingList.map(item => ({
      id: item.id,
      titleName: item.eng,
      value: item.defaultValue
    }));

    set({ settingData: data })
  },

  handleSliderChange: (id, value) => {
    const state = getState();
    const settingData = state.settingData

    if (settingData.some(data => data.id === id)) {
      const updatedData = settingData.map(data =>
        data.id === id ? { ...data, value: value } : data
      );
      set({ settingData: updatedData });
    }
  }
}));

export default useSettingDataStore;