<template>
  <div>
    <stories />
    <instagram />
  </div>
</template>
<script>
import Stories from '@/components/Stories';
import LinkInstagram from '@/components/LinkInstagram';
export default {
  components: {
    stories: Stories,
    instagram: LinkInstagram,
  },
};
</script>

<style></style>
