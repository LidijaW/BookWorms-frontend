<template>
  <div id="app">
    <HeaderComponent />
    <router-view/>
    <FooterSection />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterSection from './components/FooterSection.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterSection
  }
}
</script>

<style scoped>
:root {
  --primary-green: #2E8B57;
  --light-mint: #E6F3EC;
  --text-dark: #333333;
}

body {
  color: var(--text-dark);
}

.btn-primary {
  background-color: var(--primary-green);
  border-color: var(--primary-green);
}

.btn-primary:hover {
  background-color: #236b43;
  border-color: #236b43;
}

.bg-light-mint {
  background-color: var(--light-mint);
}
</style>
