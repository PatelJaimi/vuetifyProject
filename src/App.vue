<template>
  <v-app > 
    <v-main class="blue lighten-5">
      <Navbar />
      <v-content class="ma-5">
        <router-view></router-view>
      </v-content>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",

  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>
