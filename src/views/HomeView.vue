<template>
  <div class="container my-5">
    <!-- First Section -->
    <div class="row align-items-center p-4 bg-light rounded shadow-sm">
      <div class="col-md-6">
        <h1 class="display-4">Novi način pronalaženja literature</h1>
        <p class="lead mt-4">
          Dobrodošli na našu platformu posvećenu dijeljenju kreativnosti i znanja!
          <br /><br />
          Ako imate knjige, druge žanrove ili materijale koje želite podijeliti s
          zajednicom, ovo je pravo mjesto za vas.
          <br /><br />
          Ciljana grupa korisnika nisu samo čitatelji romana, već i studenti/učenici
          koji bi htjeli kupiti, razmjeniti ili pokloniti rabljene udžbenike i druge
          tiskane materijale.
        </p>
        <a class="btn btn-success btn-lg mt-4" href="/registracija">Registrirajte se</a>
      </div>
      <div class="col-md-6">
        <img src="../assets/home-slika1.png" class="img-fluid rounded" alt="Literature">
      </div>
    </div>

    <!-- Spacing -->
    <div class="my-5"></div>

    <!-- Second Section -->
    <div class="row align-items-center p-4 bg-white rounded shadow-sm">
      <div class="col-md-6">
        <img src="../assets/home-slika2.png" class="img-fluid rounded" alt="Selling Books">
      </div>
      <div class="col-md-6">
        <h2 class="display-5">Prodajte, donirajte i zamjenite vaše knjige</h2>
        <p class="lead mt-4">
          Objavite svoje knjige i dijelite svoje materijale! 
          <br /><br />
          Možete sami odrediti koji žanr objavljujete.Pored objave se nalazi ikonica za
          “Chat” gdje možete se javiti osobi za knjigu.
        </p>
        <button class="btn btn-success btn-lg mt-4" @click="handleClick">Chat</button>
      </div>
    </div>

    <!-- Spacing -->
    <div class="my-5"></div>

    <!-- Third Section -->
    <div class="row align-items-center p-4 bg-light rounded shadow-sm">
      <div class="col-md-6">
        <h2 class="display-5">Oprez na komunikaciju</h2>
        <p class="lead mt-4">
          Preporuča se roditeljima da komuniciraju umjesto njihove djece.
          <br /><br />
          Razgovarajte o važnosti poštovanja online pravila, sigurnosti i zaštite
          privatnosti.
          <br /><br />
          Edukacija o odgovornom ponašanju na internetu ključna je kako bi se djeca
          zaštitila od potencijalnih rizika.
        </p>
      </div>
      <div class="col-md-6">
        <img src="../assets/home-slika3.png" class="img-fluid rounded" alt="Communication">
      </div>
    </div>

    <!-- Spacing -->
    <div class="my-5"></div>

    <!-- Fourth Section -->
    <div class="row align-items-center p-4 bg-white rounded shadow-sm">
      <div class="col-md-6">
        <img src="../assets/home-slika4.png" class="img-fluid rounded" alt="Students Sharing Scripts">
      </div>
      <div class="col-md-6">
        <h2 class="display-5">Studenti i njihove skripte su dobrodošle!</h2>
        <p class="lead mt-4">
          Svaka skripta nosi sa sobom jedinstvenu priču, ideje i perspektive
          studenata koji su uložili napor kako bi razumjeli gradivo i izrazili
          vlastito razumijevanje. Kroz pregled tih radova, nastavnici imaju priliku
          uočiti raznolikost misli i pristupa prema gradivu.
          <br /><br />
          Ova raznolikost često potiče živahne rasprave u učionici i pridonosi
          dinamici grupnog učenja. Studenti, kroz pisanje skripti, razvijaju
          kritičko razmišljanje, analitičke vještine i sposobnost artikulacije
          vlastitih ideja.
          <br /><br />
          Na našoj platformi studenti mogu bezbrižno razmjenjivati svoje radove za
          učenje.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home-View',
  methods: {
    handleClick() {
      // Your click handler code
    },
  },
};
</script>

<style>
/* Add any custom styles you need here */
</style>
