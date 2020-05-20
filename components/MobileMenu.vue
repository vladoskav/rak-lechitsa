<template>
  <container class="header__container">
    <header-menu class="header__menu" type="link">
      <button @click="showPopup" class="header__button">
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
      showPopup() {
        this.$store.commit('popup/togglePopup');
      },
    },
  }
</script>

<style scoped>
.header__container {
  padding: 18px 50px;
}

</style>
