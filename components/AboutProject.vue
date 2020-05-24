<template>
  <section class="about-project">
    <container class="about-project__container">
      <h2 class="about-project__title">{{about.hashtag}}</h2>
      <st-title class="about-project__about">{{about.title}}</st-title>
      <div class="about__columns">
        <p class="about__paragraph" v-html="about.text">
        </p>

        <div class="about__texts">
          <div class="about__tumblers">
            <label
              @click="selectOption(1)"
              :class="{
                about__tumbler: true,
                about__tumbler_active: optionSelected === 1,
              }"
              >{{about.extraTexts[0].title}}</label
            >
            <label
              @click="selectOption(2)"
              :class="{
                about__tumbler: true,
                about__tumbler_active: optionSelected === 2,
              }"
              >{{about.extraTexts[1].title}}</label
            >
          </div>
          <div class="about__text" v-if="optionSelected === 1">
            <p class="about__detailed" v-html="about.extraTexts[0].text">
            </p>
          </div>
          <div class="about__text" v-if="optionSelected === 2">
            <p class="about__detailed" v-html="about.extraTexts[1].text">
            </p>
          </div>
        </div>
      </div>
    </container>
  </section>
</template>

<script>
import Container from '@/components/Container';
import Title from '@/components/ui/Title';
export default {
  components: {
    container: Container,
    'st-title': Title,
  },
  methods: {
    selectOption(option) {
      this.optionSelected = option;
    },
  },
  computed: {
    about() {
      const arr = this.$store.getters['texts/getText'];
      return arr.find(el => el.block === 'about');
    }
  },
  data() {
    return {
      optionSelected: 1,
    };
  },
};
</script>

<style scoped>
.about-project {
  background-color: #613a93;
  color: #dedede;
}

.about-project__container {
  padding-top: 90px;
  padding-bottom: 100px;
}

.about-project__title {
  margin-bottom: 70px;
  font-weight: 800;
  font-size: 64px;
  line-height: 77px;
  text-align: center;
  color: #fff;
}

.about-project__about {
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #fff;
}
.about__paragraph {
  max-width: 340px;
  font-size: 18px;
  line-height: 22px;
  font-style: normal;
  font-weight: normal;
}
.about__columns {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;
}
.about__tumblers {
  display: flex;
  flex-direction: column;
  margin-right: 40px;
  text-align: right;
}
.about__tumbler {
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 22px;
  font-weight: 500;
  color: #c9c9c9;
  cursor: pointer;
}
.about__tumbler:hover {
  color: #fff;
}
.about__tumbler_active {
  font-weight: 500;
  color: #fff;
}
.about__texts {
  display: flex;
}
.about__text {
  max-width: 640px;
  display: flex;
  flex-direction: column;
}
.about__detailed {
  min-height: 216px;
  width: 100%;
  font-size: 18px;
  line-height: 22px;
  font-weight: normal;
}

@media screen and (max-width: 1280px) {
  .about-project__container {
    padding-bottom: 90px;
  }
  .about-project__title {
    font-size: 58px;
    line-height: 70px;
  }
  .about-project__about {
    font-size: 28px;
    line-height: 32px;
  }
  .about__detailed {
    min-height: 280px;
  }
  .about__paragraph {
    font-size: 16px;
    line-height: 20px;
  }
}

@media screen and (max-width: 1024px) {
  .about-project__container {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .about-project__title {
    font-size: 52px;
    line-height: 63px;
  }
  .about-project__about {
    font-size: 24px;
    line-height: 28px;
  }
  .about__paragraph {
    font-size: 13px;
    line-height: 16px;
  }
  .about__detailed {
    min-height: 410px;
  }
  .about__tumbler {
    font-size: 15px;
    line-height: 19px;
  }
  .about__text {
    font-size: 15px;
    line-height: 19px;
  }
}

@media screen and (max-width: 768px) {
  .about-project__container {
    padding: 80px 0;
    margin: 0 auto;
    max-width: 380px;
  }
  .about-project__title {
    display: none;
  }
  .about-project__about {
    text-align: center;
  }
  .about__paragraph {
    margin: 0;
    max-width: 100%;
  }
  .about__detailed {
    min-height: 388px;
  }
  .about__columns {
    margin-top: 26px;
    flex-direction: column;
  }
  .about__texts {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .about__text {
    margin-top: 30px;
    max-width: 380px;
  }
  .about__tumblers {
    flex-direction: row;
  }
  .about__tumbler {
    margin: 0 30px 0 0;
  }
  .about__tumbler_active {
    border-bottom: 2px solid #fff;
  }
}

@media screen and (max-width: 480px) {
  .about-project__container {
    padding: 50px 15px;
    margin: 0 auto;
    max-width: 380px;
  }
  .about-project__about {
    font-size: 18px;
    line-height: 21px;
  }
  .about__tumbler {
    margin: 0 20px 0 0;
    font-size: 13px;
    line-height: 19px;
  }
  .about__detailed {
    min-height: 324px;
  }
  .about__texts {
    margin-top: 40px;
  }
  .about__text {
    font-size: 15px;
    line-height: 16px;
  }
}
</style>
