<template>
  <section class="motto">
    <p class="motto__text">
      <slot>Надпись и хештег</slot>
      <span class="motto__hashtag">#этонелечится</span>
    </p>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.motto {
  max-width: 1320px;
  width: 93%;
  padding: 20px 17vw;
  background: #613a93;
  margin: 0 auto;
}
.motto__text {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 46px;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
}
.motto__hashtag {
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 46px;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
}
@media screen and (max-width: 1280px) {
  .motto {
    padding: 20px 0;
  }
  .motto__text {
    font-size: 28px;
    margin: 0 auto;
  }
  .motto__hashtag {
    font-size: 34px;
  }
}
@media screen and (max-width: 1024px) {
  .motto__text {
    font-size: 24px;
  }
  .motto__hashtag {
    font-size: 32px;
  }
}
@media screen and (max-width: 768px) {
  .motto__text {
    font-size: 22px;
    line-height: 36px;
  }
  .motto__hashtag {
    font-size: 30px;
    line-height: 36px;
  }
}
@media screen and (max-width: 320px) {
  .motto__text {
    font-size: 16px;
    line-height: 18px;
  }
  .motto__hashtag {
    font-size: 18px;
    line-height: 18px;
  }
}
</style>
