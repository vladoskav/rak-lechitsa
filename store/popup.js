export const state = () => ({
  popupShown: false,
});

export const mutations = {
  togglePopup(state) {
    return (state.popupShown = !state.popupShown);
  },
};

export const getters = {
  getPopupShown(state) {
    return state.popupShown;
  },
};
