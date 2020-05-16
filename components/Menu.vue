<template>
  <nav class="menu">
    <ul class="menu__list">
      <li class="menu__item" v-for="menuItem in menuItems" :key="menuItem.id">
        <nuxt-link
          v-if="menuItem.type === 'link'"
          :class="{
            menu__link: true,
            menu__link_open: $route.path === menuItem.href,
          }"
          :to="menuItem.href"
        >
          {{ menuItem.title }}
        </nuxt-link>
      </li>
    </ul>
    <slot></slot>
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
      ],
    };
  },
};
</script>

<style scoped>
.menu {
  display: flex;
}

.menu__list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: auto;
}

.menu__item {
  margin-right: 40px;
}

.menu__link {
  font-style: normal;
  font-weight: normal;
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: #000;
  text-decoration: none;
}

.menu__link_open {
  text-decoration: underline;
}

@media screen and (max-width: 1280px) {
  .menu__link {
    font-size: 1rem;
  }
}
@media screen and (max-width: 1024px) {
  .menu__item {
    margin-right: 30px;
  }
}
</style>
