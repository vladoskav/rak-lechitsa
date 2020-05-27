<template>
  <form @submit.prevent="prevent" class="contact-form">
    <story-title class="contact-form__title"
      >Оставьте контакт для связи</story-title
    >
    <span class="contact-form__feedback"
      >Мы свяжемся с вами в течение недели, чтобы задать вопросы о вашей истории
      и разместить ее на сайте.</span
    >

    <div class="contact-form__container-column">
      <span class="contact-form__question">Как вас зовут?</span>
      <nxt-input
        placeholder="Напишите тут"
        required
        class="contact-form__textarea"
        v-model="fullName"
      />
    </div>

    <div class="contact-form__container-grid">
      <div class="contact-form__container-column">
        <span class="contact-form__question">Электронная почта</span>
        <nxt-input
          placeholder="pochta@example.com"
          required
          class="contact-form__textarea"
          v-model="email"
        />
      </div>
      <div class="contact-form__container-column">
        <span class="contact-form__question">Телефон</span>
        <nxt-input
          placeholder="+7 000 000 00 00"
          required
          class="contact-form__textarea"
          v-model="phone"
        />
      </div>
    </div>

    <div class="contact-form__container-column">
      <span class="contact-form__question"
        >Напишите, если есть предпочтительный способ связи и удобное время</span
      >
      <nxt-input
        placeholder="Телефон / почта и удобное время"
        required
        class="contact-form__textarea"
        v-model="preferred"
      />
    </div>

    <div class="contact-form__buttons">
      <button @click="sentData('popupContact')" class="contact-form__forward">
        Отправить
      </button>
      <div class="contact-form__container">
        <span class="contact-form__additional"
          >Нажимая на кнопку «отправить», вы даете согласие на
          <a href="/policy" class="contact-form__additional"
            >обработку персональных данных</a
          >
        </span>
      </div>
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
      fullName: '',
      email: '',
      phone: '',
      preferred: '',
    };
  },
  methods: {
    prevent(event) {
      event.preventDefault();
    },
    async sentData(popup) {
      const arr = [this.fullName, this.email, this.phone, this.preferred];
      await this.$store.dispatch('contact/sentData', arr);
      this.$store.commit('popup/togglePopup', popup);
    },
  },
};
</script>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
}

.contact-form__container-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  margin-bottom: 40px;
}

.contact-form__container-column {
  display: grid;
  grid-template-columns: repeat(1fr);
  grid-gap: 40px;
  margin-bottom: 40px;
}

.contact-form__container {
  max-width: 428px;
}

.contact-form__feedback {
  max-width: 840px;
  margin-top: 40px;
  margin-bottom: 50px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: #000;
}

.contact-form__question {
  font-family: 'Inter';
  font-style: normal;
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1.5rem;

  color: #000;
}

.contact-form__additional {
  color: #666;
}

.contact-form__title {
  max-width: 449px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.25rem;
  display: flex;
  align-items: flex-end;
  color: #000;
}

.contact-form__textarea {
  font-family: 'Inter';
  font-style: normal;
  font-weight: normal;
  font-size: 1.125rem;
  line-height: 1.5rem;

  color: #666;
}

.contact-form__buttons {
  display: flex;
  flex-direction: row;
  justify-self: flex-end;
}

.contact-form__back {
  border: none;
  outline: none;
  background-color: #fff;
  color: #c0c0c0;
  margin: auto 30px auto 0;
}

.contact-form__forward {
  margin-right: 30px;
  font-family: 'Inter', Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.1875rem;
  color: #fff;

  background: #613a93;
  border: none;
  outline: none;
  min-width: 226px;
  height: 52px;
}

.contact-form__last_step {
  text-align: center;
  max-width: 100%;
  margin: 40px auto auto auto;
}

.contact-form__close {
  position: absolute;
  margin: 0;
  left: 38%;
  right: 38%;
  bottom: 40px;
}

@media screen and (max-width: 1280px) {
  .contact-form__title {
    font-size: 1.75rem;
    line-height: 2rem;
  }

  .contact-form__feedback {
    max-width: 720px;
    font-size: 1rem;
    line-height: 1.375rem;
  }

  .contact-form__question {
    font-size: 1rem;
    line-height: 1.375rem;
  }

  .contact-form__textarea {
    font-size: 1rem;
    line-height: 1.375rem;
  }
}

.contact-form__additional {
  font-size: 0.875rem;
  line-height: 1.0625rem;
}

@media screen and (max-width: 768px) {
  .contact-form__title {
    font-size: 1.625rem;
    line-height: 1.875rem;
  }

  .contact-form__feedback {
    max-width: 500px;
    font-size: 0.9375rem;
    line-height: 1.1875rem;
  }

  .contact-form__question {
    font-size: 0.9375rem;
    line-height: 1.1875rem;
  }

  .contact-form__textarea {
    font-size: 0.9375rem;
    line-height: 1.1875rem;
  }

  .contact-form__forward {
    min-width: 200px;
    height: 46px;
  }

  .contact-form__additional {
    font-size: 0.6875rem;
    line-height: 0.8125rem;
  }
}

@media screen and (max-width: 600px) {
  .contact-form__title {
    max-width: 185px;
    font-size: 1.125rem;
    line-height: 1.3125rem;
  }

  .contact-form__feedback {
    max-width: 260px;
    margin-top: 35px;
    margin-bottom: 30px;
    font-size: 0.8125rem;
    line-height: 1rem;
  }

  .contact-form__question {
    font-size: 0.8125rem;
    line-height: 1rem;
  }

  .contact-form__container-column {
    grid-gap: 30px;
    margin-bottom: 30px;
  }

  .contact-form__container-grid {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0;
    margin-bottom: 0;
  }

  .contact-form__buttons {
    display: block;
  }

  .contact-form__forward {
    min-width: 100%;
    height: 40px;
    margin-right: 0;
    margin-bottom: 10px;
    font-size: 0.8125rem;
    line-height: 1rem;
  }
}
</style>
