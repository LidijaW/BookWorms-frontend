<template>
  <div class="card mb-3 border-0 shadow-sm">
    <img v-if="imageSrc" :src="imageSrc" :alt="imageAlt" class="img-fluid post-image">
  </div>
</template>

<script>
export default {
  name: 'UserPost',
  props: {
    imageSrc: String,
    imageAlt: String
  }
}
</script>

<style scoped>
.img-fluid {
  max-width: 100%;
  height: auto;
}

.post-image {
  width: 100%;
  height: auto;
  max-width: 1400px;  
  max-height: 900px;  
  object-fit: cover;
  border-radius: 8px;
}
</style>
