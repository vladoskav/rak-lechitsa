<template>
  <p class="text-box">
    <slot></slot>
  </p>
</template>

<script>
  export default {

  }
</script>

<style scoped>
.text-box {
  height: 48px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: normal;
  font-size: 0.75rem;
  line-height: 1rem;

  color: #000000;
}

@media screen and (max-width: 1024px) {
  .text-box {
    height: 42px;
  }
}

</style>
