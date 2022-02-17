<template>
  <nav>
    <v-toolbar app>
      <v-app-bar-nav-icon v-on:click="drag = !drag"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase gray--text">
        <span class="font-weight-light">Todo</span>
        <span class="font-weight-bold">List</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="gray">
        <span>Sign out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="drag" flot app temporary class="teal">
      <v-layout column align-center>
        <v-flex class="my-5">
          <v-avatar size="200">
            <img class="text-lg-center" src="../assets/avatar1.jpg" />
          </v-avatar>
          <p class="white--text display-1 font-weight-bold my-2">Jaimi Patel</p>
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
export default {
  data() {
    return {
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
