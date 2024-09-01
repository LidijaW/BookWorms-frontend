<template>
  <div class="container">
    <h2 class="text-center mt-4 mb-4">Dodaj Knjigu</h2>
    <div class="form-container">
      <form @submit.prevent="createBook">
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
          <label for="literatureType" class="form-label">Tip književnosti</label>
          <input type="text" id="literatureType" v-model="book.literatureType" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="educationLevel" class="form-label">Nivo obrazovanja (Nije obavezan)*</label>
          <input type="text" id="educationLevel" v-model="book.educationLevel" class="form-control">
        </div>
        <div class="mb-3">
          <label for="year" class="form-label">Godina</label>
          <input type="number" id="year" v-model="book.year" class="form-control">
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Opis (Nije obavezan)*</label>
          <textarea id="description" v-model="book.description" class="form-control" rows="3"></textarea>
        </div>
        <div class="d-flex justify-content-end mb-4">
          <button type="button" class="btn btn-secondary me-2" @click="cancel">Odustani</button>
          <button type="submit" class="btn btn-success">Kreiraj Knjigu</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'BookCreateView',
  data() {
    return {
      book: {
        title: '',
        author: '',
        genre: '',
        pages: null,
        publicationYear: null,
        edition: '',
        literatureType: '',
        educationLevel: '',
        year: null,
        description: ''
      }
    };
  },
  methods: {
    async createBook() {
      try {
        await axios.post('http://localhost:3000/bookworms/books', this.book);
        this.$router.push('/oglasi');
      } catch (error) {
        console.error('Error creating book:', error);
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
