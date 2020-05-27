import axios from 'axios';

export const state = () => ({
  currentStory: {},
  stories: [],
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const actions = {
  fetchStories(state) {
    return axios.get(process.env.BASE_URL + '/stories').then(res => {
      return state.commit('setState', {
        name: 'stories',
        value: res.data,
      });
    });
  },
  fetchStoryWithId(state, payload) {
    return axios
      .get(process.env.BASE_URL + '/stories' + `/${payload.id}`)
      .then(res => {
        return state.commit('setState', {
          name: 'currentStory',
          value: res.data,
        });
      });
  },
};

export const getters = {
  getStories(state) {
    return state.stories;
  },
  getStoryWithId(state) {
    return state.currentStory;
  },
};
