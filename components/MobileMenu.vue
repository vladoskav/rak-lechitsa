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
      'container': Container,
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

</style>
