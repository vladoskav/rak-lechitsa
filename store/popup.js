export const state = () => ({
    popups: {
        popupShown: false,
        popupSocial: false,
        popupContact: false,
    }
});

export const mutations = {
    togglePopup(state, popup) {
        return state.popups[popup] = !state.popups[popup];
    },
}

export const getters = {
    getPopupShown(state) {
        return state.popups.popupShown;
    },
    getPopupSocial(state) {
        return state.popups.popupSocial;
    },
    getPopupContact(state) {
        return state.popups.popupContact;
    }
}

export const actions = {
    async MAKE_POPUP({commit}, popup) {
        await commit('togglePopup', popup)
    },
}