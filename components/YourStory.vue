<template>
  <section class="your-story">
    <contain class="your-story__container">
      <st-title>Расскажите свою историю</st-title>
      <div class="your-story__columns">
        <p class="your-story__paragraph">
          Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта
          поделиться своей историей неизлечимых привычек, навязчивых идей и
          болезненных привязанностей.
        </p>

        <div class="your-story__options">
          <div class="your-story__option-labels">
            <label
              @click="selectOption(1)"
              :class="{
                'your-story__option-label': true,
                'your-story__option-label_active': optionSelected === 1,
              }"
            >
              1-й вариант
            </label>
            <label
              @click="selectOption(2)"
              :class="{
                'your-story__option-label': true,
                'your-story__option-label_active': optionSelected === 2,
              }"
            >
              2-й вариант
            </label>
          </div>
          <div class="your-story__option" v-if="optionSelected === 1">
            <p class="your-story__option-description">
              Заполнить подробную форму прямо на сайте и мы опубликуем вашу
              историю после проверки. Пожалуйста, заполняйте все пункты
              корректно, если вы испытаете какие-то сложности, воспользуйтесь
              2-м вариантом.
            </p>
          </div>
          <div class="your-story__option" v-if="optionSelected === 2">
            <p class="your-story__option-description">
              Оставить контакт (почту или номер телефона) и мы свяжемся с вами,
              зададим вопросы, уточним детали вашей истории.
            </p>
          </div>
          <div class="button-container" @click="showPopup">
            <dark-button v-if="optionSelected === 1">
              Заполнить форму
            </dark-button>
            <dark-button v-if="optionSelected === 2">
              Оставить контакт
            </dark-button>
          </div>
        </div>
      </div>
    </contain>
  </section>
</template>

<script>
import Button from '@/components/ui/Button';
import Title from '@/components/ui/Title';
import Container from '@/components/Container';
export default {
  components: {
    'dark-button': Button,
    'st-title': Title,
    'contain': Container,
  },
  methods: {
    showPopup() {
      this.$store.commit('popup/togglePopup');
    },
    selectOption(option) {
      this.optionSelected = option;
    },
  },
  data() {
    return {
      optionSelected: 1,
    };
  },
};
</script>

<style scoped>
.your-story {
  background-color: #f7f7f7;
  display: flex;
}
.your-story__container {
  padding: 100px 0 90px 0;
}
.your-story__paragraph {
  margin-right: 195px;
  max-width: 340px;
  font-size: 1.125rem;
  line-height: 1.375rem;
  font-style: normal;
  font-weight: normal;
  color: #666;
}
.your-story__columns {
  display: flex;
  flex-direction: row;
  margin-top: 32px;
  
}
.your-story__option-labels {
  grid-area: tumbler;
  display: flex;
  flex-direction: column;
  margin-right: 40px;
}
.your-story__option-label {
  margin-bottom: 10px;
  font-size: 1.125rem;
  line-height: 1.375rem;
  font-weight: normal;
  color: #666;
  cursor: pointer;
}
.your-story__option-label:hover {
  color: #000;
}
.your-story__option-label_active {
  font-weight: 500;
  color: #000;
}
.your-story__options {
  display: grid;
  grid-row: 1fr 1fr;
  grid-column: 1fr 1fr;
  grid-template-areas: 'tumbler story'
  '... button';
}
.your-story__option {
  grid-area: story;
  display: flex;
  flex-direction: column;
  max-width: 640px;
}
.your-story__option-description {
  font-size: 1.125rem;
  line-height: 1.375rem;
  font-weight: normal;
  color: #666;
}
.button-container {
  grid-area: button;
  grid-row: 2/3;
  grid-column: 2/3;
}
</style>
