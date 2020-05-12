<template>
  <div class="statistics">
    <st-title class="statistics__title">Статистика по онкозаболеваниям</st-title>
    <div class="statistics__container">
      <st-box class="statistics__box">
        <st-text class="statistics__text">Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918 000 человек.</st-text>
        <st-progress-bar :value='1' :maxValue='3' />
        <st-counter class='statistics__counter'>1 из 3</st-counter>
        <st-data-source class='statistics__data-source'>Левада-Центр 2018</st-data-source>
      </st-box>
      <st-box class="statistics__box">
        <st-text class="statistics__text">2,6% Россиян имеют онкозаболевания.</st-text>
        <st-progress-bar :value='10' :maxValue='100' />
        <st-counter class='statistics__counter'>3 700 000</st-counter>
        <st-data-source class='statistics__data-source'>Росстат 2018</st-data-source>
      </st-box>
      <st-box class="statistics__box">
        <st-text class="statistics__text">На 28% выросла доля выявления заболеваний на ранней стадии за 10 лет.</st-text>
        <st-double-progress-bar :oldValue='10' :newValue='80' :maxValue='100' />
        <st-counter class='statistics__counter'>↑28%</st-counter>
        <st-data-source class='statistics__data-source'>МНИОИ Герцена 2018</st-data-source>
      </st-box>
      <st-box class="statistics__box">
        <st-text class="statistics__text">На 25% снизилась смертность в течение первого года после постановки диагноза.</st-text>
        <st-double-progress-bar :oldValue='20' :newValue='70' :maxValue='100' />
        <st-counter class='statistics__counter'>↓25%</st-counter>
        <st-data-source class='statistics__data-source'>МНИОИ Герцена 2018</st-data-source>
      </st-box>
    </div>
  </div>
</template>

<script>
import Title from '@/components/ui/Title';
import Box from '@/components/ui/Box';
import TextBox from '@/components/ui/TextBox';
import ProgressBar from '@/components/ui/ProgressBar';
import Counter from '@/components/ui/Counter';
import DataSource from '@/components/ui/DataSource';
import DoubleProgressBar from '@/components/ui/DoubleProgressBar';
  export default {
    components: {
      'st-title' : Title,
      'st-box' : Box,
      'st-text' : TextBox,
      'st-progress-bar' : ProgressBar,
      'st-counter' : Counter,
      'st-data-source' : DataSource,
      'st-double-progress-bar' : DoubleProgressBar,
    },
  };
</script>

<style scoped>
.statistics__title {
  margin: 100px auto 0 60px;
}

.statistics__container {
  margin-top: 70px;
  margin-left: 60px;
  max-width: 90%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
}

.statistics__box {
  padding: 20px 20px;
}

.statistics__text {
  margin-bottom: 76px;
}

.statistics__counter {
  margin-top: 20px;
}

.statistics__data-source {
  margin-top: 20px;
}

@media screen and (max-width: 1280px) {
  .statistics__title {
    margin-top: 90px;
    margin-left: 50px;
  }

  .statistics__container {
    margin-top: 60px;
    margin-left: 50px;
  }

  .statistics__box {
    padding: 18px 18px;
  }

  .statistics__text {
    margin-bottom: 56px;
  }
}

@media screen and (max-width: 1024px) {
  .statistics__title {
    margin-top: 80px;
  }

  .statistics__container {
    margin-top: 46px;
    margin-left: 51px;
    grid-gap: 30px;
  }

  .statistics__box {
    padding: 10px 10px;
  }

  .statistics__text {
    margin-bottom: 54px;
  }

  .statistics__counter {
    margin-top: 10px;
  }

  .statistics__data-source {
    margin-top: 10px;
  }
}

@media screen and (max-width: 768px) {
  .statistics__title {
    margin-left: auto;
    text-align: center;
  }

  .statistics__container {
    margin-top: 60px;
    margin-left: 40px;
    grid-gap: 20px;
  }

  .statistics__text {
    margin-bottom: 62px;
  }
}

@media screen and (max-width: 320px) {
  .statistics__title {
    text-align: left;
  }

  .statistics__container {
    margin-top: 30px;
    margin-left: 15px;
    grid-gap: 10px;
  }
}

</style>
