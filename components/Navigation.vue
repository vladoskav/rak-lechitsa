<template>
    <nav>
      <ul class="footer__links">
        <li><a class="footer__link footer__fonts" href="/">Главная</a></li>
        <li><a class="footer__link footer__fonts" href="/stories">Истории</a></li>
      </ul>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.footer__links {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: row;
}

.footer__link {
  font-size: 18px;
  line-height: 24px;
  margin: 0 40px 44px 0;
  text-decoration: none;
  color: #000000;
}

</style>