<template>
  <section class="footer">
    <container class="footer__contain">
      <div class="footer__main">
        <div class="footer__flexNav">
          <h3 class="footer__appreciation footer__fonts">
            Спасибо всем, кто помог состояться этому проекту
          </h3>

          <navigation class="footer__pages footer__fonts" type="footer"/>
        </div>

        <ul class="footer__social">
          <li>
            <p class="footer__fonts">Мы&nbsp;в&nbsp;<a class="footer__link footer__fonts footer__social-link" href="/">Инстаграме</a>
            и&nbsp;<a class="footer__link footer__fonts footer__social-link" href="/"
                >Youtube</a
              >
            </p>
          </li>
          <li>
            <p class="footer__link footer__fonts footer__share" @click="showPopup('popupSocial')">Поделитесь &#8599;</p>
          </li>
        </ul>
      </div>

      <div class="footer__copyright">
        <p class="footer__author">Рак Лечится {{year}}</p>
        <p class="footer__author">Сделано студентами <a class="footer__link footer__author" href="https://praktikum.yandex.ru/">Яндекс Практикум</a></p>
      </div>

    </container>
  </section>
</template>

<script>
import Container from '@/components/Container';
import Menu from '@/components/Menu';
export default {
  data() {
    return {
      year: 2020,
    }
  },
  components: {
    'container': Container,
    'navigation': Menu,
  },
  methods: {
    showPopup(popup) {
      this.$store.commit('popup/togglePopup', popup);
    },
  },
};
</script>

<style scoped>
.footer__fonts {
  font-style: normal;
  font-weight: normal;
  color: #000;
  font-size: 18px;
  line-height: 24px;
}
.footer {
  background-color: #fbfbfb;
}
.footer__contain {
  margin: 0 60px;
  padding: 60px 0;
  max-width: 1320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.footer__main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.footer__flexNav {
  display: flex;
  flex-direction: row;
  margin: 0;
}
.footer__appreciation {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  width: 340px;
  margin-right: 120px;
}
.footer__pages {
  align-items: flex-start;
  margin: 0;
}
.footer__social {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
}
.footer__share {
  margin-top: 44px;
}
.footer__link {
  font-size: 18px;
  line-height: 24px;
  text-decoration: none;
  color: #000;
}
.footer__social-link {
  text-decoration: underline;
}
.footer__copyright {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 110px 0 0 0;
  padding: 0;
}
.footer__author {
  font-size: 18px;
  line-height: 18px;
  color: #898989;
}

@media screen and (max-width: 1280px) {
.footer__fonts {
  font-size: 16px;
  line-height: 24px;
}
.footer__contain {
  margin: 0 50px;
  padding: 50px 0;
}
.footer__appreciation {
  font-size: 28px;
  line-height: 32px;
  margin-right: 100px;
}
.footer__link {
  font-size: 16px;
  line-height: 24px;
}
.footer__copyright {
  margin: 104px 0 0 0;
}
.footer__author {
  font-size: 16px;
  line-height: 18px;
}
}

@media screen and (max-width: 1024px) {
.footer__appreciation {
  font-size: 24px;
  line-height: 28px;
  max-width: 230px;
  margin-right: 50px;
}
.footer__share {
  margin-top: 30px;
}
.footer__copyright {
  margin: 90px 0 0 0;
}
}

@media screen and (max-width: 768px) {
.footer__appreciation {
  font-size: 24px;
  line-height: 28px;
  margin-right: 25px;
}
.footer__pages {
  flex-direction: column;
}
.footer__share {
  margin-top: 15px;
}
}

@media screen and (max-width: 580px) {
.footer__main {
  flex-direction: column;
}
.footer__flexNav {
  flex-direction: column;
  margin-bottom: 18px;
}
.footer__fonts {
  font-size: 13px;
  line-height: 15px;
}
.footer__contain {
  margin: 0 auto;
  padding: 50px 0;
  max-width: 290px;
}
.footer__appreciation {
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 50px;
}
.footer__link {
  font-size: 13px;
  line-height: 15px;
}
.footer__share {
  margin-top: 18px;
}
.footer__copyright {
  margin: 50px 0 0 0;
}
.footer__author {
  font-size: 13px;
  line-height: 18px;
}
}
</style>