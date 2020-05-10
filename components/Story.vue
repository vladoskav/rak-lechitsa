<template>
  <a :href="link" class="story">
    <div
      :style="{ backgroundImage: `url('${image}')` }"
      :alt="alt"
      class="story__photo"
    ></div>
    <h3 class="story__title">{{ author }}</h3>
    <p class="story__text">{{ text }}</p>
  </a>
</template>

<script>
export default {
  props: ['image', 'alt', 'author', 'text', 'link'],
};
</script>
<style scoped>
.story {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  width: 100%;
}
.story__photo {
  width: 100%;
  padding-bottom: 100%;
  background-size: cover;
  margin-bottom: 20px;
}
.story__title {
  margin-bottom: 14px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 100%;
  color: #000000;
}
.story__text {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #666666;
}
@media screen and (max-width: 1024px) {
  .story__photo {
    margin-bottom: 16px;
  }
  .story__title {
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 16px;
  }
  .story__text {
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
