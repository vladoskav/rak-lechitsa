import axios from 'axios';

export const state = () => ({
    texts: []
});

export const mutations = {
    setState(state, {name, value}) {
        return (state[name] = value);
    }
}

export const actions = {
    fetchText(state) {
        return axios.get(process.env.BASE_URL + 'blocks').then((response) => {
            return state.commit('setState', {
                name: 'texts',
                value: response.data
            })
        })
    }
}

export const getters = {
    getText(state) {
        return state.texts;
    }
}