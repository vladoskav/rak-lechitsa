<template>
  <form @submit.prevent="prevent" class="story-form">
    <story-title class="story-form__step">{{formArr.title}}</story-title>
    <span class="story-form__question">{{formArr.question}}
      <span v-if='formArr.questionAdditional' class='story-form__additional'>{{formArr.questionAdditional}}</span>
    </span>
    <nxt-input
      placeholder='Напишите тут'
      required
      class="story-form__textarea"
      v-model="answer"
    />
    <div class="story-form__buttons">
      <button @click='prevQuestion' class="story-form__back">Назад</button>
      <button @click='nextQuestion' class="story-form__forward" v-if="!formArr.policy">Далее</button>
      <button @click='nextQuestion' class="story-form__forward" v-if="formArr.policy">
        Отправить
      </button>
      <span v-if='formArr.policy' class='story-form__additional'>{{formArr.policy}}
        <a href="/policy" class="story-form__additional">обработку персональных данных</a>
      </span>
    </div>
  </form>
</template>

<script>
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Title from '@/components/ui/Title';

export default {
  components: {
    'nxt-button': Button,
    'nxt-input': Input,
    'story-title': Title,
  },

  data() {
    return {
      answer: '',
    };
  },
  computed: {
    formArr() {
      const index = this.$store.getters['stages/index']
      const arr = this.$store.getters['stages/question']
      return arr[index]
    },
    initialAnswer() {
      const index = this.$store.getters['stages/index']
      const arr = this.$store.getters['stages/answer']
      return arr[index] || ''
    },
  },
  methods: {
    prevent(event) {
      event.preventDefault();
    },
    async prevQuestion() {
      await this.$store.dispatch('stages/PREV_QUESTION');
      this.answer = this.initialAnswer 
    },
    async nextQuestion() {
      await this.$store.dispatch('stages/NEXT_QUESTION', {
        answer: this.answer
      });
      this.answer = this.initialAnswer
    }
  },
};
</script>

<style scoped>
.story-form {
  display: flex;
  flex-direction: column;
}

.story-form__question {
  margin: 40px 40px 134px 40px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
}

.story-form__additional {
  color: #666;
}

.story-form__step {
  margin: 40px auto 0 40px;
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

.story-form__buttons {
  display: flex;
  flex-direction: row;
  justify-self: flex-end;
  margin: 200px auto 40px 40px;
}

.story-form__back {
  border: none;
  outline: none;
  background-color: #ffffff;
  color: #c0c0c0;
  margin: auto 30px auto 0;
}

.story-form__forward {
  margin-right: 30px;
  background: #613a93;
  border: none;
  outline: none;
  min-width: 226px;
  min-height: 56px;
  color: #fff;
}
</style>
