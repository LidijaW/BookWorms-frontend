<template>
  <div>
    <div style="height: 50px;"></div>

    <!-- Hero Section -->
    <HeroComponent />

    <!-- Feature Section Container with Arrows Closer to the Center -->
    <div class="feature-section-wrapper">
      <button @click="prevFeature" class="arrow-btn arrow-left">←</button>
      
      <FeatureSection 
        v-if="currentIndex === 0"
        title="Oprez na komunikaciju"
        description="Preporuča se roditeljima da komuniciraju umjesto njihove djece. Razgovarajte o važnosti poštovanja online pravila, sigurnosti i zaštite privatnosti. Edukacija o odgovornom ponašanju na internetu ključna je kako bi se djeca zaštitila od potencijalnih rizika."
        :imageSrc="firstFeatureImage"
        imageAlt="Dijete s laptopom"
      />
    
      <FeatureSection 
        v-if="currentIndex === 1"
        title="Studenti i njihove skripte su dobrodošle!"
        description="Svaka skripta nosi sa sobom jedinstvenu priču, ideje i perspektive studenata koji su uložili napor kako bi razumjeli gradivo i izrazili uložito razumijevanje. Na našoj platformi studenti mogu bezbrižno razmjenjivati svoje radove za učenje."
        :imageSrc="secondFeatureImage"
        imageAlt="Studenti rade zajedno"
      />

      <button @click="nextFeature" class="arrow-btn arrow-right">→</button>
    </div>

    <!-- User Post Section (below slideshow) -->
    <div class="container my-5">
      <h2 class="text-center">Prodajte, donirajte i zamjenite vaše knjige</h2>
      <p class="text-center">Objavite svoje knjige i dijelite svoje materijale!</p>
      
      <UserPost
        :avatarSrc="profileImage"
        username="@ivan.horvat"
        postText='Doniram knjigu Nikite Gill "Your Soul is a River"'
        :imageSrc="thirdFeatureImage"
        imageAlt="Book Exchange"
      />
    </div>

    <!-- Footer -->
    <footer class="footer">
      <div class="container text-center">
        <p class="footer-text">BookWorms</p>
        <p class="footer-text">Projekt iz kolegija "Web Aplikacije"</p>
        <div class="social-links">
          <a href="https://facebook.com" target="_blank" class="social-link">Facebook</a>
          <a href="https://instagram.com" target="_blank" class="social-link">Instagram</a>
          <a href="https://twitter.com" target="_blank" class="social-link">Twitter</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import HeroComponent from '../components/HeroComponent.vue'
import FeatureSection from '../components/FeatureSection.vue'
import UserPost from '../components/UserPost.vue'

import profileImage from '@/assets/slika-user.png';
import firstFeatureImage from '@/assets/home-slika3.png';
import secondFeatureImage from '@/assets/home-slika4.png';
import thirdFeatureImage from '@/assets/slika-user-blog.png';

export default {
  name: 'HomeView',
  components: {
    HeroComponent,
    FeatureSection,
    UserPost
  },
  data() {
    return {
      profileImage, 
      firstFeatureImage,
      secondFeatureImage,
      thirdFeatureImage,
      currentIndex: 0,  
      totalFeatures: 2 
    }
  },
  methods: {
    prevFeature() {
      this.currentIndex = (this.currentIndex + this.totalFeatures - 1) % this.totalFeatures;
    },
    nextFeature() {
      this.currentIndex = (this.currentIndex + 1) % this.totalFeatures;
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

.my-4 {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.feature-section-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 1px solid #ddd;
  margin: 20px 0;
  background-color: #54a979;
}

.arrow-btn {
  background-color: var(--primary-green);
  color: #ffffff;
  border: none;
  padding: 8px;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: transform 0.2s ease;
}

.arrow-btn:hover {
  transform: translateY(-50%) scale(1.1);
  background-color: #1f5e3f;
}

.arrow-left {
  left: 180px;
}

.arrow-right {
  right: 180px;
}

.footer {
  background-color: #2E8B57;
  padding: 1rem 0; 
  border-top: 1px solid #ddd;
}

.footer-text {
  margin: 0;
  color: #ddd;
  font-size: 0.9em;
}

.social-links {
  margin-top: 0.5rem; 
}

.social-link {
  margin: 0 8px;
  color: #ddd;
  text-decoration: none;
  font-size: 0.9em; 
}

.social-link:hover {
  text-decoration: underline;
}
</style>
