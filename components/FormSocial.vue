<template>
  <container>
    <title-social class="title">Поделитесь</title-social>
    <div class="share__icon">
      <div class="share__icon-contain">
        <a class="share__icon-icon">
          <facebook />
        </a>
      </div>

      <div class="share__icon-contain">
        <a class="share__icon-icon">
          <twitter />
        </a>
      </div>

      <div class="share__icon-contain">
        <a class="share__icon-icon">
          <vk />
        </a>
      </div>

      <div class="share__icon-contain">
        <a class="share__icon-icon">
          <classmates />
        </a>
      </div>

      <div class="share__icon-contain">
        <a class="share__icon-icon">
          <insta />
        </a>
      </div>

      <div class="share__icon-contain">
        <div class="share__icon-icon">
          <youtube />
        </div>
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
.title {
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
.title {
  font-size: 18px;
  line-height: 21px;
}
.share__icon {
  margin: 70px auto auto auto;
}
}
</style>
