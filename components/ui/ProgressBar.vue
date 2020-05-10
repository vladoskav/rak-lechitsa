<template>
  <div class="progress-bar">
    <div class="progress-bar__fill" :style="style"></div>
  </div>
</template>

<script>
  export default {
    props: {
      value: Number,
      maxValue: Number
    },
    computed: {
      style () {
        return `width: ${this.value / this.maxValue * 100}%;`
      }
    }
  }
</script>

<style scoped>
.progress-bar {
  width: 100%;
  height: 40px;
  background: #F4F4F4;
  position: relative;
}

.progress-bar__fill {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: #613A93;
}
</style>
