<template>
  <div>
    <h1 class="subtitle-1">Team</h1>
    <v-container class="my-5">
        <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="i in team" :key="i.name">
          <v-card class="ma-3 pa-2 text-xs-center">
            <v-responsive class="pt-3">
                <div class="align">
              <v-avatar size="100" class="blue lighten-4">
                <!-- <img :src='i.avatar' :alt="i.name"> -->
                <span class="display-3 font-weight-bold">{{i.name[0]}}</span>
              </v-avatar>
              </div>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ i.name }}</div>
              <div class="grey--text">{{ i.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="blue--text blue lighten-5">
                <v-icon small left>message</v-icon>
                <span class="">Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: "Jaimi Patel", role: "Web developer" ,avatar:'../assets/avatar1.jpg'},
        { name: "Hemanshi Dudhatra", role: "Graphic designer" ,avatar:'../assets/avatar2.jpg'},
        { name: "Amisha Patel", role: "Web designer" ,avatar:'../assets/avatar3.jpg'},
        { name: "Jigar Dabhi", role: "Social media marketer" ,avatar:'../assets/avatar4.jpg'},
        { name: "Priya Bhogayata", role: "Sales exicuter" ,avatar:'../assets/avatar5.jpg'},
      ],
    };
  },
};
</script>

<style scoped>
.align{
    max-width: 110px;
    margin: 10px auto;
}
</style>