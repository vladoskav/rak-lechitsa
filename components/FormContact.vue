<template>
  <form @submit.prevent="prevent" class="contact-form">
    <story-title class="contact-form__title">Оставьте контакт для связи</story-title>
    <span class="contact-form__feedback">Мы свяжемся с вами в течение недели, чтобы задать вопросы о вашей истории и разместить ее на сайте.</span>
    
    <span class="contact-form__question">Как вас зовут?</span>
    <nxt-input placeholder='Напишите тут' required class="contact-form__textarea" v-model="answer" />

    <span class="contact-form__question">Электронная почта</span>
    <nxt-input placeholder='pochta@example.com' required class="contact-form__textarea" v-model="answer" />

    <span class="contact-form__question">Телефон</span>
    <nxt-input placeholder='+7 000 000 00 00' required class="contact-form__textarea" v-model="answer" />

    <span class="contact-form__question">Напишите, если есть предпочтительный способ связи и удобное время</span>
    <nxt-input placeholder='Телефон / почта и удобное время' required class="contact-form__textarea" v-model="answer" />

    <div class="contact-form__buttons">
      <button @click='nextQuestion' class="contact-form__forward" >Отправить</button>
      <span class='contact-form__additional'>Нажимая на кнопку «отправить», вы даете согласие на
        <a href="/policy" class="contact-form__additional">обработку персональных данных</a>
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
  methods: {
    prevent(event) {
      event.preventDefault();
    },
  },
};
</script>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
}

.contact-form__feedback {
  margin: 40px 40px 134px 40px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #000;
}

.contact-form__additional {
  color: #666;
}

.contact-form__title {
  margin: 40px auto 0 40px;
  max-width: 450px;
  font-size: 32px;
  line-height: 36px;
  color: #000;
}

.contact-form__textarea {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
}

.contact-form__buttons {
  display: flex;
  flex-direction: row;
  justify-self: flex-end;
  margin: 200px auto 40px 40px;
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
  background: #613a93;
  border: none;
  outline: none;
  min-width: 226px;
  min-height: 56px;
  color: #fff;
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
</style>
