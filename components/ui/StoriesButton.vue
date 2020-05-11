<template>
  <nuxt-link to="/stories">
    <button class="button-cards">
      <slot>Some button</slot>
    </button>
  </nuxt-link>
</template>

<script>
export default {};
</script>

<style scoped>
.button-cards {
  width: 100%;
  background-color: #fbfbfb;
  padding: 31px 0 31px 0;
  cursor: pointer;
  border: 0;
  transition: opacity 0.1s linear;
  font-size: 16px;
  line-height: 125%;
  color: #000000;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
}
.button-cards:hover {
  opacity: 0.8;
  transition: opacity 0.1s linear;
  background-color: #fbfbf8;
}
.button-cards:focus {
  outline: none;
  background-color: #fbfbfb;
}
@media screen and (max-width: 1280px) {
  .button-cards {
    padding: 29px 0 29px 0;
  }
}
@media (max-width: 1024px) {
  .button-cards {
    padding: 17px 0 17px 0;
    font-size: 13px;
    line-height: 20px;
  }
}
</style>
