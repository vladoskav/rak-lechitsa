<template>
  <div class="pagination">
    <p
      :class="['pagination__first', { pagination__first_active: isFirst }]"
      @click="setActive((index = 1))"
    >
      Первая
    </p>
    <button
      class="pagination__button pagination__button_left"
      @click="setActive(itemBack)"
      :disabled="isFirst"
    >
      <arrow />
    </button>
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
    <button
      class="pagination__button pagination__button_right"
      @click="setActive(itemForward)"
      :disabled="isLast"
    >
      <arrow class="pagination__arrow" />
    </button>
    <p
      :class="['pagination__last', { pagination__last_active: isLast }]"
      @click="setActive((index = pagesCount))"
    >
      Последняя
    </p>
  </div>
</template>

<script>
import ArrowSides from '@/components/svg/ArrowSides';
export default {
  components: {
    arrow: ArrowSides,
  },
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
    itemForward() {
      return this.active + 1;
    },
    itemBack() {
      return this.active - 1;
    },
    pagesCount() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
    isLast() {
      return this.active === this.pagesCount;
    },
    isFirst() {
      return this.active === 1;
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
.pagination__button {
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  padding: 0;
}
.pagination__button:focus {
  outline: none;
}
.pagination__button_left {
  margin-right: 30px;
}
.pagination__button_right {
  margin-left: 20px;
}
.pagination__arrow {
  transform: rotate(-180deg);
}
.pagination {
  position: relative;
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
.pagination__first {
  cursor: pointer;
  color: #181818;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  margin-right: 30px;
}
.pagination__last {
  cursor: pointer;
  margin-left: 30px;
  color: #181818;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
}
.pagination__first_active {
  color: #a2a2a2;
}
.pagination__last_active {
  color: #a2a2a2;
}
@media screen and (max-width: 1024px) {
  .pagination__item {
    width: 50px;
    height: 50px;
  }
  .pagination__first {
    font-size: 15px;
    line-height: 18px;
  }
  .pagination__last {
    font-size: 15px;
    line-height: 18px;
  }
}
@media screen and (max-width: 320px) {
  .pagination {
    flex-wrap: wrap;
    max-width: 270px;
  }
  .pagination__first {
    margin-top: 34px;
    order: 99;
  }
  .pagination__last {
    margin-top: 34px;
    order: 100;
  }
}
</style>
