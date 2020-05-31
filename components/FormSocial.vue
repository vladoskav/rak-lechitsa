<template>
  <container class="share">
    <title-social class="share__title">Поделитесь</title-social>
    <div class="share__icon">
      <div class="share__icon-contain">
        <a
          class="share__icon-icon"
          :href='facebook.url'
          target="_blanc"
        >
          <facebook />
        </a>
      </div>

      <div class="share__icon-contain">
        <a
          class="share__icon-icon"
          :href='twitterUrl'
          target="_blanc"
        >
          <twitter />
        </a>
      </div>

      <div class="share__icon-contain">
        <a
          class="share__icon-icon"
          :href='vkUrl'
          target="_blanc"
        >
          <vk />
        </a>
      </div>

      <div class="share__icon-contain">
        <a
          class="share__icon-icon"
          :href='classmatesUrl'
          target="_blanc"
        >
          <classmates />
        </a>
      </div>

      <div class="share__icon-contain">
        <a
          class="share__icon-icon"
          :href='instagramUrl'
          target="_blanc"
        >
          <insta />
        </a>
      </div>

      <div class="share__icon-contain">
        <a
          class="share__icon-icon"
          :href='youtubeUrl'
          target="_blanc"
        >
          <youtube />
        </a>
      </div>
    </div>
  </container>
</template>

<script>
import Container from '@/components/Container';
import Title from '@/components/ui/Title';
import Facebook from '@/components/svg/Facebook';
import Twitter from '@/components/svg/Twitter';
import Vk from '@/components/svg/Vk';
import Classmates from '@/components/svg/Classmates';
import Insta from '@/components/svg/Insta';
import Youtube from '@/components/svg/Youtube';

export default {
  components: {
    'title-social': Title,
    container: Container,
    facebook: Facebook,
    twitter: Twitter,
    vk: Vk,
    classmates: Classmates,
    insta: Insta,
    youtube: Youtube,
  },
  data () {
    return {
      facebook: {
        url: `https://www.facebook.com/sharer.php?src=sp&u=${encodeURI(window.location.href)}&title=${document.querySelector('title').innerText}`,
      },
      instagramUrl: 'https://www.instagram.com/raklechitsa/',
      youtubeUrl: 'https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F',
      facebookUrl: `https://www.facebook.com/sharer.php?src=sp&u=${encodeURI(window.location.href)}&title=${document.querySelector('title').innerText}`,
      vkUrl: `https://vk.com/share.php?url=${encodeURI(window.location.href)}&title=${document.querySelector('title').innerText}`,
      classmatesUrl: `https://connect.ok.ru/offer?url=${encodeURI(window.location.href)}&amp;title=${document.querySelector('title').innerText}`,
      twitterUrl: `https://twitter.com/intent/tweet?text=${document.querySelector('title').innerText}&url=${encodeURI(window.location.href)}`
    }
  }
};
</script>

<style scoped>
.share__title {
  text-align: center;
  margin: 20px auto auto auto;
  font-size: 32px;
  line-height: 36px;
}
.share__icon {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 100px auto auto auto;
}
.share__icon-contain {
  width: 48px;
  justify-self: center;
  align-self: center;
  margin-left: 20px;
}
.share__icon-icon {
  max-width: 32px;
  cursor: pointer;
}
@media screen and (max-width: 600px) {
  .share__title {
    font-size: 18px;
    line-height: 21px;
  }
  .share__icon {
    margin: 70px auto auto auto;
  }
}
</style>
