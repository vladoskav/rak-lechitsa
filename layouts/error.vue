<template>
  <div class="error">
    <p class="error__code">404</p>
    <p class="error__text">Страница не найдена.</p>
    <nuxt-link class="error__text error__link" to="/">Перейти на главную.</nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'РакЛечится. Страница не найдена',
    }
  },
  head() {
    return {
      title: this.title,
    }
  }
};
</script>

<style scoped>
.error {
  display: flex;
  flex-direction: column;
  margin: 250px auto;
}
.error__code {
  font-style: normal;
  font-weight: normal;
  font-size: 144px;
  line-height: 174px;
  text-align: center;
}
.error__text {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #000;
}
.error__link {
  text-decoration: underline;
}
@media screen and (max-width: 1280px) {
  .error {
    margin: 160px auto;
  }
  .error__text {
    font-size: 16px;
    line-height: 20px;
  }
}
@media screen and (max-width: 768px) {
  .error {
    margin: 320px auto;
  }
}
@media screen and (max-width: 480px) {
  .error {
    margin: 225px auto;
  }
  .error__code {
    font-size: 72px;
    line-height: 87px;
  }
  .error__text {
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
