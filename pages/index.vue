<template>
  <div>
    <storiesPeople></storiesPeople>
    <about></about>
  </div>
</template>

<script>
import StoriesPeople from '@/components/StoriesPeople'
import AboutProject from '@/components/AboutProject'
export default {
  components: {
    'storiesPeople': StoriesPeople,
    'about': AboutProject,
  }
};
</script>

<style>
</style>
