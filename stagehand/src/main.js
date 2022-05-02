import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import './style/style.css'
import router from './router'
import { createAuth0 } from '@auth0/auth0-vue';
// import { SetupCalendar } from 'v-calendar';


loadFonts()

createApp(App).use(router).use(vuetify).use(
    createAuth0({
      domain: "dev-x11k9esb.eu.auth0.com",
      client_id: "kB0cjtrLqjlHrh7KDJrvF2GQhc3a50Vh",
      redirect_uri: window.location.origin
    })
  ).mount('#app')
