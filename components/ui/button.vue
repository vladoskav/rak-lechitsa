<template>
  <button @click="$emit('darkClick')" class="button">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  border: 0;
  color: #fff;
  background-color: rgb(97, 58, 147, 1);
  margin-top: 56px;
  width: 100%;
  max-width: 280px;
  min-height: 52px;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.1875rem;
  font-style: normal;
  text-align: center;
  cursor: pointer;
}

.button:hover {
  background-color: rgb(97, 58, 147, 0.9);
}
</style>
