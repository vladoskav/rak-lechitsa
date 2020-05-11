<template>
    <div class="politic__container">
        <hr class="politics__line">
        <h1 class="politics__title politics_font">Политика проекта в&nbsp;отношении обработки персональных данных.</h1>
        <hr class="politics__line">
        <h2 class="politics__subtitle politics_font">1. Общие положения.</h2>
        <p class="politics__paragraph politics_font">Настоящая политика обработки персональных данных составлена в&nbsp;соответствии 
            с&nbsp;требованиями Федерального закона от&nbsp;27.07.2006. &#8470;&nbsp;152-ФЗ &laquo;О&nbsp;персональных 
            данных&raquo; и&nbsp;определяет порядок обработки персональных данных и&nbsp;меры по&nbsp;обеспечению 
            безопасности персональных данных Благотворительный Фонд Константина Хабенского (далее&nbsp;&mdash; Оператор).
        </p>
        <div class="politics__numbering">
            <p class="politics__number politics_font">1</p> 
            <p class="politics__paragraph politics_font">Оператор ставит своей важнейшей целью и&nbsp;условием осуществления своей деятельности соблюдение прав 
                и&nbsp;свобод человека и&nbsp;гражданина при обработке его персональных данных, в&nbsp;том числе защиты 
                прав на&nbsp;неприкосновенность частной жизни, личную и&nbsp;семейную тайну.
            </p>
        </div>
        <div class="politics__numbering">
            <p class="politics__number politics_font">2</p> 
            <p class="politics__paragraph politics_font">Настоящая политика Оператора в&nbsp;отношении обработки персональных данных (далее&nbsp;&mdash; Политика) 
            применяется ко&nbsp;всей информации, которую Оператор может получить о&nbsp;посетителях веб-сайта 
            http://raklechitsa.ru.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.politics_font{
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    color: #000000;
}
.politic__container{
    padding-top: 100px;
    display: flex;
    max-width: 780px;
    flex-direction: column;
    margin: 0 auto;
}
.politics__line{
    margin: 30px auto 30px auto;
    width: 100%;
    border: none;
    background: #EFEFEF;
    height: 1px;
}
.politics__title{
    text-align: center;
    padding: 0;
    margin: 0;
    font-weight: 500;
    font-size: 38px;
    line-height: 48px;
}
.politics__subtitle{
    margin: 100px auto 40px 0;
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
}
.politics__paragraph{
    margin: 0;
    font-size: 22px;
    line-height: 30px;
}
.politics__numbering{
    display: flex;
    flex-direction: row;
    margin: 30px 0 0 0;
    padding: 0;
}
.politics__number{
    margin-right: 25px;
    font-size: 22px;
    line-height: 30px;
}
@media screen and (max-width: 1280px) {
.politic__container{
    padding-top: 90px;
    max-width: 780px;
}
.politics__title{
    font-size: 34px;
    line-height: 44px;
}
.politics__subtitle{
    margin: 90px auto 40px 0;
    font-size: 20px;
    line-height: 28px;
}
.politics__paragraph{
    font-size: 20px;
    line-height: 28px;
}
}
@media screen and (max-width: 1024px) {
.politic__container{
    padding-top: 80px;
    max-width: 740px;
}
.politics__title{
    font-size: 30px;
    line-height: 38px;
}
.politics__subtitle{
    margin: 80px auto 40px 0;
    font-size: 18px;
    line-height: 27px;
}
.politics__paragraph{
    font-size: 18px;
    line-height: 27px;
}
.politics__number{
    font-size: 18px;
    line-height: 27px;
}
}
@media screen and (max-width: 768px) {
.politic__container{
    max-width: 640px;
}
}
@media screen and (max-width: 450px) {
.politic__container{
    padding-top: 40px;
    max-width: 290px;
}
.politics__title{
    font-size: 18px;
    line-height: 21px;
}
.politics__subtitle{
    margin: 30px auto 20px 0;
    font-size: 13px;
    line-height: 16px;
}
.politics__paragraph{
    font-size: 13px;
    line-height: 16px;
}
.politics__number{
    font-size: 13px;
    line-height: 16px;
}
}
</style>