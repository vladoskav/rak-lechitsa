<template>
  <h2
    :class="['title', `title_theme_${theme}`]"
    >
    <slot></slot>
  </h2>
</template>

<script>
  export default {
    props: ['theme'],
  };
</script>

<style scoped>
.title {
  width: 413px;
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

@media screen and (max-width: 1280px) {
  .title {
    width: 367px;
    font-size: 1.75rem;
    line-height: 2rem;
  }
}

@media screen and (max-width: 1024px) {
  .title {
    width: 288px;
  }
}

@media screen and (max-width: 768px) {
  .title {
    width: 380px;
  }
}

@media screen and (max-width: 320px) {
  .title {
    width: 290px;
  }
}
</style>
