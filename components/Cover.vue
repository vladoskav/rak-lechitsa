<template>
  <section class="cover">
    <h1 class="cover__title">#РАКЛЕЧИТСЯ</h1>
    <arrow-down class="cover__arrow" />
  </section>
</template>

<script>
import ArrowDown from './ui/ArrowDown';
export default {
  components: {
    'arrow-down': ArrowDown,
  },
};
</script>

<style scoped>
.cover {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 76px);
  background-color: #613a93;
}
.cover__title {
  font-family: Inter;
  font-style: normal;
  font-weight: 800;
  font-size: 92px;
  line-height: 111px;
  text-align: center;
  color: #fff;
}
.cover__arrow {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
}
@media screen and (max-width: 1280px) {
  .cover__title {
    font-size: 78px;
    line-height: 94px;
  }
  .cover {
    min-height: calc(100vh - 72px);
  }
}
@media screen and (max-width: 768px) {
  .cover__title {
    font-size: 64px;
    line-height: 77px;
  }
}
@media screen and (max-width: 320px) {
  .cover__title {
    font-size: 36px;
    line-height: 44px;
  }
  .cover {
    min-height: calc(100vh - 64px);
  }
  .cover__arrow {
    bottom: 30px;
  }
}
</style>
