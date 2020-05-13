<template>
  <section class="your-story">
    <div class="your-story__container">
      <st-title>Расскажите свою историю</st-title>
      <div class="your-story__columns">
        <div class="your-story__choose-option">
          <p class="your-story__paragraph">
            Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта
            поделиться своей историей неизлечимых привычек, навязчивых идей и
            болезненных привязанностей.
          </p>
          <div class="your-story__option-labels">
            <label
              class="your-story__option-label your-story__option-label_active"
            >
              1-й вариант
            </label>
            <label class="your-story__option-label">
              2-й вариант
            </label>
          </div>
        </div>
        <div class="your-story__options">
          <div
            class="your-story__option your-story__option_fill-form your-story__option_active"
          >
            <p class="your-story__option-description">
              Заполнить подробную форму прямо на сайте и мы опубликуем вашу
              историю после проверки. Пожалуйста, заполняйте все пункты
              корректно, если вы испытаете какие-то сложности, воспользуйтесь
              2-м вариантом.
            </p>
          </div>
          <div class="your-story__option your-story__option_leave-contact">
            <p class="your-story__option-description">
              Оставить контакт (почту или номер телефона) и мы свяжемся с вами,
              зададим вопросы, уточним детали вашей истории.
            </p>
          </div>
        </div>
        <div class="button-container" @click="popupHandler">
          <dark-button>Оставить контакт</dark-button>
        </div>

        <overlay v-if="popupShown" @overlayClick="popupHandler" />
        <pop-up v-if="popupShown" @closeClick="popupHandler">
          <form-inputs title="Шаг 1 из 12" question="Как вас зовут?" />
        </pop-up>
      </div>
    </div>
  </section>
</template>

<script>
import Button from '@/components/ui/Button';
import Title from '@/components/ui/Title';
import Overlay from '@/components/ui/Overlay';
import PopUp from '@/components/PopUp';
import Form from '@/components/Form';

export default {
  components: {
    'dark-button': Button,
    'st-title': Title,
    overlay: Overlay,
    'pop-up': PopUp,
    'form-inputs': Form,
  },
  methods: {
    popupHandler() {
      this.popupShown = !this.popupShown;
    },
  },
  data() {
    return {
      popupShown: false,
    };
  },
};
</script>

<style scoped>
.your-story {
  background-color: #f7f7f7;
  display: flex;
  width: 100%;
}

.your-story__container {
  margin: auto;
  width: 100%;
  max-width: 1440px;
  padding: 100px 60px;
}

.your-story__paragraph {
  max-width: 340px;
  font-size: 1.125rem;
  line-height: 1, 375rem;
  font-style: normal;
  font-weight: normal;
  color: #666666;
}

.your-story__columns {
  display: grid;
  grid-template-columns: 1fr auto;
  margin-top: 32px;
}

.your-story__choose-option {
  display: flex;
  justify-content: space-between;
}

.your-story__option-labels {
  width: 100%;
  max-width: 105px;
  margin-right: 40px;
}

.your-story__option-label {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  font-size: 1.125rem;
  line-height: 1.375rem;
  font-weight: normal;
  color: #666666;
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
  display: flex;
  max-width: 640px;
}

.your-story__option {
  display: none;
  flex-direction: column;
}

.your-story__option_active {
  display: flex;
}

.your-story__option-description {
  width: 100%;
  font-size: 1.125rem;
  line-height: 1.375rem;
  font-weight: normal;
  color: #666666;
}

.button-container {
  grid-row: 2/3;
  grid-column: 2/3;
}
</style>
