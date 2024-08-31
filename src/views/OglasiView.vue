<template>
  <div class="container">
    <!-- Search Bar -->
    <div class="mb-4 d-flex justify-content-center align-items-center search-bar-container">
      <img :src="searchIcon" alt="Search" class="search-icon me-2">
      <input
        type="text"
        class="form-control search-input"
        v-model="searchQuery"
        @input="fetchAds"
        placeholder="Pretraži oglase ili knjige"
      >
      <button @click="fetchAds" class="btn btn-primary ms-2">Pretraži</button>
    </div>

    <!-- Add Ad Button -->
    <div class="mb-4 text-center">
      <button @click="goToCreateAd" class="btn btn-success btn-lg">Dodaj Oglas</button>
    </div>

    <!-- Ads Display -->
    <div class="row">
      <div class="col-md-4" v-for="ad in ads" :key="ad.id">
        <div class="card mb-4" @click="goToAdDetail(ad.id)">
          <img :src="ad.imageUrl" class="card-img-top" alt="Ad image">
          <div class="card-body">
            <h5 class="card-title">{{ ad.title }}</h5>
            <p class="card-text">{{ ad.description }}</p>
            <a :href="'/ad/' + ad.id" class="btn btn-primary">Pogledaj</a>
          </div>
        </div>
      </div>
    </div>

    <!-- No Ads Found Message -->
    <div v-if="ads.length === 0" class="text-center mt-4">
      <p>Nema oglasa koji odgovaraju vašoj pretrazi.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'OglasiView',
  data() {
    return {
      searchQuery: '',
      ads: [],
      searchIcon: require('@/assets/search.png')
    };
  },
  methods: {
    async fetchAds() {
      try {
        const response = await axios.get('http://localhost:3000/bookworms/ads', {
          params: {
            query: this.searchQuery
          }
        });
        this.ads = response.data;
      } catch (error) {
        console.error('Error fetching ads:', error);
      }
    },
    goToCreateAd() {
      this.$router.push('/oglas-create');
    },
    goToAdDetail(adId) {
      this.$router.push(`/ad/${adId}`);
    }
  },
  mounted() {
    this.fetchAds();
  }
};
</script>

<style scoped>
.card-img-top {
  height: 180px;
  object-fit: cover;
}

.btn-primary {
  background-color: #28a745;
  border-color: #28a745;
}

.btn-primary:hover {
  background-color: #218838;
  border-color: #1e7e34;
}

.search-bar-container {
  margin-top: 60px;
  margin-bottom: 40px;
}

.search-input {
  flex: 1;
  max-width: 500px;
}

.search-icon {
  width: 1.5rem;
  height: 1.5rem;
  object-fit: contain;
}

.btn-success {
  background-color: #28a745;
  border-color: #28a745;
}

.btn-success:hover {
  background-color: #218838;
  border-color: #1e7e34;
}

.btn-lg {
  font-size: 1.25rem;
  padding: 0.75rem 1.25rem;
}
</style>
