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
    <div class="card mb-4">
      <img :src="userImage" alt="User" class="user-image">
      
      <div class="card-body d-flex flex-column justify-content-between">
        <div class="title-container">
          <h5 class="card-title">{{ ad.title }}</h5>
        </div>
        <p class="card-text">{{ ad.description }}</p>
        <div class="text-center mt-auto">
          <button @click="openAdModal(ad)" class="btn btn-primary">Pogledaj</button>
        </div>
      </div>
    </div>
  </div>
</div>

    <!-- No Ads Found Message -->
    <div v-if="ads.length === 0" class="text-center mt-4">
      <p>Nema oglasa koji odgovaraju vašoj pretrazi.</p>
    </div>

    <!-- Ad Detail Modal -->
    <div v-if="selectedAd" class="modal fade show" style="display: block;">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ selectedAd.title }}</h5>
            <button type="button" class="btn-close" @click="closeAdModal"></button>
          </div>
          <div class="modal-body">
            <p>{{ selectedAd.description }}</p>
          </div>
          <div class="modal-footer">

            <button type="button" class="btn btn-primary">Chat</button>
          </div>
        </div>
      </div>
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
      selectedAd: null,
      searchIcon: require('@/assets/search.png'),
      userImage: require('@/assets/slika-user.png')
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
    openAdModal(ad) {
      this.selectedAd = ad;
    },
    closeAdModal() {
      this.selectedAd = null;
    }
  },
  mounted() {
    this.fetchAds();
  }
};
</script>

<style scoped>
.card {
  position: relative;
}

.user-image {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 150px;
}

.title-container {
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
}

.card-title {
  margin: 0;
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

.modal {
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-dialog {
  max-width: 500px;
  width: 100%;
}
</style>