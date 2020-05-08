<template>
  <nuxt-link class="header__logo" to="/">
    Проект Благотворительного Фонда Константина Хабенского
  </nuxt-link>
</template>

<script>
export default {};
</script>

<style scoped>
.header__logo {
  max-width: 340px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #000;
  text-decoration: none;
}

@media screen and (max-width: 1320px) {
  .header__logo {
    line-height: 18px;
  }
}
</style>
