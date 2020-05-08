<template>
  <div class="statistics">
    <st-title class="statistics__title">Статистика по онкозаболеваниям</st-title>
  </div>
</template>

<script>
import Title from '@/components/ui/Title';
  export default {
    components: {
      'st-title' : Title,
    },
  };
</script>

<style scoped>
.statistics__title {
  margin: 100px auto 0 60px;
}
</style>
