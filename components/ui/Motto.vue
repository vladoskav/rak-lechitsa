<template>
  <section class="motto">
    <container class="container">
      <p class="motto__text">
        <slot>Надпись и хештег</slot>
        <span class="motto__hashtag">#этонелечится</span>
      </p>
    </container>
  </section>
</template>

<script>
import Container from '../Container';
export default {
  components: {
    container: Container,
  },
};
</script>

<style scoped>
.container {
  background: #613a93;
  padding: 20px 285px;
}
.motto {
  padding-left: 60px;
  padding-right: 60px;
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
    padding: 0 50px;
  }
  .motto__text {
    font-size: 28px;
  }
  .motto__hashtag {
    font-size: 34px;
  }
  .container {
    padding: 20px 80px;
  }
}
@media screen and (max-width: 1024px) {
  .motto__text {
    font-size: 24px;
  }
  .motto__hashtag {
    font-size: 32px;
  }
  .container {
    padding: 20px 60px;
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
  .container {
    padding: 12px 40px;
  }
  .motto {
    padding: 0 40px;
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
  .container {
    padding: 15px 35px;
  }
  .motto {
    padding: 0 15px;
  }
}
</style>
