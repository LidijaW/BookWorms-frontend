<template>
    <div class="container my-5">
      <div class="row bg-light-mint p-4 rounded">
        <div class="col-md-7">
          <h2 class="featurette-heading">{{ title }}</h2>
          <p class="lead">{{ description }}</p>
        </div>
        <div class="col-md-5">
          <img class="img-fluid mx-auto rounded" :src="imageSrc" :alt="imageAlt">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FeatureSection',
    props: {
      title: String,
      description: String,
      imageSrc: String,
      imageAlt: String
    }
  }
  </script>