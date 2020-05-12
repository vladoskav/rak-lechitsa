<template>
  <label class="textarea">
    {{ labelText }}
    <input
      :placeholder="placeholder"
      :name="name"
      :required="required"
      @input="$emit('input', $event.target.value)"
    >
  </label>
</template>

<script>
export default {
  props: ['labelText', 'placeholder', 'name', 'required'],
};
</script>

<style scoped>
.textarea input {
  display: block;
  border: 0;
  border-bottom: 1px solid #E7E7E7;
  width: 90%;
  margin: 0 40px auto 40px;
  padding: 5px;
  font-size: 14px;
  box-sizing: border-box;
  font-family: inherit;
}
</style>
