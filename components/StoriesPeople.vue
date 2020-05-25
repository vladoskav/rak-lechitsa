<template>
  <container class="stories__main">
    <div class="stories__text-container">
      <div class="stories__text stories__font">
        <h2 class="stories__title">
          {{ video.title }}
        </h2>
        <p class="stories__paragraph" v-html="video.text">
        </p>
      </div>
      <div class="stories__buttons">
        <button class="swiper-button-prev stories__button stories__button_backward"></button>
        <button class="swiper-button-next stories__button stories__button_forward"></button>
      </div>
    </div>

    <div class="stories__video-container">
      <button 
        class="stories__button stories__button_backward stories__button_video"
      ></button>
      <slider :videoArr="videoArr">
      </slider>
      <button
        class="stories__button stories__button_forward stories__button_video"
      ></button>
      <p class="stories__description stories__font">
        <a href="https://www.youtube.com/channel/UCcxMSzN1R4JfW1vLu3swCaQ" target="_blanc" class="stories__font">{{video.note}}</a>
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
    'slider': Slider,
  },
  computed: {
    video() {
      const arr = this.$store.getters['texts/getText'];
      return arr.find(el => el.block === 'videos');
    },
    videoArr() { 
      const videos = [
        {
        "id": 1,
        "url": "https://www.youtube.com/embed/coOppM34GtI",
        "created_at": "2020-05-21T09:23:03.898Z",
        "updated_at": "2020-05-22T11:04:24.483Z"
        },
        {
        "id": 2,
        "url": "https://www.youtube.com/embed/FFrioIZ65q0",
        "created_at": "2020-05-21T09:23:43.471Z",
        "updated_at": "2020-05-22T11:05:23.927Z"
        },
        {
        "id": 3,
        "url": "https://www.youtube.com/embed/ZKWilQnPovg",
        "created_at": "2020-05-21T09:23:57.786Z",
        "updated_at": "2020-05-22T11:06:14.936Z"
        }
      ];
      return videos;
    }
  },
};
</script>

<style scoped>
.stories__main {
  margin: 0 auto;
  color: #e5e5e5;
  display: flex;
  flex-direction: row;
  padding-top: 100px;
  padding-bottom: 74px;
}
.stories__text-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.stories__font {
  font-family: 'Inter', Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  color: #666666;
}
.stories__text {
  max-width: 413px;
  margin: 10px 40px 0 0;
  padding: 0;
}
.stories__title {
  font-weight: bold;
  font-size: 32px;
  line-height: 36px;
  color: #000000;
}
.stories__paragraph {
  margin-top: 32px;
  font-size: 18px;
  line-height: 22px;
}
.stories__buttons {
  margin: 0 0 20px 0;
  max-width: 80px;
  display: flex;
  flex-direction: row;
}
.swiper-button-prev {
  position: static;
}
.swiper-button-next {
  position: static;
}
.swiper-button-prev:after {
  content: none;
}
.swiper-button-next:after {
  content: none;
}
.stories__button {
  max-width: 40px;
  height: 40px;
  background: #FBFBFB;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  outline: none;
  cursor: pointer;
}
.stories__button_backward {
  background-image: url('/images/backward.png');
}
.stories__button_forward {
  background-image: url('/images/forward.png');
}
.stories__description {
  margin-top: 10px;
}
.stories__button_video {
  display: none;
}

@media screen and (max-width: 1320px) {
  .stories__main {
    max-width: 1280px;
  }
  .stories__text {
    max-width: 367px;
  }
  .stories__title {
    font-size: 28px;
    line-height: 32px;
  }
  .stories__paragraph {
    margin-top: 32px;
    font-size: 16px;
    line-height: 20px;
  }
}
@media screen and (max-width: 1180px) {
  .stories__main {
    max-width: 1024px;
  }
  .stories__text {
    max-width: 288px;
  }
  .stories__title {
    font-size: 24px;
    line-height: 28px;
  }
  .stories__paragraph {
    margin-top: 32px;
    font-size: 13px;
    line-height: 16px;
  }
}
@media screen and (max-width: 940px) {
  .stories__main {
    flex-direction: column;
    max-width: 688px;
    padding-top: 80px;
  }
  .stories__text {
    max-width: 380px;
  }
  .stories__text-container {
    text-align: center;
    margin: 0 auto;
  }
  .stories__paragraph {
    text-align: left;
    margin-top: 26px;
    font-size: 13px;
    line-height: 16px;
  }
  .stories__button {
    display: none;
  }
  .stories__video-container {
    margin: 60px auto 0 auto;
    display: flex;
    flex-direction: row;
  }
  .stories__video {
    min-width: 580px;
    height: 300px;
  }
  .stories__description {
    font-size: 12px;
  }
  .stories__button_backward {
    margin-right: 14px;
    align-self: center;
  }
  .stories__button_forward {
    margin-left: 14px;
    align-self: center;
  }
  .stories__button_video {
    display: block;
  }
}

@media screen and (max-width: 670px) {
  .stories__main {
    padding: 100px 15px 74px 15px;
  }
  .stories__title {
    text-align: left;
  }
  .stories__video-container {
    margin: 40px auto 0 auto;
    display: flex;
    flex-direction: row;
    position: relative;
  }
  .stories__button_backward {
    align-self: center;
    position: absolute;
    left: 10px;
  }
  .stories__button_forward {
    align-self: center;
    position: absolute;
    right: 10px;
  }
  .stories__video {
    min-width: 290px;
    height: 150px;
  }
  .stories__description {
    display: none;
  }
  .stories__button_backward {
    background-color: #ededed;
  }
  .stories__button_forward {
    background-color: #ededed;
  }
  .stories__video-play {
    width: 38px;
    height: 38px;
  }
}
</style>
