<template>
  <div class="text-center">
    <v-dialog max-width="600" v-model="dialog">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on"> Add New Project </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 blue lighten-4">
          Add New Project
        </v-card-title>
        <v-card-text class="my-2">
          <v-form class="px-3" ref="form">
            <v-text-field
              v-model="title"
              label="Title"
              prepend-icon="folder"
              :rules="inputRules"
            ></v-text-field>
            <v-textarea
              v-model="content"
              label="Information"
              prepend-icon="edit"
              :rules="inputRules"
            ></v-textarea>

            <v-menu max-width="300">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  :value="due"
                  label="Due date"
                  prepend-icon="date_range"
                  v-bind="attrs"
                  v-on="on"
                  :rules="inputRules"
                ></v-text-field>
              </template>
              <v-date-picker v-model="due"></v-date-picker>
            </v-menu>

            <v-divider class="my-2"></v-divider>
            <v-btn color="primary" text @click="submit()" :loading='load'> Add Project </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
        load:false,
      dialog: false,
      title: "",
      content: "",
      due: null,
      inputRules: [
        (v) => !!v || "This field is required",
        (v) => v.length >= 3 || "Minimum length is 3 characters",
      ],
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
          this.load=true;
        const project = {
          title:this.title,
          content:this.content,
          due:this.due,
          person:'Jaimi Patel',
          status:'ongoing'
        };
        this.$http
        .post(
          "https://vuetify-4dee4-default-rtdb.firebaseio.com/posts.json",
          project
        )
        .then(() =>{
            this.load=false;
            this.dialog = false;
          this.$emit('addproject');
          this.title="",
          this.content='',
          this.due=null,
      this.$router.push('/');
        });
      }
    },
  },
};
</script>