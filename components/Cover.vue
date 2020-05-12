<template>
  <section class="cover">
    <h1 class="cover__title">#РАКЛЕЧИТСЯ</h1>
    <arrow-button class="cover__scroll" />
  </section>
</template>

<script>
import ArrowDown from './ui/ArrowDown';
export default {
  components: {
    'arrow-button': ArrowDown,
  },
};
</script>

<style scoped>
.cover {
  width: 100%;
  padding-top: 21vw;
  padding-bottom: 40px;
  background-color: #613a93;
}
.cover__title {
  font-family: Inter;
  font-style: normal;
  font-weight: 800;
  font-size: 92px;
  line-height: 111px;
  text-align: center;
  color: #ffffff;
  margin: 0 0 171px 0;
}
.cover__scroll {
  margin-left: 50%;
}
@media screen and (max-width: 1280px) {
  .cover__title {
    font-size: 78px;
    line-height: 94px;
    margin-bottom: 211px;
  }
}
@media screen and (max-width: 1024px) {
  .cover__title {
    margin-bottom: 171px;
  }
}
@media screen and (max-width: 768px) {
  .cover__title {
    font-size: 64px;
    line-height: 77px;
    margin-bottom: 300px;
  }
  .cover {
    padding-top: 46vw;
  }
}
@media screen and (max-width: 320px) {
  .cover__title {
    font-size: 36px;
    line-height: 44px;
    margin-bottom: 176px;
  }
  .cover {
    padding-top: 68vw;
  }
}
</style>
