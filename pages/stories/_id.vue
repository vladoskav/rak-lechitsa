<template>
  <section class="single-story">
    <container class="container">
      <div class="upper-block">
        <div
          class="story__photo"
          :style="{ backgroundImage: `url('${story.url}')` }"
        ></div>
        <div class="text-block">
          <h2 class="story__title">
            Александр Тарханов: «Я не могу победить свою пунктуальность в
            отличии от рака»
          </h2>
          <div class="wrapper">
            <div
              class="story__photo_mini"
              :style="{ backgroundImage: `url('${story.url}')` }"
            ></div>
          </div>
          <a class="text-block__link" @click="showPopup('popupSocial')"
            >Поделитесь &#8599;</a
          >
          <p class="story__date">20 апреля 2018</p>
        </div>
      </div>
      <p class="story__text">
        Я из военной семьи. Отец хоть и не был военным сам, но нас всех держал в
        ежовых рукавицах. Думаю, поэтому мы и выросли такими ответственными. У
        меня дома до сих пор стоят часы в каждой комнате, хотя они и не нужны
        особо — я сам чувствую, опаздываю куда-то или нет, отстаю от нужного
        графика или опережаю. Вот такие встроенные внутренние часы! Будильник
        мне тоже не нужен — я всегда встаю раньше. Одеваюсь тоже быстро, как в
        армии, за 45 секунд.  «В футболе если команда опоздала на 15 минут, ей
        засчитывается поражение». Опаздывать я тоже не люблю, на все встречи
        прихожу заранее. Если знаю, что могу попасть по дороге в пробку, то не
        еду на машине. В аэропорт приезжаю задолго до начала регистрации. Лучше
        подожду и кофе попью, чем опоздаю! Когда мне было 16 лет, мне в школе
        геометрию нужно было пересдавать. Я билеты выучил, знал абсолютно все.
        Пришел в нужное время, а учительница — нет. Ну, я какое-то время
        подождал ее и ушел. Потом она спрашивала: «Почему не дождался?». Я
        ответил: «В футболе если команда опоздала на 15 минут, ей засчитывается
        поражение». Экзамен мне все-таки поставили! Сейчас если кто-то из
        футболистов моей команды опаздывает — начинаю злиться, могу и
        прикрикнуть потом. А если кто-то опоздал на тренировку перед игрой —
        все, подготовка насмарку. Я сразу начинаю думать тогда: «Значит, точно
        проиграем». Такая болезненная пунктуальность уже не лечится. В отличие
        от рака. «Сейчас если кто-то из футболистов моей команды опаздывает —
        начинаю злиться, могу и прикрикнуть потом. А если кто-то опоздал на
        тренировку перед игрой — все, подготовка насмарку. Я сразу начинаю
        думать тогда: «Значит, точно проиграем». Такая болезненная
        пунктуальность уже не лечится»
      </p>
      <div class="link-box">
        <a class="link" @click="showPopup('popupSocial')"
          >Поделитесь этой статьей в своих социальных сетях &#8599;</a
        >
      </div>
      <ul class="stories-section__grid">
        <li v-for="story in stories" :key="story.id" class="grid-item">
          <Story
            @cardClick="goToStory(story.id)"
            :author="story.author"
            :image="story.url"
            :text="story.text"
          />
        </li>
      </ul>
      <stories-button>
        Больше историй
      </stories-button>
    </container>
  </section>
</template>

<script>
import Container from '../../components/Container';
import Story from '../../components/Story';
import StoriesButton from '../../components/ui/StoriesButton';
export default {
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
    story() {
      return this.$store.getters['stories/getSingleStory'];
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
  },
  components: {
    container: Container,
    Story: Story,
    'stories-button': StoriesButton,
  },
};
</script>

<style scoped>
.stories-section__grid {
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
.link {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #121212;
  text-decoration: none;
  transition: opacity 0.3s linear;
}
.link:hover {
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
  padding: 100px 60px;
}
.text-block {
  padding-top: 30px;
  padding-bottom: 30px;
  position: relative;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
}
.story__date {
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
.story__photo {
  width: 100%;
  height: 100%;
  padding-bottom: 100%;
  background-size: cover;
}
.story__title {
  font-style: normal;
  font-weight: 500;
  font-size: 38px;
  line-height: 48px;
  color: #000;
}
.story__text {
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
    padding: 100px 50px 90px 50px;
  }
  .story__text {
    font-size: 20px;
    line-height: 28px;
  }
  .story__text {
    margin-bottom: 60px;
  }
  .link-box {
    margin-bottom: 150px;
  }
  .stories-section__grid {
    margin-bottom: 60px;
  }
}
@media screen and (max-width: 1024px) {
  .upper-block {
    grid-template-columns: minmax(180px, 407px) minmax(300px, 477px);
    grid-gap: 40px;
  }
  .story__title {
    font-size: 30px;
    line-height: 38px;
  }
  .text-block__link {
    font-size: 16px;
    line-height: 24px;
  }
  .story__date {
    font-size: 16px;
    line-height: 24px;
  }
  .story__text {
    font-size: 18px;
    line-height: 27px;
  }
  .stories-section__grid {
    grid-gap: 30px;
  }
  .single-story {
    padding: 100px 50px 80px 50px;
  }
  .link-box {
    margin-bottom: 120px;
    padding: 24px 0;
  }
  .link {
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
  .story__photo {
    display: none;
  }
  .wrapper {
    width: 100%;
    padding: 60px 110px;
  }
  .story__photo_mini {
    width: 100%;
    padding-bottom: 100%;
    background-size: cover;
  }
  .single-story {
    padding: 80px 40px;
  }
  .stories-section__grid {
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .text-block {
    width: 100%;
  }
  .upper-block {
    max-width: 640px;
    margin: 0 auto;
  }
  .story__title {
    text-align: center;
  }
  .story__text {
    max-width: 640px;
  }
  .link-box {
    max-width: 640px;
  }
}
@media screen and (max-width: 320px) {
  .story__title {
    font-size: 18px;
    line-height: 21px;
  }
  .story__text {
    font-size: 13px;
    line-height: 16px;
  }
  .text-block__link {
    font-size: 13px;
    line-height: 16px;
  }
  .story__date {
    font-size: 13px;
    line-height: 16px;
  }
  .wrapper {
    padding: 30px 0;
  }
  .stories-section__grid {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
  }
  .grid-item {
    margin-bottom: 30px;
  }
  .grid-item:last-child {
    margin-bottom: 0;
  }
  .single-story {
    padding: 50px 15px;
  }
  .link-box {
    margin-bottom: 100px;
  }
}
</style>
