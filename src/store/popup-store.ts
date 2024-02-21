import create from 'zustand';

const usePopupStore = create<PopupStoreTypes>((set, getState) => ({
  popupState: false,

  togglePopup: () => {
    const state = getState();
    const popupState = state.popupState;
    set({ popupState: !popupState })
  }
}));

export default usePopupStore;