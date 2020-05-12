<template>
  <div>
    <cover />
    <storiesPeople />
    <stories />
    <instagram />
    <yourStory />
    <statistics />
    <about />
  </div>
</template>
<script>
import Stories from '@/components/Stories';
import LinkInstagram from '@/components/LinkInstagram';
import Cover from '../components/Cover';
import Statistics from '@/components/Statistics';
import StoriesPeople from '@/components/StoriesPeople';
import AboutProject from '@/components/AboutProject';
import YourStory from '@/components/YourStory';
export default {
  components: {
    stories: Stories,
    instagram: LinkInstagram,
    cover: Cover,
    statistics: Statistics,
    storiesPeople: StoriesPeople,
    about: AboutProject,
    yourStory: YourStory,
  },
};
</script>

<style></style>
