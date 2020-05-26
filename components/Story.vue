<template>
  <div @click="$emit('cardClick')" class="story">
    <div
      :style="{ backgroundImage: `url('${image}')` }"
      :disabled="disabled"
      class="story__photo"
    ></div>
    <h3 class="story__title">{{ author }}</h3>
    <p v-html="text" class="story__text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    disabled: Boolean,
    author: String,
    text: String,
  },
};
</script>
<style scoped>
.story {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 100%;
  text-decoration: none;
}
.story:hover {
  transition: box-shadow 0.8s;
  box-shadow: 20px 20px 30px -10px #192824;
  transform: scale(1.2, 1.2);
}
.story:hover::after {
  opacity: 1;
}
.story__photo {
  width: 100%;
  padding-bottom: 100%;
  background-size: cover;
  margin-bottom: 20px;
}
.story__title {
  margin-bottom: 14px;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 100%;
  color: #000;
}
.story__text {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #666;
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
