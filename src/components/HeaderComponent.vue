<template>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: var(--primary-green);">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../assets/logo1.png" alt="BookWorms" width="30" height="30" class="d-inline-block align-top">
        BookWorms
      </a>
      <button class="btn btn-outline-light ml-auto">PRIJAVITE SE</button>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'HeaderComponent'
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
  color: #fff;
  border-color: #fff;
}

.btn-outline-light:hover {
  color: #2E8B57;
  background-color: #fff;
  border-color: #fff;
}
</style>