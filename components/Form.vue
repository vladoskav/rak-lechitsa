<template>
  <form @submit.prevent="prevent" class="story-form">
    <story-title
      :class="{
        'story-form__step': true,
        'story-form__step_last': formArr.last,
      }"
      >{{ formArr.title }}</story-title
    >
    <span class="story-form__question"
      >{{ formArr.question }}
      <span v-if="formArr.questionAdditional" class="story-form__additional">{{
        formArr.questionAdditional
      }}</span>
    </span>
    <nxt-input
      v-if="!formArr.last"
      placeholder="Напишите тут"
      class="story-form__textarea"
      v-model="answer"
    />
    <div class="story-form__buttons">
      <div class="story-form__move">
        <button
          v-if="!formArr.last"
          @click="prevQuestion"
          class="story-form__back"
        >
          Назад
        </button>
        <nxt-button
          v-if="!formArr.last"
          @darkClick="nextQuestion"
          class="story-form__forward"
          v-bind:isDisabled="isDisabled()"
        >
          {{ formArr.btn }}
        </nxt-button>
        <button
          v-if="formArr.last"
          @click="closeQuestion"
          class="story-form__forward story-form__close"
        >
          Закрыть
        </button>
      </div>

      <div class="story-form__policy" v-if="formArr.policy">
        <span>{{ formArr.policy }}</span>
        <nuxt-link target="_blank" to="/policy" class="story-form__additional_link"
          >обработку персональных данных</nuxt-link
        >
      </div>
    </div>
  </form>
</template>

<script>
import Button from '@/components/ui/button';
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
      const index = this.$store.getters['stages/index'];
      const arr = this.$store.getters['stages/question'];
      return arr[index];
    },
    initialAnswer() {
      const index = this.$store.getters['stages/index'];
      const arr = this.$store.getters['stages/answer'];
      return arr[index] || '';
    },
  },
  methods: {
    prevent(event) {
      event.preventDefault();
    },
    isDisabled() {
      if (this.answer.length === 0) {
        return true;
      } else {
        return false;
      }
    },
    showPopup(popup) {
      this.$store.commit('popup/togglePopup', popup);
    },
    async prevQuestion() {
      await this.$store.dispatch('stages/PREV_QUESTION');
      this.answer = this.initialAnswer;
    },
    async nextQuestion() {
      await this.$store.dispatch('stages/NEXT_QUESTION', {
        answer: this.answer,
      });
      this.answer = this.initialAnswer;
    },
    async closeQuestion() {
      await this.$store.dispatch('stages/CLOSE_QUESTION', 1);
      this.answer = '';
      this.showPopup('popupShown');
    },
  },
};
</script>

<style scoped>
.story-form {
  display: flex;
  flex-direction: column;
  height: 600px;
  position: relative;
}

.story-form__question {
  margin: 40px 40px 134px 0;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #000;
}

.story-form__additional {
  color: #666;
}
.story-form__additional_link {
  color: #666;
  cursor: pointer;
}

.story-form__policy {
  margin: auto 0;
  font-size: 14px;
  line-height: 17px;
}

.story-form__step {
  margin: 40px auto 0 0;
  font-size: 32px;
  line-height: 36px;
  color: #000;
}

.story-form__textarea {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
}

.story-form__buttons {
  width: 100%;
  max-height: 128px;
  position: absolute;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40px, 340px));
  bottom: 0;
  left: 0;
}

.story-form__back {
  max-width: 48px;
  border: none;
  outline: none;
  background-color: #fff;
  color: #c0c0c0;
  margin: auto 0;
  cursor: pointer;
}

.story-form__forward {
  margin: auto 30px auto 30px;
  background: #613a93;
  border: none;
  outline: none;
  width: 226px;
  height: 56px;
  color: #fff;
  cursor: pointer;
}

.story-form__step_last {
  text-align: center;
  max-width: 100%;
  margin: 40px auto auto auto;
  font-size: 26px;
  line-height: 30px;
}

.story-form__close {
  position: absolute;
  margin: 0;
  left: calc((100% - 216px) / 2);
  bottom: 0;
}
@media screen and (max-width: 1280px) {
  .story-form {
    height: 520px;
  }
  .story-form__question {
    margin: 40px 40px 100px 0;
  }
}

@media screen and (max-width: 600px) {
  .story-form__buttons {
    justify-self: flex-end;
    margin: 200px 0 0 0;
  }
  .story-form__back {
    margin: auto 15px auto 0;
    max-width: 39px;
  }

  .story-form__forward {
    margin: auto 0 auto 15px;
    padding: 0;
    width: 206px;
    height: 40px;
  }
}
</style>
