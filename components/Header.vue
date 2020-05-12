<template>
  <header class="header">
    <div class="header__header-container">
      <header-logo />
      <header-menu @btnClick="$emit('btnClick')" />
    </div>
  </header>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu';
import HeaderLogo from '@/components/HeaderLogo';

export default {
  components: {
    'header-menu': HeaderMenu,
    'header-logo': HeaderLogo,
  },
};
</script>

<style scoped>
.header {
  min-height: 76px;
}
.header__header-container {
  max-width: 1320px;
  height: 100%;
  padding: 18px 0;
  margin: auto;
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 1320px) {
  .header {
    min-height: 72px;
  }
  .header__header-container {
    max-width: 1180px;
    padding: 18px;
  }
}
</style>
