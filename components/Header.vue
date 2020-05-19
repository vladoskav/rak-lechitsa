<template>
  <header class="header">
    <container class="header__container">
      <logo />
      <header-menu>
        <button @click="showPopup" class="header__button">
          Рассказать историю
        </button>
      </header-menu>
    </container>
  </header>
</template>

<script>
import Menu from './Menu';
import Logo from './Logo';
import Container from './Container';
export default {
  components: {
    'header-menu': Menu,
    logo: Logo,
    container: Container,
  },
  methods: {
    showPopup() {
      this.$store.commit('popup/togglePopup');
    },
  },
};
</script>

<style scoped>
.header {
  min-height: 76px;
  padding: 18px 60px;
  border-bottom: 1px solid #e8e8e8;
}
.header__container {
  display: flex;
  justify-content: space-between;
}
.header__button {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #000;
  padding: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;
}
.header__button:focus {
  outline: 0;
}
@media screen and (max-width: 1280px) {
  .header {
    max-height: 72px;
    padding: 18px 50px;
  }
  .header__button {
    font-size: 16px;
  }
}
</style>
