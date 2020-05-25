<template>
  <div class="slider" v-swiper:mySwiper="swiperOptions">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(video, index) in videoArr" :key="index">
          <div class="stories__video">
              <a class="stories__video-play" :href="video.url"></a>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['videoArr'],
    data() {
      return {
        swiperOptions: {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          observer: true,  
          observeParents: true,
        }
      }
    }
        
  }
</script>

<style scoped>
.slider {
  max-width: 867px;
  height: 450px;
}
.stories__video {
  margin: 0;
  display: flex;
  max-width: 100%;
  height: 100%;
  background-color: #ededed;
}
.stories__video-play {
  height: 96px;
  width: 96px;
  margin: auto;
  cursor: pointer;
  background-image: url('/images/play.svg');
  background-size: cover;
}
.stories__video-play:hover {
  background-image: url('/images/playHover.svg');
}
@media screen and (max-width: 1320px) {
  .slider {
    max-width: 773px;
    height: 400px;
  }
  .stories__video-play {
    width: 76px;
    height: 76px;
  }
}
@media screen and (max-width: 1180px) {
  .slider {
    max-width: 606px;
    height: 314px;
  }
  .stories__video-play {
    width: 76px;
    height: 76px;
  }
}
</style>