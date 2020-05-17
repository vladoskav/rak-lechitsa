<template>
  <section class="instagram">
    <container class="container">
      <div class="instagram__text">
        <insta-title :theme="'line'" class="text-block__title">
          <a
            href="https://www.instagram.com/raklechitsa"
            target="_blank"
            class="text-block__link"
          >
            Инстаграм</a
          ></insta-title
        >

        <p class="text-block__paragraph">
          Два раза в неделю мы просматриваем все посты по хештегу #этонелечится.
          Все истории, где нет нецензурных выражений и запрещенного контента
          попадают сюда. Следите за правильным написанием хештега, чтобы мы не
          пропустили вашу историю.
        </p>
      </div>
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
    'insta-title': Title,
    'container': Container,
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
  justify-content: space-between;
}

.text-block__title {
  margin-bottom: 32px;
}

.grid__element {
  width: 13.54vw;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
}

.instagram {
  padding: 100px 60px 100px 60px;
}

.text-block__link {
  color: #000;
}

.text-block__paragraph {
  font-family: 'Inter';
  font-style: normal;
  font-weight: normal;
  font-size: 1.125rem;
  line-height: 1.375rem;
  color: #666;
}

.instagram__text {
  margin-right: 110px;
}

@media screen and (max-width: 1280px) {
  .instagram {
    padding: 90px 50px 90px 50px;
  }

  .grid {
    grid-gap: 27px;
  }

  .grid__element {
    width: 13.36vw;
  }

  .text-block__paragraph {
    font-size: 1rem;
    line-height: 1.25rem;
  }
}

@media screen and (max-width: 1024px) {
  .grid {
    grid-gap: 20px;
  }

  .text-block__paragraph {
    font-size: 0.8125rem;
    line-height: 1rem;
  }

  .instagram__text {
    margin-right: 60px;
  }

  .grid__element {
    width: 13.28vw;
  }
}

@media screen and (max-width: 768px) {
  .instagram {
    padding: 80px 40px 80px 40px;
  }

  .container {
    display: block;
  }

  .text-block__title {
    margin: 0 auto 26px;
    text-align: center;
  }

  .instagram__text {
    margin: 0;
  }

  .text-block__paragraph {
    margin: 0 auto 60px;
    width: 380px;
  }

  .grid__element {
    width: 20.44vw;
  }
}

@media screen and (max-width: 320px) {
  .instagram {
    padding: 50px 15px 50px 15px;
  }

  .grid {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }

  .text-block__title {
    margin-bottom: 16px;
    text-align: left;
  }

  .text-block__paragraph {
    margin-bottom: 40px;
    width: 290px;
  }

  .grid__element {
    width: 43.75vw;
  }
}
</style>
