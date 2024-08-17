<template>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: green;">
    <div class="container">
      <router-link to="/home" class="navbar-brand no-underline">
        <img :src="logoSrc" alt="BookWorms" width="70" height="40" class="container d-flex align-items-start">
        BookWorms
      </router-link>
      <div class="ml-auto d-flex">
        <router-link to="/about">
          <button class="btn btn-outline-light">O NAMA</button>
        </router-link>
        <router-link to="/prijava">
          <button class="btn btn-outline-light" style="margin-left: 20px;">PRIJAVITE SE</button>
        </router-link>
      </div>
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

.no-underline {
  text-decoration: none;
  color: inherit;
}

.no-underline:hover {
  text-decoration: none;
}
</style>
