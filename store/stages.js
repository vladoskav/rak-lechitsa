export const state = () => ({
  index: 1,
  answers: {},
  questions: QUESTIONS,
});

export const mutations = {
  saveAnswer(state, { answer, index }) {
    state.answers[index] = answer;
  },
  deleteAnswer(state) {
    state.answers = {};
  },
  setIndex(state, { index }) {
    state.index = index;
  },
  setQuestions(state, questions) {
    state.questions = questions;
  },
};

export const getters = {
  index(state) {
    return state.index;
  },
  question(state) {
    return state.questions;
  },
  answer(state) {
    return state.answers;
  },
};

export const actions = {
  GET_QUESTIONS({ commit }) {
    commit('setQuestions', QUESTIONS);
  },
  SAVE_ANSWER({ commit }, { answer, index }) {
    commit('saveAnswer', { answer, index });
  },
  SET_QUESTION({ commit }, { index }) {
    commit('setIndex', { index });
  },

  async NEXT_QUESTION({ commit, state }, { answer }) {
    const { index } = state;
    await commit('saveAnswer', { answer, index });
    await commit('setIndex', { index: index + 1 });
    if (index === 13) {
      const firstObj = {
        1: { key: 'name' },
        2: { key: 'cancerStory' },
        3: { key: 'pleasureActivities' },
        4: { key: 'commonActivities' },
        5: { key: 'hobbies' },
        6: { key: 'habits' },
        7: { key: 'regularActivities' },
        8: { key: 'aloneActivities' },
        9: { key: 'calmDownActivities' },
        10: { key: 'events' },
        11: { key: 'weekends' },
        12: { key: 'phone' },
        13: { key: 'email' },
      };
      const secondObj = state.answers;
      const result = Object.keys(firstObj).reduce((sum, item) => {
        sum[firstObj[item].key] = secondObj[item];
        return sum;
      }, {});
      console.log({ result });
    } else {
      return;
    }
  },

  async PREV_QUESTION({ commit, state }) {
    const { index } = state;
    if (index === 1) {
      return;
    }
    await commit('setIndex', { index: index - 1 });
  },

  async CLOSE_QUESTION({ commit, state }, newIndex) {
    await commit('setIndex', { index: newIndex });
    await commit('deleteAnswer');
  },
};

const QUESTIONS = {
  1: {
    title: 'Шаг 1 из 13',
    question: 'Как вас зовут?',
    btn: 'Далее',
  },
  2: {
    title: 'Шаг 2 из 13',
    question: 'Было ли у вас онкологическое заболевание?',
    questionAdditional:
      'Если да – расскажите, пожалуйста, кратко, какой диагноз и текущий статус. Если нет — приглашаем Вас поделиться своей историей неизлечимых привычек в Инстаграм с хештегами #раклечится и #этонелечится.',
    btn: 'Далее',
  },
  3: {
    title: 'Шаг 3 из 13',
    question: 'Какие занятия приносят Вам наибольшее удовольствие?',
    questionAdditional:
      'Расскажите о ваших неизлечимых привычках, чего Вы боитесь или без чего не можете жить.',
    btn: 'Далее',
  },
  4: {
    title: 'Шаг 4 из 13',
    question: 'На что, кроме семьи, быта и работы, Вы тратите свое время?',
    btn: 'Далее',
  },
  5: {
    title: 'Шаг 5 из 13',
    question: 'Какие сильные увлечения у Вас есть?',
    questionAdditional:
      'Расскажите о занятии, хобби или спорте, которые увлекают Вас с головой.',
    btn: 'Далее',
  },
  6: {
    title: 'Шаг 6 из 13',
    question:
      'Ваши близкие, друзья или коллеги замечали за вами какие-нибудь необычные привычки или особенности?',
    btn: 'Далее',
  },
  7: {
    title: 'Шаг 7 из 13',
    question:
      'Существуют ли какие-то ритуалы/действия, которые Вы совершаете регулярно?',
    questionAdditional: 'Кроме необходимых, таких, как чистка зубов.',
    btn: 'Далее',
  },
  8: {
    title: 'Шаг 8 из 13',
    question:
      'Если вам выдался свободный день/вечер в одиночестве, чем вы займетесь?',
    btn: 'Далее',
  },
  9: {
    title: 'Шаг 9 из 13',
    question: 'Что Вас успокаивает/умиротворяет лучше всего?',
    btn: 'Далее',
  },
  10: {
    title: 'Шаг 10 из 13',
    question:
      'Какие события/ситуации или действия других людей обычно выводят Вас из себя?',
    btn: 'Далее',
  },
  11: {
    title: 'Шаг 11 из 13',
    question: 'Как вы обычно проводите выходные?',
    btn: 'Далее',
  },
  12: {
    title: 'Шаг 12 из 13',
    question: 'Почта для связи.',
    questionAdditional:
      'После обработки анкеты координатор проекта свяжется с Вами для размещения Вашей истории на сайте.',
    btn: 'Далее',
  },
  13: {
    title: 'Шаг 13 из 13',
    question: 'Телефон для связи.',
    questionAdditional:
      'После обработки анкеты координатор проекта свяжется с Вами для размещения Вашей истории на сайте.',
    policy: 'Нажимая на кнопку «отправить», вы даете согласие на',
    btn: 'Отправить',
  },
  14: {
    title: 'Спасибо что приняли участие!',
    last: 'true',
  },
};
