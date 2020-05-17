<template>
  <section class="footer">
    <container class="footer__main">
      <div class="footer__flexNav">
        <h3 class="footer__appreciation footer__fonts">
          Спасибо всем, кто помог состояться этому проекту
        </h3>

        <navigation class="footer__pages"/>
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
          <a class="footer__link footer__fonts" href="/stories">Поделитесь &#8599;</a>
        </li>
      </ul>

      <div class="footer__copyright">
        <p class="footer__author">Рак Лечится {{year}}</p>
        <p class="footer__author">Сделано студентами <a class="footer__link footer__author" href="https://praktikum.yandex.ru/">Яндекс Практикум</a></p>
      </div>

    </container>
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
  background-color: #fbfbfb;
}

.footer__main {
  padding-top: 60px;
  padding-bottom: 60px;
  max-width: 1320px;
  display: grid;
  grid-row: 1fr;
  grid-column: 1fr 1fr;
  grid-row: 1fr 1fr;
  grid-template-areas: 'appreciation social'
  'copyright copyright';
  justify-content: space-between;
}

.footer__flexNav {
  grid-area: appreciation;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.footer__appreciation {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  position: relative;
  width: 340px;
}

.footer__pages {
  margin-left: 100px;
}

.footer__social {
  grid-area: social;
  margin: 0 40px 44px 0;
  position: relative;
  display: flex;
  flex-direction: column;
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
  grid-area: copyright;
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
</style>
