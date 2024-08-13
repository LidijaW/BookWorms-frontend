<template>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: green;">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img :src="logoSrc" alt="BookWorms" width="70" height="40" class="container d-flex align-items-start">
        BookWorms
      </a>
      <button class="btn btn-outline-light ml-auto">PRIJAVITE SE</button>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      logoSrc: require('@/assets/logo1.png'),
    }
  }

}
</script>

<style scoped>
:root {
  --primary-green: #2E8B57;
}

.navbar {
  background-color: var(--primary-green);
}

.btn-outline-light {
  color: #ffffff;
  border-color: #ffffff;
}

.btn-outline-light:hover {
  color: #2E8B57;
  background-color: #fff;
  border-color: #2E8B57;
}
</style>