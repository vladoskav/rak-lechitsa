<template>
    <nav class="menu__list">
        <nuxt-link v-for="menuItem in menuItems" :key="menuItem.id"
          v-show="type === 'link'"
          :class="{
            menu__link: true,
            menu__link_open: $route.path === menuItem.href,
          }"
          :to="menuItem.href"
        >
          {{ menuItem.title }}
        </nuxt-link>

        <nuxt-link v-for="menuItem in menuItems" :key="menuItem.id"
          v-show="type === 'footer'"
          class="menu__link menu__link_footer"
          :to="menuItem.href"
        >
          {{ menuItem.title }}
        </nuxt-link>
        <slot></slot>
    </nav>
</template>

<script>
export default {
  props: ['title', 'href', 'type'],
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
.menu__list {
  height: 100%;
  display: flex;
  flex-direction: row;
  margin: auto 0;
  align-items: center;
}
.menu__link {
  font-style: normal;
  font-weight: normal;
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: #000;
  text-decoration: none;
  margin-right: 40px;
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
  .menu__link {
    margin-right: 30px;
  }
}
@media screen and (max-width: 580px) {
  .menu__link_footer {
    margin: 18px 30px 0 0;
    font-size: 13px;
  line-height: 15px;
  }
}
</style>