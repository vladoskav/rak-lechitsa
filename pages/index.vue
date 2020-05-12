<template>
  <div>
    <cover />
    <stories />
    <instagram />
  </div>
</template>
<script>
export default {
  components: {
=======
import Stories from '@/components/Stories';
import LinkInstagram from '@/components/LinkInstagram';
import Cover from '../components/Cover';

export default {
  components: {
    stories: Stories,
    instagram: LinkInstagram,
        cover: Cover,

  },
};
</script>

<style></style>
