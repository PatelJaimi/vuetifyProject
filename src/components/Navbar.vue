<template>
  <nav>

    <v-snackbar v-model="snackbar" :timeout="4000" top color="success darken-2">
      <span>Awesome! You added a new project.</span>
      <v-btn class="success mx-4" @click="snackbar = false">Close</v-btn>
    </v-snackbar>

    <v-toolbar>
      <v-app-bar-nav-icon v-on:click="drag = !drag"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase gray--text">
        <span class="font-weight-light">Project</span>
        <span class="font-weight-bold">Management</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" class="mx-5">
            <v-icon left class="mx-2"> expand_more </v-icon>
            <span class="mx-2"> Menu </span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="i in links" :key="i.text" router :to="i.router">
            <v-list-item-title class="mx-2">
              {{ i.text }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn color="gray" class="mx-5">
        <span>Sign out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer
      v-model="drag"
      flot
      app
      temporary
      class="blue darken-4"
    >
      <v-layout column align-center>
        <v-flex class="my-5">
          <v-avatar size="200">
            <img class="text-lg-center" src="../assets/avatar1.jpg" />
          </v-avatar>
          <p class="white--text display-1 font-weight-bold my-2">Jaimi Patel</p>
        </v-flex>
        <v-flex class="my-4">
          <Popup @addproject='snackbar=true'/>
        </v-flex>
      </v-layout>

      <v-list class="mt-5">
        <v-list-item v-for="i in links" :key="i.text" router :to="i.router">
          <v-list-item-action>
            <v-icon class="white--text">
              {{ i.icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">
              {{ i.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
import Popup from "./Popup.vue";
export default {
  components: {
    Popup,
  },
  data() {
    return {
      snackbar:false,
      drag: false,
      links: [
        { icon: "dashboard", text: "Dashboard", router: "/" },
        { icon: "folder", text: "My Projects", router: "/projects" },
        { icon: "person", text: "Team", router: "/team" },
      ],
    };
  },
};
</script>
