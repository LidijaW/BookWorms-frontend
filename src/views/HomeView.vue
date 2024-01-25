<template>
  <v-container>
    <v-card elevation="2" color="#E7FFEE" class="pa-5" outlined shaped>
      <v-row>
        <!-- Left side: Text and Button -->
        <v-col cols="12" md="6">
          <v-card-title class="big-title my-10">Novi način pronalaženja literature</v-card-title>
          <v-card-text class="big-text my-10">
            Dobrodošli na našu platformu posvećenu dijeljenju kreativnosti i znanja!
            <br /><br />
            Ako imate knjige, druge žanrove ili materijale koje želite podijeliti s zajednicom, ovo je pravo mjesto za vas.
            <br /><br />
            Ciljana grupa korisnika nisu samo čitatelji romana, već i studenti/učenici koji bi htjeli kupiti, razmjeniti ili pokloniti rabljene udžbenike i druge tiskane materijale.
          </v-card-text>
          <v-btn color="#66BB6A" class="mx-5 my-15" elevation="2" x-large href="/registracija">
            Registrirajte se
          </v-btn>
        </v-col>
        
        <!-- Right side: Image -->
        <v-col cols="12" md="6">
          <v-img
            src="../assets/home-slika1.png"
          ></v-img>
        </v-col>
      </v-row>
    </v-card>
    <br> <br>


    <v-card elevation="2" color="white darken-1" class="pa-5" outlined shaped>
      <v-row>
        <!-- Left side: Image -->
        <v-col cols="12" md="6">
          <v-img src="../assets/home-slika2.png"></v-img>
        </v-col>

        <!-- Right side: Text and Button -->
        <v-col cols="12" md="6">
          <v-card-title class="big-title my-10" >Prodajte, donirajte i zamjenite vaše knjige</v-card-title>
          <v-card-text class="big-text my-10">
            Objavite svoje knjige i dijelite svoje materijale! 
            <br /><br />
            Možete sami odrediti koji žanr objavljujete.Pored objave se nalazi ikonica za “Chat” gdje možete se javiti osobi za knjigu.
            <br /><br />
           
          </v-card-text>
          <v-btn color="#66BB6A" class="mx-5 my-15" elevation="2" x-large @click="handleClick">
            Chat
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
    <br><br>
    <v-card elevation="2" color="#E7FFEE" class="pa-5" outlined shaped>
      <v-row>
        <!-- Left side: Text and Button -->
        <v-col cols="12" md="6">
          <v-card-title class="big-title my-10">Oprez na komunikaciju</v-card-title>
          <v-card-text class="big-text my-10">
            Preporuča se roditeljima da komuniciraju umjesto njihove djece.
            <br /><br />
            Razgovarajte o važnosti poštovanja online pravila, sigurnosti i zaštite privatnosti.
            <br /><br />
            Edukacija o odgovornom ponašanju na internetu ključna je kako bi se djeca zaštitila od potencijalnih rizika.            <br /><br />
           
          </v-card-text>
       
        </v-col>
        
        <!-- Right side: Image -->
        <v-col cols="12" md="6">
          <v-img
            src="../assets/home-slika3.png"
          ></v-img>
        </v-col>
      </v-row>
    </v-card>
    <br> <br>


<v-card elevation="2" color="white darken-1" class="pa-5" outlined shaped>
  <v-row>
    <!-- Left side: Image -->
    <v-col cols="12" md="6">
      <v-img src="../assets/home-slika4.png"></v-img>
    </v-col>

    <!-- Right side: Text -->
    <v-col cols="12" md="6">
      <v-card-title class="big-title my-10" >Studenti i njihove skripte su dobrodošle!</v-card-title>
      <v-card-text class="big-text my-10">
        Svaka skripta nosi sa sobom jedinstvenu priču, ideje i perspektive studenata koji su uložili napor kako bi razumjeli gradivo i izrazili vlastito razumijevanje. Kroz pregled tih radova, nastavnici imaju priliku uočiti raznolikost misli i pristupa prema gradivu 
        <br /><br />
        Ova raznolikost često potiče živahne rasprave u učionici i pridonosi dinamici grupnog učenja. Studenti, kroz pisanje skripti, razvijaju kritičko razmišljanje, analitičke vještine i sposobnost artikulacije vlastitih ideja.        
        <br /><br />
        Na našoj platformi studenti mogu bezbrižno razmjenjivati svoje radove za učenje.
      </v-card-text>

    </v-col>
  </v-row>
</v-card>

  </v-container>
</template>

<style>
.big-title {
  font-size: 42px; /* Adjust the font size as needed */
}
.big-text {
  font-size: 20px; /* Adjust the font size as needed */
}
</style>

<script>
  export default {
    name: 'Home-View',

    components: {
     
    },
  }
</script>


