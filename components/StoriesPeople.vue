<template>
  <container class="stories__main">
    <div class="stories__text-container">
      <div class="stories__text stories__font">
        <h2 class="stories__title">
          Истории людей, победивших рак, но&nbsp;не&nbsp;свои привычки
        </h2>
        <p class="stories__paragraph">
          Есть вещи, которые не&nbsp;лечатся. Вещи ставшие частью нашего
          &laquo;я&raquo;, фобии, страхи. Но&nbsp;это точно не&nbsp;рак. Рак
          лечится. Лучшее доказательство&nbsp;&mdash; люди
          с&nbsp;их&nbsp;историями.
        </p>
      </div>
      <div class="stories__buttons">
        <button class="stories__button stories__button-backward"></button>
        <button class="stories__button stories__button-forward"></button>
      </div>
    </div>

    <div class="stories__video-container">
      <button
        class="stories__button stories__button-backward stories__button-video"
      ></button>
      <div class="stories__video"></div>
      <button
        class="stories__button stories__button-forward stories__button-video"
      ></button>
      <p class="stories__description stories__font">
        Все видео вы&nbsp;можете найте на&nbsp;нашем
        <a href="#" class="stories_link stories__font">YouTube канале.</a>
      </p>
    </div>
  </container>
</template>
<style scoped>
.stories__main {
  color: #e5e5e5;
  display: grid;
  max-width: 1320px;
  padding: 100px 0 74px 0;
  margin: 0 auto;
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
  background: #fbfbfb;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  outline: none;
}
.stories__button-backward {
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='18' viewBox='0 0 10 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 1L1 9L9 17' stroke='%23BFBFBF'/%3E%3C/svg%3E%0A");
}
.stories__button-forward {
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='18' viewBox='0 0 10 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 17L9 9L1 1' stroke='black'/%3E%3C/svg%3E");
}
.stories__video {
  max-width: 867px;
  height: 450px;
  background-color: #ededed;
  background-image: url("data:image/svg+xml,%3Csvg width='76' height='76' viewBox='0 0 76 76' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath opacity='0.8' fill-rule='evenodd' clip-rule='evenodd' d='M38 76C58.9868 76 76 58.9868 76 38C76 17.0132 58.9868 0 38 0C17.0132 0 0 17.0132 0 38C0 58.9868 17.0132 76 38 76ZM53.0477 39.6926C54.2932 38.9082 54.2932 37.0925 53.0477 36.308L30.9338 22.3799C29.6019 21.541 27.8679 22.4982 27.8679 24.0722V51.9284C27.8679 53.5024 29.6019 54.4596 30.9338 53.6208L53.0477 39.6926Z' fill='%23CECECE'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
}
.stories__description {
  margin-top: 10px;
}
.stories_link {
  text-decoration: underline;
}
.stories__button-video {
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
    padding: 80px 0 74px 0;
  }
  .stories__text {
    max-width: 380px;
  }
  .stories__text-container {
    text-align: center;
    margin: 0 auto;
  }
  .stories__paragraph {
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
  .stories__button-backward {
    margin-right: 14px;
    align-self: center;
    grid-area: backward;
  }
  .stories__button-forward {
    margin-left: 14px;
    align-self: center;
    grid-area: forward;
  }
  .stories__button-video {
    display: block;
  }
}
</style>
