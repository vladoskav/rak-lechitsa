<template>
  <container class="share">
    <title-social class="share__title">Поделитесь</title-social>
    <div class="share__icon">
      <div class="share__icon-contain">
        <a class="share__icon-icon" href="https://www.facebook.com/sharer.php?src=sp&u=https%3A%2F%2Fraklechitsa.ru%2F&title=%D0%A0%D0%90%D0%9A%D0%9B%D0%95%D0%A7%D0%98%D0%A2%D0%A1%D0%AF.%D0%A0%D0%A4%20%E2%80%94%20%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D0%B8%20%D0%BB%D1%8E%D0%B4%D0%B5%D0%B9%2C%20%D0%BF%D0%BE%D0%B1%D0%B5%D0%B4%D0%B8%D0%B2%D1%88%D0%B8%D1%85%20%D1%80%D0%B0%D0%BA%2C%20%D0%BD%D0%BE%20%D0%BD%D0%B5%20%D1%81%D0%B2%D0%BE%D0%B8%20%D0%BF%D1%80%D0%B8%D0%B2%D1%8B%D1%87%D0%BA%D0%B8&utm_source=share2" target="_blanc">
          <facebook />
        </a>
      </div>

      <div class="share__icon-contain">
        <a class="share__icon-icon" href="https://twitter.com/intent/tweet?text=%D0%A0%D0%90%D0%9A%D0%9B%D0%95%D0%A7%D0%98%D0%A2%D0%A1%D0%AF.%D0%A0%D0%A4%20%E2%80%94%20%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D0%B8%20%D0%BB%D1%8E%D0%B4%D0%B5%D0%B9%2C%20%D0%BF%D0%BE%D0%B1%D0%B5%D0%B4%D0%B8%D0%B2%D1%88%D0%B8%D1%85%20%D1%80%D0%B0%D0%BA%2C%20%D0%BD%D0%BE%20%D0%BD%D0%B5%20%D1%81%D0%B2%D0%BE%D0%B8%20%D0%BF%D1%80%D0%B8%D0%B2%D1%8B%D1%87%D0%BA%D0%B8&url=https%3A%2F%2Fraklechitsa.ru%2F&utm_source=share2" target="_blanc">
          <twitter />
        </a>
      </div>

      <div class="share__icon-contain">
        <a class="share__icon-icon" href="https://vk.com/share.php?url=https%3A%2F%2Fraklechitsa.ru%2F&title=%D0%A0%D0%90%D0%9A%D0%9B%D0%95%D0%A7%D0%98%D0%A2%D0%A1%D0%AF.%D0%A0%D0%A4%20%E2%80%94%20%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D0%B8%20%D0%BB%D1%8E%D0%B4%D0%B5%D0%B9%2C%20%D0%BF%D0%BE%D0%B1%D0%B5%D0%B4%D0%B8%D0%B2%D1%88%D0%B8%D1%85%20%D1%80%D0%B0%D0%BA%2C%20%D0%BD%D0%BE%20%D0%BD%D0%B5%20%D1%81%D0%B2%D0%BE%D0%B8%20%D0%BF%D1%80%D0%B8%D0%B2%D1%8B%D1%87%D0%BA%D0%B8&utm_source=share2" target="_blanc">
          <vk />
        </a>
      </div>

      <div class="share__icon-contain">
        <a class="share__icon-icon" href="https://connect.ok.ru/offer?url=https%3A%2F%2Fraklechitsa.ru%2F&title=%D0%A0%D0%90%D0%9A%D0%9B%D0%95%D0%A7%D0%98%D0%A2%D0%A1%D0%AF.%D0%A0%D0%A4%20%E2%80%94%20%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D0%B8%20%D0%BB%D1%8E%D0%B4%D0%B5%D0%B9%2C%20%D0%BF%D0%BE%D0%B1%D0%B5%D0%B4%D0%B8%D0%B2%D1%88%D0%B8%D1%85%20%D1%80%D0%B0%D0%BA%2C%20%D0%BD%D0%BE%20%D0%BD%D0%B5%20%D1%81%D0%B2%D0%BE%D0%B8%20%D0%BF%D1%80%D0%B8%D0%B2%D1%8B%D1%87%D0%BA%D0%B8&utm_source=share2" target="_blanc">
          <classmates />
        </a>
      </div>

      <div class="share__icon-contain">
        <a class="share__icon-icon" href="https://www.instagram.com/raklechitsa/" target="_blanc">
          <insta />
        </a>
      </div>

      <div class="share__icon-contain">
        <a class="share__icon-icon" href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F" target="_blanc">
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
