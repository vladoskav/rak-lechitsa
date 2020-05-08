<template>
  <header>
    <!-- Это пробник проверяю знания на практике не обращайте внимания))-->
    <nav class="header-nav">
      <ul class="header-nav__list">
        <li class="header-nav__item">
          <a href="#" class="header-nav__link">Link</a>
        </li>
        <li class="header-nav__item">
          <a href="#" class="header-nav__link">Link</a>
        </li>
        <li class="header-nav__item">
          <a href="#" class="header-nav__link">Link</a>
        </li>
      </ul>
      <button class="header-nav__button">Раасказать свою историю</button>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header-nav {
  display: flex;
}

.header-nav__list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.header-nav__button {
  cursor: pointer;
}
</style>
