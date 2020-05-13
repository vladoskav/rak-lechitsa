<template>
  <div>
    <cover />
    <storiesPeople />
    <motto>и в отличие от рака,&nbsp;</motto>
    <stories />
    <motto>рассказывайте ваши истории в&nbsp;инстаграм&NewLine;</motto>
    <instagram />
    <yourStory @btnClick="popupHandler" />
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
};
</script>

<style></style>
