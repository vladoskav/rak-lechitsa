export const state = () => ({
  data: {},
});

export const mutations = {
  saveData(state, answer) {
    for (let i = 1; i <= answer.length; i++) {
      state.data[i] = answer[i - 1];
    }
  },
};

export const actions = {
  async sentData({ commit, state }, data) {
    await commit('saveData', data);
    const firstObj = {
      1: { key: 'fullName' },
      2: { key: 'email' },
      3: { key: 'phone' },
      4: { key: 'preferred' },
    };
    const secondObj = state.data;
    const result = Object.keys(firstObj).reduce((sum, item) => {
      sum[firstObj[item].key] = secondObj[item];
      return sum;
    }, {});
    console.log({ result });
  },
};
