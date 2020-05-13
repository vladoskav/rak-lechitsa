<template>
  <nav class="header__menu">
    <ul class="header__menu-list">
      <li
        class="header__menu-item"
        v-for="menuItem in menuItems"
        :key="menuItem.id"
      >
        <nuxt-link
          v-if="menuItem.type === 'link'"
          :class="{
            'header__menu-link': true,
            'header__menu-link_open': $route.path === menuItem.href,
          }"
          :to="menuItem.href"
        >
          {{ menuItem.title }}
        </nuxt-link>
        <button
          @click="$emit('btnClick')"
          class="header__menu-button"
          v-if="menuItem.type === 'button'"
        >
          {{ menuItem.title }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['title', 'href'],
  data() {
    return {
      menuItems: [
        { id: 1, title: 'Главная', href: '/', type: 'link' },
        { id: 2, title: 'Истории', href: '/stories', type: 'link' },
        { id: 3, title: 'Рассказать историю', type: 'button' },
      ],
    };
  },
};
</script>

<style scoped>
.header__menu {
  display: flex;
}

.header__menu-list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: auto;
}

.header__menu-item {
  margin-right: 40px;
}

.header__menu-item:last-child {
  margin-right: 0;
}

.header__menu-link {
  font-style: normal;
  font-weight: normal;
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: #000;
  text-decoration: none;
}

.header__menu-link_open {
  text-decoration: underline;
}

.header__menu-button {
  font-style: normal;
  font-weight: normal;
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: #000;
  padding: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;
}

.header__menu-button:focus {
  outline: 0;
}

@media screen and (max-width: 1320px) {
  .header__menu-link {
    font-size: 1rem;
  }

  .header__menu-button {
    font-size: 1rem;
  }
}
</style>
