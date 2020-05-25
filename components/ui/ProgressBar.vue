<template>
  <div class="progress-bar">
    <div class="progress-bar__fill" :style="style"></div>
  </div>
</template>

<script>
export default {
  props: {
    oldValue: Number,
    maxValue: Number,
  },
  computed: {
    style() {
      return `width: ${(this.oldValue / this.maxValue) * 100}%;`;
    },
  },
};
</script>

<style scoped>
.progress-bar {
  width: 100%;
  height: 40px;
  background: #f4f4f4;
  position: relative;
}

.progress-bar__fill {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: #613a93;
}

@media screen and (max-width: 1280px) {
  .progress-bar {
    height: 35px;
  }
}

@media screen and (max-width: 1024px) {
  .progress-bar {
    height: 28px;
  }
}
</style>
