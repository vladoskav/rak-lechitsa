export const state = () => ({
  data: {},
});

export const mutations = {
  saveData(state, answer) {
    state.data = answer;
  },
};

export const actions = {
  async sentData({ commit, state }, data) {
    await commit('saveData', data);
    console.log(state.data);
  },
};
