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
  display: grid;
  grid-template-columns: 300px auto;
  grid-gap: 110px;
}

.text-block__title {
  margin-bottom: 32px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
}

.instagram {
  padding: 100px 0;
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
  max-width: 340px;
}

@media screen and (max-width: 1280px) {
  .instagram {
    padding: 90px 0;
  }

  .grid {
    grid-gap: 27px;
  }

  .container {
    grid-gap: 80px;
  }

  .text-block__paragraph {
    font-size: 1rem;
    line-height: 1.25rem;
  }
}

@media screen and (max-width: 1024px) {
  .instagram {
    padding: 80px 0;
  }

  .grid {
    grid-gap: 20px;
  }

  .text-block__paragraph {
    font-size: 0.8125rem;
    line-height: 1rem;
  }

  .container {
    grid-template-columns: 260px auto;
    grid-gap: 40px;
  }
}

@media screen and (max-width: 900px) {
  .container {
    grid-gap: 30px;
  }
}

@media screen and (max-width: 768px) {
  .container {
    display: block;
  }

  .text-block__title {
    margin: 0 auto 26px;
    text-align: center;
  }

  .instagram__text {
    max-width: 100%;
  }

  .text-block__paragraph {
    margin: 0 auto 60px;
    max-width: 380px;
  }

  .grid__element {
    width: 100%;
  }
}

@media screen and (max-width: 420px) {
  .instagram {
    padding: 50px 0;
  }

  .grid {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }
}

@media screen and (max-width: 320px) {
  .text-block__title {
    margin-bottom: 16px;
    text-align: left;
    max-width: 100%;
  }

  .text-block__paragraph {
    margin-bottom: 40px;
    width: 100%;
  }
}
</style>
