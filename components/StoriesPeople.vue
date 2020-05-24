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
        <button class="stories__button stories__button_backward"></button>
        <button class="stories__button stories__button_forward"></button>
      </div>
    </div>

    <div class="stories__video-container">
      <button
        class="stories__button stories__button_backward stories__button_video"
      ></button>
      <div class="stories__video"><play class="stories__video-play" /></div>
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
import Play from '@/components/svg/Play';

export default {
  components: {
    container: Container,
    play: Play,
  },
  computed: {
    video() {
      const arr = this.$store.getters['texts/getText'];
      return arr.find(el => el.block === 'videos');
    }
  }
};
</script>

<style scoped>
.stories__main {
  color: #e5e5e5;
  display: grid;
  padding-top: 100px;
  padding-bottom: 74px;
  grid-template-columns: 1fr 2fr;
}
.stories__text-container {
  display: grid;
  justify-content: space-between;
}
.stories__font {
  font-family: Inter;
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
  align-self: flex-end;
  max-width: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
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
.stories__video {
  display: flex;
  max-width: 867px;
  height: 450px;
  background-color: #ededed;
}
.stories__video-play {
  margin: auto;
  cursor: pointer;
}
.stories__description {
  margin-top: 10px;
}
.stories__button_video {
  display: none;
}

@media screen and (max-width: 1320px) {
  .stories__main {
    max-width: 1180px;
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
  .stories__video {
    max-width: 773px;
    height: 400px;
  }
  .stories__video-play {
    width: 76px;
    height: 76px;
  }
}
@media screen and (max-width: 1180px) {
  .stories__main {
    max-width: 924px;
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
  .stories__video {
    max-width: 606px;
    height: 314px;
  }
}
@media screen and (max-width: 924px) {
  .stories__main {
    display: flex;
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
    display: grid;
    grid-template-columns: 40px 580px 40px;
    grid-template-rows: 1fr;
    grid-template-areas:
      'backward video forward'
      '... description description';
    grid-template-columns: 40px 580px 40px;
  }
  .stories__video {
    grid-area: video;
    min-width: 580px;
    height: 300px;
  }
  .stories__description {
    grid-area: description;
    font-size: 12px;
  }
  .stories__button_backward {
    margin-right: 14px;
    align-self: center;
    grid-area: backward;
  }
  .stories__button_forward {
    margin-left: 14px;
    align-self: center;
    grid-area: forward;
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
    grid-area: none;
    position: absolute;
    left: 10px;
  }
  .stories__button_forward {
    align-self: center;
    grid-area: none;
    position: absolute;
    right: 10px;
  }
  .stories__video {
    grid-area: none;
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
