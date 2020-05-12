<template>
  <div class="about-project">
    <section class="about-project__container">
      <h2 class="about-project__header">#РАКЛЕЧИТСЯ</h2>
      <h3 class="about-project__title">О проекте</h3>
      <div class="about-project__body">
        <p class="about-project__copy">
          Этот проект был создан благотворительным фондом Константина
          Хабенского.
        </p>

        <div class="slider">
          <input class="slider__input" type="radio" id="btn-1" name="link" checked />
          <input class="slider__input" type="radio" id="btn-2" name="link" />
          <div class="slider__controls">
            <label class="slider__btn" for="btn-1">Рак Лечится</label>
            <label class="slider__btn" for="btn-2">Фонд Хабенского</label>
          </div>
          <ul class="slider__slides">
            <li class="slider__slide1">
              <p class="slider__text">
                Есть вещи, которые не лечатся. Особенности характера, страстные увлечения, привычки,
                ставшие частью нашего «я», фобии, которые мы приобрели в детстве. Список можно
                продолжать до бесконечности, но одна болезнь в него точно не войдет. Эта болезнь —
                рак.
                Рак лечится, и лучшее доказательство — люди с их неизлечимыми особенностями, которые
                сумели победить рак.
              </p>
              <p class="slider__text">
                Рак лечится — проект Благотворительного Фонда Константина Хабенского и Leo Burnett
                Moscow. С его помощью мы надеемся изменить отношение людей к раку и заставить
                каждого
                поверить: онкологическое заболевание — это не приговор.
              </p>
            </li>
            <li class="slider__slide2">
              <p class="slider__text">
                Благотворительный Фонд Константина Хабенского с 2008 года помогает детям с
                онкологическими и другими тяжелыми заболеваниями головного мозга. Фонд не только
                поддерживает семью заболевшего ребенка в самый сложный момент, оплачивая
                обследования,
                лечение и медицинские препараты, но и в целом меняет систему оказания помощи детям с
                опухолями мозга в России.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
export default {};
</script>

<style scoped>
.about-project {
  background-color: #613a93;
}

.about-project__container {
  max-width: 1320px;
  min-height: 650px;
  margin: 0 auto;
  padding-top: 90px;
}

@media (max-width: 1320px) {
  .about-project__container {
    margin: 0 60px;
  }
}

.about-project__header {
  max-width: 720px;
  margin: 0 auto;
  margin-bottom: 70px;
  color: #ffffff;
  font-weight: 800;
  font-size: 64px;
  line-height: 77px;
  text-align: center;
}

.about-project__body {
  display: grid;
  grid-template-columns: 1fr 2fr;
}

.about-project__description {
  max-width: 413px;
}

.about-project__title {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #ffffff;
  margin-bottom: 32px;
}

.about-project__copy {
  max-width: 340px;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #dedede;
}

.slider {
  display: grid;
  grid-template-columns: max-content max-content;
  column-gap: 40px;
  justify-content: end;
}

.slider__input {
  display: none;
}

.slider__input:checked:nth-child(1)
  ~ .slider__controls
  .slider__btn:nth-child(1),
.slider__input:checked:nth-child(2)
  ~ .slider__controls
  .slider__btn:nth-child(2) {
  color: #ffffff;
}

.slider__input:checked:nth-child(1) ~ .slider__slides .slider__slide2,
.slider__input:checked:nth-child(2) ~ .slider__slides .slider__slide1 {
  display: none;
}

.slider__btn {
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #dedede;
  text-align: right;
  margin-bottom: 10px;
  transition: all 0.3s ease;
}

.slider__btn:hover {
  font-weight: normal;
  color: #ffffff;
  cursor: pointer;
}

.slider__input:checked ~ .slider__controls .slider__btn:hover {
  font-weight: 500;
  color: #ffffff;
}

.slider__btn:nth-last-child(1) {
  margin-bottom: 0px;
}

.slider__controls {
  display: flex;
  flex-direction: column;
}

.slider__slides {
  list-style: none;
  max-width: 645px;
}

.slider__text {
  color: #dedede;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 22px;
}

.slider__text:nth-last-child(1) {
  margin-bottom: 0px;
}
</style>

