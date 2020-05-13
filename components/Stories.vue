<template>
  <section class="stories-section">
    <st-title class="section__title">Истории неизлечимых привычек</st-title>
    <ul class="stories">
      <li v-for="story in stories" :key="story.id" class="stories__item">
        <story
          @cardClick="goToStory(story.id)"
          :alt="story.alt"
          :author="story.author"
          :image="story.url"
          :text="story.text"
        />
      </li>
    </ul>
    <stories-button @btnClick="goToStory('')">
      Больше статей
    </stories-button>
  </section>
</template>

<script>
import Story from './Story';
import StoriesButton from './ui/StoriesButton';
import Title from './ui/Title';
export default {
  components: {
    story: Story,
    'stories-button': StoriesButton,
    'st-title': Title,
  },
  methods: {
    goToStory(id) {
      this.$router.push(`/stories/${id}`);
    },
  },
  data() {
    return {
      stories: [
        {
          id: '1',
          alt: 'фотография героя',
          author: 'Владимир Тен',
          url:
            'https://images.unsplash.com/photo-1588964258146-787046c32910?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
          text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '1',
          alt: 'фотография героя',
          author: 'Владимир Тен',
          url:
            'https://images.unsplash.com/photo-1588967186823-db799005a671?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '1',
          alt: 'фотография героя',
          author: 'Владимир Тен',
          url:
            'https://images.unsplash.com/photo-1588967186823-db799005a671?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '1',
          alt: 'фотография героя',
          author: 'Владимир Тен',
          url:
            'https://images.unsplash.com/photo-1588967186823-db799005a671?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '1',
          alt: 'фотография героя',
          author: 'Владимир Тен',
          url:
            'https://images.unsplash.com/photo-1588967186823-db799005a671?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '1',
          alt: 'фотография героя',
          author: 'Владимир Тен',
          url:
            'https://images.unsplash.com/photo-1588967186823-db799005a671?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '1',
          alt: 'фотография героя',
          author: 'Владимир Тен',
          url:
            'https://images.unsplash.com/photo-1588967186823-db799005a671?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '1',
          alt: 'фотография героя',
          author: 'Владимир Тен',
          url:
            'https://images.unsplash.com/photo-1588967186823-db799005a671?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
      ],
      button: [
        {
          name: 'Большей статей',
        },
      ],
    };
  },
};
</script>

<style scoped>
.stories {
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-bottom: 70px;
}
.section__title {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000000;
  margin-bottom: 70px;
  max-width: 413px;
}
.stories-section {
  padding: 100px 0;
  max-width: 1320px;
  width: 92%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
@media screen and (max-width: 1280px) {
  .section__title {
    font-size: 28px;
    line-height: 32px;
    margin-bottom: 60px;
  }
}
@media screen and (max-width: 1024px) {
  .stories-section {
    width: 90%;
  }
  .stories {
    grid-gap: 30px;
  }
  .section__title {
    margin-bottom: 46px;
    font-size: 24px;
    line-height: 28px;
    max-width: 288px;
  }
}
@media screen and (max-width: 768px) {
  .stories {
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 40px;
  }
  .section__title {
    margin: 0 auto 60px auto;
    text-align: center;
  }
}
</style>
