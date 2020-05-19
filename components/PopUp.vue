<template>
  <div>
    <overlay @overlayClick="$emit('overlayClick')" />
    <div class="popup">
      <div class="close" @click="$emit('closeClick')"></div>

      <slot></slot>
    </div>
  </div>
</template>

<script>
import Overlay from '@/components/ui/Overlay';
export default {
  props: ['popup'],
  components: {
    overlay: Overlay,
  },
  methods: {
    closePopup(elem) {
      this.$store.commit(`popup/${elem}`);
    },
  },
  computed: {
    popupShown() {
      return this.$store.getters['popup/getPopupShown'];
    },
    popupSocial() {
      return this.$store.getters['popup/getPopupSocial'];
    },
    popupContact() {
      return this.$store.getters['popup/getPopupContact'];
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

@media screen and (max-width: 1280px) {
  .popup {
    width: 800px;
  }
}

@media screen and (max-width: 810px) {
  .popup {
    width: 580px;
  }
}

@media screen and (max-width: 600px) {
  .popup {
    width: 290px;
  }
}
</style>
