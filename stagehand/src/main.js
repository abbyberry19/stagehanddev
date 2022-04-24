import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import './style/style.css'
import router from './router'
// import { SetupCalendar } from 'v-calendar';


loadFonts()

createApp(App).use(router).use(vuetify).mount('#app')
