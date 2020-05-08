<template>
  <h1
    :class="['title', `title_theme_${theme}`]"
    >
    <slot></slot>
  </h1>
</template>

<script>
  export default {
    props: ['theme'],
  };
</script>

<style scoped>
.title {
  max-width: 25%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.25rem;

  color: #000000;
}

.title_theme_line {
  text-decoration-line: underline;
}
</style>
