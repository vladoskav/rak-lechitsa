<template>
  <button @click="$emit('arrowClick')" class="arrow-down"></button>
</template>

<script>
export default {};
</script>

<style scoped>
.arrow-down {
  width: 36px;
  height: 12px;
  border: 0px solid transparent;
  cursor: pointer;
  background-color: transparent;
  background-image: url("data:image/svg+xml,%3Csvg width='36' height='12' viewBox='0 0 38 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M37 1L19 13L1 1' stroke='white' stroke-width='2'/%3E%3C/svg%3E%0A");
  transition: opacity 0.3s;
}
.arrow-down:hover {
  opacity: 0.8;
  transition: opacity 0.3s;
}
.arrow-down:focus {
  outline: none;
}
</style>
