<template>
  <div class="container mt-5">
    <!-- First Section -->
    <div class="row mb-5">
      <div class="col-md-6">
        <h1>Novi način pronalaženja literature</h1>
        <p>
          Dobrodošli na našu platformu posvećenu dijeljenju kreativnosti i znanja! Ako imate knjige, druge žanrove ili materijale koje želite podijeliti s zajednicom, ovo je pravo mjesto za vas.
        </p>
        <p>
          Ciljana grupa korisnika nisu samo čitatelji romana, već i studenti/učenici koji bi htjeli kupiti, razmijeniti ili pokloniti rabljene udžbenike i druge tiskane materijale.
        </p>
        <a href="/registracija" class="btn btn-success btn-lg">Registrirajte se</a>
      </div>
      <div class="col-md-6">
        <img :src="require('@/assets/home-slika1.png')" alt="Čitanje knjige" class="img-fluid">
      </div>
    </div>

    <!-- Second Section -->
    <div class="row mb-5">
      <div class="col-md-6">
        <h2>Oprez na komunikaciju</h2>
        <p>
          Preporuča se roditeljima da komuniciraju umjesto njihove djece. Razgovarajte o važnosti poštovanja online pravila, sigurnosti i zaštite privatnosti.
        </p>
        <p>
          Edukacija o odgovornom ponašanju na internetu ključna je kako bi se djeca zaštitila od potencijalnih rizika.
        </p>
      </div>
      <div class="col-md-6">
        <img :src="require('@/assets/home-slika2.png')" alt="Dijete s laptopom" class="img-fluid">
      </div>
    </div>

    <!-- Third Section -->
    <div class="row mb-5">
      <div class="col-md-6">
        <img :src="require('@/assets/home-slika3.png')" alt="Studenti rade zajedno" class="img-fluid">
      </div>
      <div class="col-md-6">
        <h2>Studenti i njihove skripte su dobrodošle!</h2>
        <p>
          Svaka skripta nosi sa sobom jedinstvenu priču, ideje i perspektive studenata koji su uložili napor kako bi razumjeli gradivo i izrazili uložito razumijevanje.
        </p>
        <p>
          Na našoj platformi studenti mogu bezbrižno razmjenjivati svoje radove za učenje.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
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
</style>
