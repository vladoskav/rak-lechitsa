export const state = () => ({
  mobileOpened: false,
});

export const mutations = {
  toggleMobileMenu(state) {
    return (state.mobileOpened = !state.mobileOpened);
  },
};

export const getters = {
  getMobileMenuState(state) {
    return state.mobileOpened;
  },
};
