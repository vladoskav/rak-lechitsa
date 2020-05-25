<template>
  <input
    class="input"
    :placeholder="placeholder"
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: 'Напишите тут',
    },
    value: {
      type: String,
    },
  },
};
</script>

<style scoped>
.input {
  display: block;
  border: 0;
  border-bottom: 1px solid #e7e7e7;
  padding-bottom: 10px;
  font-size: 14px;
  box-sizing: border-box;
  font-family: inherit;
}
</style>
