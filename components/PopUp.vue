<template>
  <div class="popup">
    <div class="close" @click="$emit('closeClick')"></div>
    <slot>Содержимое окна</slot>
  </div>
</template>

<script>
export default {
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
  background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='7.92879' y1='7.92912' x2='22.0709' y2='22.0713' stroke='black' stroke-width='2'/%3E%3Cline x1='7.92912' y1='22.0712' x2='22.0713' y2='7.92908' stroke='black' stroke-width='2'/%3E%3C/svg%3E");
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
}
</style>
