<template>
  <div>
    <cover />
    <stories />
    <instagram />
    <statistics />
    <storiesPeople></storiesPeople>
    <about></about>
  </div>
</template>
<script>

import Stories from '@/components/Stories';
import LinkInstagram from '@/components/LinkInstagram';
import Cover from '../components/Cover';
import Statistics from '@/components/Statistics';
import StoriesPeople from '@/components/StoriesPeople'
import AboutProject from '@/components/AboutProject'

export default {
  components: {
    stories: Stories,
    instagram: LinkInstagram,
    cover: Cover,
    'statistics' : Statistics,
    'storiesPeople': StoriesPeople,
    'about': AboutProject,


  },
};
</script>

<style></style>
