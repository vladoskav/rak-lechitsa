<template>
  <section class="footer">
    <container class="footer__main">
      <h3 class="footer__appreciation footer__fonts">
        Спасибо всем, кто помог состояться этому проекту
      </h3>

      <navigation class="footer__pages"/>

      <ul class="footer__social">
        <li>
          <p class="footer__fonts">Мы&nbsp;в&nbsp;<a class="footer__link footer__fonts footer__social-link" href="/">Инстаграме</a>
          и&nbsp;<a class="footer__link footer__fonts footer__social-link" href="/"
              >Youtube</a
            >
          </p>
        </li>
        <li>
          <a class="footer__link footer__fonts" href="/stories">Поделитесь &#8599;</a>
        </li>
      </ul>
    </container>

    <div class="footer__copyright">
      <p class="footer__author">Рак Лечится {{year}}</p>
      <p class="footer__author">Сделано студентами <a class="footer__link footer__author" href="https://praktikum.yandex.ru/">Яндекс Практикум</a></p>
    </div>
  </section>
</template>

<script>
import Container from '@/components/Container';
import Navigation from '@/components/Navigation';

export default {
  data() {
    return {
      year: 2020,
    }
  },
  components: {
    'container': Container,
    'navigation': Navigation,
  },
};
</script>

<style scoped>
.footer__fonts {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  color: #000000;
  font-size: 18px;
  line-height: 24px;
}

.footer {
  display: flex;
  flex-direction: column;
  background-color: #fbfbfb;
}

.footer__main {
  display: flex;
  flex-direction: row;
  margin: 60px;
  justify-content: space-between;
}

.footer__appreciation {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  position: relative;
  width: 340px;
  justify-self: flex-start;
}

.footer__pages {
  margin: 0 auto 0 100px;
}

.footer__social {
  margin: 0 40px 44px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-self: flex-end;
  justify-content: space-between;
  list-style-type: none;
}

.footer__link {
  font-size: 18px;
  line-height: 24px;
  text-decoration: none;
  color: #000000;
}

.footer__social-link {
  text-decoration: underline;
}

.footer__copyright {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 66px 60px 60px 60px;
}

.footer__author {
  font-size: 18px;
  line-height: 18px;
  color: #898989;
}
</style>
