<template>
  <div class="card mb-3 border-0 shadow-sm">
    <div class="row no-gutters">
      <div class="col-md-2">
        <img v-if="avatarSrc" :src="avatarSrc" :alt="username" class="card-img rounded-circle small-avatar p-2">
      </div>
      <div class="col-md-10">
        <div class="card-body">
          <h5 class="card-title text-primary">{{ username }}</h5>
          <p class="card-text">{{ postText }}</p>
          <img v-if="imageSrc" :src="imageSrc" :alt="imageAlt" class="img-fluid mt-2 post-image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserPost',
  props: {
    avatarSrc: String,
    username: String,
    postText: String,
    imageSrc: String,
    imageAlt: String
  }
}
</script>

<style scoped>
.small-avatar {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.post-image {
  max-width: 500px;
  max-height: 500px; 
  object-fit: cover; 
  border-radius: 8px; 
  margin-top: 10px;
}
</style>
