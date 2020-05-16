<template>
  <section class="about-project">
    <contain class="about-project__container">
      <h2 class="about-project__title">#РАКЛЕЧИТСЯ</h2>
      <st-title class="about-project__about">О проекте</st-title>
      <div class="about__columns">
        <div class="about__choose">
          <p class="about__paragraph">
            Этот проект был создан благотворительным фондом Константина Хабенского.
          </p>
          <div class="about__tumblers">
            <label
              @click="selectOption(1)"
              :class="{
                'about__tumbler': true,
                'about__tumbler_active': optionSelected === 1,}">Рак Лечится</label>
            <label
              @click="selectOption(2)"
              :class="{
                'about__tumbler': true,
                'about__tumbler_active': optionSelected === 2,}">Фонд Хабенского</label>
          </div>
        </div>

        <div class="about__texts">
          <div class="about__text" v-if="optionSelected === 1">
            <p class="about__detailed">
              Есть вещи, которые не&nbsp;лечатся. Особенности характера, 
              страстные увлечения, привычки, ставшие частью нашего &laquo;я&raquo;, 
              фобии, которые мы&nbsp;приобрели в&nbsp;детстве. Список можно продолжать 
              до&nbsp;бесконечности, но&nbsp;одна болезнь в&nbsp;него точно не&nbsp;войдет. 
              Эта болезнь&nbsp;&mdash; рак. Рак лечится, и&nbsp;лучшее доказательство&nbsp;&mdash; 
              люди с&nbsp;их&nbsp;неизлечимыми особенностями, которые сумели победить рак.
            </p>
          </div>
          <div class="about__text" v-if="optionSelected === 2">
            <p class="about__detailed">
              Рак лечится&nbsp;&mdash; проект Благотворительного Фонда Константина Хабенского и&nbsp;Leo 
              Burnett Moscow. С&nbsp;его помощью мы&nbsp;надеемся изменить отношение людей к&nbsp;раку 
              и&nbsp;заставить каждого поверить: онкологическое заболевание&nbsp;&mdash; это не&nbsp;приговор.
            </p>
          </div>
        </div>
      </div>
    </contain>
  </section>
</template>

<script>
import Container from '@/components/Container';
import Title from '@/components/ui/Title';
export default {
  components: {
    'contain': Container,
    'st-title': Title,
  },
  methods: {
    selectOption(option) {
      this.optionSelected = option;
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
  background-color: #613A93;
  color: #DEDEDE;
  padding-left: 60px;
  padding-right: 60px;
}

.about-project__container {
  padding: 90px 0 100px 0;
}

.about-project__title {
  margin-bottom: 70px;
  font-weight: 800;
  font-size: 64px;
  line-height: 77px;
  text-align: center;
  color: #FFF;
}

.about-project__about {
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #FFF;  
}
.about__paragraph {
  max-width: 340px;
  font-size: 1.125rem;
  line-height: 1.375rem;
  font-style: normal;
  font-weight: normal;
}
.about__columns {
  display: grid;
  grid-template-columns: 1fr auto;
  margin-top: 32px;
}
.about__choose {
  display: flex;
  justify-content: space-between;
}
.about__tumblers {
  margin-right: 40px;
}
.about__tumbler {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  font-size: 1.125rem;
  line-height: 1.375rem;
  font-weight: normal;
  color: #C9C9C9;;
  cursor: pointer;
}
.about__tumbler:hover {
  color: #FFF;
}
.about__tumbler_active {
  font-weight: 500;
  color: #FFF;
}
.about__texts {
  display: flex;
  max-width: 640px;
}
.about__text {
  display: flex;
  flex-direction: column;
}
.about__detailed {
  width: 100%;
  font-size: 1.125rem;
  line-height: 1.375rem;
  font-weight: normal;
}
</style>
