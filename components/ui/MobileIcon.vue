<template>
  <div
    :class="['mobile-button', { 'mobile-button_type_close': isMenuOpened }]"
    @click="toggleMobile"
  ></div>
</template>

<script>
export default {
  computed: {
    isMenuOpened() {
      return this.$store.getters['mobile-menu/getMobileMenuState'];
    },
  },
  methods: {
    toggleMobile() {
      this.$store.commit('mobile-menu/toggleMobileMenu');
    },
  },
};
</script>

<style scoped>
.mobile-button {
  width: 36px;
  height: 36px;
  background-image: url('/images/hamb.svg');
}

.mobile-button.mobile-button_type_close {
  width: 36px;
  height: 36px;
  background-image: url('/images/x.svg');
}

@media screen and (max-width: 320px) {
  .mobile-button {
    width: 28px;
    height: 28px;
  }

  .mobile-button.mobile-button_type_close {
    width: 28px;
    height: 28px;
  }
}
</style>
