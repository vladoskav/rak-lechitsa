<template>
  <nuxt-link class="logo" to="/">
    Проект Благотворительного Фонда Константина Хабенского
  </nuxt-link>
</template>

<script>
export default {};
</script>

<style scoped>
.logo {
  max-width: 340px;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.25rem;
  color: #000;
  text-decoration: none;
}

@media screen and (max-width: 1320px) {
  .logo {
    line-height: 1.125.rem;
  }
}
</style>
