<template>
  <div>
    <overlay @overlayClick="closePopup" />
    <div class="popup">
      <div class="close" @click="closePopup"></div>
      <form-inputs title="Шаг 1 из 12" question="Как вас зовут?" />
    </div>
  </div>
</template>

<script>
import Overlay from '@/components/ui/Overlay';
import Form from '@/components/Form';
export default {
  components: {
    'overlay': Overlay,
    'form-inputs': Form,
  },
  methods: {
    closePopup() {
      this.$store.commit('popup/togglePopup');
    }
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
  min-height: 600px;
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
