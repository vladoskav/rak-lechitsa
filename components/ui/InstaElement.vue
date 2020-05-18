<template>
  <a :href="link" class="grid-element">
    <div
      class="link-photo"
      :style="{ backgroundImage: `url('${bgImage}')` }"
    ></div>
  </a>
</template>

<script>
export default {
  props: ['bgImage', 'link'],
};
</script>

<style scoped>
.link-photo {
  width: 100%;
  height: 100%;
  background-size: cover;
  padding-bottom: 100%;
}
</style>
