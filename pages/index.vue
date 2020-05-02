<template>
  <div class="container">
    <main-header></main-header>
    <section class="cover-video"></section>
    <div class="slider"></div>
    <motto></motto>
    <search></search>
    <section class="stories-stars">
      <StoriStar></StoriStar>
    </section>
    <section class="stories-people">
      <StoriHuman></StoriHuman>>
    </section>
    <section class="stories-instagram"></section>
    <section class="forms"></section>
    <section class="statistics"></section>
    <section class="about-priject"></section>
    <main-footer></main-footer>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import search from '@/components/ui/search';
import Motto from '@/components/Motto';
import StoriStar from '@/components/StoriStar';
import StoriHuman from '@/components/StoriHuman';

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
    search,
    motto: Motto,
    StoriStar,
    StoriHuman,
  },
};
</script>

<style>
</style>
