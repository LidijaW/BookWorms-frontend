<template>
  <div class="about-container">
    <div class="about-text">
      <h1>Više o nama</h1>
      <p>
        <strong>O platformi:</strong> BookWorms je online platforma koja omogućuje korisnicima jednostavnu kupnju, prodaju ili razmjenu knjiga. Namijenjena je svim ljubiteljima knjiga, bilo da se radi o studentima koji traže udžbenike ili strastvenim čitateljima koji žele proširiti svoju kolekciju romana. Platforma funkcionira bez direktnog posredovanja u plaćanju, pružajući korisnicima mogućnost da se sami dogovore o uvjetima transakcije.
      </p>
      <p>
        Danas je BookWorms pouzdan partner za sve koji traže jednostavan način za kupnju, prodaju ili razmjenu knjiga. Platforma je intuitivna i omogućava korisnicima lako postavljanje i pretragu oglasa te fleksibilnost u organiziranju transakcija.
      </p>
      <ul>
        <li><strong>Korisnici:</strong> mogu pretraživati različite oglase, dogovarati kupnju ili razmjenu, te preuzimati knjige uživo ili putem pošte, te imaju mogućnost postavljanja oglasa za prodaju, razmjenu ili poklanjanje knjiga, te ažuriranja ili uređivanja postojećih oglasa.</li>
        <li><strong>Administrator:</strong> upravlja platformom, moderira sadržaj te upravlja korisničkim računima i oglasima.</li>
      </ul>
    </div>

    <div class="about-image">
      <img :src="aboutImage" alt="BookWorms Image">
    </div>
  </div>
</template>

<script>
import aboutImage from '@/assets/about-slika.png';

export default {
  data() {
    return {
      aboutImage
    };
  }
};
</script>

<style scoped>
.about-container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
  gap: 40px;
}

.about-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.about-text h1 {
  font-size: 2.2em;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: left;
}

.about-text p {
  font-size: 1.2em;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: justify; 
}

.about-text ul {
  font-size: 1.2em;
  line-height: 1.6;
  list-style: disc;
  padding-left: 20px;
  margin-top: 0;
}

.about-text li {
  margin-bottom: 10px;
}

.about-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-image img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}
</style>
