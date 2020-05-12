<template>
  <div class="box">
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.box {
  width: 100%;
  /* height: 300px; */
  object-fit: cover;

  background: #ffffff;
  border: 1px solid #efefef;
  box-sizing: border-box;
}
</style>
