<template>
  <div>
    <cover />
    <stories />
    <instagram />
    <statistics />

  </div>
</template>
<script>
import Stories from '@/components/Stories';
import LinkInstagram from '@/components/LinkInstagram';
import Cover from '../components/Cover';
import Statistics from '@/components/Statistics';

export default {
  components: {
    stories: Stories,
    instagram: LinkInstagram,
    cover: Cover,
    'statistics' : Statistics,


  },
};
</script>

<style></style>
