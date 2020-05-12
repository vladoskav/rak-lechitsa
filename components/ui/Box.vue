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
  width: 300px;

  background: #ffffff;
  border: 1px solid #efefef;
  box-sizing: border-box;
}

@media screen and (max-width: 1280px) {
  .box {
    max-width: 265px;
  }
}

@media screen and (max-width: 1024px) {
  .box {
    max-width: 208px;
  }
}

@media screen and (max-width: 768px) {
  .box {
    max-width: 216px;
  }
}
</style>
