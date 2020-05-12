<template>
  <p class="counter">
    <slot></slot>
  </p>
</template>

<script>
  export default {

  }
</script>

<style scoped>
.counter {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 2.375rem;
  line-height: 2.5rem;

  text-align: right;

  color: #000000;
}

@media screen and (max-width: 1024px) {
  .counter {
    font-size: 1.625rem;
    line-height: 1.875rem;
  }
}

</style>
