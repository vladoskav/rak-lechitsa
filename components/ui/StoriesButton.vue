<template>
  <router-link to="/stories">
    <button @click="$emit('btnClick')" class="button-cards">
      <slot>Some button</slot>
    </button>
  </router-link>
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
  transition: background-color 0.3s linear;
  font-size: 16px;
  line-height: 125%;
  color: #000000;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
}
.button-cards:hover {
  opacity: 0.8;
  transition: background-color 0.3s linear;
  background-color: #f8f8f8;
}
.button-cards:focus {
  outline: none;
  background-color: #f8f8f8;
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
