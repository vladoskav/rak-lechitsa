<template>
    <section class="footer">
        <div class="footer__main">
            <h3 class="footer__appreciation footer__fonts">
                Спасибо всем, кто помог состояться этому проекту
            </h3>

            <ul class="footer__pages">
                <li><a class="footer__link footer__fonts" href="/">Главная</a></li>
                <li><a class="footer__link footer__fonts" href="/stories">Истории</a></li>
            </ul>

            <ul class="footer__social">
                <li><a class="footer__link footer__fonts" href="/">Мы&nbsp;в&nbsp;Инстаграме и&nbsp;Youtube</a></li>
                <li><a class="footer__link footer__fonts" href="/stories">Поделитесь ↗</a></li>
            </ul>
        </div>
        
        <div class="footer__copyright">
            <p class="footer__author">Рак Лечится 2020</p>
            <p class="footer__author">Сделано студентами Яндекс Практикум</p>
        </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.footer__fonts {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  color: #000000;
}

.footer {
  display: flex;
  flex-direction: column;
  background-color: #FBFBFB;
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
  padding: 0;
  display: flex;
  flex-direction: row;
  list-style-type: none; 
}

.footer__social {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-self: flex-end;
  justify-content: space-between;
  list-style-type: none; 
}

.footer__copyright {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 66px 60px 60px 60px;
}

.footer__link {
  font-size: 18px;
  line-height: 24px;
  margin: 0 40px 44px 0;
  text-decoration: none;
}

.footer__author {
  font-size: 18px;
  line-height: 18px;
  color: #898989;
}

</style>