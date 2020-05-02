<template>
  <div>
    <Header></Header>
    <div class="breadcrumbs">
      <a href></a>
      <a href></a>
    </div>
    <search></search>
    <motto></motto>
    <section class="stories-people"></section>
    <Header></Header>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import search from '@/components/ui/search';
import Motto from '@/components/Motto';
export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
    search,
    'motto' : Motto
  }
};
</script>

<style scoped>
</style>
