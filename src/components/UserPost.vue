<template>
  <div class="card mb-3 border-0 shadow-sm">
    <div class="row no-gutters">
      <div class="col-md-2">
        <img :src="avatarSrc" :alt="username" class="card-img rounded-circle small-avatar p-2">
      </div>
      <div class="col-md-10">
        <div class="card-body">
          <h5 class="card-title text-primary">{{ username }}</h5>
          <p class="card-text">{{ postText }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import profileImage from '../assets/slika-user.png'; 

export default {
  name: 'UserPost',
  props: {
    username: String,
    postText: String
  },
  data() {
    return {
      avatarSrc: profileImage
    };
  }
}
</script>

<style scoped>
.small-avatar {
  width: 100px;
  height: 100px;
  object-fit: cover; /* Održava proporcije slike */
}
</style>