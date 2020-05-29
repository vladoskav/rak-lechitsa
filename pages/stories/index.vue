<template>
  <section class="stories">
    <container class="container">
      <st-title class="stories__title">Истории неизлечимых привычек</st-title>
      <form @submit.prevent="appliedStoriesName = storiesName" class="search">
        <input v-model="storiesName" class="search__input" placeholder="" />
        <button class="search__button">Поиск</button>
        <button class="search__mobile-button">
          <magnifier />
        </button>
      </form>
      <ul class="grid">
        <li v-for="story in allStories" :key="story.id" class="grid__item">
          <nuxt-link class="grid__link" :to="`/stories/${story.id}`">
            <story
              @cardClick="goToStory(story.id)"
              :author="story.author"
              :image="defineImage(story.ImageUrl[0].formats)"
              :text="story.title"
          /></nuxt-link>
        </li>
      </ul>
      <pagination
        :total-items="this.$store.state.stories.stories.length"
        :items-per-page="itemsPerPage"
        @onPageChanged="changeStartIndex"
      />
    </container>
  </section>
</template>

<script>
import Title from '@/components/ui/Title';
import Container from '@/components/Container';
import Pagination from '@/components/Pagination';
import Story from '@/components/Story';
import Magnifier from '@/components/svg/Magnifier';
export default {
  components: {
    'st-title': Title,
    container: Container,
    pagination: Pagination,
    story: Story,
    magnifier: Magnifier,
  },
  data() {
    return {
      storiesName: '',
      appliedStoriesName: '',
      startIndex: 0,
      itemsPerPage: 16,
      baseUrl: process.env.BASE_URL,
    };
  },
  methods: {
    changeStartIndex(index) {
      this.startIndex = (index - 1) * this.itemsPerPage;
    },
    goToStory(id) {
      this.$router.push(`/stories/${id}`);
    },
    defineImage(formats) {
      if (!formats.small || !formats.small.url) {
        return '/images/no-image.png';
      }
      return `${this.baseUrl}${formats.small.url}`;
    },
  },

  computed: {
    searchedStories() {
      const { stories } = this.$store.state;
      if (!this.appliedStoriesName || this.appliedStoriesName === '') {
        return stories.stories;
      }
      return stories.stories.filter(
        item =>
          item.author.indexOf(this.appliedStoriesName) > -1 ||
          item.text.indexOf(this.appliedStoriesName) > -1
      );
    },
    allStories() {
      const { stories } = this.$store.state;
      return this.searchedStories.filter(
        (item, index) =>
          index >= this.startIndex &&
          index <= this.startIndex + this.itemsPerPage - 1
      );
    },
    mounted() {
      if (process.browser) {
        if (window.innerWidth <= 768) {
          this.itemsPerPage = 9;
        } else {
          this.itemsPerPage = 16;
        }
      }
    },
  },
};
</script>

<style scoped>
.grid__link {
  text-decoration: none;
}
.search__mobile-button {
  width: 46px;
  height: 46px;
  background-color: rgb(97, 58, 147, 1);
  cursor: pointer;
  display: none;
  margin: 0;
  padding: 15px;
  border: 0;
}
.search__mobile-button:hover {
  background-color: rgb(97, 58, 147, 0.9);
}
.stories {
  padding: 100px 0;
}
.grid {
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-bottom: 140px;
}
.stories__title {
  margin-bottom: 60px;
}
.search {
  width: 100%;
  margin-bottom: 70px;
  display: flex;
  flex-direction: row;
}
.search__button {
  margin: 0;
  padding: 0;
  border: 0;
  color: #fff;
  background-color: rgb(97, 58, 147, 1);
  max-width: 226px;
  width: 100%;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.1875rem;
  font-style: normal;
  text-align: center;
  cursor: pointer;
}
.search__input {
  height: 52px;
  max-width: 1074px;
  font-size: 24px;
  width: 90%;
  margin-right: 20px;
  margin-left: 0;
  border: 1px solid #e8e8e8;
}
.search__input {
  outline: none;
}
.search__button:hover {
  background-color: rgb(97, 58, 147, 0.9);
}
.search__button:focus {
  outline: none;
}
@media screen and (max-width: 1280px) {
  .stories__title {
    font-size: 28px;
    line-height: 32px;
    margin-bottom: 50px;
  }
  .stories {
    padding: 90px 0;
  }
  .search {
    margin-bottom: 60px;
  }
  .grid {
    margin-bottom: 130px;
  }
}
@media screen and (max-width: 1024px) {
  .search__input {
    height: 46px;
  }
  .stories {
    padding: 80px 0;
  }
  .grid {
    grid-gap: 30px;
    margin-bottom: 110px;
  }
  .stories__title {
    margin-bottom: 40px;
    font-size: 24px;
    line-height: 28px;
    max-width: 288px;
  }
  .search__button {
    width: 208px;
    font-size: 15px;
    line-height: 18px;
  }
  .search {
    margin-bottom: 46px;
  }
}
@media screen and (max-width: 768px) {
  .grid {
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 130px;
    width: 100%;
  }
  .stories__title {
    margin: 0 auto 50px auto;
    text-align: center;
  }
}
@media screen and (max-width: 420px) {
  .search__input {
    margin-right: 6px;
  }
  .search {
    margin-bottom: 30px;
  }
  .stories {
    padding: 50px 0;
  }
  .stories__title {
    text-align: left;
    font-size: 18px;
    line-height: 21px;
    margin: 0 0 40px 0;
  }
  .grid {
    display: flex;
    flex-direction: column;
  }
  .search__button {
    display: none;
  }
  .search__mobile-button {
    display: block;
  }
  .grid__item {
    margin-bottom: 30px;
  }
  .grid__item:last-child {
    margin-bottom: 0;
  }
  .stories {
    padding: 50px 0;
  }
}
</style>
