<template>
  <div>
    <cover />
    <storiesPeople />
    <motto>и в отличие от рака,&nbsp;</motto>
    <stories />
    <motto>рассказывайте ваши истории в&nbsp;инстаграм&NewLine;</motto>
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
import Video from '@/components/Video';
import AboutProject from '@/components/AboutProject';
import YourStory from '@/components/YourStory';
import Motto from '../components/ui/Motto';
export default {
  components: {
    stories: Stories,
    instagram: LinkInstagram,
    cover: Cover,
    statistics: Statistics,
    'video-frame': Video,
    about: AboutProject,
    yourStory: YourStory,
    motto: Motto,
  },
  async fetch({ store, params }) {
    await store.dispatch('texts/fetchText');
    await store.dispatch('video/fetchUrl');
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
