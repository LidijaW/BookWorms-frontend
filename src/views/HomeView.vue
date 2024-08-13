<template>
  <div>
    <!-- Directly added Header content for testing -->
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: var(--primary-green);">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="../assets/logo1.png" alt="BookWorms" width="30" height="30" class="d-inline-block align-top">
          BookWorms
        </a>
        <button class="btn btn-outline-light ml-auto">PRIJAVITE SE</button>
      </div>
    </nav>

    <!-- Hero Section -->
    <HeroComponent />

    <!-- First Feature Section -->
    <FeatureSection 
      title="Oprez na komunikaciju"
      description="Preporuča se roditeljima da komuniciraju umjesto njihove djece. Razgovarajte o važnosti poštovanja online pravila, sigurnosti i zaštite privatnosti. Edukacija o odgovornom ponašanju na internetu ključna je kako bi se djeca zaštitila od potencijalnih rizika."
      imageSrc="@/assets/home-slika2.png"
      imageAlt="Dijete s laptopom"
    />

    <!-- Second Feature Section -->
    <FeatureSection 
      title="Studenti i njihove skripte su dobrodošle!"
      description="Svaka skripta nosi sa sobom jedinstvenu priču, ideje i perspektive studenata koji su uložili napor kako bi razumjeli gradivo i izrazili uložito razumijevanje. Na našoj platformi studenti mogu bezbrižno razmjenjivati svoje radove za učenje."
      imageSrc="@/assets/home-slika3.png"
      imageAlt="Studenti rade zajedno"
    />
    
    <!-- User Post Section -->
    <div class="container my-5">
      <h2 class="text-center">Prodajte, donirajte i zamjenite vaše knjige</h2>
      <p class="text-center">Objavite svoje knjige i dijelite svoje materijale!</p>
      <UserPost
        avatarSrc="path-to-avatar1"
        username="@ivan.horvat"
        postText='Doniram knjigu Nikite Gill "Your Soul is a River"'
      />
    </div>
  </div>
</template>

<script>
import HeroComponent from '../components/HeroComponent.vue'
import FeatureSection from '../components/FeatureSection.vue'
import UserPost from '../components/UserPost.vue'

export default {
  name: 'HomeView',
  components: {
    HeroComponent,
    FeatureSection,
    UserPost
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
  color: #fff;
  border-color: #fff;
}

.btn-outline-light:hover {
  color: #2E8B57;
  background-color: #fff;
  border-color: #fff;
}

h1, h2 {
  color: #2c3e50;
}

p {
  font-size: 1.1em;
}

.container {
  max-width: 1200px;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.row {
  margin-bottom: 2rem;
}

.text-center {
  text-align: center;
}

.my-5 {
  margin-top: 3rem;
  margin-bottom: 3rem;
}
</style>