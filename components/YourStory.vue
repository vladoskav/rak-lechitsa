<template>
  <section class="your-story">
    <container class="your-story__container">
      <st-title class="title">{{ story.title }}</st-title>
      <div class="your-story__columns">
        <p class="your-story__paragraph" v-html="story.text"></p>

        <div class="your-story__options">
          <div class="your-story__option-labels">
            <label
              @click="selectOption(1)"
              :class="{
                'your-story__option-label': true,
                'your-story__option-label_active': optionSelected === 1,
              }"
            >
              {{ story.extraTexts[0].title }}
            </label>
            <label
              @click="selectOption(2)"
              :class="{
                'your-story__option-label': true,
                'your-story__option-label_active': optionSelected === 2,
              }"
            >
              {{ story.extraTexts[1].title }}
            </label>
          </div>
          <div class="your-story__option" v-if="optionSelected === 1">
            <p
              class="your-story__option-description"
              v-html="story.extraTexts[0].text"
            ></p>
          </div>
          <div class="your-story__option" v-if="optionSelected === 2">
            <p
              class="your-story__option-description"
              v-html="story.extraTexts[1].text"
            ></p>
          </div>
          <dark-button
            class="your-story__button"
            @darkClick="showPopup('popupShown')"
            v-if="optionSelected === 1"
          >
            Заполнить форму
          </dark-button>
          <dark-button
            class="your-story__button"
            @darkClick="showPopup('popupContact')"
            v-if="optionSelected === 2"
          >
            Оставить контакт
          </dark-button>
        </div>
      </div>
    </container>
  </section>
</template>

<script>
import Button from '@/components/ui/button';
import Title from '@/components/ui/Title';
import Container from '@/components/Container';
export default {
  components: {
    'dark-button': Button,
    'st-title': Title,
    container: Container,
  },
  methods: {
    showPopup(popup) {
      this.$store.commit('popup/togglePopup', popup);
    },
    selectOption(option) {
      this.optionSelected = option;
    },
  },
  computed: {
    story() {
      const arr = this.$store.getters['texts/getText'];
      return arr.find(el => el.block === 'story');
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
.your-story {
  background-color: #f7f7f7;
  display: flex;
}
.your-story__container {
  padding-top: 90px;
  padding-bottom: 100px;
}
.title {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}
.your-story__paragraph {
  margin-right: 195px;
  max-width: 340px;
  font-size: 18px;
  line-height: 22px;
  font-style: normal;
  font-weight: normal;
  color: #666;
}
.your-story__columns {
  display: flex;
  flex-direction: row;
  margin-top: 32px;
}
.your-story__option-labels {
  grid-area: tumbler;
  display: flex;
  flex-direction: column;
  margin-right: 40px;
}
.your-story__option-label {
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 22px;
  font-weight: normal;
  color: #666;
  cursor: pointer;
}
.your-story__option-label:hover {
  color: #000;
}
.your-story__option-label_active {
  font-weight: 500;
  color: #000;
}
.your-story__options {
  display: grid;
  grid-row: 1fr 1fr;
  grid-column: 1fr 1fr;
  grid-template-areas:
    'tumbler story'
    '... button';
}
.your-story__option {
  grid-area: story;
  display: flex;
  flex-direction: column;
  max-width: 640px;
}
.your-story__option-description {
  min-height: 87px;
  font-size: 18px;
  line-height: 22px;
  font-weight: normal;
  color: #666;
}
.your-story__button {
  grid-area: button;
  grid-row: 2/3;
  grid-column: 2/3;
}
@media screen and (max-width: 1280px) {
  .your-story__container {
    padding-top: 90px;
    padding-bottom: 90px;
  }
  .title {
    font-size: 28px;
    line-height: 32px;
  }
  .your-story__paragraph {
    font-size: 16px;
    line-height: 20px;
  }
}

@media screen and (max-width: 1024px) {
  .your-story__container {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .title {
    font-size: 24px;
    line-height: 28px;
  }
  .your-story__paragraph {
    font-size: 13px;
    line-height: 16px;
  }
  .your-story__option-label {
    font-size: 15px;
    line-height: 19px;
  }
  .your-story__option-description {
    min-height: 92px;
    font-size: 15px;
    line-height: 19px;
  }
}

@media screen and (max-width: 768px) {
  .your-story__container {
    margin: 0 auto;
    max-width: 380px;
  }
  .title {
    text-align: center;
  }
  .your-story__paragraph {
    margin: 0;
    max-width: 100%;
  }
  .your-story__columns {
    margin-top: 26px;
    flex-direction: column;
  }
  .your-story__options {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .your-story__option {
    margin-top: 30px;
    max-width: 380px;
  }
  .your-story__option-labels {
    flex-direction: row;
  }
  .your-story__option-label {
    margin: 0 30px 0 0;
  }
  .your-story__option-label_active {
    border-bottom: 2px solid #613a93;
  }
  .your-story__button {
    margin-top: 50px;
  }
  .your-story__option-description {
    min-height: 110px;
  }
}

@media screen and (max-width: 480px) {
  .title {
    font-size: 18px;
    line-height: 21px;
  }
  .your-story__option-label {
    font-size: 13px;
    line-height: 19px;
  }
  .your-story__option-description {
    font-size: 15px;
    line-height: 16px;
  }
}
</style>
