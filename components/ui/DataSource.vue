<template>
  <p class="data-source">
    <slot></slot>
  </p>
</template>

<script>
export default {};
</script>

<style scoped>
.data-source {
  font-family: 'Inter';
  font-style: normal;
  font-weight: normal;
  font-size: 0.75rem;
  line-height: 1rem;

  text-align: right;

  color: #666666;
}

@media screen and (max-width: 1024px) {
  .data-source {
    font-size: 0.625rem;
    line-height: 0.875rem;
  }
}
</style>
