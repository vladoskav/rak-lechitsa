<template>
  <ul class="grid">
    <li
      v-for="photo in instagram.slice(0, 8)"
      :key="instagram.indexOf(photo)"
      class="grid__link"
    >
      <a :href="photo.url" target="_blank">
        <img :src="photo.display_url" class="grid__photo" />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    instagram() {
      const { instagram } = this.$store.state;
      return instagram.instagram;
    },
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 30px;
  padding: 0;
}

.grid__photo {
  max-height: 195px;
  width: 100%;
  object-fit: cover;
}

.grid__link {
  list-style-type: none;
}

@media screen and (max-width: 1280px) {
  .grid {
    grid-gap: 27px;
  }

  .grid__photo {
    max-height: 171px;
  }
}

@media screen and (max-width: 1024px) {
  .grid {
    grid-gap: 20px;
  }

  .grid__photo {
    max-height: 136px;
  }
}

@media screen and (max-width: 768px) {
  .grid__photo {
    max-height: 157px;
  }
}

@media screen and (max-width: 420px) {
  .grid {
    grid-template-columns: repeat(2, auto);
    grid-gap: 10px;
  }

  .grid__photo {
    max-height: 140px;
  }
}
</style>
