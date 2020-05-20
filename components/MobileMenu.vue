<template>
  <container class="header__container">
    <header-menu class="header__menu" type="link">
      <button @click="showPopup('popupShown')" class="header__button">
        Рассказать историю
      </button>
    </header-menu>
  </container>
</template>

<script>
import Menu from './Menu';
import Container from './Container';
export default {
  components: {
    'header-menu': Menu,
    container: Container,
  },
  methods: {
    showPopup() {
      this.$store.commit('popup/togglePopup');
    },
    methods: {
      showPopup(popup) {
        this.$store.commit('popup/togglePopup', popup);
      },
    },
  }
</script>

<style scoped>
.header__container {
  padding: 18px 50px;
}
.header__button {
  font-family: 'Inter';
  font-style: normal;
  font-weight: normal;
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: #000;
  padding: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;
}

.header__button:focus {
  outline: 0;
}
</style>
