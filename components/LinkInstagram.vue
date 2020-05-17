<template>
  <section class="instagram">
    <container class="container">
      <st-title :theme="'line'" class="text-block__title">
        <a
          href="https://www.instagram.com/raklechitsa"
          target="_blank"
          class="text-block__link"
        >
          Инстаграм</a
        ></st-title
      >

      <p class="text-block__paragraph">
        Два раза в неделю мы просматриваем все посты по хештегу #этонелечится.
        Все истории, где нет нецензурных выражений и запрещенного контента
        попадают сюда. Следите за правильным написанием хештега, чтобы мы не
        пропустили вашу историю.
      </p>
      <div class="grid">
        <insta-element
          class="grid__element"
          v-for="image in images"
          :bgImage="image.url"
          :link="image.link"
          :key="image.id"
        />
      </div>
    </container>
  </section>
</template>

<script>
import InstaElement from './ui/InstaElement';
import Title from './ui/Title';
import Container from './Container';
export default {
  components: {
    'insta-element': InstaElement,
    'st-title': Title,
    container: Container,
  },
  data() {
    return {
      images: [
        {
          url:
            'https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          link: 'https://www.instagram.com/raklechitsa',
          id: 1,
        },
        {
          url:
            'https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          link: 'https://www.instagram.com/raklechitsa',
          id: 1,
        },
        {
          url:
            'https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          link: 'https://www.instagram.com/raklechitsa',
          id: 1,
        },
        {
          url:
            'https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          link: 'https://www.instagram.com/raklechitsa',
          id: 1,
        },
        {
          url:
            'https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          link: 'https://www.instagram.com/raklechitsa',
          id: 1,
        },
        {
          url:
            'https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          link: 'https://www.instagram.com/raklechitsa',
          id: 1,
        },
        {
          url:
            'https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          link: 'https://www.instagram.com/raklechitsa',
          id: 1,
        },
        {
          url:
            'https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          link: 'https://www.instagram.com/raklechitsa',
          id: 1,
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 50vh;
}
.text-block__title {
  margin-bottom: 32px;
}
.grid__element {
  width: 13vw;
  max-width: 195px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
}
.instagram {
  padding: 100px 60px 100px 60px;
}
.text-block__link {
  color: #000;
}

.text-block__paragraph {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  max-width: 340px;
  color: #666;
}
@media screen and (max-width: 1280px) {
  .instagram {
    padding: 90px 50px 90px 50px;
  }
  .grid {
    grid-gap: 27px;
  }

  .text-block__paragraph {
    font-size: 16px;
    line-height: 20px;
    max-width: 305px;
  }
}
@media screen and (max-width: 1024px) {
  .grid {
    grid-gap: 20px;
    grid-template-columns: repeat(4, 130px);
  }
  .text-block__paragraph {
    font-size: 13px;
    line-height: 16px;
    max-width: 260px;
  }
}
@media screen and (max-width: 768px) {
  .instagram {
    flex-direction: column;
    width: 90%;
    max-width: 688px;
  }
  .text-block {
    align-items: center;
    margin: 0 auto 60px auto;
  }
}
</style>
