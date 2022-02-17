import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import VueRouter from 'vue-router';
import Dashboard from './components/Dashboard.vue';
import Team from './components/Team.vue';
import Projects from './components/Projects.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Dashboard },
    { path: '/projects', component: Projects },
    { path: '/team', component: Team },
    { path: '*', component: Dashboard }
]
const routers = new VueRouter({
    routes,
    mode: 'history'
})

Vue.config.productionTip = false

new Vue({
    router: routers,
    vuetify,
    render: h => h(App)
}).$mount('#app')