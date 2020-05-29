<template>
  <div>
    <overlay @overlayClick="$emit('overlayClick')" />
    <div class="popup">
      <div class="popup__close" @click="$emit('closeClick')"></div>

      <slot></slot>
    </div>
  </div>
</template>

<script>
import Overlay from '@/components/ui/Overlay';
export default {
  components: {
    overlay: Overlay,
  },
};
</script>

<style scoped>
.popup {
  position: fixed;
  min-height: 354px;
  max-height: 100%;
  overflow: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 920px;
  border: none;
  box-sizing: border-box;
  padding: 40px;
  background-color: #fff;
  z-index: 2;
}

.popup__close {
  position: absolute;
  top: 43px;
  right: 43px;
  width: 20px;
  height: 20px;
  background-image: url('../static/close.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  z-index: 2;
}

@media screen and (max-width: 1280px) {
  .popup {
    width: 800px;
  }
}

@media screen and (max-width: 800px) {
  .popup {
    width: 580px;
  }
}

@media screen and (max-width: 600px) {
  .popup {
    width: 320px;
    padding: 15px;
    min-height: 221px;
  }

  .popup__close {
    top: 15px;
    right: 15px;
  }
}
</style>
