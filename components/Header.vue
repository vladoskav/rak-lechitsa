<template>
  <header class="header">
    <container class="header__container">
      <logo />
      <header-menu class="header__menu" type="link">
        <button @click="showPopup('popupShown')" class="header__button">
          Рассказать историю
        </button>
      </header-menu>
      <mobile-icon class="header__mobile-icon" />
    </container>
  </header>
</template>

<script>
import Menu from './Menu';
import Logo from './Logo';
import Container from './Container';
import MobileIcon from '@/components/ui/MobileIcon';
export default {
  components: {
    'header-menu': Menu,
    logo: Logo,
    container: Container,
    'mobile-icon': MobileIcon,
  },
  methods: {
    showPopup(popup) {
      this.$store.commit('popup/togglePopup', popup);
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
  font-family: 'Inter', Helvetica, Arial, sans-serif;
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

.header__mobile-icon {
  display: none;
}

@media screen and (max-width: 1280px) {
  .header {
    max-height: 72px;
    padding: 18px 50px;
  }

  .header__button {
    font-size: 1rem;
  }
}

@media screen and (max-width: 768px) {
  .header {
    min-height: 76px;
    padding: 18px 50px;
    border-bottom: 1px solid #e8e8e8;
    border-top: 1px solid #e8e8e8;
  }
  .header__menu {
    display: none!important;
  }

  .header__mobile-icon {
    display: block;
  }
}

@media screen and (max-width: 480px) {
  .header {
    max-height: 64px;
    padding: 18px 15px;
  }
}
</style>
