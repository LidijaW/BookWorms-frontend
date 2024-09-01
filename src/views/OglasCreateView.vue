<template>
  <div class="container">
    <h2 class="text-center mt-4 mb-4">Kreiraj Oglas</h2>
    <div class="form-container">
      <form @submit.prevent="createAd">
        <div class="mb-3">
          <label for="title" class="form-label">Naslov</label>
          <input type="text" id="title" v-model="book.title" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="author" class="form-label">Autor</label>
          <input type="text" id="author" v-model="book.author" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="genre" class="form-label">Žanr</label>
          <input type="text" id="genre" v-model="book.genre" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="pages" class="form-label">Broj stranica</label>
          <input type="number" id="pages" v-model="book.pages" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="publicationYear" class="form-label">Godina izdanja</label>
          <input type="number" id="publicationYear" v-model="book.publicationYear" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="edition" class="form-label">Izdanje</label>
          <input type="text" id="edition" v-model="book.edition" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="literatureType" class="form-label">Vrsta književnosti</label>
          <input type="text" id="literatureType" v-model="book.literatureType" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="educationLevel" class="form-label">Obrazovni nivo</label>
          <input type="text" id="educationLevel" v-model="book.educationLevel" class="form-control">
        </div>
        <div class="mb-3">
          <label for="year" class="form-label">Godina</label>
          <input type="number" id="year" v-model="book.year" class="form-control">
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Opis</label>
          <textarea id="description" v-model="description" class="form-control" rows="3" required></textarea>
        </div>
        <div class="d-flex justify-content-end mb-4">
          <button type="button" class="btn btn-secondary me-2" @click="cancel">Odustani</button>
          <button type="submit" class="btn btn-success">Kreiraj Oglas</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'OglasCreateView',
  data() {
    return {
      book: {
        title: '',
        author: '',
        genre: '',
        pages: '',
        publicationYear: '',
        edition: '',
        literatureType: '',
        educationLevel: '',
        year: ''
      },
      adCode: '',
      description: ''
    };
  },
  methods: {
    async createAd() {
      try {
        const newAd = {
          adCode: this.adCode,
          description: this.description,
          book: this.book,
          createdAt: new Date()
        };

        await axios.post('http://localhost:3000/bookworms/ads', newAd);
        this.$router.push('/oglasi');
      } catch (error) {
        console.error('Error creating ad:', error);
      }
    },
    cancel() {
      this.$router.push('/oglasi');
    }
  }
};
</script>

<style scoped>
.form-container {
  max-width: 800px;
  margin: 0 auto;
}

.text-center {
  text-align: center;
}

.btn-secondary, .btn-success {
  margin: 0 5px;
}

.btn-success {
  display: flex;
  justify-content: center;
}

.mb-4 {
  margin-bottom: 1.5rem;
}
</style>
