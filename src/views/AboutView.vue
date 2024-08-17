<template>
  <div class="about-container" style="display: flex; align-items: center; justify-content: space-between; padding: 40px; max-width: 1200px; margin: 0 auto;">
    <div class="about-text" style="flex: 1; margin-right: 50px;">
      <h1 style="font-size: 2.2em; font-weight: bold; margin-bottom: 20px; text-align: center;">
        Više o nama
      </h1>
      <p style="font-size: 1.2em; line-height: 1.6; margin-bottom: 20px;">
        <strong>O platformi:</strong> BookWorms je online platforma koja omogućuje korisnicima jednostavnu kupnju, prodaju ili razmjenu knjiga. Namijenjena je svim ljubiteljima knjiga, bilo da se radi o studentima koji traže udžbenike ili strastvenim čitateljima koji žele proširiti svoju kolekciju romana. Platforma funkcionira bez direktnog posredovanja u plaćanju, pružajući korisnicima mogućnost da se sami dogovore o uvjetima transakcije.
      </p>
      <p style="font-size: 1.2em; line-height: 1.6; margin-bottom: 20px;">
        Danas je BookWorms pouzdan partner za sve koji traže jednostavan način za kupnju, prodaju ili razmjenu knjiga. Platforma je intuitivna i omogućava korisnicima lako postavljanje i pretragu oglasa te fleksibilnost u organiziranju transakcija.
      </p>
      <ul style="font-size: 1.2em; line-height: 1.6; list-style: none; padding: 0;">
        <li><strong>Kupci:</strong> mogu pretraživati različite oglase, dogovarati kupnju ili razmjenu, te preuzimati knjige uživo ili putem pošte.</li>
        <li><strong>Prodavači:</strong> imaju mogućnost postavljanja oglasa za prodaju, razmjenu ili poklanjanje knjiga, te ažuriranja ili uređivanja postojećih oglasa.</li>
        <li><strong>Administrator:</strong> upravlja platformom, moderira sadržaj te upravlja korisničkim računima i oglasima.</li>
      </ul>
    </div>

    <div class="about-image" style="flex: 1; text-align: center;">
      <img :src="aboutImage" alt="BookWorms Image" style="max-width: 90%; height: auto; border-radius: 10px;">
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


