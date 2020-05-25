<template>
  <div>
    <cover />
    <storiesPeople />
    <motto>{{ mottoFirst.title }}&nbsp;</motto>
    <stories />
    <motto>{{ mottoSecond.title }}</motto>
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
import Motto from '../components/ui/Motto';
export default {
  components: {
    stories: Stories,
    instagram: LinkInstagram,
    cover: Cover,
    statistics: Statistics,
    storiesPeople: StoriesPeople,
    about: AboutProject,
    yourStory: YourStory,
    motto: Motto,
  },
  async fetch({ store, params }) {
    await store.dispatch('texts/fetchText');
  },

  computed: {
    mottoFirst() {
      const arr = this.$store.getters['texts/getText'];
      return arr.find(el => el.block === `note-1`);
    },
    mottoSecond() {
      const arr = this.$store.getters['texts/getText'];
      return arr.find(el => el.block === `note-2`);
    },
  },
};
</script>

<style></style>
