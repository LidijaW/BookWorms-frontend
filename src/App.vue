<template>
  <v-app>
    <v-app-bar
      app
      color="green darken-3"
    >
      <div class="d-flex align-center">
        <v-img
          alt="BookWorms Logo"
          class="shrink mr-4"
          contain
          src="./assets/logo1.png"
          transition="scale-transition"
          width="80"
        />

        <v-img
          alt="BookWorms"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="./assets/logo2.png"
          width="250"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="/prijava"
        text
        color="white"
      >
        <span class="mr-2">Prijavite se</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
