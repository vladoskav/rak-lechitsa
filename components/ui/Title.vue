<template>
  <h2 :class="['title', `title_theme_${theme}`]">
    <slot></slot>
  </h2>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      default: 'line',
    },
  },
};
</script>

<style scoped>
.title {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.25rem;
  color: #000000;
  max-width: 413px;
}

.title_theme_line {
  text-decoration-line: none;
}

.title_theme_notline {
  text-decoration-line: none;
}

@media screen and (max-width: 1280px) {
  .title {
    font-size: 1.75rem;
    line-height: 2rem;
  }
}

@media screen and (max-width: 1024px) {
  .title {
    font-size: 1.5rem;
    line-height: 1.75rem;
    max-width: 288px;
  }
}

@media screen and (max-width: 420px) {
  .title {
    font-size: 1.125rem;
    line-height: 1.3125rem;
    max-width: 290px;
  }
}
</style>
