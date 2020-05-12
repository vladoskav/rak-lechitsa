<template>
  <section class="instagram">
    <div class="text-block">
      <a href="https://www.instagram.com/raklechitsa" class="text-block__link"
        ><h2 class="text-block__title">Инстаграм</h2></a
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
      />
    </div>
  </section>
</template>

<script>
import InstaElement from './ui/InstaElement';
export default {
  components: {
    'insta-element': InstaElement,
  },
  data() {
    return {
      images: [
        {
          url:
            'https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          link: 'https://www.instagram.com/raklechitsa',
        },
        {
          url:
            'https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          link: 'https://www.instagram.com/raklechitsa',
        },
        {
          url:
            'https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          link: 'https://www.instagram.com/raklechitsa',
        },
        {
          url:
            'https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          link: 'https://www.instagram.com/raklechitsa',
        },
        {
          url:
            'https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          link: 'https://www.instagram.com/raklechitsa',
        },
        {
          url:
            'https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          link: 'https://www.instagram.com/raklechitsa',
        },
        {
          url:
            'https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          link: 'https://www.instagram.com/raklechitsa',
        },
        {
          url:
            'https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          link: 'https://www.instagram.com/raklechitsa',
        },
      ],
    };
  },
};
</script>

<style scoped>
.grid__element {
  width: 14vw;
  max-width: 195px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
}
.instagram {
  margin: 0 auto;
  width: 92%;
  max-width: 1320px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.text-block__link {
  margin-bottom: 32px;
}
.text-block {
  display: flex;
  flex-direction: column;
  max-width: 340px;
  margin-right: 110px;
}
.text-block__title {
  font-family: Inter, Arial, SansSerif;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  text-decoration-line: underline;
  color: #000000;
}
.text-block__paragraph {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
}
@media screen and (max-width: 1280px) {
  .instagram {
    max-width: 1180px;
  }

  .text-block__title {
    font-size: 28px;
    line-height: 32px;
  }
  .text-block__paragraph {
    font-size: 16px;
    line-height: 20px;
  }
}
@media screen and (max-width: 1024px) {
  .instagram {
    width: 90%;
    max-width: 924px;
  }
  .text-block__title {
    font-size: 24px;
    line-height: 28px;
  }
  .text-block__paragraph {
    font-size: 13px;
    line-height: 16px;
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
