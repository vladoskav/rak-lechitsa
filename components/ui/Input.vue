<template>
  <input
    class="input"
    :placeholder="placeholder"
    :name="name"
    :required="required"
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  props: ['placeholder', 'name', 'required', 'value'],
};
</script>

<style scoped>
.input {
  display: block;
  border: 0;
  border-bottom: 1px solid #e7e7e7;
  width: 90%;
  margin: 0 40px auto 40px;
  padding: 5px;
  font-size: 14px;
  box-sizing: border-box;
  font-family: inherit;
}
</style>
