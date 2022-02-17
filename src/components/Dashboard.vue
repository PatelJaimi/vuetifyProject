<template>
  <div>
    <h1 class="subtitle-1">Dashboard</h1>
    <v-container class="my-5">
      <v-layout row class="mb-4">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              color="grey lighten-2"
              class="ma-4"
              v-on:click="sortBy('title')"
            >
              <v-icon small left>folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort by project name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              color="grey lighten-2"
              class="ma-4"
              v-on:click="sortBy('person')"
            >
              <v-icon small left>person</v-icon>
              <span class="caption text-lowercase">By Person</span>
            </v-btn>
          </template>
          <span>Sort by project person</span>
        </v-tooltip>
      </v-layout>
      <v-card flat class="pa-4 my-4" v-for="i in projects" :key="i.title">
        <v-layout row wrap :class="`pa-3 project ${i.status}`">
          <v-flex xs12 md5>
            <div class="caption">Project Title</div>
            <div>{{ i.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md3>
            <div class="caption">Person</div>
            <div>{{ i.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption">Due By</div>
            <div>{{ i.due }}</div>
          </v-flex>
          <v-flex xs12 sm4 md2>
            <!-- <div class="caption">Status</div>
            <div>{{ i.status }}</div> -->
            <v-chip :class="`white--text body-2 my-2 ${i.status}`">
              <div right>
                {{ i.status }}
              </div>
            </v-chip>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Design a new website",
          person: "Jaimi Patel",
          due: "1st Jan 2019",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Code up the home page",
          person: "Hemanshi Dudhatra",
          due: "10th Jan 2019",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Design video thumb nails",
          person: "Amisha Patel",
          due: "20th Dec 2018",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Create a community forum",
          person: "Jigar Dabhi",
          due: "20th Oct 2018",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
      ],
    };
  },
  methods: {
    sortBy(para) {
      this.projects.sort((a, b) => (a[para] < b[para] ? -1 : 1));
    },
  },
};
</script>

<style scoped>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid #ffa500;
}
.project.overdue {
  border-left: 4px solid #ff6347;
}
.v-chip.v-chip--no-color.complete {
  background: #3cd1c2;
}
.v-chip.v-chip--no-color.ongoing {
  background: #ffaa2c;
}
.v-chip.v-chip--no-color.overdue {
  background: #f83e70;
}
</style>