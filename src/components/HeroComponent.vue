<template>
  <section class="jumbotron text-left bg-light-mint">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1 class="jumbotron-heading">Novi način pronalaženja literature</h1>
          <p class="lead">Dobrodošli na našu platformu posvećenu dijeljenju kreativnosti i znanja!</p>
          <p>Ako imate knjige, druge žanrove ili materijale koje želite podijeliti s zajednicom, ovo je pravo mjesto za vas.</p>
          <p>
            <router-link to="/registracija">
            <button 
              class="btn btn-primary my-2" 
              :class="{ 'btn-clicked': isClicked }" 
              @click="toggleClick"
            >
              REGISTRIRAJTE SE
            </button>
          </router-link>
          </p>
        </div>
        <div class="col-md-6">
          <img :src="require('@/assets/home-slika1.png')" alt="Description" width="800" height="470" >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroComponent',
  data() {
    return {
      isClicked: false,
    };
  },
  methods: {
    toggleClick() {
      this.isClicked = !this.isClicked;
    },
  },
};
</script>

<style scoped>
.btn-primary {
  background-color: #2E8B57; 
  color: #ffffff; 
  border-color: #2E8B57; 
}

.btn-primary:hover {
  background-color: #ffffff; 
  color: #2E8B57; 
  border-color: #2E8B57; 
}

.btn-primary.btn-clicked {
  background-color: #ffffff; 
  color: #2E8B57;
  border-color: #2E8B57;
}
</style>
