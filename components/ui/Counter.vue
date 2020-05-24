<template>
  <p class="counter">
    <slot></slot>
  </p>
</template>

<script>
export default {};
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

@media screen and (max-width: 1120px) {
  .counter {
    font-size: 2rem;
    line-height: 2.375rem;
  }
}

@media screen and (max-width: 1024px) {
  .counter {
    font-size: 1.625rem;
    line-height: 1.875rem;
  }
}

@media screen and (max-width: 900px) {
  .counter {
    font-size: 1.425rem;
    line-height: 1.625rem;
  }
}

@media screen and (max-width: 768px) {
  .counter {
    font-size: 1.625rem;
    line-height: 1.875rem;
  }
}
</style>
