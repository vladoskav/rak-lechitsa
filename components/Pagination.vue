<template>
  <div class="pagination">
    <div
      v-for="index in pagesCount"
      :key="index"
      @click="setActive(index)"
      :class="[
        'pagination__item',
        { pagination__item_active: index === active },
      ]"
    >
      {{ index }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    totalItems: {
      type: Number,
      default: 0,
    },
    itemsPerPage: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      active: 1,
    };
  },
  computed: {
    pagesCount() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
  },
  methods: {
    setActive(index) {
      this.active = index;
      this.$emit('onPageChanged', index);
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
}
.pagination__item {
  display: flex;
  width: 58px;
  height: 58px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  background-color: #fbfbfb;
  transition: background-color 0.3s;
}
.pagination__item:last-child {
  margin-right: 0;
}
.pagination__item:hover,
.pagination__item_active {
  background-color: #f4f4f4;
  transition: background-color 0.3s;
}
</style>
