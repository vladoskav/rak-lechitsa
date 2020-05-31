<template>
  <section class="single-story">
    <container class="container">
      <div class="upper-block">
        <div
          class="single-story__photo"
          :style="{
            backgroundImage: `url('${defineImage(story.ImageUrl[0].formats)}')`,
          }"
        ></div>
        <div class="text-block">
          <h2 class="single-story__title">
            {{ story.author }}: «{{ story.title }}»
          </h2>
          <div class="wrapper">
            <div
              class="single-story__mini-photo"
              :style="{
                backgroundImage: `url('${defineImage(
                  story.ImageUrl[0].formats
                )}')`,
              }"
            ></div>
          </div>
          <a class="text-block__link" @click="showPopup('popupSocial')"
            >Поделитесь &#8599;</a
          >
          <p class="single-story__date">{{ getDate }}</p>
        </div>
      </div>
      <p v-html="story.text" class="single-story__text">
        {{ story.text }}
      </p>
      <div class="link-box">
        <a class="link-box__text" @click="showPopup('popupSocial')"
          >Поделитесь этой статьей в своих социальных сетях &#8599;</a
        >
      </div>
      <ul class="grid">
        <li v-for="story in stories" :key="story.id" class="grid__item">
          <nuxt-link class="grid__link" :to="`/stories/${story.id}`">
            <story
              :author="story.author"
              :image="defineImage(story.ImageUrl[0].formats)"
              :text="story.title"
            />
          </nuxt-link>
        </li>
      </ul>
      <stories-button>
        Больше историй
      </stories-button>
    </container>
  </section>
</template>

<script>
import Container from '@/components/Container';
import Story from '@/components/Story';
import StoriesButton from '@/components/ui/StoriesButton';
export default {
  data() {
    return {
      baseUrl: process.env.BASE_URL,
      title: 'РакЛечится',
    };
  },
  head() {
    return {
      title: this.title,
    }
  },
  validate ({ params, store }) {
    return store.state.stories.stories[params.id];
  },
  async fetch({ store, route }) {
    await store.dispatch('stories/fetchStoryWithId', { id: route.params.id });
  },
  computed: {
    stories() {
      if (process.browser) {
        if (window.innerWidth <= 320) {
          return this.toFilter(2);
        } else if (window.innerWidth > 320 && window.innerWidth < 769) {
          return this.toFilter(3);
        } else {
          return this.toFilter(4);
        }
      } else {
        return this.$store.getters['stories/getStories'];
      }
    },
    getDate() {
      let date = new Date(this.story.date);
      return date.toLocaleDateString('ru-Latn', {
        month: 'long',
        year: 'numeric',
        day: 'numeric',
      });
    },
    story() {
      return this.$store.getters['stories/getStoryWithId'];
    },
  },
  methods: {
    toFilter(n) {
      return this.$store.getters['stories/getStories'].filter(
        (item, index) => index < n
      );
    },
    goToStory(id) {
      this.$router.push(`/stories/${id}`);
    },
    showPopup(popup) {
      this.$store.commit('popup/togglePopup', popup);
    },
    defineImage(formats) {
      if (!formats.small || !formats.small.url) {
        return '/images/no-image.png';
      }
      return `${this.baseUrl}${formats.small.url}`;
    },
  },
  components: {
    container: Container,
    Story: Story,
    'stories-button': StoriesButton,
  },
};
</script>

<style scoped>
.grid__link {
  text-decoration: none;
}
.grid {
  list-style-type: none;
  padding: 0;
  margin: 0 auto;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-bottom: 70px;
}
.link-box {
  border-bottom: 1px solid #efefef;
  border-top: 1px solid #efefef;
  padding: 30px 0;
  margin: 0 auto;
  max-width: 780px;
  text-align: center;
  margin-bottom: 170px;
}
.link-box__text {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #121212;
  text-decoration: none;
  transition: opacity 0.3s linear;
  cursor: pointer;
}
.link-box__text:hover {
  opacity: 0.8;
  transition: opacity 0.3s linear;
}
.upper-block {
  display: grid;
  grid-template-columns: minmax(180px, 580px) minmax(300px, 680px);
  margin-bottom: 130px;
  grid-gap: 60px;
}
.single-story {
  padding: 100px 0;
}
.text-block {
  padding-top: 30px;
  padding-bottom: 30px;
  position: relative;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
}
.single-story__date {
  position: absolute;
  right: 0;
  bottom: 30px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #121212;
}
.text-block__link {
  position: absolute;
  cursor: pointer;
  left: 0;
  bottom: 30px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #121212;
  text-decoration: none;
  transition: opacity 0.3s linear;
}
.text-block__link:hover {
  opacity: 0.8;
  transition: opacity 0.3s linear;
}
.single-story__photo {
  width: 100%;
  height: 100%;
  padding-bottom: 100%;
  background-size: cover;
}
.single-story__title {
  font-style: normal;
  font-weight: 500;
  font-size: 38px;
  line-height: 48px;
  color: #000;
}
.single-story__text {
  margin: 0 auto;
  max-width: 780px;
  text-align: left;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: #000;
  margin-bottom: 70px;
}
@media screen and (max-width: 1280px) {
  .upper-block {
    grid-template-columns: minmax(180px, 518px) minmax(300px, 602px);
  }
  .single-story {
    padding-top: 100px;
    padding-bottom: 90px;
  }
  .single-story__text {
    font-size: 20px;
    line-height: 28px;
  }
  .single-story__text {
    margin-bottom: 60px;
  }
  .link-box {
    margin-bottom: 150px;
  }
  .grid {
    margin-bottom: 60px;
  }
}
@media screen and (max-width: 1024px) {
  .upper-block {
    grid-template-columns: minmax(180px, 407px) minmax(300px, 477px);
    grid-gap: 40px;
  }
  .single-story__title {
    font-size: 30px;
    line-height: 38px;
  }
  .text-block__link {
    font-size: 16px;
    line-height: 24px;
  }
  .single-story__date {
    font-size: 16px;
    line-height: 24px;
  }
  .single-story__text {
    font-size: 18px;
    line-height: 27px;
  }
  .grid {
    grid-gap: 30px;
  }
  .single-story {
    padding-bottom: 80px;
  }
  .link-box {
    margin-bottom: 120px;
    padding: 24px 0;
  }
  .link-box__text {
    font-size: 16px;
    line-height: 22px;
  }
  .upper-block {
    margin-bottom: 90px;
  }
}
@media screen and (max-width: 768px) {
  .upper-block {
    display: flex;
    flex-direction: column;
  }
  .single-story__photo {
    display: none;
  }
  .wrapper {
    width: 100%;
    padding: 60px 110px;
  }
  .single-story__mini-photo {
    width: 100%;
    padding-bottom: 100%;
    background-size: cover;
  }
  .single-story {
    padding: 80px 0;
  }
  .grid {
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .text-block {
    width: 100%;
    margin-bottom: 100px;
  }
  .upper-block {
    max-width: 640px;
    margin: 0 auto;
  }
  .single-story__title {
    text-align: center;
  }
  .single-story__text {
    max-width: 640px;
  }
  .link-box {
    max-width: 640px;
  }
}
@media screen and (max-width: 320px) {
  .single-story__title {
    font-size: 18px;
    line-height: 21px;
  }
  .single-story__text {
    font-size: 13px;
    line-height: 16px;
  }
  .text-block__link {
    font-size: 13px;
    line-height: 16px;
  }
  .single-story__date {
    font-size: 13px;
    line-height: 16px;
  }
  .wrapper {
    padding: 30px 0;
  }
  .grid {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
  }
  .grid__item {
    margin-bottom: 30px;
  }
  .grid__item:last-child {
    margin-bottom: 0;
  }
  .single-story {
    padding: 50px 0;
  }
  .link-box {
    margin-bottom: 100px;
  }
}
</style>
