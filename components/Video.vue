<template>
  <container class="video">
    <div class="video__texts">
      <div class="video__text video__font">
        <h2 class="video__title">
          {{ video.title }}
        </h2>
        <p class="video__paragraph" v-html="video.text"></p>
      </div>
      <div class="video__buttons">
        <button class="swiper-button-prev"></button>
        <button class="swiper-button-next"></button>
      </div>
    </div>

    <div class="video__iframe">
      <div class="video__swiper">
        <button class="swiper-button-prev video__swiper-backward"></button>
        <button class="swiper-button-next video__swiper-forward"></button>
        <slider :videoArr="videoArr" />
      </div>
      <p class="video__description video__font">
        <a
          href="https://www.youtube.com/channel/UCcxMSzN1R4JfW1vLu3swCaQ"
          target="_blanc"
          class="video__font"
          >{{ video.note }}</a
        >
      </p>
    </div>
  </container>
</template>

<script>
import Container from '@/components/Container';
import Slider from '@/components/Slider';

export default {
  components: {
    container: Container,
    slider: Slider,
  },
  computed: {
    video() {
      const arr = this.$store.getters['texts/getText'];
      return arr.find(el => el.block === 'videos');
    },
    videoArr() {
      const arr = this.$store.getters['video/getUrls'];
      return arr;
    },
  },
};
</script>

<style scoped>
.video {
  margin: 0 auto;
  color: #e5e5e5;
  display: flex;
  flex-direction: row;
  padding-top: 100px;
  padding-bottom: 74px;
}
.video__texts {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.video__font {
  font-family: 'Inter', Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  color: #666666;
}
.video__text {
  max-width: 413px;
  margin: 10px 40px 0 0;
  padding: 0;
}
.video__title {
  font-weight: bold;
  font-size: 32px;
  line-height: 36px;
  color: #000000;
}
.video__paragraph {
  margin-top: 32px;
  font-size: 18px;
  line-height: 22px;
}
.video__buttons {
  margin: 0 0 20px 0;
  max-width: 80px;
  height: 40px;
  display: flex;
  flex-direction: row;
}
.swiper-button-prev {
  width: 40px;
  height: 40px;
  background: #fbfbfb;
  border: none;
  outline: none;
  cursor: pointer;
  background-image: url('/images/backward.png');
  background-repeat: no-repeat;
  background-position: center;
  margin: 0;
  padding: 0;
  position: static;
}
.swiper-button-next {
  width: 40px;
  height: 40px;
  background: #fbfbfb;
  border: none;
  outline: none;
  cursor: pointer;
  background-image: url('/images/forward.png');
  background-repeat: no-repeat;
  background-position: center;
  margin: 0;
  padding: 0;
  position: static;
}
.swiper-button-prev:after {
  content: none;
}
.swiper-button-next:after {
  content: none;
}
.video__swiper-backward {
  display: none;
}
.video__swiper-forward {
  display: none;
}
.video__description {
  margin-top: 10px;
}

@media screen and (max-width: 1320px) {
  .video {
    max-width: 1280px;
  }
  .video__text {
    max-width: 367px;
  }
  .video__title {
    font-size: 28px;
    line-height: 32px;
  }
  .video__paragraph {
    margin-top: 32px;
    font-size: 16px;
    line-height: 20px;
  }
}
@media screen and (max-width: 1180px) {
  .video {
    max-width: 1024px;
  }
  .video__text {
    max-width: 288px;
  }
  .video__title {
    font-size: 24px;
    line-height: 28px;
  }
  .video__paragraph {
    margin-top: 32px;
    font-size: 13px;
    line-height: 16px;
  }
}
@media screen and (max-width: 940px) {
  .video {
    flex-direction: column;
    max-width: 688px;
    padding-top: 80px;
  }
  .video__text {
    max-width: 380px;
  }
  .video__texts {
    text-align: center;
    margin: 0 auto;
  }
  .video__paragraph {
    text-align: left;
    margin-top: 26px;
    font-size: 13px;
    line-height: 16px;
  }
  .video__iframe {
    margin: 60px auto 0 auto;
    display: flex;
    flex-direction: column;
  }
  .video__swiper {
    position: relative;
  }
  .video__description {
    font-size: 12px;
  }
  .video__swiper-backward {
    align-self: center;
    display: block;
    margin-right: 14px;
    position: absolute;
    left: -60px;
    top: 140px;
  }
  .video__swiper-forward {
    align-self: center;
    display: block;
    margin-left: 14px;
    position: absolute;
    right: -60px;
    top: 140px;
  }
  .video__buttons {
    display: none;
  }
}

@media screen and (max-width: 720px) {
  .video__title {
    text-align: left;
  }
  .video__iframe {
    margin: 40px auto 0 auto;
  }
  .video__swiper {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    position: relative;
  }
  .video__swiper-backward {
    align-self: center;
    position: absolute;
    left: 10px;
    top: auto;
  }
  .video__swiper-forward {
    align-self: center;
    position: absolute;
    right: 10px;
    top: auto;
  }
  .video__description {
    display: none;
  }
  .video__swiper-backward {
    background-color: #ededed;
  }
  .video__swiper-forward {
    background-color: #ededed;
  }
}
@media screen and (max-width: 500px) {
  .video {
    padding: 40px 15px 74px 15px;
  }
}
</style>
