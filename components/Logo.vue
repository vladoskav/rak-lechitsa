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
  font-family: 'Inter', Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.25rem;
  color: #000;
  text-decoration: none;
}

@media screen and (max-width: 1280px) {
  .logo {
    line-height: 1.125rem;
  }
}

@media screen and (max-width: 480px) {
  .logo {
    font-size: 0.75rem;
    line-height: 0.875rem;
    max-width: 216px;
  }
}
</style>
