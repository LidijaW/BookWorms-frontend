<template>
    <div class="card mb-3 border-0 shadow-sm">
      <div class="row no-gutters">
        <div class="col-md-2">
          <img :src="avatarSrc" :alt="username" class="card-img rounded-circle p-2">
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
  export default {
    name: 'UserPost',
    props: {
      avatarSrc: String,
      username: String,
      postText: String
    }
  }
  </script>