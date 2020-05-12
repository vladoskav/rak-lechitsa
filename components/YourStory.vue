<template>
  <section class="your-story">
    <div class="your-story__container">
      <div class="title">Расскажите свою историю</div>
      <div class="your-story__columns">
        <div class="your-story__choose-option">
          <div class="title-description">
            Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта
            поделиться своей историей неизлечимых привычек, навязчивых идей и
            болезненных привязанностей.
          </div>
          <div class="your-story__option-labels">
            <div
              class="your-story__option-label your-story__option-label_active"
            >
              1-й вариант
            </div>
            <div class="your-story__option-label">
              2-й вариант
            </div>
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
        <div class="button-container">
          <dark-button>Оставить контакт</dark-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from '@/components/ui/Button';
export default {
  components: {
    'dark-button': Button,
  },
};
</script>

<style scoped>
/*Воможно готовые ui компоненты*/
.title {
  max-width: 413px;
}
.title-description {
  max-width: 340px;
}

/*Основной блок стилей*/
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

.your-story__columns {
  /*
  display: flex;
  justify-content: space-between;
  */
  display: grid;
  grid-template-columns: 1fr auto;
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
