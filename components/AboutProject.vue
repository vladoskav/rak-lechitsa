<template>
  <section class="about-project">
    <container class="about-project__container">
      <h2 class="about-project__title">{{ about.hashtag }}</h2>
      <st-title class="about-project__about">{{ about.title }}</st-title>
      <div class="about-project__columns">
        <p class="about-project__paragraph" v-html="about.text"></p>

        <div class="about-project__texts">
          <div class="about-project__tumblers">
            <label
              @click="selectOption(1)"
              :class="{
                'about-project__tumbler': true,
                'about-project__tumbler_active': optionSelected === 1,
              }"
              >{{ about.extraTexts[0].title }}</label
            >
            <label
              @click="selectOption(2)"
              :class="{
                'about-project__tumbler': true,
                'about-project__tumbler_active': optionSelected === 2,
              }"
              >{{ about.extraTexts[1].title }}</label
            >
          </div>
          <div class="about-project__text" v-if="optionSelected === 1">
            <p class="about-project__detailed" v-html="about.extraTexts[0].text"></p>
          </div>
          <div class="about-project__text" v-if="optionSelected === 2">
            <p class="about-project__detailed" v-html="about.extraTexts[1].text"></p>
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
    },
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
.about-project__paragraph {
  max-width: 340px;
  font-size: 18px;
  line-height: 22px;
  font-style: normal;
  font-weight: normal;
}
.about-project__columns {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;
}
.about-project__tumblers {
  display: flex;
  flex-direction: column;
  margin-right: 40px;
  text-align: right;
}
.about-project__tumbler {
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 22px;
  font-weight: 500;
  color: #c9c9c9;
  cursor: pointer;
}
.about-project__tumbler:hover {
  color: #fff;
}
.about-project__tumbler_active {
  font-weight: 500;
  color: #fff;
}
.about-project__texts {
  display: flex;
}
.about-project__text {
  max-width: 640px;
  display: flex;
  flex-direction: column;
}
.about-project__detailed {
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
  .about-project__detailed {
    min-height: 280px;
  }
  .about-project__paragraph {
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
  .about-project__paragraph {
    font-size: 13px;
    line-height: 16px;
  }
  .about-project__detailed {
    min-height: 295px;
    font-size: 15px;
    line-height: 19px;
  }
  .about-project__tumbler {
    font-size: 15px;
    line-height: 19px;
  }
  .about-project__text {
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
  .about-project__paragraph {
    margin: 0;
    max-width: 100%;
  }
  .about-project__detailed {
    min-height: 277px;
  }
  .about-project__columns {
    margin-top: 26px;
    flex-direction: column;
  }
  .about-project__texts {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .about-project__text {
    margin-top: 30px;
    max-width: 380px;
  }
  .about-project__tumblers {
    flex-direction: row;
  }
  .about-project__tumbler {
    margin: 0 30px 0 0;
  }
  .about-project__tumbler_active {
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
    text-align: left;
    font-size: 18px;
    line-height: 21px;
  }
  .about-project__tumbler {
    margin: 0 20px 0 0;
    font-size: 13px;
    line-height: 19px;
  }
  .about-project__detailed {
    min-height: 368px;
    font-size: 15px;
    line-height: 19px;
  }
  .about-project__texts {
    margin-top: 40px;
  }
  .about-project__text {
    font-size: 15px;
    line-height: 16px;
  }
}
</style>
