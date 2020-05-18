<template>
  <div>
    <overlay v-if="popupShown" @overlayClick="closePopup" />
    <overlay v-if="popupSocial" @overlayClick="closeSocial" />
    <div class="popup">
      <div v-if="popupShown" class="close" @click="closePopup"></div>
      <div v-if="popupSocial" class="close" @click="closeSocial"></div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Overlay from '@/components/ui/Overlay';
export default {
  components: {
    'overlay': Overlay,
  },
  methods: {
    closePopup() {
      this.$store.commit('popup/togglePopup');
    },
    closeSocial() {
      this.$store.commit('popup/toggleSocial');
    },
  },
  computed: {
    popupShown() {
      return this.$store.getters['popup/getPopupShown']
    },
    popupSocial() {
      return this.$store.getters['popup/getPopupSocial']
    },
  },
};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 920px;
  min-height: 324px;
  border: none;
  box-sizing: border-box;
  padding: 20px;
  background-color: #fff;
  z-index: 2;
}

.close {
  position: absolute;
  top: 43px;
  right: 43px;
  width: 20px;
  height: 20px;
  background-image: url('../static/close.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
}
</style>
