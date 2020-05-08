<template>
  <div class="grid">
    <insta-element />
    <insta-element />
    <insta-element />
    <insta-element />
    <insta-element />
    <insta-element />
    <insta-element />
    <insta-element />
  </div>
</template>

<script>
import InstaElement from './ui/InstaElement';
export default {
  components: {
    'insta-element': InstaElement,
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(195px, 1fr));
  grid-auto-rows: 195px;
  max-width: 66%;
}
</style>
