<template>
  <section class="stories-section">
    <container class="container">
      <slot></slot>
      <st-title class="stories-section__title"
        >Истории неизлечимых привычек</st-title
      >
      <ul class="stories-section__grid">
        <li v-for="story in stories" :key="story.id" class="grid-item">
          <story
            @cardClick="goToStory(story.id)"
            :author="story.author"
            :image="story.url"
            :text="story.text"
          />
        </li>
      </ul>
      <stories-button>
        Больше статей
      </stories-button>
    </container>
  </section>
</template>

<script>
import Story from './Story';
import StoriesButton from './ui/StoriesButton';
import Title from './ui/Title';
import Container from './Container';
export default {
  components: {
    story: Story,
    'stories-button': StoriesButton,
    'st-title': Title,
    container: Container,
  },
  methods: {
    goToStory(id) {
      this.$router.push(`/stories/${id}`);
    },
  },
  computed: {
    stories() {
      if (process.browser) {
        if (window.innerWidth <= 768) {
          return this.$store.getters['stories/getStories'].filter(
            (item, index) => index < 9
          );
        } else {
          return this.$store.getters['stories/getStories'].filter(
            (item, index) => index < 8
          );
        }
      } else {
        return this.$store.getters['stories/getStories'];
      }
    },
  },
};
</script>

<style scoped>
.stories-section__grid {
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-bottom: 70px;
}
.stories-section__title {
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000000;
  margin-bottom: 70px;
  max-width: 413px;
}
.container {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.stories-section {
  padding: 100px 0;
}
@media screen and (max-width: 1280px) {
  .stories-section__title {
    font-size: 28px;
    line-height: 32px;
    margin-bottom: 60px;
  }
  .stories-section {
    padding: 90px 0;
  }
}
@media screen and (max-width: 1024px) {
  .stories-section {
    padding: 80px 0;
  }
  .stories-section__grid {
    grid-gap: 30px;
  }
  .stories-section__title {
    margin-bottom: 46px;
    font-size: 24px;
    line-height: 28px;
    max-width: 288px;
  }
}
@media screen and (max-width: 768px) {
  .stories-section__grid {
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 40px;
    width: 100%;
  }
  .stories-section__title {
    margin: 0 auto 60px auto;
    text-align: center;
  }
}
@media screen and (max-width: 420px) {
  .stories-section__grid {
    display: flex;
    flex-direction: column;
  }
  .stories-section__title {
    font-size: 18px;
    line-height: 21px;
    text-align: left;
  }
  .grid-item {
    margin-bottom: 30px;
  }
  .grid-item:last-child {
    margin-bottom: 0;
  }
  .stories-section {
    padding: 50px 0;
  }
}
</style>
