<template>
  <form @submit.prevent="submitQuestionForm" class="story-form">
    <h2 class="story-form__step">{{title}}</h2>
    <p class="story-form__input-name">{{question}}</p>
    <nxt-textarea
      class="story-form__textarea"
      :placeholder="'Напишите тут'"
      :name="'message'"
      :required="'required'"
      v-model="message"
    />
    <div class="story-form__buttons">
      <button class="story-form__back" type="submit" >Назад</button>
      <button class="story-form__forward" type="submit">Далее</button>
    </div>
  </form>
</template>

<script>
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import TextArea from '@/components/ui/TextArea';

export default {
  props: {
    title: {
      required: true,
      default: "Шаг 0 из 12",
      type: String
    },
    question: {
      required: true,
      type: String
    }
  },
  components: {
    'nxt-button': Button,
    'nxt-input': Input,
    'nxt-textarea': TextArea,
  },

  data() {
    return {
      message: '',
    };
  },

  methods: {
    submitQuestionForm() {
      console.log(
        `message: ${this.message}`
      );
      this.popupHandler();
    },
  },
};
</script>

<style scoped>

.story-form {
  display: flex;
  flex-direction: column;
}

.story-form__input-name{
  margin: 40px 40px 134px 40px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
}

.story-form__step{
  margin: 40px auto 0 40px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000000;
}

.story-form__textarea {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
}

.story-form__buttons{
  display: flex;
  flex-direction: row;
  justify-self: flex-end;
  margin: 200px auto 40px 40px;
}

.story-form__back {
  border: none; 
  outline: none;
  background-color: #ffffff;
  color: #C0C0C0;
  margin: auto 30px auto 0;
}

.story-form__forward{
  background: #613A93;
  border: none; 
  outline: none;
  min-width: 226px;
  min-height: 56px;
  color: #fff;
}
</style>
