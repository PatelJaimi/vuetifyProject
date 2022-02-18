<template>
  <div>
    <h1 class="subtitle-1">Projects</h1>
    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel v-for="i in projects" :key="i.title">
          <v-expansion-panel-header>
            {{ i.title }}
          </v-expansion-panel-header>
          <v-expansion-panel-content class="caption">
            <div class="font-weight-bold">
              {{ i.due }}
            </div>
            <div>
              {{ i.content }}
            </div>
            <div class="body-2 font-weight-bold">
              {{ i.person }}
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   projects: [
      //   {
      //     title: "Design a new website",
      //     person: "Jaimi Patel",
      //     due: "1st Jan 2019",
      //     status: "ongoing",
      //     content:
      //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
      //   },
      //   {
      //     title: "Code up the home page",
      //     person: "Hemanshi Dudhatra",
      //     due: "10th Jan 2019",
      //     status: "complete",
      //     content:
      //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
      //   },
      //   {
      //     title: "Design video thumb nails",
      //     person: "Amisha Patel",
      //     due: "20th Dec 2018",
      //     status: "complete",
      //     content:
      //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
      //   },
      //   {
      //     title: "Create a community forum",
      //     person: "Jigar Dabhi",
      //     due: "20th Oct 2018",
      //     status: "overdue",
      //     content:
      //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
      //   },
      // ],
      projects:[]
    };
  },

  created() {
    this.showdata()
  },

  updated(){
    this.showdata()
  },

  methods: {
    showdata(){
      this.$http
      .get("https://vuetify-4dee4-default-rtdb.firebaseio.com/posts.json")
      .then((data) =>{
        return data.json();
      })
      .then((data) => {
        var keys = [];
        for (let key in data) {
          data[key].id = key;
          keys.push(data[key]);
        }
        this.projects=keys;
        // console.log(keys);
      });
    }
  },

  computed: {
    singleprojects() {
      return this.projects.filter(project => {
        return project.person === 'Jaimi Patel' &&  project.status != 'complete'
      })
    }
  }
}
</script>
