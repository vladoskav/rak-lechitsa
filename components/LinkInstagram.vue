<template>
  <section class="instagram">
    <div class="text-block">
      <a href="" class="text-block__link"
        ><h2 class="text-block__title">Инстаграм</h2></a
      >
      <p class="text-block__paragraph">
        Два раза в неделю мы просматриваем все посты по хештегу #этонелечится.
        Все истории, где нет нецензурных выражений и запрещенного контента
        попадают сюда. Следите за правильным написанием хештега, чтобы мы не
        пропустили вашу историю.
      </p>
    </div>
    <grid />
  </section>
</template>

<script>
import InstaGrid from './InstaGrid';
export default {
  components: {
    grid: InstaGrid,
  },
};
</script>

<style scoped>
.instagram {
  margin: 0 auto;
  max-width: 1320px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.text-block__link {
  margin-bottom: 32px;
}
.text-block {
  display: flex;
  flex-direction: column;
  max-width: 340px;
  margin-right: 110px;
}
.text-block__title {
  font-family: Inter, Arial, SansSerif;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  text-decoration-line: underline;
  color: #000000;
}
.text-block__paragraph {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
}
</style>
