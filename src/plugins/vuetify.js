import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import 'vuetify'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        primary: '#3f51b5',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#3f51b5',
    }
});