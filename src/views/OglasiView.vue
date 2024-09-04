<template>
  <div class="container">
    <!-- Search Bar -->
    <div class="mb-4 d-flex justify-content-center align-items-center search-bar-container">
      <img :src="searchIcon" alt="Search" class="search-icon me-2">
      <input
        type="text"
        class="form-control search-input"
        v-model="searchQuery"
        @input="debouncedFetchBooks"
        placeholder="Pretraži knjige"
      >
    </div>

    <!-- Add Book Button -->
    <div class="mb-4 text-center">
      <button @click="goToCreateBook" class="btn btn-success btn-lg">Dodaj Knjigu</button>
    </div>

    <!-- Books Display -->
    <div class="row">
      <div class="col-md-4 mb-4" v-for="book in filteredBooks" :key="book._id">
        <div class="card mb-4">
          <img :src="userImage" alt="User" class="user-image">
          <div class="card-body d-flex flex-column">
            <div class="title-container">
              <h5 class="card-title">{{ book.title }}</h5>
            </div>
            <p class="card-text text-center">{{ book.author }}</p>
            <p class="card-description text-center">{{ book.description || 'Nema opisa' }}</p>
            <div class="mt-auto text-center">
              <button @click="openBookModal(book)" class="btn btn-primary">Pogledaj</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- No Books Found Message -->
    <div v-if="filteredBooks.length === 0" class="text-center mt-4">
      <p>Nema knjiga koje odgovaraju vašoj pretrazi.</p>
    </div>

    <!-- Book Detail Modal -->
    <div v-if="selectedBook" class="modal fade show" style="display: block;">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ selectedBook.title }}</h5>
            <button type="button" class="btn-close" @click="closeBookModal"></button>
          </div>
          <div class="modal-body">
            <p>Autor: {{ selectedBook.author }}</p>
            <p>Žanr: {{ selectedBook.genre }}</p>
            <p>Broj stranica: {{ selectedBook.pages }}</p>
            <p>Godina izdanja: {{ selectedBook.publicationYear }}</p>
            <p>Izdanje: {{ selectedBook.edition }}</p>
            <p>Tip literature: {{ selectedBook.literatureType }}</p>
            <p>Nivo obrazovanja: {{ selectedBook.educationLevel }}</p>
            <p>Godina: {{ selectedBook.year }}</p>
            <p>Opis: {{ selectedBook.description || 'Nema opisa' }}</p>
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button 
              type="button" 
              class="btn btn-primary"
              @click="goToChatPage"
            >
              Javite se za oglas putem chat-a
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import debounce from 'lodash/debounce';

export default {
  name: 'OglasiView',
  data() {
    return {
      searchQuery: '',
      books: [],
      selectedBook: null,
      searchIcon: require('@/assets/search.png'),
      userImage: require('@/assets/slika-user.png')
    };
  },
  computed: {
    filteredBooks() {
      if (this.searchQuery.trim() === '') {
        return this.books; 
      }
      const query = this.searchQuery.toLowerCase();
      return this.books.filter(book => {
        return (
          book.title.toLowerCase().includes(query) ||
          book.author.toLowerCase().includes(query) ||
          book.genre.toLowerCase().includes(query)
        );
      });
    },
    debouncedFetchBooks() {
      return debounce(this.fetchBooks, 300); // Debounce delay of 300ms
    }
  },
  methods: {
    async fetchBooks() {
      try {
        const response = await axios.get('https://bookworms-back.onrender.com/bookworms/books');
        this.books = response.data;
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    },
    goToCreateBook() {
      this.$router.push({ name: 'oglas-create' });
    },
    openBookModal(book) {
      this.selectedBook = book;
    },
    closeBookModal() {
      this.selectedBook = null;
    },
    goToChatPage() {
      this.$router.push({ path: '/chat' });
    }
  },
  mounted() {
    this.fetchBooks();
  }
};
</script>

<style scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%; 

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
  height: 100%; 
}

.title-container {
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
}

.card-title {
  margin: 0;
}

.card-text {
  font-size: 1rem;
  color: #333;
  text-align: center;
  margin-bottom: 10px;
}

.card-description {
  font-size: 0.9rem;
  color: #6c757d;
  text-align: center;
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

.modal-footer {
  display: flex;
  justify-content: center;
}

.col-md-4 {
  margin-bottom: 20px; 
}
</style>
