export const state = () => ({
    popupShown: false,
    popupSocial: false,
});

export const mutations = {
    togglePopup(state) {
        return state.popupShown = !state.popupShown;
    },
    toggleSocial(state) {
        return state.popupSocial = !state.popupSocial;
    }
}

export const getters = {
    getPopupShown(state) {
        return state.popupShown;
    },
    getPopupSocial(state) {
        return state.popupSocial;
    },
}