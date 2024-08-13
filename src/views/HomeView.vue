<template>
  <div>
    <!-- Header Section -->
    <HeaderComponent />

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
      <!-- Add more UserPost components as needed -->
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import HeroComponent from '@/components/HeroComponent.vue'
import FeatureSection from '@/components/FeatureSection.vue'
import UserPost from '@/components/UserPost.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    HeroComponent,
    FeatureSection,
    UserPost
  }
}
</script>

<style scoped>
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

/* Adding margin between the sections */
.row {
  margin-bottom: 2rem; /* Adjust this value for more or less spacing */
}

/* Additional styling for the user post section */
.text-center {
  text-align: center;
}

.my-5 {
  margin-top: 3rem;
  margin-bottom: 3rem;
}
</style>